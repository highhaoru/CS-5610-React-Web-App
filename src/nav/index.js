import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";
// import { Container, Nav, Navbar } from 'react-bootstrap';



function NavbarContent() {
    const {currentUser} = useSelector((state) => state.users)
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return(
        <div className="w-100 row bg-dark m-0 ">
            <div className="col-2"></div>
            <nav className="col-8 navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Game Station</a>
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav navbar-right" style={{ maxHeight: '100px'}}>
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/search">Search</a>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href="/profile">Profile</a>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <a className="nav-link" href="/privacy">More</a>
                        </li>
                    </ul>
                </div>
                <div className="float-end">
                    <button className={`btn btn-secondary me-2 ${currentUser ? 'd-none': ''}`}>
                        <a className="nav-link" href="/login">login</a>
                    </button>
                    <button className={`${currentUser ? 'd-none': ''} btn btn-primary me-2 `}>
                        <a className="nav-link" href="/register">Get Started</a>
                    </button>
                    <a className={`${currentUser ? '': 'd-none'}`} href="/profile">
                        <i className={` bi bi-person-fill pe-2`}> Profile</i>
                    </a>

                </div>
            </nav>
            <div className="col-2 p-0"></div>
        </div>
    );
}
export default NavbarContent;