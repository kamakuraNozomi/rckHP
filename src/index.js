import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./routes/Header";
import LoadingComponent from "./components/LoadingComponent";
import AuthenticatedComponent from "./components/AuthenticatedComponent";
import NoteDetail from "./components/NoteDetail";
import Note from "./components/Note";
import News from "./components/News";
import Movie from "./components/Movie";
import Footer from "./components/Footer";

import "./styles/index.css";
// create redux store -> reducers -> 'actions - actionType' | applyMiddleware()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// provide the store to react

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LoadingComponent>
        <div>
          <Switch>
            <Route path="/login" component={Login} exact={true} />
            <AuthenticatedComponent>
              <Header />
              <Route path="/note/:id" component={NoteDetail} />
              <Route path="/" component={App} exact={true} />
              <Route path="/news" component={News} />
              <Route path="/note" component={Note} />
              <Route path="/movie" component={Movie} />
            </AuthenticatedComponent>
          </Switch>
          <Footer />
        </div>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
