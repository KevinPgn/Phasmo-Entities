import {create} from 'zustand';

type EvidencesState = {
  evidences: string[];
  notThisEvidences: string[]
  addEvidence: (evidence: string) => void;
};

export const useEvidences = create<EvidencesState>((set) => ({
  evidences: [],
  notThisEvidences: [],
  addEvidence: (evidence: string) => 
    set((state) => {
      if (state.evidences.includes(evidence)) {
        return {
          evidences: state.evidences.filter((e) => e !== evidence),
          notThisEvidences: [...state.notThisEvidences, evidence],
        };
      } else if (state.notThisEvidences.includes(evidence)) {
        return {
          notThisEvidences: state.notThisEvidences.filter((e) => e !== evidence),
        };
      } else if (state.evidences.length >= 3) {
        return {evidences: state.evidences};
      }
      return {evidences: [...state.evidences, evidence]};
    }),
}));