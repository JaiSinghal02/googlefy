import React from "react";
import './HomePage.css'

import Header from "../../Components/Header/Header";
import Logo from "../../Components/Logo/Logo";
import SearchBar from "../../Components/SearchBar/SearchBar";
import LanguageBar from "../../Components/LanguageBar/LanguageBar";
import Footer from "../../Components/Footer/Footer";

export default function HomePage(){
    return(
        <div className="homepage-container">
            <Header/>
            <Logo/>
            <SearchBar/>
            <LanguageBar languages={["हिन्दी","বাংলা","తెలుగు","मराठी","தமிழ்","ગુજરાતી","ಕನ್ನಡ","മലയാളം","ਪੰਜਾਬੀ"]}/>
            <Footer country="India" tags={[["About","Advertising","Business","How Search works"],["Privacy","Terms","Settings"]]}/>
        </div>
    )
}
