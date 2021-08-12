import React, { Component } from 'react'
import loading from '../assets/images/LOADING 1.gif';
export default class Loading extends Component {
    render() {
        return (
            <div id="fh5co-single-content" className="container-fluid pb-4 pt-4 paddding">
            <div className="container paddding">
                <div className="row mx-0">
                    <div className="col-md-12 col-md-8-content animate-box" data-animate-effect="fadeInLeft">
                        <div className="text-center fh5co_heading py-2"> 
                        <img width="50%" height="50%" src={loading} alt="img" />
                        </div>                  
                    </div>

                </div>
            </div>
        </div>
        )
    }
}
