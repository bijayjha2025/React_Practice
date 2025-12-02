
function FilterBar({onCategoryChange}){
    return(
        <>
        <div className="filterBar">
            <select className= "filterBarSelect" onChange={(e) => onCategoryChange(e.target.value)}>
                <option value="">All categories</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="food">Food</option>
                <option value="books">Books</option>
                <option value="home">Home</option>
                <option value="sports">Sports</option>
                <option value="beauty">Beauty</option>
                <option value="toys">Toys</option>
                <option value="stationery">Stationery</option>


            </select>
        </div>
        </>
    )
}

export default FilterBar