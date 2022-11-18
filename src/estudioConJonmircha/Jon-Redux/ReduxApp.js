import { Provider } from "react-redux";
import store from "./store/store";
import TeoriaRedux from "./components/TeoriaRedux";
import TodoApp from "./components/todoApp/TodoApp";
import Counter from "./components/counter/Counter";

function ReduxApp() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Redux</h1>
        <hr />
        <TodoApp />
        <hr />
        <Counter />
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default ReduxApp;
