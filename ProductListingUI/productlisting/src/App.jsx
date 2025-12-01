import { useState } from "react";
import { products } from "./DataList/Products"
import SearchBar from './Components/SearchBar';
import FilterBar from './Components/FilterBar'
import ProductList from './Components/ProductList'
import LoadingState from './Components/LoadingState'
import EmptyState from './Components/EmptyState'



function App() {

  const [productsData] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);



  return (
    <>
      
    </>
  )
}

export default App
