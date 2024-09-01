import { useEffect, useRef, useState } from "react";
import CIcon from "../../assets/convincely.svg";
import "../../styles/components/header.scss";

export const Header = ({ movies, setFilterMovies }: any) => {
  const refInput = useRef<any>();

  const [dataValue, setDataValue] = useState<any>({
    runTime: 0,
    budget: 0,
  });

  const inputChange = () => {
    const newMovie = movies.filter((movie: { name: string }) =>
      movie.name.toLowerCase().includes(refInput.current.value.toLowerCase())
    );
    setFilterMovies(newMovie);

    aveMovies(newMovie);
  };

  const aveMovies = (movies: any[]) => {
    const runTime =
      movies.reduce(
        (acc: number, cur: { runtimeInMinutes: number }) =>
          cur.runtimeInMinutes + acc,
        0
      ) / movies.length; // acc -> Valor acumulador | cur -> valor corrente, valor atual
    const budget = movies.reduce(
      (acc: number, cur: { budgetInMillions: number }) =>
        cur.budgetInMillions + acc,
      0
    );

    setDataValue({
      runTime,
      budget,
    });
  };

  const handleSelectChange = (event: any) => {
    const value = event.target.value;

    const greaterThan200 = movies.filter(
      (movie: { budgetInMillions: number }) => movie.budgetInMillions > 200
    );
    const lessThan200 = movies.filter(
      (movie: { budgetInMillions: number }) => movie.budgetInMillions < 200
    );

    if (movies && movies.length > 0) {
      if (value === "maior que 200") {
        aveMovies(greaterThan200);
        setFilterMovies(greaterThan200);
      } else if (value === "menor que 200") {
        aveMovies(lessThan200);
        setFilterMovies(lessThan200);
      } else {
        aveMovies(movies);
        setFilterMovies(movies);
      }
    }
  };

  useEffect(() => {
    if (movies && movies.length > 0) {
      aveMovies(movies);
    }
  }, [movies]);

  return (
    <>
      <div className="top-header">
        <img src={CIcon} alt="icon" />
        <p>Front End</p>
      </div>

      <div className="container-header">
        <h1>Lord of the Rings Movies</h1>
        <div className="ave-header-values">
          <div className="ave-values">
            <p>Ave. movie runtime: {dataValue.runTime}min</p>
            <p>Ave. movie budget: ${dataValue.budget}</p>
          </div>

          <div className="ave-elements">
            <input
              type="text"
              placeholder="Filter movies by name"
              ref={refInput}
              onChange={inputChange}
            />
            <select
              name="numberOption"
              id="numberOption"
              onChange={handleSelectChange}
            >
              <option value="">Selecione uma opção</option>
              <option value="maior que 200">Maior que 200</option>
              <option value="menor que 200">Menor que 200</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
