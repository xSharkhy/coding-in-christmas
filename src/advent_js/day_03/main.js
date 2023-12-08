export function findNaughtyStep (original, modified) {
  if (original === modified) return ''

  const largerLength = Math.max(original.length, modified.length)

  for (let i = 0; i < largerLength; i++) {
    if (original[i] !== modified[i]) {
      return original[i] === modified[i + 1]
        ? modified[i]
        : original[i]
    }
  }
}
