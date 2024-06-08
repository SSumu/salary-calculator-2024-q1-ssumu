import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setBasicSalary,
  addEarning,
  addDeduction,
  removeEarning,
  removeDeduction,
  calculateSalaries,
} from "../store/salarySlice";

const SalaryForm = () => {
  const dispatch = useDispatch();
  const { basicSalary, earnings, deductions, netSalary, ctc } = useSelector(
    (state) => state.salary
  );

  const [newEarning, setNewEarning] = useState({
    title: "",
    amount: 0,
    epfEtfAllowed: false,
  });
  const [newDeduction, setNewDeduction] = useState({ title: "", amount: 0 });

  const handleBasicSalaryChange = (e) => {
    dispatch(setBasicSalary(Number(e.target.value)));
    dispatch(calculateSalaries());
  };

  const handleNewEarningChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewEarning((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddEarning = () => {
    dispatch(addEarning({ ...newEarning, amount: Number(newEarning.amount) }));
    setNewEarning({ title: "", amount: 0, epfEtfAllowed: false });
    dispatch(calculateSalaries());
  };

  const handleNewDeductionChange = (e) => {
    const { name, value } = e.target;
    setNewDeduction((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddDeduction = () => {
    dispatch(
      addDeduction({ ...newDeduction, amount: Number(newDeduction.amount) })
    );
    setNewDeduction({ title: "", amount: 0 });
    dispatch(calculateSalaries());
  };

  const handleRemoveEarning = (index) => {
    dispatch(removeEarning(index));
    dispatch(calculateSalaries());
  };

  const handleRemoveDeduction = (index) => {
    dispatch(removeDeduction(index));
    dispatch(calculateSalaries());
  };

  return (
    <div>
      <h2>Basic Salary</h2>
      <label>
        <input
          type="number"
          value={basicSalary}
          onChange={handleBasicSalaryChange}
        />
      </label>

      <div>
        <h3>Earnings</h3>
        <p>Allowance, Fixed Allowance, Bonus and etc.</p>
        <input
          type="text"
          name="title"
          placeholder="Earning Title"
          value={newEarning.title}
          onChange={handleNewEarningChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newEarning.amount}
          onChange={handleNewEarningChange}
        />
        <label>
          <input
            type="checkbox"
            name="epfEtfAllowed"
            checked={newEarning.epfEtfAllowed}
            onChange={handleNewEarningChange}
          />
          EPF/ETF
        </label>
        <button onClick={handleAddEarning}>Add Earning</button>

        {earnings.map((earning, index) => (
          <div key={index}>
            {earning.title}:{earning.amount}
            {earning.epfEtfAllowed && "(EPF/ETF)"}
            <button onClick={() => handleRemoveEarning(index)}>Remove</button>
          </div>
        ))}
      </div>

      <div>
        <h3>Deductions</h3>
        <p>Salary Advances, Loan Deductions and all</p>
        <input
          type="text"
          name="title"
          placeholder="Deduction Title"
          value={newDeduction.title}
          onChange={handleNewDeductionChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newDeduction.amount}
          onChange={handleNewDeductionChange}
        />
        <button onClick={handleAddDeduction}>Add Deduction</button>

        {deductions.map((deduction, index) => (
          <div key={index}>
            {deduction.title}: {deduction.amount}
            <button onClick={() => handleRemoveDeduction(index)}>Remove</button>
          </div>
        ))}
      </div>

      <div>
        <h3>Your Summary</h3>
        <div>Net Salary (Take Home) {netSalary}</div>
        <div>Cost To Company: {ctc}</div>
      </div>
    </div>
  );
};

export default SalaryForm;
