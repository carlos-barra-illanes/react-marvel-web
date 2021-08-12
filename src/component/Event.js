import React, { Component } from 'react';

import '../assets/css/media_query.css';
import '../assets/css/bootstrap.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/animate.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/owl.theme.default.css';
import '../assets/css/style_1.css';
import 'moment/locale/es';
import axios from 'axios';
import Global from '../Global';
import SliderTag from './SliderTag';
import Loading from './Loading';
import Moment from 'react-moment';
import 'moment/locale/es'

class Event extends Component {
    url = Global.url;
    filter = Global.filterEventById;
    keyRest = Global.keyRest;


    state = {
        id: this.props.match.params.id,
        events: [],
        characters: [],
        comics: [],
        status: "",
        title: "",
        description: "",
        path: "",
        extension: "",
        urls: "",
        modified: "",
        start: "",
        end: "",
        attributionHTML:"",
        isLoading: "true"
    }

    componentWillMount() {
        this.getEventByIdMarvel(this);

    }

    getEventByIdMarvel = () => {
        axios.get(this.url + this.filter + this.state.id + "?" + this.keyRest).then(res => {
            this.setState({
                events: res.data.data.results,
                characters: res.data.data.results[0].characters,
                comics: res.data.data.results[0].comics,
                title: res.data.data.results[0].title,
                description: res.data.data.results[0].description,
                path: res.data.data.results[0].thumbnail.path,
                extension: res.data.data.results[0].thumbnail.extension,
                urls: res.data.data.results[0].urls[0].url,
                modified: res.data.data.results[0].modified,
                start: res.data.data.results[0].start,
                end: res.data.data.results[0].end,
                attributionHTML:res.data.attributionText,
                status: 'success',
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
                                        {this.state.title}
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
                                    <SliderTag title="Super Heroes" characters={this.state.characters.items} urlRouter="/character/"/>

                                    <div className="fh5co_consectetur_event">
                                        INFORMACION :

                                    </div>
                                    <div className="fh5co_consectetur">
                                        Iniciado : <Moment fromNow locale="es">{this.state.start}</Moment>
                                    </div>
                                    <div className="fh5co_consectetur">
                                        Modificado : <Moment fromNow locale="es">{this.state.modified}</Moment>
                                    </div>
                                    <div className="fh5co_consectetur">
                                        Terminado : <Moment format="DD/MM/YYYY">
                                            {this.state.end}
                                        </Moment>
                                    </div>
                                
                                </div>

                            </div>
                            {/*  <Gallery characters={this.state.characters} /> */}

                            <div className="col-character   col-md-3 animate-box fadeInRight animated-fast" data-animate-effect="fadeInRight">
                                <SliderTag title="Comics" characters={this.state.comics.items} urlRouter="/comics/" />
                            </div>

                        </div>

                    </div>



                );
            
        } 





    }
}
export default Event;