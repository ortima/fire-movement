import { CalculatorT, Categories, EntryT } from "@/app/types/calculator";
import { calculateRemainings } from "@/utils/calculate-remainings";

const mockEntries: EntryT[] = [
  {
    id: "1",
    value: 1500,
    type: Categories.income,
    name: "Salary",
  },
  {
    id: "2",
    value: 200,
    type: Categories.fixedExpenses,
    name: "Rent",
  },
  {
    id: "3",
    value: 50,
    type: Categories.inflatingExpenses,
    name: "Groceries",
  },
  {
    id: "4",
    value: 100,
    type: Categories.savings,
    name: "Emergency Fund",
  },
  {
    id: "5",
    value: 300,
    type: Categories.investments,
    name: "Stocks",
  },
];

// Initialize with default values for all fields
const initialState: CalculatorT = {
  income: mockEntries.filter((entry) => entry.type === Categories.income),
  fixedExpenses: mockEntries.filter(
    (entry) => entry.type === Categories.fixedExpenses,
  ),
  inflatingExpenses: mockEntries.filter(
    (entry) => entry.type === Categories.inflatingExpenses,
  ),
  savings: mockEntries.filter((entry) => entry.type === Categories.savings),
  investments: mockEntries.filter(
    (entry) => entry.type === Categories.investments,
  ),
  remaining: {
    id: "remaining",
    name: "Remaining Funds",
    value: 0, // Placeholder value
    type: "remaining",
  },
};

// Calculate the remaining value
const remainingValue = calculateRemainings(initialState);

// Update the remaining field
initialState.remaining.value = remainingValue;

export default initialState;
