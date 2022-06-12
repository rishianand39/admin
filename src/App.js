import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import NotFound from "./pages/notfound/NotFound";
import {userInputs,productInputs} from "./formSource"
import "./theme/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContest";

function App() {
  const {darkMode}=useContext(DarkModeContext)
  return (
    <div className={darkMode? "app dark" : "app"}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} title="Add new Users"/>} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New inputs={productInputs} title="Add New Products"/>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
