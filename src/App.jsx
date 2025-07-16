import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GetEmployees from "./components/GetEmployees";
// import AddEmployee from "./components/AddEmployee";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<GetEmployees />} />
      {/* <Route path="/add" element={<AddEmployee />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  </Router>
);

export default App;
