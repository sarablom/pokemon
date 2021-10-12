import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import Favourite from "./pages/Favourite";
import TopNav from "./components/TopNav";
import { FetchProvider } from "./context/Context";

function App() {
  return (
    <div className="App">
      <Router>
        {/* The value in the Context is passed down to all the children in wrapped
        in the Provider-tag */}
        <FetchProvider>
          <TopNav />

          <main>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/details/:id" component={Details} />
            <Route path="/favourite" component={Favourite} />
          </main>

          <footer className="footer">&copy; React 2021</footer>
        </FetchProvider>
      </Router>
    </div>
  );
}

export default App;
