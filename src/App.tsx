import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./components/NotFound";
import Home from "./components/Home/Home";
const App = () => {
  return (
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
};

export default App
