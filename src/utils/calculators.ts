export const calculateSIP = (
  monthlyInvestment: number,
  years: number,
  rateOfReturn: number
): number => {
  const monthlyRate = rateOfReturn / 12 / 100;
  const months = years * 12;
  const futureValue =
    monthlyInvestment *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);
  return Math.round(futureValue);
};

export const calculateRetirement = (
  currentAge: number,
  retirementAge: number,
  currentSavings: number,
  monthlyContribution: number,
  rateOfReturn: number
): number => {
  const years = retirementAge - currentAge;
  const monthlyRate = rateOfReturn / 12 / 100;
  const months = years * 12;
  
  const futureValueOfCurrentSavings = currentSavings * Math.pow(1 + rateOfReturn / 100, years);
  const futureValueOfMonthlyContributions =
    monthlyContribution *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);
    
  return Math.round(futureValueOfCurrentSavings + futureValueOfMonthlyContributions);
};

export const calculateTax = (
  annualIncome: number,
  deductions: number
): number => {
  const taxableIncome = Math.max(0, annualIncome - deductions);
  let tax = 0;

  // Example Indian tax slabs for FY 2023-24
  if (taxableIncome <= 250000) {
    tax = 0;
  } else if (taxableIncome <= 500000) {
    tax = (taxableIncome - 250000) * 0.05;
  } else if (taxableIncome <= 750000) {
    tax = 12500 + (taxableIncome - 500000) * 0.1;
  } else if (taxableIncome <= 1000000) {
    tax = 37500 + (taxableIncome - 750000) * 0.15;
  } else if (taxableIncome <= 1250000) {
    tax = 75000 + (taxableIncome - 1000000) * 0.2;
  } else if (taxableIncome <= 1500000) {
    tax = 125000 + (taxableIncome - 1250000) * 0.25;
  } else {
    tax = 187500 + (taxableIncome - 1500000) * 0.3;
  }

  return Math.round(tax);
};