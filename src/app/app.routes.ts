import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./currency-converter/currency-converter.module').then(
        (m) => m.CurrencyConverterModule
      ),
  },
];
