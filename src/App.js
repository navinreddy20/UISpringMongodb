import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed, Dashboard, Create } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employer" >
          <Route path="/employer/dashboard" element={<Dashboard />}/>
          <Route path="/employer/create" element={<Create />}/>
          </Route>
          <Route path="/employee/feed" element={<Feed />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
