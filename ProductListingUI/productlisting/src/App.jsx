import { useState } from "react";
import { products } from "./DataList/Products"
import SearchBar from './Components/SearchBar';
import FilterBar from './Components/FilterBar'
import ProductList from './Components/ProductList'
import LoadingState from './Components/LoadingState'
import EmptyState from './Components/EmptyState'
import ProductCard from "./Components/ProductCard.jsx";
import './App.css'


function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (term) => {
  setSearchTerm(term);

  const result = products.filter((p) =>
    p.name.toLowerCase().includes(term.toLowerCase())
  );

  if (selectedCategory) {
      setFilteredProducts(
        result.filter((p) => p.category === selectedCategory)
      );
    } else {
      setFilteredProducts(result);
    }
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);

    let result = products;

    if (searchTerm) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      result = result.filter((p) => p.category === category);
    }

    setFilteredProducts(result);
  };


  return (
    <>
      <div className="appContainer">
      <h1  className="appTitle">Product Listing</h1>

      <SearchBar onSearchChange={handleSearch} />
      <FilterBar onCategoryChange={handleCategory} />

      {loading && <LoadingState />}

      {!loading && filteredProducts.length === 0 && <EmptyState />}

      {!loading && filteredProducts.length > 0 && (
        <ProductList products={filteredProducts} />
      )}
    </div>
    </>
  )
}

export default App
