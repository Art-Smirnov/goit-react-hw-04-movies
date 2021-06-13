import React from "react";
import Container from "@material-ui/core/Container";

import Navigation from "../Navigation";

import styles from "./AppBar.module.scss";

const AppBar = () => {
  return (
    <header className={styles.AppBar}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default AppBar;
