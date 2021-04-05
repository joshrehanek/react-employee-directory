import React, {useState} from "react";
import "./styles.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./components/Container";



export default function App() {
  const [search, setSearch] = useState("");
  document.title = "Employee Directory";
  return (
      <div>
        <Header />
        <br/>
        <Container search={search} setSearch={setSearch}/>
        <br/>
        <Footer />
      </div>
  );
};