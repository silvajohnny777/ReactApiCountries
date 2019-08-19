import React, {Component} from "react";
import { NavLink } from 'react-router-dom';

class Countries extends Component {
    constructor() {
        super()
        this.state = {
          apiURL: 'https://restcountries.eu/rest/v2/all',
          countries: [],
          country: [],
          clicked: false
        }
        this.searchChange = this.searchChange.bind(this);
    }

    // starting the API
    componentDidMount(){
      fetch(this.state.apiURL)
        .then(reponse => reponse.json())
          .then(data => {
            this.setState({
              countries: data
            })
          })
    }
    
    render() {

        return (
            <div>
             <div className="main-content">
                <div id="content-search" className="content-search">
                <div className="contentContainer container-fluid">
                    <form onSubmit={this.handleSubmit} id="search-form" className="search">
                        <div className="input-group mb-3">               
                           <input onChange={this.searchChange}  id="country-search" type="text" style={{fontFamily: "FontAwesome"}} 
                            className="form-control" placeholder="&#xF002;	&nbsp;	&nbsp; Search for a country..." aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </form>

                <div onChange={this.searchRegion} id="dropRegion" className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter by region
                    </button>
                    <div id="dropdown" className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button" value="africa">Africa</button>
                        <button className="dropdown-item" type="button" value="americas">Americas</button>
                        <button className="dropdown-item" type="button" value="asia">Asia</button>
                        <button className="dropdown-item" type="button" value="europe">Europe</button>
                        <button className="dropdown-item" type="button" value="oceania">Oceania</button>
                    </div>
                </div>
                </div> 
                </div>
            </div>   
            <div className="bandeirasBack container-fluid">    
            <div id="countrieslist" className="countrieslist container-fluid">
            {this.state.countries.map(countries => (
              <div id="card" className="card">
              <NavLink style={{ textDecoration: 'none', color: 'black' }} key={countries.alpha2Code} to={{
                pathname: "/country",
                data: countries
              }} >
                <div id="click" className="a" value={countries.name} onClick={this.handleClick} href="#">
                  <img className="card-img-top" src={countries.flag}lt="Card image cap" /></div>
                <div className="card-body"><h5 id="countryName" className="card-title">{countries.name}</h5> 
                <div id="card-description" className="card-description">
                  <p className="info"><span className="card-text">Population: </span>{countries.population}
                  </p><p className="info"><span className="card-text">Region: </span>{countries.region}
                  </p><p className="info"><span className="card-text">Capital: </span>{countries.capital}
                  </p>
                </div>
                </div>
            </NavLink>
              </div>
            ))}
            </div></div></div>  
        )
    }

    searchRegion(e){      
      console.log(e.target.value);
      alert('funcionando')
    }
    
    searchChange = (e) => {
      console.log('elemento> ' +e.target.value)
      this.setState(
        { apiURL: 'https://restcountries.eu/rest/v2/name/' +e.target.value 
      });
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.componentDidMount();
  }

}

export default Countries

