import React, {Component} from 'react';

<<<<<<< HEAD

=======
>>>>>>> a88cbb69fe6346ccd199df490c26f45630e45846
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
				<input className='search-input'/>
            </section>
        );
    }
}

export default Settings;