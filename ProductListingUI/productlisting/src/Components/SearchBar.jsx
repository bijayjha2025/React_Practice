
function SearchBar({onSearchChange}){
    return(
        <>
        <div>
            <input 
            type="text"
            placeholder="Search products"
            onChange={(e)=> onSearchChange(e.target.value)}/>
        </div>
        </>
    );
}

export default SearchBar