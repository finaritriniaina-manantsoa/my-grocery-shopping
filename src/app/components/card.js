import React from 'react';

const Card = () => {
    return (
        <div className="col-sm-4">
            <div className="card">
                <img src={process.env.PUBLIC_URL +"/assets/img/citrus.jpg"} className="card-img-top" alt="product"/>
                    <div className="card-body">
                        <div className="row">
                            <h5 className="col-sm-6">Citron</h5>
                            <p className="col-sm-6">$2.99/unit</p>
                            <button className="btn btn-warning btn-sm">View product</button>
                        </div>
                    </div>
            </div>
            {/* modal */}
        </div>
    );
}

export default Card;