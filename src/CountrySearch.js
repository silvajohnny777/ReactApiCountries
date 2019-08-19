import React from 'react';
import { NavLink } from 'react-router-dom';

    function CountrySearch(){
        return (
            <div className="main-content">
                <div id="content-search" className="content-search-country">
                    <div className="contentContainer container-fluid">
                        <div id="searchcontent">
                            <NavLink to="./">
                                <span href="./">
                                    <button id="btnFA" className="btn2 btn-primary">
                                        <i className="icon fas fa-arrow-left"></i>
                                        Back
                                    </button>
                                </span>
                            </NavLink>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }

export default CountrySearch;