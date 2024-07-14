import { VirtualTraderFormComponent } from './virtual-trader-form/virtual-trader-form.component';
import { VirtualTraderGraphComponent } from './virtual-trader-graph/virtual-trader-graph.component';

export const VIRTUAL_TRADER_COMPONENTS = [
	VirtualTraderFormComponent,
	VirtualTraderGraphComponent,
];

export interface StockTicker {
	code: string;
	companyName?: string;
	exchange?: string;
	startDate: Date;
	endDate: Date;
}

export interface HistoricalData {
	date: string;
	close: number;
	code: string;
}
