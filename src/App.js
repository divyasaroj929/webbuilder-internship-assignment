import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Categories from "./component/navber/pages/Categories";
import TodayDeals from "./component/navber/pages/TodayDeals";
import WebsiteBuilders from "./component/navber/pages/WebsiteBuilders";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/webbuilder-internship-assignment"
          element={<Home />}
        />
        <Route path="/categories" element={<Categories />} />
        <Route path="/TodayDeal" element={<TodayDeals />} />
        <Route path="/websiteBuilder" element={<WebsiteBuilders />} />
      </Routes>
    </div>
  );
}

export default App;
