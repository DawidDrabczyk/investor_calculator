import { Component, output, signal } from '@angular/core';
import { Calculate } from '../models/calculate.model';
import { InvestmentsData } from '../models/investments-data.model';

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

  public onCalculate(): void {
    const calculate: Calculate = this.prepareDataToCalculate();
    const investmentsData: InvestmentsData[] =
      this.calculateInvestmentResults(calculate);

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

  private calculateInvestmentResults(calculate: Calculate): InvestmentsData[] {
    const investmentsData: InvestmentsData[] = [];
    let investmentValue = calculate.initialValue;

    for (let i = 0; i < calculate.durationInvestment; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (calculate.expectedValue / 100);
      investmentValue += interestEarnedInYear + calculate.annualValue;

      const totalInterest =
        investmentValue - calculate.annualValue * year - calculate.initialValue;
      investmentsData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: calculate.annualValue,
        totalInterest: totalInterest,
        totalAmountInvested:
          calculate.initialValue + calculate.annualValue * year,
      });
    }

    return investmentsData;
  }
}
