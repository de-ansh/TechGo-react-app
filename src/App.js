import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/header.scss";
import Footer from "./components/Footer";
import "./styles/footer.scss";
import Contact from "./components/Contact";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Contact" element={<Contact/>}/>
      </Routes>
     <Footer/>
    </Router>
  )
}

export default App
