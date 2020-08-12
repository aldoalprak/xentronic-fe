module.exports.rupiah = (amount) => {
  const numAmount = Number(amount)
  return (
    'Rp ' +
    numAmount
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+,)/g, '$1.')
      .split(',')[0]
  );
};