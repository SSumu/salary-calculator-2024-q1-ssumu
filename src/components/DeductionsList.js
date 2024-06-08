import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeDeduction, calculateSalaries } from "../store/salarySlice";

const DeductionsList = () => {
  const dispatch = useDispatch();
  const deductions = useSelector((state) => state.salary.deductions);

  const handleRemoveDeduction = (index) => {
    dispatch(removeDeduction(index));
    dispatch(calculateSalaries());
  };

  return (
    <div>
      <h3>Deductions</h3>
      {deductions.map((deduction, index) => (
        <div key={index}>
          {deduction.title}:{deduction.amount}
          <button onClick={() => handleRemoveDeduction(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default DeductionsList;
