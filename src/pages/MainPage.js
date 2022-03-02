import React from "react";
import {useState} from "react";
import Header from "../components/Header";
import ItemList from "../containers/ItemList";
import Basket from "../components/Basket";

const MainPage = () => {
    
    return(
        <>
        <Header />
        <h1>MainPage</h1>
        <ItemList />
        <Basket />

        </>

    )


}

export default MainPage;