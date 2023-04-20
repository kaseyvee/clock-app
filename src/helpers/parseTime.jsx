export const parseTime = (info, firstDigit, secondDigit) => {
  return Number(info?.datetime[firstDigit] + info?.datetime[secondDigit])
}