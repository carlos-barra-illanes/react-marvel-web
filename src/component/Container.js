import React, { Component } from 'react';
import '../assets/css/media_query.css';
import '../assets/css/bootstrap.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/animate.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/owl.theme.default.css';
import '../assets/css/style_1.css';

import moment from 'moment';
import 'moment/locale/es';
import axios from 'axios';
import Global from '../Global';
import { Link } from 'react-router-dom';
import Loading from './Loading';

class Container extends Component {
    url = Global.url;
    filter = Global.filterEvents;
    state = {
        events: [],
        status: "error",
        isLoading: true
    }

    componentWillMount() {
        this.getEventsMarvel();
    }

    getEventsMarvel = () => {
        try {
            axios.get(this.url + this.filter).then(res => {
                this.setState({
                    events: res.data.data.results,
                    status: 'success',
                    isLoading: false
                });
            });
            
        } catch (error) {
            console.log(error);
        }
        
    }

    render() {
      
        if (this.state.isLoading) {
           
            return (
                <Loading />
            );
        } else {
        
            return (
                <div className="container-fluid paddding">
                    <div className="row mx-0">
                        {this.state.events.map((evento, i) => {
                            if (i === 0) {
                                return (
                                    <React.Fragment>
                                        <div key={i} className="col-md-6 col-12 paddding animate-box fadeIn animated-fast" data-animate-effect="fadeIn">
                                            <div className="fh5co_suceefh5co_height"><img src={evento.thumbnail.path + '.' + evento.thumbnail.extension} alt="img" />
                                                <div className="fh5co_suceefh5co_height_position_absolute"></div>

                                                <div className="fh5co_suceefh5co_height_position_absolute_font">
                                                    <div className="">
                                                        <Link className="color_fff" to={'/event/' + evento.id}>
                                                            <i className="fa fa-clock-o"></i>&nbsp;&nbsp;Fecha de Termino : {moment(evento.end).format('LL')}
                                                        </Link>
                                                    </div>
                                                    <div className="">
                                                        <Link className="fh5co_good_font" to={'/event/' + evento.id}>
                                                            {evento.title}
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </React.Fragment>
                                );
                            }
                        }
                        )
                        }
                        <div className="col-md-6">
                            <div className="row">
                                {this.state.events.map((evento, i) => {
                                    if (i !== 0) {
                                        return (
                                            <React.Fragment>
                                                <div key={i} className="col-md-6 col-6 paddding animate-box fadeIn animated-fast" data-animate-effect="fadeIn">
                                                    <div className="fh5co_suceefh5co_height_2"><img src={evento.thumbnail.path + '.' + evento.thumbnail.extension} alt="img" />
                                                        <div className="fh5co_suceefh5co_height_position_absolute"></div>
                                                        <div className="fh5co_suceefh5co_height_position_absolute_font_2">
                                                            <div className="">
                                                                <Link className="color_fff" to={'/event/' + evento.id}>
                                                                    <i className="fa fa-clock-o"></i>&nbsp;&nbsp;Fecha de Termino : {moment(evento.end).format('LL')}
                                                                </Link>
                                                            </div>
                                                            <div className="">
                                                                <Link className="fh5co_good_font" to={'/event/' + evento.id}>
                                                                    {evento.title}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        );
                                    }
                                }
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            );

        }

    }
}
export default Container;



