import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, inject, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
	MatChipEditedEvent,
	MatChipInputEvent,
	MatChipsModule,
} from '@angular/material/chips';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { StockTicker } from '../contract';

@Component({
	selector: 'app-virtual-trader-form',
	standalone: true,
	providers: [provideNativeDateAdapter()],
	imports: [
		MatButtonModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatChipsModule,
		MatIconModule,
		MatInputModule,
		FormsModule,
	],
	templateUrl: './virtual-trader-form.component.html',
	styleUrl: './virtual-trader-form.component.scss',
})
export class VirtualTraderFormComponent {
	public readonly addOnBlur = true;
	public readonly separatorKeysCodes = [ENTER, COMMA] as const;

	public codes = model<StockTicker['code'][]>([]);
	public startDate = model<StockTicker['startDate']>();
	public endDate = model<StockTicker['endDate']>();

	public add(event: MatChipInputEvent): void {
		const value = (event.value ?? '').trim();

		if (value !== undefined && value !== null) {
			this.codes().push(value);
		}

		// Clear the input value
		event.chipInput!.clear();
	}

	public remove(code: StockTicker['code']): void {
		this.codes.update(codes => {
			const index = codes.indexOf(code);
			if (index < 0) {
				return codes;
			}

			codes.splice(index, 1);
			return [...codes];
		});
	}

	public edit(code: StockTicker['code'], event: MatChipEditedEvent) {
		const value = event.value.trim();
		if (!value) {
			this.remove(code);
			return;
		}
		this.codes.update(codes => {
			const index = codes.indexOf(code);
			if (index >= 0) {
				codes[index] = value;
				return [...codes];
			}
			return codes;
		});
	}
}
