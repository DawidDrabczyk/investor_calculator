import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { InvestmentsData } from '../models/investments-data.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Calculate } from '../models/calculate.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-calculate-results',
  templateUrl: './calculate-results.component.html',
  styleUrl: './calculate-results.component.css',
})
export class CalculateResultsComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = [
    'year',
    'totalAmountInvested',
    'interest',
    'totalInterest',
    'different',
    'valueEndOfYear',
  ];
  public dataSource: MatTableDataSource<InvestmentsData>;
  public assumptions?: Calculate;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<CalculateResultsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dataSource = new MatTableDataSource<InvestmentsData>([]);
  }

  ngOnInit(): void {
    this.dataSource.data = this.data.investmentsData;
    this.assumptions = this.data.assumptions;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public closeDialog(): void {
    this.dialogRef.close(this.dataSource.data);
  }
}