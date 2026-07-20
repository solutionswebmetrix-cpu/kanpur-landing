import React, { memo, useState, useEffect } from 'react';
import { FaSolarPanel, FaRupeeSign, FaDollarSign, FaMoneyBill, FaCalendar, FaBolt } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const SolarCalculator = memo(() => {
  const [monthlyBill, setMonthlyBill] = useState(4000);
  const [systemSize, setSystemSize] = useState('3 kW');
  const [estimatedCost, setEstimatedCost] = useState('₹1,80,000');
  const [subsidy, setSubsidy] = useState('₹78,000');
  const [monthlySavings, setMonthlySavings] = useState('₹3,000');
  const [annualSavings, setAnnualSavings] = useState('₹36,000');
  const [payback, setPayback] = useState('3.4 Years');

  useEffect(() => {
    const bill = parseFloat(monthlyBill) || 0;
    const size = Math.max(1, Math.ceil(bill / 1300));
    const cost = size * 60000;
    const subsidyAmount = size >= 3 ? 108000 : size * 30000;
    const savings = Math.round(bill * 0.75);
    const netCost = cost - subsidyAmount;
    const paybackYears = (netCost / (savings * 12)).toFixed(1);

    setSystemSize(`${size} kW`);
    setEstimatedCost(`₹${cost.toLocaleString('en-IN')}`);
    setSubsidy(`₹${subsidyAmount.toLocaleString('en-IN')}`);
    setMonthlySavings(`₹${savings.toLocaleString('en-IN')}`);
    setAnnualSavings(`₹${(savings * 12).toLocaleString('en-IN')}`);
    setPayback(`${paybackYears} Years`);
  }, [monthlyBill]);

  return (
    <section className="section calculator" id="calculator">
      <div className="container">
        <SectionHeader
          badge="Calculate Savings"
          title={<>Solar Savings <span className="accent">Calculator</span></>}
          subtitle="Estimate your monthly and annual savings with solar"
          className="reveal"
        />
        <div className="calculator-wrapper reveal">
          <div className="calc-form">
            <div className="field">
              <label htmlFor="monthlyBill">Monthly Electricity Bill (₹)</label>
              <input
                type="number"
                id="monthlyBill"
                placeholder="Enter your monthly bill"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="state">State/Region</label>
              <select id="state" defaultValue="uttar-pradesh">
                <option value="uttar-pradesh">Uttar Pradesh (Kanpur)</option>
                <option value="delhi">Delhi</option>
                <option value="haryana">Haryana</option>
                <option value="bihar">Bihar</option>
                <option value="rajasthan">Rajasthan</option>
              </select>
            </div>
          </div>
          <div className="calc-results">
            <div className="calc-card">
              <FaSolarPanel />
              <h4>System Size</h4>
              <p className="calc-value">{systemSize}</p>
            </div>
            <div className="calc-card">
              <FaRupeeSign />
              <h4>Estimated Cost</h4>
              <p className="calc-value">{estimatedCost}</p>
            </div>
            <div className="calc-card">
              <FaDollarSign />
              <h4>Government Subsidy</h4>
              <p className="calc-value">{subsidy}</p>
            </div>
            <div className="calc-card">
              <FaMoneyBill />
              <h4>Monthly Savings</h4>
              <p className="calc-value">{monthlySavings}</p>
            </div>
            <div className="calc-card">
              <FaCalendar />
              <h4>Annual Savings</h4>
              <p className="calc-value">{annualSavings}</p>
            </div>
            <div className="calc-card">
              <FaBolt />
              <h4>Payback Period</h4>
              <p className="calc-value">{payback}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SolarCalculator;
