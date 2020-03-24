import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }

  const updateSearch = event => {
    setSearch(event.target.value);
  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return (
    <div className='App'>
      <h1 className='title'>10 Recipes</h1>
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} placeholder='chicken'/>
        <button className='search-button' type='submit'>Search</button>
      </form>

      <div className='recipes'>
        {recipes.map(recipe =>(
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            servings={recipe.recipe.yield}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  );
}

export default App;
