const baseUrl = `https://api.iex.cloud/v1`;
const apiKey = `api_key`; // replace with your api key

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
