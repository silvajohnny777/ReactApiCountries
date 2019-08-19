import React, {Component} from "react";
import CountrySearch from './CountrySearch';

class Country extends Component { 
    
    render() {

      const { data } = this.props.location;
      let test = [];

      for(let i = 0 ; i < (data.borders).length ; i++){
          test.push(data.borders[i]);
      }

        return (
            <div>
              <CountrySearch />
              <div className="row">
              <div id="countryInfo" className="infoContainer container-fluid"></div>
                <div className="leftFull container-col col-sm-6">
                  <img src={data.flag} alt="..." className="countryInfoImage" />
                </div>    
                <div className="rightFull container-col col-sm-6">
                  <div id="searchInfo" className="searchInfo">        
                    <h1 className="card-text-specific">{data.name}</h1>
                    <div className="SearchInfoItens">
                      <div className="leftItens col-sm">
                        <ul>
                          <li><span className="card-text-specific">Native Name: </span>{data.nativeName}</li>
                          <li><span className="card-text-specific">Population: </span>{data.population.toLocaleString('en-US')}</li>
                          <li><span className="card-text-specific">Region: </span>{data.region}</li>
                          <li><span className="card-text-specific">Sub Region: </span>{data.subregion}</li>
                          <li><span className="card-text-specific">Capital: </span>{data.capital}</li>
                        </ul>
                      </div>
                      <div className="rigthItens col-sm">
                        <ul>
                          <li><span className="card-text-specific">Top Level Domain: </span>{data.topLevelDomain}</li>
                          <li><span className="card-text-specific">Currencies: </span>{data.currencies.map(currencies => (
                            <span key={currencies.code}>{currencies.name}, </span>
                            ))}
                          </li>
                          <li><span className="card-text-specific">Languages: </span>{data.languages.map(languages => (
                            <span key={languages.iso639_1}>{languages.name}, </span>
                            ))}
                          </li>
                        </ul>
                      </div>
                    </div>            
                    <div id="newbottomtest" className="searchBottom">
                      <span className="card-text-specific">Border Countries: </span>
                        {test.map(borders => ( 
                          <button class="btnCountries btn-primary"> {borders} </button> 
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Country;