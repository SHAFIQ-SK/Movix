import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import SearchPage from "./pages/searchResult/SearchPage";
import PageNotFound from "./pages/404/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    apiTest();
  }, []);

  const apiTest = async () => {
    // fetchDataFromApi("/movie/popular").then((res) => {
    //   console.log(res);
    // });

    let res = await fetchDataFromApi("/movie/popular");
    const data = await res;
    // console.log(data);

    dispatch(getApiConfiguration(data));
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/search/:query" element={<SearchPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
