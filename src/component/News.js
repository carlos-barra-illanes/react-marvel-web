import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import axios from "axios";
import Global from "../Global";
import test_img from "../assets/images/Marvel-480x320.jpg";
import moment from 'moment';
import 'moment/locale/es';


export default function News() {
  const urlNews = Global.urlNews;

  const [news, setNews] = useState([]);
  const [status, setstatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getNews = () => {
      
    try {
      axios.get(urlNews).then((res) => {
        setNews(res.data.response.results);
        setIsLoading(false);

      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  },[]);
  

  return (
   isLoading?

   <div>CARGANDO</div>
   
   :

    <div
      className="col-md-8 animate-box fadeInLeft animated-fast"
      data-animate-effect="fadeInLeft"
    >
      <div>
        <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
          Noticias desde www.theguardian.com
        </div>
      </div>
      {          
      news.map((newsCu, i) => {
        return(
            <div  key={i} className="row pb-4">
            <div className="col-md-5">
              <div className="fh5co_hover_news_img">
                <div className="fh5co_news_img">
                  <img src={test_img} alt="" />
                </div>
                <div></div>
              </div>
            </div>
            <div className="col-md-7 animate-box fadeInUp animated-fast">
              <a href= {newsCu.webUrl} className="fh5co_magna py-2">
               {newsCu.webTitle}
              </a>
              <div className="fh5co_consectetur">
              Seccion : {newsCu.sectionName}
             
              </div>
              <div className="fh5co_consectetur">
              Fecha de publicacion :  {moment(newsCu.webPublicationDate).format('LL')}
             
              </div>
             
            </div>
          </div>
        
        ) 
      })
      
      }

   
    </div>
  );
}
