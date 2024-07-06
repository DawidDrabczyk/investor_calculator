import { Injectable } from '@angular/core';
import { Calculate } from '../models/calculate.model';
import { InvestmentsData } from '../models/investments-data.model';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}

  public calculateInvestmentResults(calculate: Calculate): InvestmentsData[] {
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
