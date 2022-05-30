import "./categories.styles.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./routes/header/header.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<></>} />
            <Route path="/sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
