import LandingPage from "./components/Landingpage/page";
import Navbar from "./components/Navbar/page";
import Delivery from "./components/Delivery/page";
import Offers from "./components/Offers/page";
import Option from "./components/Option/page";
import Footer from "./components/Footer/page";
import RegularMenu from "./components/RegularyMenu/page";
export default function Home() {
    return(
        <div>
        <Navbar/>
        <br/>
        <br/>
        <LandingPage/>
        <br/>
        <br/>
        <Delivery/>
        <br/>
        <br/>
        <Option/>
        <br/>
        <br/>
        <RegularMenu/>
        <br/>
        <br/>
        <Offers/>
        <br/>
        <br/>
        <Footer/>                                                                                                                                                                                                                                           
        </div>
       
    )
}
