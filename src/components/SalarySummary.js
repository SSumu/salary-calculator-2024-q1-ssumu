import React from "react";
import { useSelector } from "react-redux";

const SalarySummary = () => {
  const { basicSalary, netSalary, ctc } = useSelector((state) => state.salary);

  return (
    <div>
      <p>Basic Salary: {basicSalary} </p>
      <p>Net Salary:{netSalary}</p>
      <p>CTC: {ctc} </p>
    </div>
  );
};

export default SalarySummary;
