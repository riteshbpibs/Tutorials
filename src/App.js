import React from "react";
import Hook from "./customHook/Hook";
import Main from "./Lazy Loading/Main";
import Parent from "./Lifecycle Method/Parent";
import PostList from "./createSelector/PostList";
import { Route, Switch } from "react-router";
import Home from "./redux-thunk/pages/Home";
import AddUser from "./redux-thunk/pages/AddUser";
import EditUser from "./redux-thunk/pages/EditUser";
import Navbar from "./React-Sass/components/Navbar";
import MainPage from "./React-Sass/components/MainPage";

const App = () => {
  return (
    <div>
      {/* <Hook /> */}
      {/* <Parent /> */}
      {/* <Main /> */}
      <PostList />
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add_user" component={AddUser} />
        <Route exact path="/edit_user/:id" component={EditUser} />
      </Switch> */}

      {/* <Navbar />
      <MainPage /> */}
    </div>
  );
};

export default App;
