export const replacer = (key, value) => {
  if (typeof value === "string") {
    return value.replace("'", "$/");
  }
  return value;
}

export const reviver = (key, value) => {
  if (typeof value === "string") {
    return value.replace("$/", "'");
  }
  return value;
}