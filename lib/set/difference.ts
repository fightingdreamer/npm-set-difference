/**
 * Difference between two Iterables
 */
export function difference<T>(a: Iterable<T>, b: Iterable<T>): Set<T> {
  const result = new Set(a);
  for (const elem of b) result.delete(elem);
  return result;
}

/**
 * Difference between n Iterables
 */
export function differenceMany<T>(
  main: Iterable<T>,
  sets: Iterable<Iterable<T>>,
): Set<T> {
  const result = new Set(main);
  for (const set of sets) for (const elem of set) result.delete(elem);
  return result;
}
