export function prettyPrint(obj: object, label = "") {
  console.log(`==== ${label} ====`);
  console.log(JSON.stringify(obj, null, 2)); // 들여쓰기 2칸으로 보기 좋게 출력
  console.log("=================");
}

export function prettyPrintArray(
  arr: Record<string, any>[],
  label: string,
): string {
  const formatted = arr
    .map((obj, idx) => {
      const entries = Object.entries(obj)
        .map(([key, value]) => `  ${key}: ${JSON.stringify(value)}`)
        .join("\n");
      return `[${idx}]\n${entries}`;
    })
    .join("\n\n");

  return `${label} (${arr.length} items):\n\n${formatted}`;
}
