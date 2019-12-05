import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import Icon from "@mdi/react";
import { mdiCheckboxBlankCircle } from "@mdi/js";

import "html5-device-mockups";

import base from "../../styles/base";
import colors from "../../styles/colors";
import responsive from "../../styles/responsive";

import Technology from "../../components/Technology";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import "../../styles/overrides.css";
import { heightKeyframes, translateKeyFrames } from "../../styles/stripeAnimations";

const navDotStyling = currentValue => {
  const classes = [
    "landing",
    "footer",
    "web-app-container",
    "mobile-app-container",
    "emerging-app-container",
  ];
  classes.map(value => {
    if (currentValue === value) {
      document.body.classList.add(value);
    } else {
      document.body.classList.remove(value);
    }
    return false;
  });
};

const EmergingAppPrimary = ({ data, activeSection, activeSectionType, fullpageApi }) => {
  const isActive = useRef();

  useEffect(() => {
    isActive.current = false;
  }, []);

  if (activeSectionType === data.category) {
    // This allows us to run animations on first load of the section
    isActive.current = true;
    navDotStyling("emerging-app-container");
  }

  function createMarkup(html) {
    return {
      __html: html,
    };
  }

  return (
    <Box className={css(styles.container)}>
      <div className={css(styles.strip_wrapper)}>
        <div
          className={css(styles.strip_large, styles.skew, isActive.current && styles.slideIn_large)}
        ></div>
        <div
          className={css(
            styles.strip_medium,
            styles.skew,
            isActive.current && styles.slideIn_regular,
          )}
        ></div>
        <div
          className={css(styles.strip_small, styles.skew, isActive.current && styles.slideIn_small)}
        ></div>
      </div>
      <div className={css(styles.content_wrapper)}>
        <div className={css(styles.frame_wrapper)}>
          <div className="device-wrapper emerging_app">
            <div
              className="device"
              data-device="iMac"
              data-orientation="portrait"
              data-color="black"
            >
              <div className="screen">
                <img className={css(styles.frame_image)} src={data.cover.link} alt="project" />
              </div>
              <div className="button"></div>
            </div>
          </div>
        </div>
        <div className={css(styles.details_wrapper)}>
          <Typography variant="overline" display="block" gutterBottom>
            {data.category.name}
            <Icon className={css(styles.overline_icon)} path={mdiCheckboxBlankCircle} size={0.4} />
            {data.project.name}
          </Typography>
          <Typography variant="h4" gutterBottom className={css(styles.technology_wrapper)}>
            {data.name}
          </Typography>

          <div
            dangerouslySetInnerHTML={createMarkup(data.description)}
            className={css(responsive.hide_sm_down)}
          ></div>
          <div
            dangerouslySetInnerHTML={createMarkup(data.summary)}
            className={css(responsive.hide_md_up)}
          ></div>

          <div className={css(styles.technology_wrapper)}>
            <Link to={"/project/" + data.project.id} className={"link"}>
              <Fab
                variant="extended"
                color="primary"
                aria-label="View More"
                className={css(styles.view_more_button)}
              >
                View More
              </Fab>
            </Link>
          </div>
          <div className={css(styles.technology_wrapper)}>
            {data.technology.map((tech, index) => {
              return (
                <Technology
                  key={data.id + "_" + tech.id}
                  name={tech.name}
                  icon={tech.icon.name}
                  color={"purple"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: base.container,
  content_wrapper: base.content_wrapper,
  overline_icon: base.overline_icon,
  strip_wrapper: {
    position: "absolute",
    top: "0",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    "@media only screen and (max-width: 600px)": {
      top: "0",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      top: "0",
    },
  },
  strip_large: {
    position: "absolute",
    top: "0",
    marginTop: "-10rem",
    height: "150%",
    width: "7rem",
    left: "7rem",
    backgroundColor: colors.purple.dark,
    "@media only screen and (min-width: 770px)": {
      marginTop: "-10rem",
      width: "7rem",
      left: "14rem",
    },
    "@media only screen and (max-width: 600px)": {
      marginTop: "-20rem",
      left: "0rem",
      width: "3rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      marginTop: "-20rem",
      left: "0rem",
      width: "5rem",
    },
  },
  strip_medium: {
    position: "absolute",
    top: "0",
    marginTop: "-10rem",
    height: "150%",
    width: "7rem",
    left: "14rem",
    backgroundColor: colors.purple.regular,
    "@media only screen and (min-width: 770px)": {
      marginTop: "-10rem",
      width: "7rem",
      left: "14rem",
    },
    "@media only screen and (max-width: 600px)": {
      marginTop: "-30rem",
      left: "-30rem",
      width: "3rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      marginTop: "-20rem",
      left: "0rem",
      width: "5rem",
    },
  },
  strip_small: {
    position: "absolute",
    top: "0",
    height: "50%",
    backgroundColor: colors.purple.light,
    "@media only screen and (min-width: 770px)": {
      marginTop: "-10rem",
      width: "6rem",
      left: "21rem",
    },
    "@media only screen and (max-width: 600px)": {
      marginTop: "-30rem",
      left: "-30rem",
      width: "3rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      marginTop: "-20rem",
      left: "0rem",
      width: "5rem",
    },
  },
  skew: {
    transform: "rotate(30deg)",
    "@media only screen and (max-width: 600px)": {
      transform: "rotate(35deg)",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      transform: "rotate(45deg)",
    },
  },
  slideIn_large: {
    animationName: [heightKeyframes, translateKeyFrames.desktop.large],
    animationDuration: "2s",
    animationTimingFunction: "linear",
    animationFillMode: "forwards",
    "@media only screen and (max-width: 600px)": {
      animationName: [heightKeyframes, translateKeyFrames.mobile.large],
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      animationName: [heightKeyframes, translateKeyFrames.tab.large],
    },
  },
  slideIn_regular: {
    animationName: [heightKeyframes, translateKeyFrames.desktop.medium],
    animationDuration: "2s",
    animationTimingFunction: "linear",
    animationFillMode: "forwards",
    "@media only screen and (max-width: 600px)": {
      animationName: [heightKeyframes, translateKeyFrames.mobile.medium],
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      animationName: [heightKeyframes, translateKeyFrames.tab.medium],
    },
  },
  slideIn_small: {
    animationName: [heightKeyframes, translateKeyFrames.desktop.small],
    animationDuration: "2s",
    animationTimingFunction: "linear",
    animationFillMode: "forwards",
    "@media only screen and (max-width: 600px)": {
      animationName: [heightKeyframes, translateKeyFrames.mobile.small],
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      animationName: [heightKeyframes, translateKeyFrames.tab.small],
    },
  },
  frame_wrapper: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    "@media only screen and (max-width: 600px)": {
      flex: "1",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      flex: "1",
    },
  },
  frame_image: {
    width: "100%",
  },
  details_wrapper: {
    padding: "2rem",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media only screen and (max-width: 600px)": {
      flex: "2",
      justifyContent: "flex-start",
      padding: "0rem 1rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      flex: "2",
      padding: "0rem 6rem",
    },
  },
  project_title: {},
  view_more_button: {
    fontWeight: "600",
    color: colors.gray.nine,
    margin: "1rem 0rem",
    padding: "0rem 2rem",
    backgroundColor: colors.purple.light,
    ":hover": {
      backgroundColor: colors.purple.regular,
    },
    "@media (max-width: 769px)": {
      justifyContent: "center",
    },
  },
  view_more_wrapper: {
    display: "flex",
    "@media only screen and (max-width: 600px)": {
      justifyContent: "center",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      justifyContent: "center",
    },
  },
  technology_wrapper: {
    display: "flex",
    "@media only screen and (max-width: 600px)": {
      justifyContent: "center",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      justifyContent: "center",
    },
  },
});

export default EmergingAppPrimary;
