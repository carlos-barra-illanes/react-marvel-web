import React, { useState, useEffect } from "react";
import axios from "axios";
import Global from "../Global";
import Loading from "./Loading";

export default function Tags() {
  const urlTags = Global.urlTags;
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTags = () => {
    try {
      axios.get(urlTags).then((res) => {
        setTags(res.data.response.results);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
    console.log(tags);
  };
  useEffect(() => {
    getTags();
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <div
      className="col-md-3 animate-box fadeInRight animated-fast"
      data-animate-effect="fadeInRight"
    >
      <div>
        <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
          Tags
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="fh5co_tags_all">

      {tags.map((tag, i) => {
            return (
                <a key={i} href={tag.webUrl} className="fh5co_tagg">
                {tag.webTitle}
              </a>
            );
          })}


        

      </div>
    </div>
  );
}
