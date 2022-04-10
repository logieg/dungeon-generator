import adjectives from '../data/general/adjectives.json';
import nouns from '../data/general/nouns.json';

/** Get an integer within range (inclusive) */
export function randomRange(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max + 1));
}

/** Get a random index for an array with the given length */
export function randomIndex(length: number): number {
  return Math.floor(Math.random() * length);
}

/** Get a random adjective from a predefined list */
export function randomAdjective() {
  return adjectives[randomIndex(adjectives.length)];
}

/** Get a random noun from a predefined list */
export function randomNoun() {
  return nouns[randomIndex(nouns.length)];
}

/** Inject random adjectives and nouns in a text string */
export function injectRandomWords(text: string) {
  const adjSplit = text.split("{adjective}");
  const withAdj = adjSplit.reduce((str, chunk, index) => {
    if (index > 0)
      return str + randomAdjective() + chunk;
    else
      return str + chunk;
  }, "");
  const nounSplit = withAdj.split("{noun}");
  const withNouns = nounSplit.reduce((str, chunk, index) => {
    if (index > 0)
      return str + randomNoun() + chunk;
    else
      return str + chunk;
  }, "");
  return withNouns;
}
