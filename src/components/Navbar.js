import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SprintsList from "./sprints/SprintsList";
import Landing from "./Landing";

const Navbar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <Router>
      <>
        <nav
          className="fixed shadow-md z-50 w-full px-5 py-2 flex justify-between navbar-expand-lg
        shadow-lg bg-white"
        >
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link to={`/`}>
                <span className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-gray">
                  <span className="ml-2">Formation Data Design</span>
                </span>
              </Link>

              <button
                className="text-gray cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <FaBars />
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link to={`/`}>
                    <span className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-gray hover:opacity-75">
                      <span className="ml-2">Home 1</span>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/sprints`}>
                    <span className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-gray hover:opacity-75">
                      <span className="ml-2">Sprints</span>
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={`/ingredients`}>
                    <span className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-gray hover:opacity-75">
                      <span className="ml-2">Ingredients</span>
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={`/cookbooks`}>
                    <span className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-gray hover:opacity-75">
                      <span className="ml-2">Cookbooks</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
      {/* <ScrollToTop /> */}
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/sprints">
          <SprintsList />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
