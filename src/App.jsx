import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import "./index.css";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <Header dark={dark} setDark={setDark} />

      <main>
        <Home />
      </main>

      <Footer />
    </div>
  );
}
