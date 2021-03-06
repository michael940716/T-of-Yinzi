import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return(

        <div className="navigation">
            <nav class="navbar navbar-expand navbar-dark bg-dark"
                style={{
                    borderRadius: "25px",
                    opacity: "90%",
                }}
            >
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        Yinzi Zhou
                    </Link>
                    <ul class="navbar-nav ml-auto">
                        <li>
                            <Link class="nav-link"  to="/bio">
                                Bio
                            </Link>
                        </li>
                        <li>
                            <Link class="nav-link"  to="/gallery">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link class="nav-link"  to="/media">
                                Media
                            </Link>
                        </li>
                        <li>
                            <Link class="nav-link"  to="/schedule">
                                Schedule
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default withRouter(Navigation);
