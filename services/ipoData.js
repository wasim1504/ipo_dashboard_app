const baseUrl = `https://api.iex.cloud/v1`;
const apiKey = `pk_0ed4e84fd58f43a19a2680b086b4abfe`;

const currencyList = [
  "EURUSD",
  "USDJPY",
  "GBPUSD",
  "AUDUSD",
  "USDCAD",
  "GBPJPY",
  "USDSGD",
  "USDINR",
];

export async function upcomingIpos() {
  try {
    const url = `${baseUrl}/data/CORE/UPCOMING_IPOS/market?token=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function latestCurrencyRates() {
  try {
    const url = `${baseUrl}/fx/latest?symbols=${[
      ...currencyList,
    ]}&token=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err);
  }
}
