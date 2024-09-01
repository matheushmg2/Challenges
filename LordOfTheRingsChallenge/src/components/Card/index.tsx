import "../../styles/components/card.scss";
import IAcademy from "../../assets/Academy award.svg";
import IVector from "../../assets/Vector.svg";

export const Card = ({ movieData }: any) => {

  return (
    <div className="container-cart">
      <div className="wrapper-image-logo">
        <img src={IVector} alt="IVector" />
      </div>
      <div className="container-items">
        <div className="wrapper-items">
          <h3>{movieData.name}</h3>
          <p>{movieData.runtimeInMinutes} min</p>
        </div>
        <div className="wrapper-award">
          <img src={IAcademy} alt="IAcademy" />
          <p>{movieData.academyAwardWins} Wins & {movieData.academyAwardNominations} Nominations</p>
        </div>
        <div className="wrapper-budget">
          <div className="budget">
            <h4>Budget</h4>
            <p>${movieData.budgetInMillions} M</p>
          </div>
          <div className="budget">
            <h4>Revenue</h4>
            <p>${movieData.boxOfficeRevenueInMillions} M</p>
          </div>
        </div>
      </div>
    </div>
  );
};
