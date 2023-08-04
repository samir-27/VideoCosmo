import { Button } from "@chakra-ui/react";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Videos from "./components/Videos";
import Footer from "./components/Footer";
function App() {
     return(
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/video" element={<Videos />}/>
        </Routes>
        <Footer />
      </Router>
     )
}

export default App;
