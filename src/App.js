import React from "react";
import "./styles.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./components/Container";
// import SearchBox from "./components/SearchBox";
// import EmployeeDetails from "./components/EmployeeDetails";



const App = () => {
  document.title = "Employee Directory";
  return (
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
  );
};

export default App;
