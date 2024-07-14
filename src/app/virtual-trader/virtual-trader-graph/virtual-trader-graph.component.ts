import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

function updateChartOptions(dataSource: any[]) {
	const codes = dataSource.map(ds => ds.map((d: any) => d.code)[0]);
	const data = dataSource.map((ds, idx) => ({
		type: 'spline',
		showInLegend: true,
		name: codes[idx],
		dataPoints: ds.map((d: any) => ({
			x: new Date(d.date),
			y: d.close,
		})),
	}));
	return {
		animationEnabled: true,
		axisX: {
			title: 'Date',
		},
		axisY: {
			title: 'Stock Price',
		},
		toolTip: {
			shared: true,
		},
		legend: {
			cursor: 'pointer',
			itemclick: function(e: any) {
				if (
					typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible
				) {
					e.dataSeries.visible = false;
				} else {
					e.dataSeries.visible = true;
				}
				e.chart.render();
			},
		},
		title: {
			text: 'Stock Line Chart',
			fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 'bold',
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
