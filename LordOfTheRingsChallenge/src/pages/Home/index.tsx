import { useEffect, useState } from "react";
import api from "../../services/api";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import "../../styles/pages/home.scss"

export const Home = () => {
  const [movies, setMovies] = useState<any>();
  const [filteredMovies, setFilterMovies] = useState<any>();

  useEffect(() => {
    async function loadData() {
      const {
        data: { docs },
      } = await api.get("movie");
      setMovies(docs);
      setFilterMovies(docs);
    }
    loadData();
  }, []);

  return (
    <div className="container-home">
      <Header movies={movies} setFilterMovies={setFilterMovies} />
      <div className="container-item">
        {filteredMovies &&
          filteredMovies.map((movie: any) => <Card movieData={movie} />)}
      </div>
    </div>
  );
};
