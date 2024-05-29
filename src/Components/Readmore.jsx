/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Banner from "./Banner";

function Readmore() {
  const [descData, setDescData] = useState([]);

  useEffect(() => {
    fetch("https://api.realworld.io/api/articles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDescData(data.articles);
        console.log(data.articles);
      });
  }, []);
  return (
    <>
      <Navigation logo="conduit" />
      {descData?.map((value, index) => {
        return (
          <div key={index}>
            <Banner
              heading={value.slug}
              desc={value.author.username}
              css="desc-banner"
              headingCss="desc-heading"
              descCss="desc-desc"
            />
            <div className="desc-label">
              <label>{value.body}</label>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Readmore;
