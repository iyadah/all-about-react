import "./App.css";
import Comments from "./components/Comments";
import { Provider } from "react-redux";
import store from "./store";
import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react";

function App() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  return (
    <Provider store={store}>
      <div>
        Comments App
        <Comments />
        <hr />
        <Webcam ref={webcamRef} />
        <hr />
        <button onClick={capture}>Capture photo</button>
        <hr />
        {imgSrc && <img src={imgSrc} />}
      </div>
    </Provider>
  );
}

export default App;
