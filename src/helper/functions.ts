export const currencyFormatting = function (currency: number) {
  if (currency === null || currency === undefined || currency === 0)
    return "--";

  let dollarUSLocale = Intl.NumberFormat("en-US");
  const money = dollarUSLocale.format(currency);
  return money;
};
