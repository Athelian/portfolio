import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticleEarth from "Routes/Articles/ArticleEarth";
import Portfolio from "Routes/Portfolio";
import "semantic-ui-css/semantic.min.css";
import "./App.sass";
import "./Effects.css";

function App() {
  return (
    <div className="Portfolio">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio/>}/>
          <Route path="3d-earth" element={<ArticleEarth/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
