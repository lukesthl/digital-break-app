import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  Linking,
  Platform,
  Pressable,
  ScrollView as NativeScrollView,
  StyleSheet,
} from "react-native";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import { observer } from "mobx-react-lite";
import { AlertCircle, ArrowRight, CheckCircle2, ExternalLink, Maximize2, RefreshCw, X } from "@tamagui/lucide-icons";
import {
  AlertDialog,
  Button,
  Dialog,
  Input,
  Paragraph,
  SizableText,
  Spinner,
  View,
  XStack,
  YStack,
} from "tamagui";
import { WebView } from "react-native-webview";

import { BreakAnimation } from "../../components/break-animation";
import { Container } from "../../components/container";
import { useSoftKeyboardEffect } from "../../components/keyboard";
import { BreakStore } from "../../data/break.store";
import { OverviewStore } from "../../data/overview.store";
import { type AnswerStatus, getAnswerErrorMessage, gradeProblemAnswers } from "../../data/problem-sources/grading";
import { getProblemSource, normalizeSourcePrefs } from "../../data/problem-sources/registry";
import type { ProblemAnswerSlot, ProblemAsset, ProblemDocument } from "../../data/problem-sources/types";
import { SettingsStore } from "../../data/settings.store";

const peakProgress = 0.65;
let lastProgress = 0;
let progressStep = 0.05;
const floatingProgress = 0.75;
const maxAnswerCount = 10;

const expectedAnswerText = (slot: ProblemAnswerSlot): string => {
  if (slot.grading.type === "numeric") {
    return String(slot.grading.expected);
  }
  return slot.grading.expected;
};

const statusColor = (status: AnswerStatus | undefined, submitted: boolean): string => {
  if (!submitted || !status) return "$borderColor";
  if (status === "correct") return "$green8";
  return "$red8";
};

const statusBackground = (status: AnswerStatus | undefined, submitted: boolean): string => {
  if (!submitted || !status) return "$background";
  if (status === "correct") return "rgba(34, 197, 94, 0.08)";
  return "rgba(239, 68, 68, 0.08)";
};

const formatGeneratedAt = (value: string): string => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value.slice(0, 16);
  }
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

const Break = observer(() => {
  const [loaded, setLoaded] = useState(false);
  const [loadingOpen, setLoadingOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [problemDocument, setProblemDocument] = useState<ProblemDocument | null>(null);
  const [problemLoading, setProblemLoading] = useState(false);
  const [problemError, setProblemError] = useState<string | null>(null);
  const [selectedAsset, setSelectedAsset] = useState<ProblemAsset | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitAttempts, setSubmitAttempts] = useState(0);
  const [requestNonce, setRequestNonce] = useState(0);
  const [failOpenTriggered, setFailOpenTriggered] = useState(false);
  const searchParams = useLocalSearchParams<{ appShortcutName: string; timestamp: string }>();
  useSoftKeyboardEffect();

  useEffect(() => {
    if (loaded) return;
    void BreakStore.init({
      appShortcutName: searchParams.appShortcutName,
      timestamp: parseInt(searchParams.timestamp),
    }).then(() => {
      setLoaded(true);
    });
    void OverviewStore.init();
  }, [loaded, searchParams.appShortcutName, searchParams.timestamp]);

  const animationProgress = useRef(new Animated.Value(0));
  const selectedApp = BreakStore.app;
  const breakStatus = BreakStore.status;
  const sourceConfigKey = selectedApp
    ? `${selectedApp.settings.sourceId}:${JSON.stringify(selectedApp.settings.sourcePrefs)}`
    : "";

  useEffect(() => {
    if (selectedApp) {
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: selectedApp?.settings.breakDurationSeconds * 1000,
        easing: Easing.inOut(Easing.linear),
        useNativeDriver: false,
      }).start();
      BreakStore.status = "running";

      animationProgress.current.addListener(({ value }) => {
        if (SettingsStore.hapticsEnabled) {
          if (value > lastProgress + progressStep && value < peakProgress) {
            lastProgress = value;
            void Haptics.impactAsync(
              value < peakProgress / 3 ? Haptics.ImpactFeedbackStyle.Light : Haptics.ImpactFeedbackStyle.Medium
            );
            progressStep -= 0.002;
          }
          if (value > peakProgress && value > floatingProgress && value > lastProgress + progressStep) {
            lastProgress = value;
            void Haptics.impactAsync(
              value > 0.8 ? Haptics.ImpactFeedbackStyle.Light : Haptics.ImpactFeedbackStyle.Medium
            );
            progressStep += 0.0015;
          }
        }
        if (value === 1) {
          lastProgress = 0;
          progressStep = 0.05;
          BreakStore.status = "finished";
        }
      });
    }
    return () => {
      BreakStore.status = null;
    };
  }, [selectedApp]);

  useEffect(() => {
    if (!selectedApp) return;

    let active = true;
    const source = getProblemSource(selectedApp.settings.sourceId);
    const prefs = {
      ...normalizeSourcePrefs(source.id, selectedApp.settings.sourcePrefs),
      _requestNonce: requestNonce,
    };
    setProblemLoading(true);
    setProblemError(null);
    setFormError(null);
    setSubmitted(false);
    setSubmitAttempts(0);
    setFailOpenTriggered(false);

    void source
      .getProblemDocument(prefs)
      .then((document) => {
        if (!active) return;
        const answerSlots = document.answerSlots.slice(0, maxAnswerCount);
        setProblemDocument({ ...document, answerSlots });
        setAnswers(Object.fromEntries(answerSlots.map((slot) => [slot.id, ""])));
      })
      .catch((loadError) => {
        console.log(loadError);
        if (!active) return;
        setProblemDocument(null);
        setProblemError("Could not load a question. Try again in a moment.");
      })
      .finally(() => {
        if (active) setProblemLoading(false);
      });

    return () => {
      active = false;
    };
  }, [selectedApp, sourceConfigKey, requestNonce]);

  const openTargetApp = async () => {
    setLoadingOpen(true);
    try {
      await BreakStore.openApp();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : JSON.stringify(submitError));
    } finally {
      setLoadingOpen(false);
    }
  };

  useEffect(() => {
    if (!selectedApp || !problemError || problemDocument || breakStatus === "running" || failOpenTriggered) {
      return;
    }
    setFailOpenTriggered(true);
    void openTargetApp();
  }, [breakStatus, failOpenTriggered, problemDocument, problemError, selectedApp]);

  if (!selectedApp) return null;

  const gradedAnswers = problemDocument ? gradeProblemAnswers(problemDocument, answers) : [];
  const answerStatusBySlotId = Object.fromEntries(gradedAnswers.map((a) => [a.slotId, a.status]));

  const openAssetSourceUrl = async (asset: ProblemAsset) => {
    if (!asset.sourceUrl) return;
    try {
      await Linking.openURL(asset.sourceUrl);
    } catch {
      setError("Could not open the source file.");
    }
  };

  const answersRevealed = submitAttempts >= 3;

  const submitAnswers = async () => {
    if (!problemDocument) {
      setFormError(problemLoading ? "The question is still loading." : "No question is available yet.");
      return;
    }

    const latestGraded = gradeProblemAnswers(problemDocument, answers);
    const hasMissing = latestGraded.some((s) => s.status === "missing");
    const hasIncorrect = latestGraded.some((s) => s.status === "incorrect");
    if (hasMissing || hasIncorrect) {
      setSubmitted(true);
      const nextAttempts = submitAttempts + 1;
      setSubmitAttempts(nextAttempts);
      if (nextAttempts >= 3) {
        setFormError("Answers revealed below.");
      } else {
        setFormError(hasMissing ? "Please answer every field." : "One or more answers are incorrect.");
      }
      return;
    }

    setFormError(null);
    await openTargetApp();
  };

  return (
    <>
      {loadingOpen && (
        <View
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(0,0,0,0.5)"
          zIndex={1000}
        >
          <Spinner size="large" color="$primary10" />
        </View>
      )}

      <Container scroll={false} flex={1}>
          <View flex={1}>
            {breakStatus === "running" ? (
              <View flex={1} alignItems="center" justifyContent="center">
                <BreakAnimation progress={animationProgress.current} />
                <SizableText
                  animation="fadeIn"
                  enterStyle={{ opacity: 0 }}
                  opacity={1}
                  marginTop="$5"
                  fontSize="$6"
                  fontWeight="700"
                  textAlign="center"
                  color="$text11"
                >
                  {BreakStore.getRandomBreakMessage()}
                </SizableText>
              </View>
            ) : (
              <View flex={1}>
                {problemLoading && !problemDocument ? (
                  <View flex={1} alignItems="center" justifyContent="center">
                    <Spinner size="large" color="$primary10" />
                    <Paragraph size="$3" color="#797979" marginTop="$3">
                      Generating your problem…
                    </Paragraph>
                  </View>
                ) : problemError && !problemDocument ? (
                  <View flex={1} alignItems="center" justifyContent="center">
                    <Spinner size="large" color="$primary10" />
                    <SizableText fontSize="$6" fontWeight="700" textAlign="center" color="$text11" marginTop="$3">
                      Opening {selectedApp.name}
                    </SizableText>
                    <Paragraph size="$4" textAlign="center" color="#797979" marginTop="$2">
                      The question generator failed, so you can continue.
                    </Paragraph>
                  </View>
                ) : (
                  problemDocument && (
                    <YStack
                      flex={1}
                      animation="fadeIn"
                      enterStyle={{ opacity: 0 }}
                      opacity={1}
                    >
                      <NativeScrollView
                        style={styles.questionScroll}
                        contentContainerStyle={styles.questionScrollContent}
                        keyboardShouldPersistTaps="handled"
                        keyboardDismissMode={Platform.OS === "ios" ? "interactive" : "on-drag"}
                        showsVerticalScrollIndicator={false}
                      >
                        <YStack space="$4">
                          <YStack space="$1" alignItems="center">
                            <Paragraph size="$3" color="#797979" textAlign="center">
                              To open {selectedApp.name}
                            </Paragraph>
                            <SizableText fontSize="$6" fontWeight="900" color="$text11" textAlign="center">
                              {problemDocument.title}
                            </SizableText>
                            {problemDocument.prompt ? (
                              <Paragraph size="$3" color="#797979" textAlign="center" lineHeight={19}>
                                {problemDocument.prompt}
                              </Paragraph>
                            ) : null}
                          </YStack>

                          <View
                            height={260}
                            minHeight={220}
                            borderRadius={10}
                            borderWidth={1}
                            borderColor="$grey3"
                            backgroundColor="$grey1"
                            overflow="hidden"
                          >
                            {problemDocument.assets.map((asset) => (
                              <View key={asset.id} style={StyleSheet.absoluteFill}>
                                {asset.webUrl ? (
                                  <WebView
                                    source={{ uri: asset.webUrl }}
                                    scrollEnabled={false}
                                    cacheEnabled={false}
                                    startInLoadingState
                                    style={{ flex: 1, backgroundColor: "transparent" }}
                                    renderLoading={() => (
                                      <View
                                        style={[
                                          StyleSheet.absoluteFill,
                                          { justifyContent: "center", alignItems: "center" },
                                        ]}
                                      >
                                        <Spinner color="$primary10" />
                                      </View>
                                    )}
                                  />
                                ) : asset.image ? (
                                  <Image
                                    source={asset.image}
                                    style={{ flex: 1, width: "100%" }}
                                    resizeMode="contain"
                                  />
                                ) : (
                                  <View flex={1} alignItems="center" justifyContent="center">
                                    <Paragraph color="#797979" size="$3">
                                      {asset.placeholder ?? "Circuit diagram"}
                                    </Paragraph>
                                  </View>
                                )}
                                <Pressable
                                  style={StyleSheet.absoluteFill}
                                  onPress={() => setSelectedAsset(asset)}
                                />
                              </View>
                            ))}

                            <View
                              position="absolute"
                              bottom="$2"
                              right="$2"
                              backgroundColor="rgba(0,0,0,0.45)"
                              borderRadius={6}
                              paddingHorizontal="$2"
                              paddingVertical="$1"
                            >
                              <XStack space="$1" alignItems="center">
                                <Maximize2 size={12} color="white" />
                                <SizableText fontSize={11} color="white">
                                  Expand
                                </SizableText>
                              </XStack>
                            </View>
                          </View>

                          <XStack justifyContent="space-between" alignItems="center" gap="$3">
                            {problemDocument.source.generatedAt ? (
                              <Paragraph size="$2" color="#797979" flex={1} numberOfLines={1}>
                                Generated {formatGeneratedAt(problemDocument.source.generatedAt)}
                              </Paragraph>
                            ) : (
                              <View flex={1} />
                            )}
                            <Button
                              size="$2"
                              icon={problemLoading ? undefined : RefreshCw}
                              chromeless
                              color="#797979"
                              disabled={problemLoading}
                              onPress={() => {
                                BreakStore.refreshApp();
                                setRequestNonce((n) => n + 1);
                              }}
                            >
                              {problemLoading ? <Spinner size="small" /> : "New problem"}
                            </Button>
                          </XStack>

                          <YStack
                            borderWidth={1}
                            borderColor="$grey3"
                            borderRadius={10}
                            backgroundColor="$background"
                            overflow="hidden"
                          >
                            <XStack
                              alignItems="center"
                              justifyContent="space-between"
                              paddingHorizontal="$3"
                              paddingVertical="$2"
                              borderBottomWidth={1}
                              borderBottomColor="$grey3"
                            >
                              <SizableText fontSize="$4" fontWeight="800" color="$text11">
                                Answers
                              </SizableText>
                              <Paragraph size="$2" color="#797979">
                                {problemDocument.answerSlots.length} required
                              </Paragraph>
                            </XStack>

                            <YStack padding="$3" space="$3">
                              {problemDocument.answerSlots.map((slot, index) => {
                                const fieldValue = answers[slot.id] ?? "";
                                const status = answerStatusBySlotId[slot.id];
                                const errorMessage = submitted && status ? getAnswerErrorMessage(status) : null;
                                const isLast = index === problemDocument.answerSlots.length - 1;
                                return (
                                  <YStack
                                    key={slot.id}
                                    space="$2"
                                    padding="$3"
                                    borderRadius={8}
                                    borderWidth={1}
                                    borderColor={statusColor(status, submitted)}
                                    backgroundColor={statusBackground(status, submitted)}
                                  >
                                    <XStack alignItems="center" justifyContent="space-between" gap="$3">
                                      <YStack flex={1} minWidth={0}>
                                        <SizableText fontWeight="800" color="$text11" fontSize="$4">
                                          {slot.label}
                                        </SizableText>
                                        {slot.caption ? (
                                          <Paragraph size="$2" color="#797979" lineHeight={15}>
                                            {slot.caption}
                                          </Paragraph>
                                        ) : null}
                                      </YStack>
                                      {submitted && status === "correct" ? (
                                        <CheckCircle2 size={18} color="#16a34a" />
                                      ) : submitted && status ? (
                                        <AlertCircle size={18} color="#dc2626" />
                                      ) : null}
                                    </XStack>

                                    <Input
                                      size="$4"
                                      value={fieldValue}
                                      onChangeText={(text) => {
                                        setAnswers((prev) => ({ ...prev, [slot.id]: text }));
                                        if (submitted) setFormError(null);
                                      }}
                                      placeholder={slot.placeholder}
                                      borderColor={statusColor(status, submitted)}
                                      keyboardType={slot.keyboardType ?? "default"}
                                      autoCapitalize="none"
                                      autoCorrect={false}
                                      editable={!answersRevealed}
                                      opacity={answersRevealed ? 0.58 : 1}
                                      returnKeyType={isLast ? "done" : "next"}
                                      onSubmitEditing={() => {
                                        if (isLast) void submitAnswers();
                                      }}
                                      blurOnSubmit={isLast}
                                    />

                                    {errorMessage ? (
                                      <Paragraph size="$2" color="$red10" lineHeight={15}>
                                        {errorMessage}
                                      </Paragraph>
                                    ) : null}

                                    {answersRevealed ? (
                                      <XStack
                                        alignItems="center"
                                        paddingHorizontal="$2"
                                        paddingVertical="$1"
                                        borderRadius={6}
                                        backgroundColor="rgba(34, 197, 94, 0.10)"
                                      >
                                        <SizableText fontSize="$3" color="$green10" fontWeight="700">
                                          Answer: {expectedAnswerText(slot)}
                                        </SizableText>
                                      </XStack>
                                    ) : null}
                                  </YStack>
                                );
                              })}

                              {formError ? (
                                <XStack
                                  alignItems="center"
                                  gap="$2"
                                  padding="$3"
                                  borderRadius={8}
                                  backgroundColor={answersRevealed ? "rgba(34, 197, 94, 0.10)" : "rgba(239, 68, 68, 0.10)"}
                                >
                                  {answersRevealed ? (
                                    <CheckCircle2 size={16} color="#16a34a" />
                                  ) : (
                                    <AlertCircle size={16} color="#dc2626" />
                                  )}
                                  <Paragraph size="$3" color={answersRevealed ? "$green10" : "$red10"} flex={1}>
                                    {formError}
                                  </Paragraph>
                                </XStack>
                              ) : null}
                            </YStack>
                          </YStack>

                          {process.env.NODE_ENV === "development" && (
                            <XStack space="$2">
                              <Button
                                flex={1}
                                size="$2"
                                onPress={() => {
                                  BreakStore.status = null;
                                  router.replace("/overview/");
                                }}
                              >
                                Reset
                              </Button>
                              <Button
                                flex={1}
                                size="$2"
                                onPress={() => {
                                  BreakStore.status = null;
                                  router.replace("/overview/");
                                  router.replace(`/break/${selectedApp.name}`);
                                }}
                              >
                                Restart
                              </Button>
                            </XStack>
                          )}
                        </YStack>
                      </NativeScrollView>

                      <YStack
                        paddingTop="$3"
                        paddingBottom="$2"
                        borderTopWidth={1}
                        borderTopColor="$grey3"
                        backgroundColor="$background"
                      >
                        <Button
                          size="$4"
                          onPress={() => void submitAnswers()}
                          backgroundColor="$text11"
                          pressStyle={{ opacity: 0.86 }}
                        >
                          <XStack alignItems="center" justifyContent="center" space="$2">
                            <SizableText color="white" fontWeight="800" fontSize="$4">
                              Submit answers
                            </SizableText>
                            <ArrowRight color="white" size={18} />
                          </XStack>
                        </Button>
                      </YStack>
                    </YStack>
                  )
                )}
              </View>
            )}
          </View>
      </Container>

      {/* Fullscreen asset dialog */}
      <Dialog
        modal
        open={!!selectedAsset}
        onOpenChange={(open) => {
          if (!open) setSelectedAsset(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay
            key="asset-overlay"
            animation="quick"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
            opacity={0.65}
            backgroundColor="black"
          />
          <Dialog.Content
            bordered
            elevate
            key="asset-content"
            width="92%"
            maxWidth={760}
            padding="$4"
          >
            <YStack space="$3">
              <XStack justifyContent="space-between" alignItems="center" space="$3">
                <Dialog.Title>{selectedAsset?.title ?? "Circuit diagram"}</Dialog.Title>
                <Dialog.Close asChild>
                  <Button circular size="$3" icon={X} />
                </Dialog.Close>
              </XStack>

              <View
                height={480}
                borderWidth={1}
                borderColor="$grey3"
                borderRadius={8}
                backgroundColor="$grey1"
                overflow="hidden"
              >
                {selectedAsset?.webUrl ? (
                  <WebView
                    source={{ uri: selectedAsset.webUrl }}
                    style={{ flex: 1 }}
                    cacheEnabled={false}
                    startInLoadingState
                    renderLoading={() => (
                      <View
                        style={[
                          StyleSheet.absoluteFill,
                          { justifyContent: "center", alignItems: "center" },
                        ]}
                      >
                        <Spinner color="$primary10" />
                      </View>
                    )}
                  />
                ) : selectedAsset?.image ? (
                  <Image
                    source={selectedAsset.image}
                    accessibilityLabel={selectedAsset.title}
                    style={{ width: "100%", height: 480, resizeMode: "contain" }}
                  />
                ) : null}
              </View>

              {selectedAsset?.sourceUrl && (
                <Button
                  size="$3"
                  icon={ExternalLink}
                  variant="outlined"
                  onPress={() => {
                    void openAssetSourceUrl(selectedAsset);
                  }}
                >
                  {selectedAsset.sourceUrlLabel ?? "Open source"}
                </Button>
              )}
            </YStack>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>

      {/* Error dialog */}
      <AlertDialog open={!!error}>
        <AlertDialog.Portal>
          <AlertDialog.Overlay key="overlay" />
          <AlertDialog.Content bordered elevate key="content">
            <YStack space>
              <AlertDialog.Title>Error</AlertDialog.Title>
              <AlertDialog.Description>{error}</AlertDialog.Description>
              <XStack space="$3" justifyContent="flex-end">
                <AlertDialog.Cancel>
                  <Button
                    onPress={() => {
                      setError(null);
                      BreakStore.status = null;
                      router.replace("/");
                    }}
                  >
                    Back
                  </Button>
                </AlertDialog.Cancel>
              </XStack>
            </YStack>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog>
    </>
  );
});

const styles = StyleSheet.create({
  questionScroll: {
    flex: 1,
  },
  questionScrollContent: {
    paddingTop: 4,
    paddingBottom: 28,
  },
});

export default Break;
