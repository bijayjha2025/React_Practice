
import ProductCard from "./ProductCard.jsx"

function ProductList({products}){
    return(
        <>
         <div>
            {products.map((p)=>
              (<ProductCard key={p.id} product={p}/>
            ))}
         </div>
        </>
    );
}

export default ProductList