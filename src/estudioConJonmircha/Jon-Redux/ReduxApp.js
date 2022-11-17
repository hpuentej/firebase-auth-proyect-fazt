import { Provider } from "react-redux";
import store from "./store/store";
import TeoriaRedux from "./components/TeoriaRedux";
import TodoApp from "./components/todoApp/TodoApp";

function ReduxApp() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Redux</h1>        
        <hr />
        <TodoApp />
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default ReduxApp;
