import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe"
import MenuBar from "./MenuBar"

const App = () => {
  const APP_ID = "bdc6e3c3"
  const APP_KEY = "903ec8b40e5026a2e3d029f714ee8ebe"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")
  const [spinner, setSpinner] = useState(true)

  const getRecipes = async () => {
    setSpinner(true)
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)
    setSpinner(false)
  }

  useEffect(() => {
    getRecipes()
  // eslint-disable-next-line
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  return(
    <div className="App">
      <MenuBar search={search} updateSearch={updateSearch} getSearch={getSearch} spinner={spinner} />
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
