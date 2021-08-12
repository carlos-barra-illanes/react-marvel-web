import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import Global from '../Global';

class Gallery extends Component {
    keyRest = Global.keyRest;
    state = {
        characters: this.props.characters.items,
        charactersImages:[] ,
        status: "error"
    }
    



    render() {
        return (
            <Carousel dynamicHeight="false" >
                {this.state.characters.map((character, i) => {
                    return (
                        <div key={i}>
                            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                            <p className="legend">{character.name}</p>
                        </div>
                    );
                }
                )
                }


            </Carousel>
        );
    }
};
export default Gallery;
