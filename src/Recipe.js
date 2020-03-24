import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, link, time, servings, calories, diets, health, cautions, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1><a href={link}>{title}</a></h1>
            <div className={style.imageContainer}>
                <a href={link}>
                    <img className={style.image} src={image} alt={title}/>
                </a>
            </div>
            {/* <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text} key={ingredient.text}</li>
                ))}
            </ol> */}
            <p><b>Time: </b>{time} mins.</p>
            <p><b>Servings: </b>{servings}</p>
            <p><b>Calories: </b>{calories.toFixed(0)}</p>
            <p><b>Diet type:&nbsp;</b>
                {diets.map(diet => (
                    <span key={diet}>{diet}</span>
                ))}
            </p>
            <p><b>Health:&nbsp;</b>
                {health.map(concern => (
                    <span key={concern}>{concern}, </span>
                ))}
            </p>
            <p><b>Cautions:&nbsp;</b>
                {cautions.map(caution => (
                    <span key={caution}>{caution}, </span>
                ))}
            </p>
        </div>
    )
}

export default Recipe;

            // diet={recipe.recipe.dietLabels}
            // health={recipe.recipe.healthLabels}
            // cautions={recipe.recipe.cautions}