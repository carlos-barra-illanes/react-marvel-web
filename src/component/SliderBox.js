import React, { Component } from 'react';

import '../assets/css/media_query.css';
import '../assets/css/bootstrap.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/animate.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/owl.theme.default.css';
import '../assets/css/style_1.css';
import '../assets/css/animate.css';
import News from '../component/News'
import test_img from '../assets/images/nathan-mcbride-229637.jpg';
import NewsGuardian from './NewsGuardian';
import Tags from './Tags';



class SliderBox extends Component {

	render() {
		return (

			<div className="container-fluid pb-4 pt-4 paddding">
				<div className="container paddding">
					<div className="row mx-0">
						<NewsGuardian/>
						<Tags/>
						
					</div>





				</div>
			</div>

		);
	}
}
export default SliderBox;



