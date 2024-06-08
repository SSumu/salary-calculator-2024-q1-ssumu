import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import SalaryForm from "./components/SalaryForm";
import SalarySummary from "./components/SalarySummary";
import GlobalStyles from "./styles/GlobalStyles";
import Container from "./components/Container";
import EarningsList from "./components/EarningsList";
import DeductionsList from "./components/DeductionsList";

const App = () => {
  return (
    <Container>
      <Provider store={store}>
        <GlobalStyles />
        <div>
          <h1>Calculate Your Salary</h1>
          <SalaryForm />
          <SalarySummary />
          <EarningsList />
          <DeductionsList />
        </div>
      </Provider>
    </Container>
  );
};

export default App;
