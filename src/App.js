import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from "./components/main/home/home";
import Quiz from "./components/main/quiz/quiz";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/quiz" element={<Quiz/>} />
            </Routes>
        </BrowserRouter>
  </Provider>
  );
}

export default App;


