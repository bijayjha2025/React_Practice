
function ProductCard({product}){
    return(
        <>
        <div>
            <h3>{product.name}</h3>
            <p>Rs. {product.price}</p>
            <p>{product.category}</p>


            {product.isAvailable ?(
                <span>Available</span>): (<span>Out of Stock</span>)
        }
        </div>

        </>
    );
}

export default ProductCard