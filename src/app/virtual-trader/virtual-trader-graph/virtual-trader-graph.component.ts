import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { HistoricalData } from '../contract';

function updateChartOptions(dataList: HistoricalData[][]) {
	const data = dataList.map((histories, idx) => ({
		type: 'spline',
		showInLegend: true,
		name: histories.map(hist => hist.code)[idx],
		dataPoints: histories.map(hist => ({
			x: new Date(hist.date),
			y: hist.close,
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
		transform: (dataList: HistoricalData[][]) => updateChartOptions(dataList),
	})
	public dataSource!: any[];
}
