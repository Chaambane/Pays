import React, {Component} from 'react';
import TitleH1 from '../../components/TitleH1/TitleH1';
import Button from '../../components/Button/Button';

class PaysManager extends Component {
    render() {
        return (
            <main className="container">
                <TitleH1>Les Pays du monde</TitleH1>
                <Button>Tous</Button>
                <Button>Europe</Button>
                <Button>Afrique</Button>
                <Button>Asie</Button>
                <Button>Amérique</Button>
                <Button>Océanie</Button>
            </main>
        )
    };
}

export default PaysManager;