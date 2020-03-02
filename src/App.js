import React from 'react';
import "./style/global.scss";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from './pages/HomePage';
import DutyScheduleInfo from './pages/DutyScheduleInfo';
import AddPatient from './pages/AddPatient';
import PatientsInfo from './pages/PatientsInfo';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-light bg-light">
          <NavLink exact={true} to="/">Home</NavLink>
          <NavLink to="/duty">Doctor Schedule</NavLink>
          <NavLink to="/signup">Patient SignUp</NavLink>
          <NavLink to="/patients">Patient Database</NavLink>
        </nav>
      </header>
      <main className="container mt-5">
          <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/duty" component={DutyScheduleInfo} />
            <Route path="/signup" component={AddPatient} />
            <Route path="/patients" component={PatientsInfo} />
          </Switch>   
        <div className="row">
      
         
        </div>
      </main>

    </div>
  );
}

export default App;
