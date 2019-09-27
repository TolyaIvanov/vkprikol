import React from 'react';
import {Router} from "react-router-dom"
import {Provider} from 'react-redux'
import history from './history/history'
import store from './store/store'


import './../sass/app.scss'

import PostContainer from "./containers/PostContainer";
import Settings from "./components/Settings";

const Index = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <div className='main-wrapper'>
                    <section className='middle-side'>
                        <h1>Новости нах</h1>
                        <PostContainer/>
                    </section>
                    <section className='right-side'>
                        <Settings/>
                    </section>
                </div>
            </Router>
        </Provider>
    );
};

export default Index;