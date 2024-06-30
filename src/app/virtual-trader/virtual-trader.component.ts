import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { StockDataFetcherService } from '../api/stock-data-fetcher.service';
import { StockTicker, VIRTUAL_TRADER_COMPONENTS } from './contract';

@Component({
	selector: 'app-virtual-trader',
	standalone: true,
	imports: [VIRTUAL_TRADER_COMPONENTS, CommonModule],
	templateUrl: './virtual-trader.component.html',
	styleUrl: './virtual-trader.component.scss',
})
export class VirtualTraderComponent {
	public code = signal<StockTicker['code']>('');
	public fetcher = inject(StockDataFetcherService);
	// TODO: Need to be modified because the async method calls repeatedly.
	public stockData$ = computed(() => this.fetchStockData(this.code()));
	public stockAllData$ = signal(this.fetcher.getAllStockData());

	private async fetchStockData(
		code: StockTicker['code'],
	): Promise<StockTicker | undefined> {
		return await this.fetcher.getStockData(code);
	}
}
