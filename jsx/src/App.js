import "./App.css";
import Comments from "./components/Comments";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        Comments App
        <Comments />
      </div>
    </Provider>
  );
}

export default App;
