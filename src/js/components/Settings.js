import React, {Component} from 'react';


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