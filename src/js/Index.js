import React from 'react';
import css from './../sass/app.css';
import FacebookLogo from './icons/facebookLogo.js';

const Index = () => {
    return (
        <div className='main-wrapper'>
            <section className='left-side'>
                <h1>Рекламные баннеры</h1>
            </section>
            <section className='middle-side'>
                <h1>Новости нах</h1>
                <div className='post'>
                    <div className='avatar'>
                        <FacebookLogo/>
                    </div>
                    <div className='name'>Толян</div>
                    <div className='text'>Я воняю</div>
                </div>
            </section>
            <section className='right-side'>
                <h1>Фильтры</h1>
            </section>
        </div>
    );
};

export default Index;