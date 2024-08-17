import { CalculatorT } from "@/app/types/calculator";

export const calculateRemainings = (calculator: CalculatorT): number => {
  const { income, fixedExpenses, inflatingExpenses, investments, savings } =
    calculator;

  const totalIncome = income.reduce((acc, entry) => acc + entry.value, 0);
  const totalFixedExpenses = fixedExpenses.reduce(
    (acc, entry) => acc + entry.value,
    0,
  );
  const totalInflatingExpenses = inflatingExpenses.reduce(
    (acc, entry) => acc + entry.value,
    0,
  );
  const totalInvestments = investments.reduce(
    (acc, entry) => acc + entry.value,
    0,
  );
  const totalSavings = savings.reduce((acc, entry) => acc + entry.value, 0);

  const remaining =
    totalIncome -
    totalFixedExpenses -
    totalInflatingExpenses -
    totalInvestments -
    totalSavings;

  console.log(`Remaining amount: ${remaining}`);

  return remaining;
};
