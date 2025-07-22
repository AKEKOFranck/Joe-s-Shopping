import { Outlet } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div className="app">
     <Header/>
      <main>
        <Outlet  />  {/* Emplacement des pages */}
      </main>
     <Footer/>
    </div>
  );
}