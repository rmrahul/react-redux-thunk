import React from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";


class PostList extends React.Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){
        return(
            <div>
                sdas
            </div>
        )
    }
}

export default connect(null, {fetchPosts : fetchPosts}) (PostList);