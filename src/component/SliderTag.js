import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SliderTag extends Component {
    state = {
        urlRouter:"",
        characters: [],
        status: "error"
    }

    componentWillMount() {
        if (this.props.characters !== undefined) {
            this.setState({
                urlRouter: this.props.urlRouter,
                characters: this.props.characters,
                status: "success"
            });
            
        }

    }

    render() {

        return (
            <React.Fragment>
                <div>
                    <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">{this.props.title}</div>
                </div>
              
                <div className="fh5co_tags_all">

                    {this.state.status &&
                        this.state.characters.map((character, i) => {
                            var uri = character.resourceURI.split('/');
                            console.log(this.state.urlRouter+uri[6]);
                            return (
                               
                                <Link className="fh5co_tagg" to={this.state.urlRouter+uri[6]}>
                                {character.name}
                                </Link> 
                            );
                        }
                        )

                    }


                </div>
            </React.Fragment>


        )
    }
}
export default SliderTag;