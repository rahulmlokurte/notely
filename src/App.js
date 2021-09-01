import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFE194",
      },
      secondary: purple,
    },
    typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightBold: 700,
      fontWeightMedium: 600,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
