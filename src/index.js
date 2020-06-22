import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import CustomerDetail from './components/CustomerDetail/CustomerDetail';
import Header from './components/Header/Header';
import './index.css';

const App = () => {
  
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
            <Route path="/" component={CustomerDetail} exact />
        </Switch>
      </div>
    </BrowserRouter>
  )

}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
