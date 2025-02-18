import React from 'react';

function IngredientList({ ingredients }) {
    return (
        <div>
            <h3>Ingredients:</h3>
            <ul id="ingredients-list" className="ingredients-amount">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.name}: <span className="ingredient">{ingredient.adjustedAmount}g</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default IngredientList;
