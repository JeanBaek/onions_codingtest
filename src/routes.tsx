import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, COLORS } from "./styles";
import InputPageContainer from "./container/InputPageContainer";

class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={COLORS}>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route exact path="/" component={InputPageContainer} />
            </Switch>
          </Router>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
export default Routes;
