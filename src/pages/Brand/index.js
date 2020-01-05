import React from "react";
import { StyleSheet, css } from "aphrodite";

import colors from "../../styles/colors";
import LoadingComponent from "../../components/Loading";

const Loading = props => {
  return (
    <div className={css(styles.content_horizontal)}>
      <div className={css(styles.content_vertical)}>
        <div className={css(styles.loader_wrapper)}>
          <LoadingComponent spin={false} />
          <div className={css(styles.loader_text_wrapper)}>
            <span className={css(styles.loader_text)}>octalogic</span>
          </div>
        </div>
        <div>
          <span className={css(styles.loader_subtext)}>No Image Available</span>
        </div>
      </div>
    </div>
  );
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
    justifyContent: "space-around",
  },
  loader_wrapper: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "15rem",
    height: "15rem",
    "@media only screen and (max-width: 600px)": {
      height: "8rem",
      width: "8rem",
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
    fontSize: "5.3rem",
    color: colors.octalogic.base,
  },
  loader_subtext: {
    fontSize: "4.0rem",
    color: colors.white,
  },
});

export default Loading;
