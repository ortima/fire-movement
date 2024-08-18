export type EntryT = {
  id: string;
  value: number;
  type: string;
  name: string;
};

export enum Categories {
  income = "income",
  fixedExpenses = "fixedExpenses",
  inflatingExpenses = "inflatingExpenses",
  savings = "savings",
  investments = "investments",
  remaining = "remaining",
}

export type CategoryT = keyof typeof Categories;

export type CalculatorT = {
  income: EntryT[];
  fixedExpenses: EntryT[];
  inflatingExpenses: EntryT[];
  savings: EntryT[];
  investments: EntryT[];
  remaining: EntryT;
};
