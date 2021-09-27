import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-light bg-warning">
            <div class="container-fluid">
                <a class="navbar-brand fw-bolder"><i class="bi bi-cart4"></i> My grocery shopping</a>
                <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;