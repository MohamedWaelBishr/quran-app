export function decodeArabicUnicode(jsonData: any) {
  return JSON.parse(jsonData, function (key, value) {
    if (typeof value === "string") {
      return value.replace(/\\u[\dA-Fa-f]{4}/g, function (match) {
        return String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16));
      });
    }
    return value;
  });
}
