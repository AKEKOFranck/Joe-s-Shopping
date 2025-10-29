import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import InstallBT from "../pages/InstallBT";

export default function Layout() {
 
  return (
    <div className="app">
     <Header/>
      <main>
        <Outlet  />  
      </main>
     <Footer/>
    </div>
  );
}