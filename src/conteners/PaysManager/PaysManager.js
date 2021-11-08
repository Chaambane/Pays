import React, {Component} from 'react';
import TitleH1 from '../../components/TitleH1/TitleH1';
import Button from '../../components/Button/Button';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import Countries from './Countries/Countries';

class PaysManager extends Component {
    state = {
        listeCountries: [],
        loading: false,
    }

    // componnentDidMount fait un appel à l'API au montage de l'application avec un affichage sur tous les pays.
    componentDidMount = () => {
       this.handleSelectRegion("all");
    };

    // La fonction handleSelectRegion fait un appel à l'Api et permet de filtrer sur les régions.
    handleSelectRegion = (region) => {
        // console.log(region);
        this.setState({loading: true})
        let regionSelect = "";
        if(region === "all") regionSelect = "all";
        else regionSelect = `region/${region}`;

        axios.get(`https://restcountries.com/v3.1/${regionSelect}`)
            .then(response => {
                // console.log(response.data);
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
                    loading: false,
                })
                // console.log(response.data);
            })
            .catch(error => {
                this.setState({loading: false})
            })
    }

    render() {
        return (
            <main className="container">
                <TitleH1>Les Pays du monde</TitleH1>
                {/*Les bouttons transmettent la région sur laquel filtrer pour afficher les pays*/}
                <Button clic={() => this.handleSelectRegion("all")}>Tous</Button>
                <Button clic={() => this.handleSelectRegion("Europe")}>Europe</Button>
                <Button clic={() => this.handleSelectRegion("Africa")}>Afrique</Button>
                <Button clic={() => this.handleSelectRegion("Asia")}>Asie</Button>
                <Button clic={() => this.handleSelectRegion("Americas")}>Amérique</Button>
                <Button clic={() => this.handleSelectRegion("oceania")}>Océanie</Button>
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