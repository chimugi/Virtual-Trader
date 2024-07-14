import { VirtualTraderFormComponent } from './virtual-trader-form/virtual-trader-form.component';
import { VirtualTraderGraphComponent } from './virtual-trader-graph/virtual-trader-graph.component';
import { VirtualTraderTableComponent } from './virtual-trader-table/virtual-trader-table.component';

export const VIRTUAL_TRADER_COMPONENTS = [
	VirtualTraderFormComponent,
	VirtualTraderGraphComponent,
	VirtualTraderTableComponent,
];

export interface StockTicker {
	code: string;
	companyName?: string;
	exchange?: string;
	startDate: Date;
	endDate: Date;
}

export interface HistoricalData {
	// Define the structure of your historical data here
	date: string; // Example, adjust according to your API response
	close: number; // Example
	code: string;
	// Add other properties as needed
}
