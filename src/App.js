import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./Read";
import Create from "./Create";
import Update from "./Update";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/update/:id" element={<Update/>}/>
          <Route path="/read/:id" element={<Read/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
