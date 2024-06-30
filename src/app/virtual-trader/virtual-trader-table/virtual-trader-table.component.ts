import { Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { StockTicker } from '../contract';

type StockTickerTableData = {
	code: StockTicker['code'];
	companyName?: StockTicker['companyName'];
	exchange?: StockTicker['exchange'];
	startDate?: Date;
	endDate?: Date;
};

@Component({
	selector: 'app-virtual-trader-table',
	standalone: true,
	imports: [MatTableModule],
	templateUrl: './virtual-trader-table.component.html',
	styleUrl: './virtual-trader-table.component.scss',
})
export class VirtualTraderTableComponent {
	public displayedColumns: string[] = [
		'position',
		'code',
		'companyName',
		'exchange',
		'startDate',
		'endDate',
	];

	public readonly dataSource = input.required({
		transform: (stocks: StockTicker[]) => this.flattenStockTicker(stocks),
	});

	private flattenStockTicker(stocks: StockTicker[]): StockTickerTableData[] {
		return stocks.map((stock, i) => ({
			...stock,
			position: i + 1,
		}));
	}
}
