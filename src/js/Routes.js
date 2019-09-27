import React, {Component, lazy} from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from "react-router-dom"
import {PrivateRoute} from './PrivateRoute'

class Routes extends Component {
    render() {
        return (
            <Switch>
            </Switch>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});


export default connect(mapStateToProps, null)(Routes);
