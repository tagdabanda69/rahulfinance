import React, { useState } from 'react';
import Modal from '../ui/Modal';
import { calculateTax } from '../../utils/calculators';

interface TaxCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const TaxCalculator: React.FC<TaxCalculatorProps> = ({ isOpen, onClose }) => {
  const [annualIncome, setAnnualIncome] = useState<number>(500000);
  const [deductions, setDeductions] = useState<number>(150000);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const taxAmount = calculateTax(annualIncome, deductions);
    setResult(taxAmount);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Tax Calculator">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Annual Income (₹)
          </label>
          <input
            type="number"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(Number(e.target.value))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Deductions (₹)
          </label>
          <input
            type="number"
            value={deductions}
            onChange={(e) => setDeductions(Number(e.target.value))}
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
            <p className="text-sm text-gray-600">Estimated Tax Liability:</p>
            <p className="text-2xl font-bold text-blue-600">
              ₹{result.toLocaleString('en-IN')}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              *This is an approximate calculation based on current tax slabs
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default TaxCalculator;