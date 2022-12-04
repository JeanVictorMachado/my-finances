export const formattedDate = (date: Date) => {
  const day = date.getUTCDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  if (!date.valueOf()) return ''

  return `${day}/${month}/${year}`
}
