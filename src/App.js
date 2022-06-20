import "./App.css";
import React from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  return (
    <div className="App">
      <Header />
      {contacts.map((data, index) => (
        <Contact key={index} data={data} />
      ))}
    </div>
  );
};

export default App;
