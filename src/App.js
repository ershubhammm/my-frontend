import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Question from './components/question.js';
import Home from './components/Home.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home */}
        <Route path="/" element={<Home />} />

        {/* Route for Question Form */}
        <Route path="/questions" element={<Question />} />
      </Routes>
    </Router>
  );
}

export default App;
