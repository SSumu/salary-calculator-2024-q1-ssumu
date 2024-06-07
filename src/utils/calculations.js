const EPF_RATE_EMPLOYEE = 0.08;
const EPF_RATE_EMPLOYER = 0.12;
const ETF_RATE_EMPLOYER = 0.03;
const TAX_RATE = 0.18;
const TAX_CONSTANT = 25500;

const calculateEpfEtfAllowedEarnings = (earnings) => {
  return earnings.reduce((acc, earning) => {
    if (earning.epfEtfAllowed) {
      return acc + earning.amount;
    }
    return acc;
  }, 0);
};

export const calculateNetSalary = (basicSalary, earnings, deductions) => {
  const totalEarnings =
    basicSalary + earnings.reduce((acc, earning) => acc + earning.amount, 0);
  const totalDeductions = deductions.reduce(
    (acc, deduction) => acc + deduction.amount,
    0
  );
  const totalEarningsForEpfEtf =
    basicSalary + calculateEpfEtfAllowedEarnings(earnings);

  const grossEarnings = totalEarnings - totalDeductions;
  const grossEarningsForEpfEtf = totalEarningsForEpfEtf - totalDeductions;

  const employeeEpf = grossEarningsForEpfEtf * EPF_RATE_EMPLOYEE;
  const apit = grossEarnings * TAX_RATE - TAX_CONSTANT;

  const netSalary = grossEarnings - employeeEpf - apit;
  return netSalary;
};

export const calculateCTC = (basicSalary, earnings, deductions) => {
  const totalEarnings =
    basicSalary + earnings.reduce((acc, earning) => acc + earning.amount, 0);
  const totalDeductions = deductions.reduce(
    (acc, deduction) => acc + deduction.amount,
    0
  );
  const totalEarningsForEpfEtf =
    basicSalary + calculateEpfEtfAllowedEarnings(earnings);

  const grossEarnings = totalEarnings - totalDeductions;
  const grossEarningsForEpfEtf = totalEarningsForEpfEtf - totalDeductions;

  const employerEpf = grossEarningsForEpfEtf * EPF_RATE_EMPLOYER;
  const employerEtf = grossEarningsForEpfEtf * ETF_RATE_EMPLOYER;

  const ctc = grossEarnings + employerEpf + employerEtf;

  return ctc;
};
