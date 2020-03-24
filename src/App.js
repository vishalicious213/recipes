import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import styled from 'styled-components';
import './App.css';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  flex-wrap: wrap;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

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
      <p className='subtitle'>Powered by <a href='https://www.edamam.com'>Edamam Recipe Search API</a></p>
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} placeholder='chicken'/>
        <button className='search-button' type='submit'>Search</button>
      </form>

      <StyledDiv>
        {recipes.map(recipe =>(
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            link={recipe.recipe.shareAs}
            time={recipe.recipe.totalTime}
            servings={recipe.recipe.yield}
            calories={recipe.recipe.calories}
            diets={recipe.recipe.dietLabels}
            health={recipe.recipe.healthLabels}
            cautions={recipe.recipe.cautions}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </StyledDiv>
    </div>
  );
}

export default App;
