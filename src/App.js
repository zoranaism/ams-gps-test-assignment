import React from 'react';
import "./style/global.scss";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import DutyScheduleInfo from './pages/DutyScheduleInfo';
import AddPatient from './pages/AddPatient';
import PatientsInfo from './pages/PatientsInfo';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar-light bg-light">
          <div className="nav row justify-content-md-center">
            <li>
              <NavLink exact={true} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/duty">Doctor Schedule</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Patient SignUp</NavLink>
            </li>
            <li>
              <NavLink to="/patients">Patient Database</NavLink>
            </li>
          </div>
        </nav>
      </header>
      <main className="container mt-5">
          <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/duty" component={DutyScheduleInfo} />
            <Route path="/signup" component={AddPatient} />
            <Route path="/patients" component={PatientsInfo} />
          </Switch>   
      </main>

    </div>
  );
}

export default App;
