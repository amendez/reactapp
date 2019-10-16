import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe"


const App = () => {
  const APP_ID = "bdc6e3c3"
  const APP_KEY = "903ec8b40e5026a2e3d029f714ee8ebe"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)
  }
  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text"  value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Buscar</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=> (
        <Recipe 
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image} 
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
    </div>
  );
}

export default App;
