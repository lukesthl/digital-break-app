import type { ProblemSource } from "./types";

export const genericTextbookSource: ProblemSource = {
  id: "generic-textbook",
  label: "Generic Textbook",
  description: "A local starter source for simple textbook-style questions.",
  defaultPrefs: {
    difficulty: "easy",
    subject: "math",
  },
  getPrefSpecs: () => [
    {
      key: "subject",
      label: "Subject",
      type: "select",
      defaultValue: "math",
      options: [
        { value: "math", label: "Math" },
        { value: "circuits", label: "Circuits" },
      ],
    },
    {
      key: "difficulty",
      label: "Difficulty",
      type: "select",
      defaultValue: "easy",
      options: [
        { value: "easy", label: "Easy" },
        { value: "medium", label: "Medium" },
        { value: "hard", label: "Hard" },
      ],
    },
  ],
  getProblemDocument: () =>
    Promise.resolve({
    id: "generic-textbook-starter",
    title: "Textbook Check",
    description: "Answer these quick questions before the app opens.",
    prompt: "Complete each required answer.",
    assets: [
      {
        id: "generic-placeholder",
        title: "Image placeholder",
        placeholder: "A generated figure or textbook image can appear here.",
      },
    ],
    answerSlots: [
      {
        id: "sum",
        label: "Question 1",
        caption: "What is 12 + 8?",
        placeholder: "20",
        keyboardType: "numeric",
        grading: {
          type: "numeric",
          expected: 20,
        },
      },
      {
        id: "slope",
        label: "Question 2",
        caption: "What is the derivative of x^2?",
        placeholder: "2x",
        grading: {
          type: "exact",
          expected: "2x",
        },
      },
      {
        id: "unit",
        label: "Question 3",
        caption: "Type the SI unit for current.",
        placeholder: "ampere",
        grading: {
          type: "exact",
          expected: "ampere",
        },
      },
    ],
    footer: "Local generic problem source.",
    source: {
      id: "generic-textbook",
      label: "Generic Textbook",
      generatedAt: new Date().toISOString(),
    },
    }),
};
