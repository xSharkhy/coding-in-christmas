export function decode (message) {
  while (message.includes('(')) {
    const start = message.slice(message.lastIndexOf('('))
    const sliced = start.slice(0, start.indexOf(')') + 1)
    const reversed = sliced.split('').reverse().join('')
    const replaced = reversed.replace(/[()]/g, '')

    message = message.replace(sliced, replaced)
  }
  return message
}
