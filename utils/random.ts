/** Get an integer within range (inclusive) */
export function randomRange(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max + 1));
}

/** Get a random index for an array with the given length */
export function randomIndex(length: number): number {
  return Math.floor(Math.random() * length);
}
