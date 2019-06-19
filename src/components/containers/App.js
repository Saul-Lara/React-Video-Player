import React from 'react';
import WbnPlayer from './WbnPlayer';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
//import logo from './logo.svg'; <img src={logo} className="App-logo" alt="logo" />

const App = () => (
  <BrowserRouter>
  <>
    <Switch>
      <Route exact path="/" component={WbnPlayer}/>
      <Route exact path="/:activeVideo" component={WbnPlayer}/>
    </Switch>
    <GlobalStyle/>
  </>
  </BrowserRouter>
)

export default App;
