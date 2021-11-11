import React, {Component} from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import TitleH1 from '../../components/TitleH1/TitleH1';
import Countries from '../PaysManager/Countries/Countries';

class DetailCountry extends Component {
    state= {
        dataCountry: null,
        loading: false
    }

    componentDidMount = () => {
        this.setState({loading: true})
        axios.get(`https://restcountries.com/v3.1/name/${this.props.nameCountry}?fullText=true`)
            .then(response => {
                // console.log(response.data[0]);
                this.setState({
                    dataCountry: response.data[0], // On récupère les donné du pays sotcké dans le tableau à l'indice 0.
                    loading: false
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false})
            })
    }
    render() {
        return (
            <div className="container">
                <TitleH1>Pays séléctionné: {this.props.nameCountry}</TitleH1> {/**props provenant du routeur .match.id */}
                {
                    this.state.loading &&
                        <Spinner/>
                }
                {
                    this.state.dataCountry &&
                        <Countries
                            name= {this.state.dataCountry.name.common}
                            nameFr= {this.state.dataCountry.translations.fra.common}
                            capital= {this.state.dataCountry.capital}
                            region= {this.state.dataCountry.region}
                            countryFlag= {this.state.dataCountry.flags.svg}
                            {...this.props} //**props du routeur pour corriger l'érreur d'affichage concernant le NavLink du composant countries
                            solo = {true} //Permet de pouvoir retirée le NavLink dans le composant DetailCountry. 
                            population= {this.state.dataCountry.population} // et rajouter à l'affichage du composant DetailCountry.
                        />
                }

            </div>
        )
    };
}

export default DetailCountry;