import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

function updateChartOptions(dataSource: any) {
	const dataPoints = dataSource.map((d: any) => ({
		x: new Date(d.date),
		y: d.close,
	}));
	return {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: 'Date',
			fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 'bold',
		},
		axisY: {
			title: 'Stock Price',
			valueFormatString: "#,###.##'%'",
		},
		data: [{
			type: 'spline',
			xValueFormatString: 'YYYY',
			yValueFormatString: "#,###.##'%'",
			dataPoints,
		}],
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
		transform: (obj: any) => updateChartOptions(obj),
	})
	public dataSource!: any;
}
