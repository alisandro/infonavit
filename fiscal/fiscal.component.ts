import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-fiscal',
  templateUrl: './fiscal.component.html',
  styleUrls: ['./fiscal.component.css']
})
export class FiscalComponent implements OnInit {

  public opcionesGrafico:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
    public coloresGrafico: Color[] = [
      {backgroundColor:["#9E120E","#FF5800","#FFB414"]},
      {backgroundColor:["#9E120E","#FF5800","#FFB414"]},
      {backgroundColor:["#9E120E","#FF5800","#FFB414"]}
    ];


  public lblDatos:string[] = 
  ['Correcion de RFC', 'Devolucion de SSV97', 'Indicios de Evacion', 'Correccion de Datos', 'Aclaracion de datos', 'Fondo de Ahorro'
  ,'Cuanto Ahorro Tengo'
  ,'Homonimias', 'Unificacion de Cuentas', 'Trasposo de supcuenta', 'Portabilidad infonavit', 'Avisos de suspension infonavit'
  ,'Avisos de suspención y retención'
  ,'Cofinavit anualidad'];
  public tipoDeGrafico:string = 'bar';
  public mostrarLeyendasDeGrafico:boolean = false;
 
  public datosGrafico:any[] = [
    {data: [12,10,20, 200,210, 220,230, 250, 400, 600, 800, 1000, 1200, 1400, 1600, 1800],
      label: 'Series A'}
  ];
 
  public onClickGrafico(e:any):void {
    console.log(e);
  }
 
  public darValoresAleatorios():void {
    // Cambiando 3 valores
    let data = [
      10,
      Math.round(Math.random() * 100),
      2,
      Math.round(Math.random() * 1000),
      200,
      (Math.random() * 1000),
      56,
      (Math.random() * 1000),
      56,
      (Math.random() * 1000),
      56,
      (Math.random() * 1000),
      56,
      (Math.random() * 1000),
      56,
      (Math.random() * 1000),
      50,
      (Math.random() * 1000),
      51,
      (Math.random() * 1000),
      52,
      (Math.random() * 1000),
      56,
      (Math.random() * 1000),
      57,
      (Math.random() * 1000),
      58,
      (Math.random() * 1000),
      59,
      (Math.random() * 1000),
      1800];
      //Para que angular reconozca el cambio, se clona y se le asigna de nuevo
    let clone = JSON.parse(JSON.stringify(this.datosGrafico));
    clone[0].data = data;
    this.datosGrafico = clone;
  }
  ngOnInit() {
  }

}
