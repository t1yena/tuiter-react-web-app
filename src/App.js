import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import Assignment6 from './labs/a6';
import Assignment7 from './labs/a7';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

// entry point of the React.js application
// react uses a library called JSX that allows mixing and matching of JS and XML
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index
                 element={<Labs/>}/>
          <Route path="/hello"
                 element={<HelloWorld/>}/>
          <Route path="/tuiter/*"
                 element={<Tuiter/>}/>
          <Route path="/a6"
                 element={<Assignment6/>}/>
          <Route path="/a7"
                 element={<Assignment7/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
