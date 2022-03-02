import React from "react";
import {useState} from "react";

import UserContext from '../context/UserContext';

import Header from "../components/Header";
import ItemList from "../containers/ItemList";
import Basket from "../components/Basket";

const MainPage = () => {

    const [user, setUser] = useState(
        {
            name: "Chris",
            basket: [
                {   name: "mushroom",
                    cost: 5}
            ]
        }
    )
    const [items, setItem] = useState(

        [
            {name: "mushroom",
            cost: 5},
            {name: "star",
            cost: 10},
            {name: "coins",
            cost: 15}
        ]

    )

    
    return(
        <>
        <UserContext.Provider value={{ user }}>
            <Header />
            <h1>MainPage</h1>
            <ItemList items={items}/>
            <Basket />
        </UserContext.Provider>
        </>

    )


}

export default MainPage;