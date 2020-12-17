import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import New from './New';
import Destroy from './Destroy';
import Index from "./index";
import Edit from './Edit';
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/edit/:id" component={Edit}/>
      
      <Route exact path="/new" component={New}/>
      <Route exact path="/destroy/:id" component={Destroy}/>
      <Route exact path="/home" component={Index}/>
      <Redirect from="/" exact to="/home" />
    </Switch>
  );
}
 
export default Routes;