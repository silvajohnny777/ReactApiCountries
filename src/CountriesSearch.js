import React from 'react';

DESATIVADO

    class  CountriesSearch extends React.Component {
        constructor() {
            super()
            this.state = {
              search_box_value: '',
            }
            this.searchChange = this.searchChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        render() {
        return (
            <div className="main-content">
                <div id="content-search" className="content-search">
                <div className="contentContainer container-fluid">
                    <form onSubmit={this.handleSubmit} id="search-form" className="search">
                        <div className="input-group mb-3">               
                           <input onChange={this.searchChange}  id="country-search" type="text" style={{fontFamily: "FontAwesome"}} 
                            className="form-control" placeholder="&#xF002; Search for a country..." aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </form>

                <div id="dropRegion" className="dropdown">
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
        )
    }

    

}

export default CountriesSearch;