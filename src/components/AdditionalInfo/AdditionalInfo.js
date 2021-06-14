import { Route, NavLink, withRouter } from "react-router-dom";

import Cast from "../../components/Cast";
import Reviews from "../../components/Reviews";

import styles from "./AdditionalInfo.module.scss";

const AdditionalInfo = ({ match, location }) => {
  return (
    <div className={styles.AdditionalInfo}>
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink
            className="NavLink"
            activeClassName="NavLink--active"
            to={{
              pathname: `${match.url}/cast`,
              state: { from: location?.state?.from },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className="NavLink"
            activeClassName="NavLink--active"
            to={{
              pathname: `${match.url}/reviews`,
              state: { from: location?.state?.from },
            }}
          >
            Review
          </NavLink>
        </li>
      </ul>
      <Route path={`${match.path}/cast`} component={Cast}></Route>
      <Route path={`${match.path}/reviews`} component={Reviews}></Route>
    </div>
  );
};

export default withRouter(AdditionalInfo);
