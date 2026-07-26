import Navbar from "../components/Navbar"
import FeaturesCard from "../components/FeaturesCard"
import Footer from "../components/Footer"
export default function Features(){
    return(
        <>
        <Navbar/>
        <div className="mt-15 mb-15">
            <FeaturesCard/>
        </div>
        <Footer/>
        </>
    )
}