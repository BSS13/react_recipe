import React,{Component} from 'react';

class Recipe extends Component
{
    render()
    {
       
        return(
            <div>
                <h1 style={recipeHeading}>Let's begin the Cooking {this.props.rname} </h1>
                {
                    (this.props.rsteps.map((step)=>(
                        <p key={step.sid}>
                        <input type="checkbox" onChange={this.props.statusChanged.bind(this,step.sid)}></input>
                        Step {step.sid} {') '}{step.step}
                        </p>
                    )))

                }
            </div>
        )
        
    }
}

const recipeHeading={
  textAlign:'center',
  color:'#3d70b2'
};



export default Recipe;