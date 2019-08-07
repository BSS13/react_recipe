import React,{Component} from 'react';

class Posts extends Component
{
    render()
    {
        // return this.props.presentPosts.map((post)=>(
        //    <div>
        //        <h3>{post.rname}</h3>
        //        <p>{post.story}</p>
        //    </div>
        // ));
        return(
            <div>
                <h1>User Stories</h1>
                <div className="Posts">
                    {
                        (this.props.presentPosts.map((post)=>(
                            <div key={post.id} className="individualPost">
                                <h3>{post.rname}</h3>
                                <p>{post.story}</p>
                            </div>
                        ))
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Posts;