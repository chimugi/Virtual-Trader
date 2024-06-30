import yahooFinance from 'yahoo-finance2';

export const get = async (query, queryOptions) => {
  console.log('historical query:', query);
  try {
    const data = await yahooFinance.historical(query, queryOptions);
    return data;
  } catch (e) {
    return e;
  }
}