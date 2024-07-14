import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { transDateForFinalcialApi } from './utils';
import { HistoricalData, StockTicker } from '../../virtual-trader/contract';

@Injectable({
	providedIn: 'root',
})
export class StockDataFetcherService {
	private baseUrl = 'http://localhost:3000';
	private http = inject(HttpClient);

	public getHistoricalData(
		codes: string[],
		startDate: Date,
		endDate: Date,
	): Observable<HistoricalData[][]> {
		const requests = codes.map((code, index) => {
			const url = `${this.baseUrl}/historical/get/${code}?period1=${
				transDateForFinalcialApi(startDate)
			}&period2=${transDateForFinalcialApi(endDate)}`;
			return this.http.get<HistoricalData[]>(url).pipe(
				map((data) => data.map(d => ({ ...d, code: codes[index] }))),
			);
		});
		return forkJoin(requests);
	}

	// Note: sample code
	public getStockData(
		code: StockTicker['code'],
	): Promise<StockTicker | undefined> {
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
		startDate: new Date('2023-01-01'),
		endDate: new Date('2023-12-31'),
	},
	{
		code: 'GOOGL',
		companyName: 'Alphabet Inc.',
		exchange: 'NASDAQ',
		startDate: new Date('2023-01-01'),
		endDate: new Date('2023-12-31'),
	},
	{
		code: 'MSFT',
		companyName: 'Microsoft Corporation',
		exchange: 'NASDAQ',
		startDate: new Date('2023-01-01'),
		endDate: new Date('2023-12-31'),
	},
	{
		code: 'AMZN',
		companyName: 'Amazon.com, Inc.',
		exchange: 'NASDAQ',
		startDate: new Date('2023-01-01'),
		endDate: new Date('2023-12-31'),
	},
	{
		code: 'FB',
		companyName: 'Meta Platforms, Inc.',
		exchange: 'NASDAQ',
		startDate: new Date('2023-01-01'),
		endDate: new Date('2023-12-31'),
	},
];
