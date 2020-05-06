import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import List from '../src/components/List/List';
import Home from '../src/components/Home/Home';
import CustomerDetail from './components/CustomerDetail/CustomerDetail';
import './index.css';


const App = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" component={Home}/> */}
        <Route path="/customers" component={List} exact/>
        <Route path="/customers/:id" component={CustomerDetail} exact/>
      </Switch>
    </BrowserRouter>
  )

}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
