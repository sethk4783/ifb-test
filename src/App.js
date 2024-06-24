import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import DatePicker from "./pages/DatePicker";
import ViewDatePicker from "./pages/ViewDatePicker";

import rootReducer from "./reducer";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/set-date">Set Date</Link>
              </li>
              <li>
                <Link to="/view-date">View Date</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/set-date" element={<DatePicker />}></Route>
            <Route path="/view-date" element={<ViewDatePicker />}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
