import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VirtualTraderComponent } from './virtual-trader/virtual-trader.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, VirtualTraderComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'virtual-trader';
}
