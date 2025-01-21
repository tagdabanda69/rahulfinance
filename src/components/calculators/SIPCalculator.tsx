import React, { useState } from 'react';
import Modal from '../ui/Modal';
import { calculateSIP } from '../../utils/calculators';

interface SIPCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const SIPCalculator: React.FC<SIPCalculatorProps> = ({ isOpen, onClose }) => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
  const [years, setYears] = useState<number>(10);
  const [rateOfReturn, setRateOfReturn] = useState<number>(12);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const futureValue = calculateSIP(monthlyInvestment, years, rateOfReturn);
    setResult(futureValue);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="SIP Calculator">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monthly Investment Amount (₹)
          </label>
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Investment Duration (Years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
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
            <p className="text-sm text-gray-600">Estimated Future Value:</p>
            <p className="text-2xl font-bold text-blue-600">
              ₹{result.toLocaleString('en-IN')}
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default SIPCalculator;