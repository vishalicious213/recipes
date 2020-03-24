import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, servings, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            {/* <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text} key={ingredient.text}</li>
                ))}
            </ol> */}
            <p>Servings: {servings}</p>
            <p>Calories: {calories.toFixed(0)}</p>
            <div className={style.imageContainer}>
                <img className={style.image} src={image} alt={title}/>
            </div>
        </div>
    )
}

export default Recipe;