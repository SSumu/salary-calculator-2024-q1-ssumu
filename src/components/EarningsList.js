import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeEarning, calculateSalaries } from "../store/salarySlice";

const EarningsList = () => {
  const dispatch = useDispatch();
  const earnings = useSelector((state) => state.salary.earnings);

  const handleRemoveEarning = (index) => {
    dispatch(removeEarning(index));
    dispatch(calculateSalaries());
  };

  return (
    <div>
      <h3>Earnings</h3>
      {earnings.map((earning, index) => (
        <div key={index}>
          {earning.title}:{earning.amount}
          {earning.epfEtfAllowed && "(EPF/ETF)"}
          <button onClick={() => handleRemoveEarning(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default EarningsList;
