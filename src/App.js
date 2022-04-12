// React Imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Material-UI Imports
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import theme from "./MaterialUI/theme";
// Import custom Components
import Article from "./Pages/Article/Article";
import Error from "./Pages/Error/Error";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container maxWidth="lg">
          <Switch>
            <Route path="/article/:tenant/:article" component={Article} />
            <Route path="/error" component={Error} />
            {/* @DevScript Adding Article as default since this is not a complete page*/}
            <Route path="*" component={Article} />
            {/* @DevScript */}
          </Switch>
        </Container>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
