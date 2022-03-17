import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Products from "./Components/Products";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const routes = [
    { path: "/home", element: <div>home</div>, AuthRequired: false },
    { path: "/about", element: "About", AuthRequired: false },
    { path: "/product", element: "Product", AuthRequired: true },
  ];
  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {/* <Route path="/home" element={<div>home</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} /> */}
      </Routes>
    </div>
  );
}

export default App;
