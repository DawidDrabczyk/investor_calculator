import { LOCALE_ID, NgModule } from '@angular/core';
import {
  CommonModule,
  CurrencyPipe,
  registerLocaleData,
} from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { CalculatorComponent } from './calculator/calculator.component';
import { MatInputModule } from '@angular/material/input';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { CalculateResultsComponent } from './calculate-results/calculate-results.component';
import { MatTableModule } from '@angular/material/table';
import { DisabledButtonPipe } from './pipes/disabled-button.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { CalculateDataComponent } from './calculate-results/calculate-data/calculate-data.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import localePl from '@angular/common/locales/pl';
registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalculatorComponent,
    CalculateResultsComponent,
    DisabledButtonPipe,
    CalculateDataComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    CurrencyPipe,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'pl-PL' },
  ],
})
export class AppModule {}
