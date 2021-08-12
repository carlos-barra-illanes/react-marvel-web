import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import Moment from 'react-moment';
import Loading from './Loading';
import SliderTag from './SliderTag';
class Character extends Component {
    url = Global.url;
    filter = Global.filterCharacterById;
    keyRest = Global.keyRest;


    state = {
        id: this.props.match.params.id,
        name: "",
        events: [],
        description: "",
        path: "",
        modified: "",
        urls: "",
        isLoading: true
    }

    componentWillMount() {
        this.getCharacterByIdMarvel(this);

    }

    getCharacterByIdMarvel() {
        console.log(this.url + this.filter + this.state.id + "?" + this.keyRest);
        axios.get(this.url + this.filter + this.state.id + "?" + this.keyRest).then(res => {

            this.setState({
                name: res.data.data.results[0].name,
                path: res.data.data.results[0].thumbnail.path,
                extension: res.data.data.results[0].thumbnail.extension,
                description: res.data.data.results[0].description,
                events: res.data.data.results[0].events,             
                urls: res.data.data.results[0].urls[0].url,
                modified: res.data.data.results[0].modified,
                isLoading: false
            });

        }).catch(error => {
            this.setState({
                status: 'error'
            });

        });
    }

    render() {
       
        if (this.state.isLoading) {

            return (
                <Loading />
            );
        } else {

            return (
                <div id="fh5co-single-content" className="container-fluid pb-4 pt-4 paddding">
                <div className="container paddding">
                    <div className="row mx-0">
                        <div className="col-md-8 animate-box fadeInRight animated-fast" data-animate-effect="fadeInLeft">

                            <h3 style={{ color: "white" }}>
                                {this.state.name}
                            </h3>
                            <a className="fh5co_heading py-2 mb-4" href={this.state.urls} >
                                <div className="ffh5co_suceefh5co_height_2_content"><img width="100%" height="50%" src={this.state.path + '.' + this.state.extension} alt="img" />
                                </div>

                            </a>
                            <p style={{ color: "white" }}>
                                {this.state.description}
                            </p>
                            <div className="fh5co_consectetur">                                     
                                    {this.state.attributionHTML}
                            </div>

                        </div>
                        <div className="col-md-3 animate-box fadeInRight animated-fast" data-animate-effect="fadeInRight">
                       
                            <div className="fh5co_consectetur_event">
                                INFORMACION 

                            </div>
                            <div className="fh5co_consectetur">
                                Nombre : {this.state.name}
                            </div>
                            <div className="fh5co_consectetur">
                                Modificado : <Moment fromNow locale="es">{this.state.modified}</Moment>
                            </div>
                     
                           
                        
                        </div>

                    </div>
                    {/*  <Gallery characters={this.state.characters} /> */}
                    <SliderTag title="Eventos" characters={this.state.events.items}  urlRouter="/event/"/>
                    <div className="col-character   col-md-3 animate-box fadeInRight animated-fast" data-animate-effect="fadeInRight">
                        
                    </div>

                </div>

            </div>
            );
        }


    }
}

export default Character
