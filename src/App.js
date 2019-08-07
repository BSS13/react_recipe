import React,{Component} from 'react';
import uuid from 'uuid';
import Header from './Components/Header';
import ShareRecipe from './Views/ShareRecipe';
import RecipeList from './Views/RecipeList';
import Posts from './Components/Posts';
import Recipe from './Components/Recipe';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component
{
  state={
     recipes: [
      {
        id:uuid.v4(),
        title:"Maggi",
        steps:[
          {
           sid:1,
           step:"Boil Water",
           status:false
          },
          {
            sid:2,
            step:"Add Maggi and spices",
            status:false
          },
          {
            sid:3,
            step:"Heat for 5 minutes",
            status:false
          },
          {
            sid:4,
            step:"ready to eat",
            status:false
          }]
        
      },
      {
        id:uuid.v4(),
        title:"Rice",
        steps:[
          {
            sid:1,
            step:"Wash the rice",
            status:false
          },
          {
            sid:2,
            step:"Add vegetables",
            status:false
          },
          {
            sid:3,
            step:"Add Rice",
            status:false
          },
          {
            sid:4,
            step:"Add Water",
            status:false
          },
          
          {
            sid:5,
            step:"Cook till water boils",
            status:false
          }]
        }
     ],

     posts:[
       {
         id:uuid.v4(),
         rname:'Crisp Rice',
         story:'Great 12 am Rice cooking challenge'
       },
       {
         id:uuid.v4(),
         rname:'Haka Noodles',
         story:'Noodles prepared at rooftop'
       }
     ]
   }

  addPost=(rname,recipe)=>
  {
    let post={
      id:uuid.v4(),
      rname:rname,
      story:recipe
    }
    this.setState({posts:[...this.state.posts,post]});
  }

  statusChanged=(id)=>{
    this.setState({recipes:this.state.recipes.map((recipe)=>{
      if(recipe.steps.sid===id)
      {
         recipe.steps.status=!recipe.steps.status;
       }
      return recipe;
    })})
  }


  render()
  {
    return(

      <Router>
        <div className="KJ">
        <Header></Header>
         {
           (this.state.recipes.map((recipe)=>(
             <Route path={"/"+recipe.title} key={recipe.id} render={(props)=><Recipe statusChanged={this.statusChanged} rname={recipe.title} rsteps={recipe.steps}></Recipe>}></Route>
           )))
         }
          <Route exact path="/" render={(props)=><RecipeList recipes={this.state.recipes}></RecipeList>}></Route>
        
         <Route path="/shareRecipes" render={(props) =>
          <React.Fragment>
            <ShareRecipe addPost={this.addPost} isAuthed={true}></ShareRecipe>
            <Posts presentPosts={this.state.posts}/>
         </React.Fragment>}></Route>
        
      </div>
      </Router>
    );
  }
}

export default App;