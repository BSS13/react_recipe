import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class RecipeList extends Component
{
    render()
    {
        return(
            
            <div>
            <h1 style={recipeList}>RecipeList</h1>
            <p style={startParagaph}>Select the Recipe you want to prepare</p>

            <div className="Recipes">
                {
                    this.props.recipes.map((recipe)=>(
                        <div key={recipe.id} style={individualRecipe} className="individualRecipe">
                            <Link to={recipe.title}>{recipe.title}</Link>
                        </div>
                    ))
                }
            </div>
            </div>
            

        );
    }
}

const recipeList={
    textAlign:'center',
    color:'#3d70b2'
};

const individualRecipe={
    textDecoration:'none',
    textAlign:'center'

};

const startParagaph={
    textAlign:'center',
    
}

export default RecipeList;