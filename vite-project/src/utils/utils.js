// Utility functions
export function capitalizeFirst(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

export function areEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every((key) => areEqual(obj1[key], obj2[key]));
}

export function firstLetter(str) {
  return str ? str[0] : "";
}

export function cleanUpParams(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== null));
}

export function toCamelCase(sentence) {
  return sentence
    .split(" ")
    .map((word, index) =>
      index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}
