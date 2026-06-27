import { autoCircuitsDefaultPrefs, getAutoCircuitsPrefSpecs, prefBool, prefString } from "./autocircuits-common";
import { createAutoCircuitsAnswerSlots, type ParsedAutoCircuitsAnswer } from "./autocircuits-pdf";
import type { ProblemDocument, ProblemSource, SourcePrefs } from "./types";

const defaultPrefs: SourcePrefs = {
  ...autoCircuitsDefaultPrefs,
  brokerUrl: "http://localhost:8787",
};

interface BrokerProblemResponse {
  id: string;
  title?: string;
  prompt: string;
  answers: ParsedAutoCircuitsAnswer[];
  pdfBase64: string;
  imageBase64: string;
  pdfMimeType: string;
  imageMimeType: string;
  imageUrl?: string;
  pdfUrl?: string;
  remotePdfUrl?: string;
  generatedAt?: string;
  metadata?: Record<string, string | number | boolean | undefined>;
}

const buildBrokerProblemUrl = (prefs: SourcePrefs): string => {
  const brokerUrl = prefString(prefs, "brokerUrl", "http://localhost:8787").replace(/\/+$/, "");
  const query = new URLSearchParams();

  query.set("mode", prefString(prefs, "mode", "chapters"));
  query.set("part", prefString(prefs, "part", "DC_Random"));
  query.set("chapter", prefString(prefs, "chapter", "Kirchhoff_Laws"));
  query.set("difficulty", prefString(prefs, "difficulty", "eeasy"));
  query.set("numberType", prefString(prefs, "numberType", "integer"));
  query.set("allowControlledSources", String(prefBool(prefs, "allowControlledSources", false)));
  query.set("allowOpAmps", String(prefBool(prefs, "allowOpAmps", false)));
  query.set("allowCouplings", String(prefBool(prefs, "allowCouplings", false)));
  query.set("requestNonce", String(typeof prefs._requestNonce === "number" ? prefs._requestNonce : Date.now()));

  return `${brokerUrl}/api/problem?${query.toString()}`;
};

const assertBrokerProblem = (value: unknown): BrokerProblemResponse => {
  const data = value as Partial<BrokerProblemResponse> | null;
  if (
    !data ||
    typeof data !== "object" ||
    typeof data.id !== "string" ||
    typeof data.prompt !== "string" ||
    !Array.isArray(data.answers) ||
    typeof data.pdfBase64 !== "string" ||
    data.pdfBase64.length === 0 ||
    typeof data.imageBase64 !== "string" ||
    data.imageBase64.length === 0 ||
    typeof data.pdfMimeType !== "string" ||
    typeof data.imageMimeType !== "string"
  ) {
    throw new Error("AutoCircuits broker returned an invalid problem payload.");
  }
  return data as BrokerProblemResponse;
};

const getLiveProblemDocument = async (prefs: SourcePrefs): Promise<ProblemDocument> => {
  const mergedPrefs = { ...defaultPrefs, ...prefs };
  const brokerUrl = prefString(mergedPrefs, "brokerUrl", "http://localhost:8787").replace(/\/+$/, "");
  const response = await fetch(buildBrokerProblemUrl(mergedPrefs), {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    const message = await response.text().catch(() => "");
    throw new Error(`AutoCircuits broker failed (${response.status}): ${message || response.statusText}`);
  }

  const data = assertBrokerProblem(await response.json());
  const imageSource = `data:${data.imageMimeType};base64,${data.imageBase64}`;
  const pdfSource = `data:${data.pdfMimeType};base64,${data.pdfBase64}`;

  return {
    id: data.id,
    title: data.title ?? "Solve the circuit",
    description: "Answer correctly to continue.",
    prompt: data.prompt,
    assets: [
      {
        id: "circuit-page",
        title: "Circuit diagram",
        caption: data.pdfBase64
          ? "Rendered from the live AutoCircuits PDF returned by the broker."
          : "Rendered from a live AutoCircuits PDF.",
        image: { uri: imageSource },
        sourceUrl: pdfSource,
        sourceUrlLabel: "Open live PDF",
      },
    ],
    answerSlots: createAutoCircuitsAnswerSlots(data.answers),
    footer: "Generated live by AutoCircuits through the configured broker server.",
    source: {
      id: "autocircuits",
      label: "AutoCircuits",
      generatedAt: data.generatedAt,
      remoteUrl: data.remotePdfUrl ?? data.pdfUrl,
      metadata: {
        brokerUrl,
        mode: prefString(mergedPrefs, "mode", "chapters"),
        part: prefString(mergedPrefs, "part", "DC_Random"),
        chapter: prefString(mergedPrefs, "chapter", "Kirchhoff_Laws"),
        difficulty: prefString(mergedPrefs, "difficulty", "eeasy"),
        numberType: prefString(mergedPrefs, "numberType", "integer"),
        allowControlledSources: prefBool(mergedPrefs, "allowControlledSources", false),
        allowOpAmps: prefBool(mergedPrefs, "allowOpAmps", false),
        allowCouplings: prefBool(mergedPrefs, "allowCouplings", false),
        ...data.metadata,
      },
    },
  };
};

export const autoCircuitsSource: ProblemSource = {
  id: "autocircuits",
  label: "AutoCircuits",
  description: "Live AutoCircuits problems loaded through a configurable broker server.",
  defaultPrefs,
  getPrefSpecs: () =>
    getAutoCircuitsPrefSpecs([
      {
        key: "brokerUrl",
        label: "Broker URL",
        description: "Use your Mac LAN address here for a physical iPhone, for example http://192.168.1.20:8787.",
        type: "text",
        defaultValue: "http://localhost:8787",
        placeholder: "http://localhost:8787",
      },
    ]),
  getProblemDocument: getLiveProblemDocument,
};
