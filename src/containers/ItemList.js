import Item from "../components/Item"

const ItemList = ({items}) => {

    const itemNodes = items.map((item, index) => {
        return ( 
            <Item item={item} key={index}> </Item>
        )
    
    })

    return(
        <>
        <h1>ItemList</h1>
        <ul>
            {itemNodes}
        </ul>
        </>
    )
}

export default ItemList;