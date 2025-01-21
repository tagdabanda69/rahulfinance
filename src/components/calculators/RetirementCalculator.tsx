import React, { useState } from 'react';
import Modal from '../ui/Modal';
import { calculateRetirement } from '../../utils/calculators';

interface RetirementCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const RetirementCalculator: React.FC<RetirementCalculatorProps> = ({ isOpen, onClose }) => {
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(60);
  const [currentSavings, setCurrentSavings] = useState<number>(100000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(10000);
  const [rateOfReturn, setRateOfReturn] = useState<number>(12);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const retirementCorpus = calculateRetirement(
      currentAge,
      retirementAge,
      currentSavings,
      monthlyContribution,
      rateOfReturn
    );
    setResult(retirementCorpus);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Retirement Planning Calculator">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Age
          </label>
          <input
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Retirement Age
          </label>
          <input
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(Number(e.target.value))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Savings (₹)
          </label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(Number(e.target.value))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monthly Contribution (₹)
          </label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expected Rate of Return (%)
          </label>
          <input
            type="number"
            value={rateOfReturn}
            onChange={(e) => setRateOfReturn(Number(e.target.value))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Calculate
        </button>

        {result !== null && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">Estimated Retirement Corpus:</p>
            <p className="text-2xl font-bold text-blue-600">
              ₹{result.toLocaleString('en-IN')}
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default RetirementCalculator;