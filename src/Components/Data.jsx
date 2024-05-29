import { useEffect, useState } from "react";
import Like from "../assets/favorite_24dp_FILL0_wght400_GRAD0_opsz24 (1).png";
import { Link } from "react-router-dom";

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.realworld.io/api/articles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.articles);
        console.log(data.articles);
      });
  }, []);

  return (
    <>
      {data.map((value, index) => {
        return (
          <div className="data-wrapper" key={index}>
            <div className="profile-head">
              <div>
                <img src={value.author.image} className="profile" />
              </div>
              <div className="name-date">
                <div className="name">
                  <label>{value.author.username}</label>
                </div>
                <div className="date">
                  <label>Jan 4, 2020</label>
                </div>
              </div>
              <div className="like">
                <div>
                  <img src={Like} className="like-logo"></img>
                </div>
                <div>
                  <label>{value.favoritesCount}</label>
                </div>
              </div>
            </div>

            <div className="profile-body">
              <div className="title">
                <label>{value.title}</label>
              </div>
              <div className="desc">
                <label>{value.description}</label>
              </div>
              <label htmlFor=""></label>
            </div>
            <Link to={"/desc/:slug"} className="link">
              <label className="read-more">Read more....</label>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Data;
