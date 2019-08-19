import React from "react";    

    class Navbar extends React.Component {    

        dark() {
           alert('Dark clicked');
       }

        render() {
            return (
                <div>
                    <nav id="navbar" className="navbar navbar-light">
                        <div className="nav-container container-fluid">
                        <span className="navbar-icon">Where in the world?</span>
                        <span onClick={() => {this.dark()}} className="navbar-dark-mode">
                            <i className="icon far fa-moon"></i>Dark Mode
                        </span>
                        </div>
                    </nav>
                </div>
            )
        }

    }

export default Navbar;  