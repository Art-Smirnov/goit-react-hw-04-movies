import styles from "./MainMovieInfo.module.scss";

const MainMovieInfo = ({ url, title, release_date, vote_average, overview, genres }) => {
  return (
    <div className={styles.MainInfo}>
      <img src={url} alt={title} />
      <div className={styles.InfoContainer}>
        {" "}
        <h1>
          {title} <span>({release_date})</span>
        </h1>
        <p>User score: {vote_average}</p>
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

export default MainMovieInfo;
