import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
const Homebanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchQhandler = (e) => {
    e.key === "Enter" && query.length > 0 ? navigate(`/search/${query}`) : null;
  };
  return (
    <div className="heroBanner">
      <div className="wrapper">
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
      </div>
    </div>
  );
};

export default Homebanner;
