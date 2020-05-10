import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import List from '../src/components/List/List';
import CustomerDetail from './components/CustomerDetail/CustomerDetail';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './index.css';

const App = () => {
  
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/customers" component={List} exact/>
            <Route path="/customers/:id" component={CustomerDetail} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  )

}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
