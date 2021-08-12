import React, { Component } from "react";
import Loading from "./Loading";
import axios from "axios";
import Global from "../Global";
import test_img from "../assets/images/Marvel-480x320.jpg";
import moment from "moment";

export default class NewsGuardian extends Component {
  urlNews = Global.urlNews;
  state = {
    news: [],
    status: "error",
    isLoading: true,
  };

  getNews = () => {
    try {
      axios.get(this.urlNews).then((res) => {
        this.setState({
          news: res.data.response.results,
          status: "success",
          isLoading: false,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentWillMount() {
    this.getNews();
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      return (
        <div
          className="col-md-8 animate-box fadeInLeft animated-fast"
          data-animate-effect="fadeInLeft"
        >
          <div>
            <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
              Noticias desde www.theguardian.com
            </div>
          </div>
          {this.state.news.map((newsCu, i) => {
            return (
              <div key={i} className="row pb-4">
                <div className="col-md-5">
                  <div className="fh5co_hover_news_img">
                    <div className="fh5co_news_img">
                      <img src={test_img} alt="" />
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className="col-md-7 animate-box fadeInUp animated-fast">
                  <a href={newsCu.webUrl} className="fh5co_magna py-2">
                    {newsCu.webTitle}
                  </a>
                  <div className="fh5co_consectetur">
                    Seccion : {newsCu.sectionName}
                  </div>
                  <div className="fh5co_consectetur">
                    Fecha de publicacion :{" "}
                    {moment(newsCu.webPublicationDate).format("LL")}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
