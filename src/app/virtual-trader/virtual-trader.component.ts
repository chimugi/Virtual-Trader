import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { StockDataFetcherService } from '../api/stock-data-fetcher.service';
import {
	HistoricalData,
	StockTicker,
	VIRTUAL_TRADER_COMPONENTS,
} from './contract';

@Component({
	selector: 'app-virtual-trader',
	standalone: true,
	imports: [VIRTUAL_TRADER_COMPONENTS, CommonModule, MatButtonModule],
	templateUrl: './virtual-trader.component.html',
	styleUrl: './virtual-trader.component.scss',
})
export class VirtualTraderComponent {
	public fetcher = inject(StockDataFetcherService);

	public code = signal<StockTicker['code']>('');
	private today = new Date();
	public startDate = signal<StockTicker['startDate']>(this.today);
	public endDate = signal<StockTicker['endDate']>(this.today);

	public historicalData$?: Observable<HistoricalData[][]>;
	public appliedCodes: StockTicker['code'][] = ['AMZN', 'AAPL', 'GOOGL'];

	public disabled = computed(() => this.code() === '');

	public fetchHistoricalData(): void {
		this.historicalData$ = this.fetcher.getHistoricalData(
			this.appliedCodes,
			this.startDate(),
			this.endDate(),
		);
	}

	public addCode(): void {
		this.appliedCodes.push(this.code());
	}

	// TODO: Need to be modified because the async method calls repeatedly.
	public stockData$ = computed(() => this.fetchStockData(this.code()));
	public stockAllData$ = signal(this.fetcher.getAllStockData());

	private async fetchStockData(
		code: StockTicker['code'],
	): Promise<StockTicker | undefined> {
		return await this.fetcher.getStockData(code);
	}
}
