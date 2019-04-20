import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
//import ViewBooks from "./pages/ViewBooks";
import NoMatch from "./pages/NoMatch";
import savedBooks from "./pages/savedBooks";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";
import ZipResult from "./components/ZipResult";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route exact path="/about" component={SearchForm} />
          <Route exact path="/searchZip" component={FirstPage} />
          
          
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
