
function CardWidget() {
    let productosCarrito=5;
    return (
        <div className="container-carrito">
            <button type="button" className="btn btn-carrito position-relative">
                <span className="material-icons">local_mall</span>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill cant-prodCarrito">
                    {productosCarrito}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </div>
    )
}

export default CardWidget;