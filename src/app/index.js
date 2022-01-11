import React, { Fragment } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/style.css';
import SideMenu from './components/sidemenu';
import Card from './components/card';

const App = () => {
    return ( 
        <Fragment>
            <Navbar></Navbar>
            <div className="container mt-4">
                <div className="row">
                    <SideMenu/>
                    <div className="col-sm">
                        <div className="row">
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}
export default App;