import {create} from 'zustand';
import phasmoData from '../data/PhasmoData';

type EntitiesStateTabs = {
  id: number,
  name: string,
  evidence: string[],
  sanity: number,
  speed: number,
  speedIncrease?: number,
}

type EntitiesState = {
  entities: EntitiesStateTabs[];
};

export const useEntities = create<EntitiesState>(() => ({
  entities: phasmoData,
}));