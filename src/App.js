import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import SalaryForm from "./components/SalaryForm";
import SalarySummary from "./components/SalarySummary";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <div>
        <h1>Salary Calculator</h1>
        <SalaryForm />
        <SalarySummary />
      </div>
    </Provider>
  );
};

export default App;
