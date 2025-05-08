import { useRoutes } from "react-router-dom";
import routes from "./router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function App() {
  return (
    <>
      <Header />
      <div>{useRoutes(routes)}</div>
      <Footer />
    </>
  );
}

export default App;
