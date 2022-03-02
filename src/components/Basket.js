import {useContext} from 'react';
import UserContext from "../context/UserContext";


const Basket = () => {

    const {user} = useContext(UserContext)

    const basketNodes = user.basket.map((item, index)=> {
        return <li key={index}>{item.name}</li>})

    return(
        <>
        <h3>Basket:</h3>
        <ul>
            {basketNodes}
        </ul>
            
        </>
    )
}

export default Basket
