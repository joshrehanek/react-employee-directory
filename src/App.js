import React from "react";
import "./styles.css";

import Container from "./components/Container";
import Input from "./components/Input";
import EmployeeDetails from "./components/EmployeeDetails";
import Row from "./components/Row";
import Card from "./components/Card";


const App = () => {
  document.title = "Employee DIrectory";
  return (
      <div>
        <Container />
        <Input />
        
        <Row />
      </div>
  );
};

export default App;
