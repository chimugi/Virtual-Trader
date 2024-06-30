import { Injectable } from '@angular/core';
import { StockTicker } from '../virtual-trader/contract';

@Injectable({
	providedIn: 'root',
})
export class StockDataFetcherService {
	// Note: sample code
	public getStockData(code: StockTicker['code']): Promise<StockTicker | undefined> {
		return this.getAllStockData()
			.then(samples => samples?.find(samp => samp.code === code));
	}

	// Note: sample code
	public getAllStockData(): Promise<StockTicker[] | undefined> {
		return Promise.resolve(SAMPLES);
	}
}

// TODO: remove after added API to get Stock Data
const SAMPLES: StockTicker[] = [
	{
		code: 'AAPL',
		companyName: 'Apple Inc.',
		exchange: 'NASDAQ',
		term: {
			startDate: new Date('2023-01-01'),
			endDate: new Date('2023-12-31'),
		},
	},
	{
		code: 'GOOGL',
		companyName: 'Alphabet Inc.',
		exchange: 'NASDAQ',
		term: {
			startDate: new Date('2023-01-01'),
			endDate: new Date('2023-12-31'),
		},
	},
	{
		code: 'MSFT',
		companyName: 'Microsoft Corporation',
		exchange: 'NASDAQ',
		term: {
			startDate: new Date('2023-01-01'),
			endDate: new Date('2023-12-31'),
		},
	},
	{
		code: 'AMZN',
		companyName: 'Amazon.com, Inc.',
		exchange: 'NASDAQ',
		term: {
			startDate: new Date('2023-01-01'),
			endDate: new Date('2023-12-31'),
		},
	},
	{
		code: 'FB',
		companyName: 'Meta Platforms, Inc.',
		exchange: 'NASDAQ',
		term: {
			startDate: new Date('2023-01-01'),
			endDate: new Date('2023-12-31'),
		},
	},
];
