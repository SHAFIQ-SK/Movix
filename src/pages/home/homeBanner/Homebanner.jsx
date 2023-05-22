import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Img from "../../../components/lazyloadimage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
const Homebanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  console.log();

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)].backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQhandler = (e) => {
    e.key === "Enter" && query.length > 0 ? navigate(`/search/${query}`) : null;
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-image">
          <Img src={background} />
        </div>
      )}

      <div className="opacity_layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQhandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Homebanner;
