import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";

import colors from "../../styles/colors";
import LoadingComponent from "../../components/Loading";

const Landing = props => {
  return <div className={css(styles.content_horizontal)}>hello</div>;
};

const styles = StyleSheet.create({
  content_horizontal: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  content_vertical: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  loader_wrapper: {
    width: "12rem",
    height: "12rem",
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    "@media only screen and (max-width: 600px)": {
      height: "10rem",
      width: "10rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      height: "10rem",
      width: "10rem",
    },
  },
  loader_text_wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  loader_text: {
    fontSize: "2.3rem",
    color: colors.octalogic.base,
  },
  under_construction_wrapper: {
    marginTop: "5rem",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "center",
    "@media only screen and (max-width: 600px)": {
      width: "90%",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      width: "70%",
    },
  },
  under_construction_text: {
    fontSize: "1.25rem",
    textAlign: "center",
    color: colors.octalogic.base,
  },
  technology_wrapper: {
    display: "flex",
    justifyContent: "center",
    "@media only screen and (max-width: 600px)": {
      justifyContent: "center",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      justifyContent: "center",
    },
  },
  view_more_button: {
    fontWeight: "600",
    margin: "1rem 0rem",
    padding: "0rem 2rem",
    backgroundColor: colors.blue.ocean,
    ":hover": {
      backgroundColor: colors.blue.teal,
    },
    "@media (max-width: 769px)": {
      justifyContent: "center",
    },
  },
});

export default Landing;
