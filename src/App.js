// import logo from './logo.svg';
import './App.css';
import './style/main.css'
import { Dashboard } from './pages/Dashboard';
import {Route,Switch} from 'react-router-dom'
import { Meters } from './components/Meters';
import { RegisterMeter } from './components/RegisterMeter';
import { CheckBalance } from './components/CheckBalance';
import { AddBalance } from './components/AddBalance';
import { Logs } from './components/Logs';



function App() {
  return (
    <div className="App">

     <Dashboard>
       <Switch>
         <Route exact path="/view/meters">
        <Meters/>
       </Route>
       <Route exact path="/">
       <Logs/>
       </Route>
       <Route exact path="/create/meter">
        <RegisterMeter/>
       </Route>
       <Route exact path="/balance/actions">
        <CheckBalance/>
       </Route>
       <Route exact path="/balance/add">
        <AddBalance/>
       </Route>
       <Route exact path="/balance/logs">
        <Logs/>
       </Route>
        </Switch>
       </Dashboard>
    </div>
  );
}

export default App;
