function isObject(obj: any): obj is Record<string, any> {
  return obj && typeof obj === "object" && !Array.isArray(obj);
}

export function deepMerge(
  target: Record<string, any>,
  source: Record<string, any>,
): Record<string, any> {
  const output: Record<string, any> = { ...target };

  for (const key in source) {
    if (isObject(source[key]) && isObject(target[key])) {
      output[key] = deepMerge(target[key], source[key]);
    } else {
      output[key] = source[key];
    }
  }

  return output;
}

export function deepMergeLite<T extends Record<string, any>>(
  target: T,
  source: Partial<T>,
): T {
  const output: any = { ...target };

  for (const key in source) {
    if (!source.hasOwnProperty(key)) continue;

    const sourceValue = source[key];
    // null 처리 추
    if (sourceValue === null) continue;

    const targetValue = output[key];

    const bothObjects =
      typeof targetValue === "object" &&
      typeof sourceValue === "object" &&
      targetValue !== null &&
      sourceValue !== null &&
      !Array.isArray(sourceValue);

    output[key] = bothObjects
      ? deepMergeLite(targetValue, sourceValue)
      : sourceValue;
  }

  return output;
}
