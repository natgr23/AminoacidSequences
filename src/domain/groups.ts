export const GROUPS = [
  "cysteine",
  "hydrophobicAminoAcids",
  "glycine",
  "negativelyChargedAminoAcids",
  "positivelyChargedAminoAcids",
  "polarChargedAminoAcids",
] as const;

export type Group = typeof GROUPS[number];

export type WrongGroupType = "mismatchWarning";

export const group2color: Record<Group | WrongGroupType, string> = {
  cysteine: "#67E4A6",
  hydrophobicAminoAcids: "#FFEA00",
  glycine: "#C4C4C4",
  negativelyChargedAminoAcids: "#FC9CAC",
  positivelyChargedAminoAcids: "#BB99FF",
  polarChargedAminoAcids: "#80BFFF",
  mismatchWarning: "red",
}

export const proteinToGroupName = {
  cysteine: "Цистеин",
  hydrophobicAminoAcids: "Гидрофобные аминокислоты",
  glycine: "Глицин",
  negativelyChargedAminoAcids: "Отрицательно заряженные аминокислоты",
  positivelyChargedAminoAcids: "Положительно заряженные аминокислоты",
  polarChargedAminoAcids: "Полярные заряженные аминокислоты",
  mismatchWarning: "Аминокислота из второй последовательности не совпадает с аминокислотой из первой последовательности"
}
