import { Component, inject, output, signal } from '@angular/core';
import { Calculate } from '../models/calculate.model';
import { InvestmentsData } from '../models/investments-data.model';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  public initialValue = signal('0');
  public annualValue = signal('0');
  public expectedValue = signal('5');
  public durationInvestment = signal('10');
  public calculate = output<InvestmentsData[]>();
  public assumptions = output<Calculate>();
  public isCalculated: boolean = false;
  public calculatorService = inject(CalculatorService);

  public onCalculate(): void {
    const calculate: Calculate = this.prepareDataToCalculate();
    const investmentsData: InvestmentsData[] =
      this.calculatorService.calculateInvestmentResults(calculate);

    if (investmentsData) {
      this.assumptions.emit(calculate);
      this.calculate.emit(investmentsData);
      this.isCalculated = true;
    }
  }

  private prepareDataToCalculate(): Calculate {
    const calculate: Calculate = {
      initialValue: +this.initialValue(),
      annualValue: +this.annualValue(),
      expectedValue: +this.expectedValue(),
      durationInvestment: +this.durationInvestment(),
    };

    return calculate;
  }
}
