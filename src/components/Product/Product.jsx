import "./styles.css";

function Product ({name, price}) {
    return (
        <div className="product">
            <p>{name}</p>
            <p>${price}</p>
        </div>
    )
}

export default Product
