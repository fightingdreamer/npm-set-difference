/**
 * Difference between two Sets
 */
export function difference<T>(a: Set<T>, b: Iterable<T>): Set<T> {
  const result = new Set(a);
  for (const elem of b) result.delete(elem);
  return result;
}

/**
 * Difference between n Sets
 */
export function differenceMany<T>(
  main: Set<T>,
  sets: Iterable<Iterable<T>>,
): Set<T> {
  const result = new Set(main);
  for (const set of sets) for (const elem of set) result.delete(elem);
  return result;
}
