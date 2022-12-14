import './App.css';
import { Header } from "./components/Header"
import { Body } from "./components/Main"
import { Footer } from "./components/Footer"
import React from 'react';
function App() {
  const [light, setLight] = React.useState(false)
  function handleChange() {
    setLight((prev) => !prev)
  }
  return (
    <div className="App">
      <Header light={light} toggle={handleChange} />
      <Body light={light} />
      <Footer light={light} />
    </div>
  );
}
export default App;
// end App