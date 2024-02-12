import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, INumberCellEditorParams, ITextCellEditorParams } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  standalone: true,
  imports: [AgGridAngular],
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  title = "CarList"
  newData: any;
  gridApi!: GridApi;
  themeClass =
    "ag-theme-material";
  paginationPageSize = 20;
  paginationPageSizeSelector: number[] | boolean = [20, 50];
  // Row Data: The data to be displayed.

  defaultColDef: ColDef = {
    filter: true, // Enable filtering on all columns
    // editable: true, // Enable editing on all columns
    sortable: true
  };


  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    {
      headerName: 'S.No',
      field: 'sno',
      cellEditor: 'agNumberCellEditor',
      cellEditorParams: {
        precision: 0,
      } as INumberCellEditorParams,
    },
    {
      headerName: 'Car Make',
      field: 'make',
      cellEditor: 'agTextCellEditor',
      cellEditorParams: {
        maxLength: 20,
      } as ITextCellEditorParams,
    },
    {
      headerName: 'Model',
      field: 'model',
      cellEditor: 'agTextCellEditor',
      cellEditorParams: {
        maxLength: 20,
      } as ITextCellEditorParams,
    },
    {
      headerName: 'Cost',
      field: 'price',
      cellStyle: params => {
        if (params.value > 20000) {
          return { backgroundColor: 'green' };
        }
        return { backgroundColor: 'orange' };
      },
      cellEditor: 'agNumberCellEditor',
      cellEditorParams: {
        precision: 0,
      } as INumberCellEditorParams,
    },
    {
      headerName: 'EV Availability',
      field: 'electric',
      cellEditor: 'agCheckboxCellEditor',
    },
  ];

  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'date', cellEditor: MatDatepicker },
    { field: 'age' },
  ];

  rowData = [
    {
      "sno" :1,
      "make": "Tesla1",
      "model": "Model Y",
      "price": 64950,
      "electric": true
    },
    {
      "sno" :2,
      "make": "Ford2",
      "model": "F-Series",
      "price": 13850,
      "electric": false
    },
    {
      "sno" :3,
      "make": "Toyota3",
      "model": "Corolla",
      "price": 19600,
      "electric": false
    },
    {
      "sno" :4,
      "make": "Tesla4",
      "model": "Model Y",
      "price": 64950,
      "electric": true
    },
    {
      "sno" :5,
      "make": "Ford5",
      "model": "F-Series",
      "price": 33850,
      "electric": false
    },
    {
      "sno" :6,
      "make": "Toyota6",
      "model": "Corolla",
      "price": 19600,
      "electric": false
    },
    {
      "sno" :8,
      "make": "Tesla7",
      "model": "Model Y",
      "price": 14950,
      "electric": true
    },
    {
      "sno" :9,
      "make": "Ford8",
      "model": "F-Series",
      "price": 33850,
      "electric": false
    },
    {
      "sno" :10,
      "make": "Toyota9",
      "model": "Corolla",
      "price": 29600,
      "electric": false
    },
    {
      "sno" :11,
      "make": "Tesla1",
      "model": "Model Y",
      "price": 14950,
      "electric": true
    },
    {
      "sno" :12,
      "make": "Ford3",
      "model": "F-Series",
      "price": 33850,
      "electric": false
    },
    {
      "sno" :13,
      "make": "Toyota5",
      "model": "Corolla",
      "price": 29600,
      "electric": false
    },
    {
      "sno" :14,
      "make": "Ford8",
      "model": "F-Series",
      "price": 13850,
      "electric": false
    },
    {
      "sno" :15,
      "make": "Toyota9",
      "model": "Corolla",
      "price": 9600,
      "electric": false
    },
    {
      "sno" :16,
      "make": "Tesla1",
      "model": "Model Y",
      "price": 64950,
      "electric": true
    },
  ];

  // addRow() {
  //  this.gridApi.applyTransaction()
  // }
}
