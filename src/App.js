import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogInForm />} />
      <Route path="/signup" element={<SignUpForm />} />

{/*       <div className="App">
        <SignUpForm />
        <LogInForm />
      </div> */}
    </Routes>
  );
}

export default App;
