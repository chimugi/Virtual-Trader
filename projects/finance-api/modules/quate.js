import yahooFinance from 'yahoo-finance2';

export const get = async (symbol) => {
  console.log('quote symbol:', symbol);
  try {
    const data = await yahooFinance.quote(symbol);
    return data;
  } catch (e) {
    return e;
  }
};