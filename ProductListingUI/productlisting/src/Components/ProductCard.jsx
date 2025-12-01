
function ProductCard({product}){
    return(
        <>
        <div className="productCard">
            <h3>{product.name}</h3>
            <p className="productPrice">Rs. {product.price}</p>
            <p className="productCategory">{product.category}</p>


            {product.isAvailable ?(
                <span className="stock Available">Available</span>): (<span className="stock notAvailable">Out of Stock</span>)
        }
        </div>

        </>
    );
}

export default ProductCard