import { Extension } from "@codemirror/state";

export type ChoiceDefinition = {
  id: string;
  label: string;
  class: string;
};

export type ThemeDefinition = {
  id: string;
  label: string;
  class: string;
  generatedColors: string[];
};

export type LanguageDefinition = {
  id: string;
  label: string;
  extension: () => Promise<Extension>;
};

export type FontDefinition = {
  id: string;
  label: string;
  value: string;
};
