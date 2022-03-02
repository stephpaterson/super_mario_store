import { useContext } from "react";
import UserContext from "../context/UserContext";


const Item = ({item}) => {

    const {user , setUser} = useContext(UserContext)

    const handleClick = () => {
        const newItem = item
        const temp = {...user}
        temp.basket.push(newItem)
        setUser(temp)

    }

    
    return (
        <>
        <li>
        {item.name}
        <button onClick={handleClick}>Add me!</button>
        </li>
        </>
    )
}

export default Item