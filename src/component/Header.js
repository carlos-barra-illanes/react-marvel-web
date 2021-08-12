import React from "react";
import '../assets/css/media_query.css';
import '../assets/css/bootstrap.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/animate.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/owl.theme.default.css';
import '../assets/css/style_1.css';
import moment from 'moment';
import 'moment/locale/es';
import Login from './Login'


import logo from '../assets/images/logo.png';

const Header = () => {



	moment.defineLocale('en-foo', {
		parentLocale: 'es',
	});
	var datetime = moment().toDate();
	var dateToday = moment(datetime).format('LL')


	return (

		<React.Fragment>
			<div className="container-fluid fh5co_header_bg">
				<div className="container">
					<div className="row">
						<div className="col-12 fh5co_mediya_center"><a href="#" className="color_fff_margin color_fff fh5co_mediya_setting"><i
							className="fa fa-clock-o"></i>  {dateToday} </a>

							<a href="#" className="color_fff fh5co_mediya_setting">El sitio para buscar todo de MARVEL </a>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid" >
				<div className="container">
					<div className="row">

						<div className="col-12 col-md-3 fh5co_padding_menu">
							<img src={logo} alt="img" className="fh5co_logo_width center" />
						</div>							
						<Login />						
					</div>
				</div>
			</div>
		</React.Fragment>
	);

}
export default Header;