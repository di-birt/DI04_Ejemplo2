import { Component, OnInit, Renderer2, ElementRef, Input } from '@angular/core';
// Necesitamos importar Chart desde chart.js
import { Chart, ChartType } from 'chart.js/auto';
 
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
 
  @Input() nameTab: string = "";
  // Atributo que almacena los datos del chart
  public chart: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
 
  ngOnInit(): void {
      this.inicializarChart();
  }

  private inicializarChart(){
    
    const data = {
      labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }]
    };

    // Creamos la gráfica
    const canvas = this.renderer.createElement('canvas');
    this.renderer.setAttribute(canvas, 'id', this.nameTab+'PieChart');
  
    // Añadimos el canvas al div con id "chartContainer"
    const container = this.el.nativeElement.querySelector('#contenedor-piechart');
    this.renderer.appendChild(container, canvas);
 
     // Creamos la gráfica
    this.chart = new Chart(canvas, {
      type: 'pie' as ChartType, // tipo de la gráfica 
      data: data, // datos 
    });
  }

}