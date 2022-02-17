// import logo from './logo.svg';
import './App.css';
import './style/main.css'
import { Dashboard } from './pages/Dashboard';
import {Route,Switch} from 'react-router-dom'
import { Meters } from './components/Meters';
import { RegisterMeter } from './components/AddMeter';
import { CheckBalance } from './components/CheckBalance';
import { AddBalance } from './components/AddBalance';
import { History } from './components/History';



function App() {
  return (
    <div className="App">

     <Dashboard>
       <Switch>
         <Route exact path="/view/meters">
        <Meters/>
       </Route>
       <Route exact path="/">
       <History/>
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
        <History/>
       </Route>
        </Switch>
       </Dashboard>
    </div>
  );
}

export default App;
