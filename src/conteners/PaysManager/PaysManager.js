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
        regionSelect: null
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
                    regionSelect: region
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
                {/*Les bouttons transmettent la région sur laquel filtrer pour afficher les pays et btnSelect permet de tester si la région dans laquel on a cliqué correspond bien à celle déclaré dans les states pour pouvoir changer l'opacité dans le composant button.*/}
                <Button clic={() => this.handleSelectRegion("all")}
                    btnSelect={this.state.regionSelect === "all"}
                >Tous</Button>
                <Button clic={() => this.handleSelectRegion("Europe")}
                    btnSelect={this.state.regionSelect === "Europe"}
                >Europe</Button>
                <Button clic={() => this.handleSelectRegion("Africa")}
                    btnSelect={this.state.regionSelect === "Africa"}
                >Afrique</Button>
                <Button clic={() => this.handleSelectRegion("Asia")}
                    btnSelect={this.state.regionSelect === "Asia"}
                >Asie</Button>
                <Button clic={() => this.handleSelectRegion("Americas")}
                    btnSelect={this.state.regionSelect === "Americas"}
                >Amérique</Button>
                <Button clic={() => this.handleSelectRegion("Oceania")}
                    btnSelect={this.state.regionSelect === "Oceania"}
                >Océanie</Button>
                {
                    this.state.loading &&
                    <Spinner/>
                }
                <div className="fw-bold">Nombre de pays : <span className="badge bg-success">{this.state.listeCountries.length}</span></div>
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