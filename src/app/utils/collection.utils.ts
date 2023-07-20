
export function fromArrayToMap<K, V extends Record<string, any>>(
    arr: V[],
    fieldName: string
  ): Map<K, V> {
    const map = new Map<K, V>();
    arr.forEach((v) => map.set(v[fieldName], v));
    return map;
  }