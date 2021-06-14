import PropTypes from "prop-types";
import styles from "./MainMovieInfo.module.scss";

const MainMovieInfo = ({ url, title, release_date, vote_average, overview, genres }) => {
  const normalizedUserScore = Math.round((vote_average / 10) * 100);
  return (
    <div className={styles.MainInfo}>
      <img src={url} alt={title} />
      <div className={styles.InfoContainer}>
        {" "}
        <h1>
          {title} <span>({release_date})</span>
        </h1>
        <p>User score: {normalizedUserScore}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MainMovieInfo.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default MainMovieInfo;
