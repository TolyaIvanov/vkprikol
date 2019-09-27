import React, {Component} from 'react';
import {connect} from 'react-redux';

import Post from "../components/Post";

class PostContainer extends Component {
    render() {
        return (
            <Post

            />
        );
    }

    renderImages = () => {

    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);