import { TestBed } from '@angular/core/testing';

import { StockDataFetcherService } from './stock-data-fetcher.service';

describe('StockDataFetcherService', () => {
	let service: StockDataFetcherService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(StockDataFetcherService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
