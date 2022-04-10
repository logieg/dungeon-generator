import { injectRandomWords, randomRange } from './random';

export const EncounterType = {
  'ENEMY': 'enemy',
  'NPC': 'NPC',
  'STRUCTURE': 'structure',
  'ITEM': 'item'
}

/** Info about a particular encounter (of type enemy, NPC, structure, item) */
export interface Encounter {
  type: string;
  description?: string;
}

interface generateEncounterProps {
  typeRatios?: Array<[string, number]>; // TODO
}
/** Generate a single encounter of any possible type */
export function generateEncounter(): Encounter {
  let type;
  switch (randomRange(0, 3)) {
    case 0:
      type = 'ENEMY';
      break;
    case 1:
      type = 'NPC';
      break;
    case 2:
      type = 'STRUCTURE';
      break;
    case 3:
      type = 'ITEM';
      break;
  }
  const encounter = {
    type: type,
    description: injectRandomWords(`You encounter a(n) {adjective} ${EncounterType[type]}!`)
  };
  return encounter;
}
