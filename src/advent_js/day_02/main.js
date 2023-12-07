export function manufacture (gifts, materials) {
  return gifts
    .filter(gift => gift.split('')
      .every(letter => materials.includes(letter)))
}
