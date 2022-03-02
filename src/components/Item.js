const Item = ({item}) => {

    const handleClick = () => {

        console.log(item.name)

    }




    
    return (
        <>
        <button onClick={handleClick}>Addme</button>
        
        </>
    )
}

export default Item