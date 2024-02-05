import "../../main.css";
import "./card.css";

export const Card = ({ img, name, region, population, capital }) => {
  return (
    <li className="hero__item">
      <img
        className="hero__img"
        src={img}
        alt="USA flag"
      />
      <div className="hero__title-wrapper">
        <h3 className="hero__title">{name}</h3>
        <p className="hero__title-desc">
          Population:
          <span className="hero__title-add">{population}</span>
        </p>
        <p className="hero__title-desc">
          Region:
          <span className="hero__title-add">{region}</span>
        </p>
        <p className="hero__title-desc">
          Capital:
          <span className="hero__title-add">{capital}</span>
        </p>
      </div>
    </li>
  );
};
