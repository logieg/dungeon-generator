import dungeonNames from '../data/names/dungeonNames.json';
import { generateEncounter } from './encounterGenerator';
import { randomAdjective, randomIndex, randomNoun, randomRange } from './random';

/** Single room with position and content info */
export interface Room {
  name?: string;
  start: { x: number, y: number };
  end: { x: number, y: number };
  contents?: Array<any>;
}

/** Map containing rooms and various attributes */
export interface DungeonMap {
  name: string;
  width: number;
  height: number;
  rooms: Array<Room>;
}

interface generateMapProps {
  size: { width: number, height: number };
  expandChance?: { x: number, y: number };
}
/** Generates a grid-based dungeon map (unpopulated) */
export function generateMap({
  size,
  expandChance = { x: 5, y: 5 }
}: generateMapProps): DungeonMap {
  const map: DungeonMap = {
    name: generateMapName(),
    width: size.width,
    height: size.height,
    rooms: []
  };
  for (let y = 0; y < size.height; y++) {
    for (let x = 0; x < size.width; x++) {
      map.rooms.push(generateRoom(x, y));
    }
  }
  return map;
}

/** Use a list of adjectives and nouns to fill a predefined template for a dungeon name */
function generateMapName() {
  const template = dungeonNames[randomIndex(dungeonNames.length)];
  const adjective = randomAdjective();
  const noun = randomNoun();
  return template
    .replaceAll("{adjective}", `${adjective[0].toUpperCase()}${adjective.substring(1)}`)
    .replaceAll("{noun}", `${noun[0].toUpperCase()}${noun.substring(1)}`);
}

/** Construct a room with some random encounter contents */
function generateRoom(x: number, y: number, width = 1, height = 1) {
  const contents = [];
  const encounterCount = randomRange(0, 3);
  for (let i = 0; i < encounterCount; i++)
    contents.push(generateEncounter());
  const room: Room = {
    name: `Room #${Math.floor(Math.random() * 1000)}`, // TEMP NAME
    start: { x: x, y: y },
    end: { x: x + width, y: y + height },
    contents: contents
  };
  return room;
}
