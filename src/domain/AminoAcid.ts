import type { Group } from "./groups";

export const AMINOACIDS = [
  "A",
  "C",
  "L",
  "I",
  "M",
  "F",
  "W",
  "Y",
  "V",
  "P",
  "G",
  "D",
  "E",
  "K",
  "R",
  "S",
  "T",
  "H",
  "Q",
  "N",
] as const;

export type AminoAcid = typeof AMINOACIDS[number];

export const aminoacid2group: Record<AminoAcid, Group> = {
  A: "hydrophobicAminoAcids",
  C: "cysteine",
  L: "hydrophobicAminoAcids",
  I: "hydrophobicAminoAcids",
  M: "hydrophobicAminoAcids",
  F: "hydrophobicAminoAcids",
  W: "hydrophobicAminoAcids",
  Y: "hydrophobicAminoAcids",
  V: "hydrophobicAminoAcids",
  P: "hydrophobicAminoAcids",
  G: "glycine",
  D: "negativelyChargedAminoAcids",
  E: "negativelyChargedAminoAcids",
  K: "positivelyChargedAminoAcids",
  R: "positivelyChargedAminoAcids",
  S: "polarChargedAminoAcids",
  T: "polarChargedAminoAcids",
  H: "polarChargedAminoAcids",
  Q: "polarChargedAminoAcids",
  N: "polarChargedAminoAcids",
} as const;
