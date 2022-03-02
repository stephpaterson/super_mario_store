const Item = ({item}) => {

    const handleClick = () => {

        console.log(item.name)

    }




    
    return (
        <>
        <button onClick={handleClick}>Add me!</button>

        </>
    )
}

export default Item