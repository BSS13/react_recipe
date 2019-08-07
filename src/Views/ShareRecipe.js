import React,{Component} from 'react';

class ShareRecipe extends Component
{
  state={
    rname:'',
    recipe:''
  }

  inputEntered=(e)=>{
    this.setState({[e.target.name]:[e.target.value]});
  }

  addNewStory=(e)=>{
      e.preventDefault();
      this.props.addPost(this.state.rname,this.state.recipe);
      this.setState({rname:'',recipe:''});
  }

  render()
  {
    
    return(
       <div className="postDiv" style={postDiv}>
           <form onSubmit={this.addNewStory}>
               <div>
                   <label>Recipe Name</label>
                   <input type="text" name="rname" onChange={this.inputEntered} value={this.state.rname} placeholder="Enter Recipe Name"></input>
               </div>

               <div>
                   <label>Share Recipe</label>
                   <input type="textbox" name="recipe" onChange={this.inputEntered} value={this.state.recipe} placeholder="Share Your Recipe Story"></input>
               </div>

               <input style={submitButton} type="submit" value="Share Recipe"/>
           </form>
       </div>
      );
  }
}

const postDiv={
  textAlign:'center',
  padding:'20px'
};

const submitButton={
   backgroundColor:'#3d70b2',
   color:'#dfe3e6',
   padding:'3px',
   marginTop:'7px'
};

export default ShareRecipe;