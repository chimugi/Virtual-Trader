import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

function updateChartOptions(dataSource: any[]) {
	const codes = dataSource.map(ds => ds.map((d: any) => d.code));
	const data = dataSource.map((ds, idx) => ({
		type: 'spline',
		name: codes[idx],
		dataPoints: ds.map((d: any) => ({
			x: new Date(d.date),
			y: d.close,
		})),
	}));
	return {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: 'Stock Line Chart',
			fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 'bold',
		},
		axisY: {
			title: 'Stock Price',
			valueFormatString: '#,###.##',
		},
		data,
	};
}

@Component({
	selector: 'app-virtual-trader-graph',
	standalone: true,
	imports: [RouterOutlet, CommonModule, CanvasJSAngularChartsModule],
	templateUrl: './virtual-trader-graph.component.html',
	styleUrl: './virtual-trader-graph.component.scss',
})
export class VirtualTraderGraphComponent {
	@Input({
		required: true,
		transform: (obj: any[]) => updateChartOptions(obj),
	})
	public dataSource!: any;
}
