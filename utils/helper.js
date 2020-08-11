export const sepNumber = (amount) => {
  const numAmount = Number(amount)
  return (
    numAmount
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+,)/g, '$1.')
      .split(',')[0]
  );
}