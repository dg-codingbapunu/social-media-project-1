import React from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <Header></Header>

      <Footer></Footer>
    </>
  );
};

export default App;
