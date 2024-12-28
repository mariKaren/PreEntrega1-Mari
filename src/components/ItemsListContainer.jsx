

function ItemsListContainer({greeting}){
    const containerStyle = {
        backgroundColor: '#f0f0f0',
        marginTop:'20px',
        padding: '20px 0px',             
        borderRadius: '8px',      
        textAlign: 'center'           
    };

    return(
        <section className="max-content">
            <h1 style={containerStyle}>{greeting}</h1>
        </section>
    )
}

export default ItemsListContainer;