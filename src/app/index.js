import React, { Fragment } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/style.css';

const SideMenu = () => {
    return (
        <div className="col-sm-2">
            <ul>
                <li>Légumes</li>
                <li>Fruits</li>
                <li>Produits Frais</li>
            </ul>
        </div>
    )
}

const App = () => {
    return ( 
        <Fragment>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <SideMenu/>
                    <div className="col-sm">
                        Store
                    </div>
                </div>
            </div>
        </Fragment >
    );
}
export default App;