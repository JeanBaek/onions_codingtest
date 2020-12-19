import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Routes from "./routes.tsx";
import RootReducer from "./store/reducers/index";

const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
