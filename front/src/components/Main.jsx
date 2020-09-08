import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CheckoutContainer from "../containers/CheckoutContainer";

export default () => {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/checkout" component={CheckoutContainer} />
          <Redirect to="/checkout"></Redirect>
        </Switch>
      </div>
    </div>
  );
};
