import "./styles.css";
import Product from "../../components/Product/Product";

const products = [
{ id: 1, name: "Apple", price: 1.5 },
{ id: 2, name: "Banana", price: 1.0 },
{ id: 3, name: "Orange", price: 2.0 },
];

function Homework03 () {
    return (
        <div className="Homework03">
            {products.map((product) => (
                <Product
                key={product.id}
                name={product.name}
                price={product.price}
                />
            ))}
        </div>
    )
}

export default Homework03
