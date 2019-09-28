import React, {Component} from 'react';
import Magnifier from "../icons/Magnifier";

class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='settings'>
                <div className="list-mode">
                    <input className="apple-switch" type="checkbox"/>
                    <span className="list-mode-text">Включить отображение списком</span>
                </div>
				<label className='tags-title'>Выберите популярные хэштеги:</label>
                <div className='tags-area'>
                    <div className='tag'>#хуета</div>
                    <div className='tag'>#хуета2</div>
                    <div className='tag'>#хуееееееета</div>
                    <div className='tag'>#хуеа</div>
                    <div className='tag'>#хуета</div>
                    <div className='tag'>#х1</div>
                    <div className='tag'>#хааауета</div>
                    <div className='tag'>#хйета</div>
                    <div className='tag'>#хуа</div>
                    <div className='tag'>#хупырфывшгета</div>
                </div>
                <input placeholder="Введите имя пользователя" className='search-input'/>
                <Magnifier/>
            </section>
        );
    }
}

export default Settings;