import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Spinner from "./components/Spinner";
import RangeSlider from "./components/RangeSlider";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Create">
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path="/loading">
              <Spinner />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

            <Route path="/RangeSlider">
              <RangeSlider />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
