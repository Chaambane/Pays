import React, {Component} from 'react';
import TitleH1 from '../../components/TitleH1/TitleH1';
import Button from '../../components/Button/Button';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import Countries from './Countries/Countries';

class PaysManager extends Component {
    state = {
        listeCountries: null,
        loading: false
    }

    // componnentDidMount fait un appel à l'API au montage de l'application afin de télécharger les doonnées essentiels définis dans la fonction ensuite modifier le listeCountries dans les states.
    componentDidMount = () => {
        this.setState({loading: true})
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                const listeCountries = response.data.map(countries => { // je parcours les data et récupère que ce que je souhaite affiché.
                    return{
                        name: countries.name.common,
                        nameFr: countries.translations.fra.common,
                        capital: countries.capital,
                        region: countries.region,
                        countryFlag: countries.flags.svg
                    }
                })
                this.setState({
                    listeCountries,
                    loading: false
                })
                // console.log(response.data);
            })
            .catch(error => {
                this.setState({loading: false})
            })
    };

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
                {
                    this.state.loading &&
                    <Spinner/>
                }
                <div className="row no-gutters container justify-content-center">
                    {
                        this.state.listeCountries && !this.state.loading &&
                        this.state.listeCountries.map(country => {
                        return(
                            <div className="col-12 col-md-5 border border-primary rounded m-1" key={country.name}>
                            <Countries
                                {...country}
                            />
                            </div>
                        )
                    })
                    }
                </div>
            </main>
        )
    };
}

export default PaysManager;