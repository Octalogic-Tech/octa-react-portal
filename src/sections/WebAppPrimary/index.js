import React, { useRef, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import { slideInLeft } from "react-animations";
import Icon from "@mdi/react";
import { mdiCheckboxBlankCircle } from "@mdi/js";

import "html5-device-mockups";

import Technology from "../../components/Technology";

import base from "../../styles/base";
import colors from "../../styles/colors";
import responsive from "../../styles/responsive";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import "../../styles/overrides.css";

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

const WebAppPrimary = ({ data, activeSection, activeSectionType, fullpageApi }) => {
  // const [isThemeDark, setIsThemeDark] = useState(false);

  const isActive = useRef();

  useEffect(() => {
    isActive.current = false;
  }, []);

  if (activeSectionType === data.category && activeSection === data.id) {
    // This allows us to run animations on first load of the section
    isActive.current = true;
    navDotStyling("web-app-container");
  }

  function createMarkup(html) {
    return {
      __html: html,
    };
  }

  return (
    <Box className={css(styles.container)}>
      <div className={css(styles.triangle_wrapper)}>
        <div
          className={css(styles.triangle_large, isActive.current && styles.slideInLeft_large)}
        ></div>
        <div
          className={css(styles.triangle_medium, isActive.current && styles.slideInLeft_regular)}
        ></div>
        <div
          className={css(styles.triangle_small, isActive.current && styles.slideInLeft_small)}
        ></div>
      </div>
      <div className={css(styles.content_wrapper)}>
        <div className={css(styles.frame_wrapper)}>
          <div className="device-wrapper web_app">
            <div
              className="device"
              data-device="Macbook2015"
              data-orientation="portrait"
              data-color="white"
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

          {/* FIXME: revert comment when page is added */}
          {/* <div className={css(styles.technology_wrapper)}>
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
          </div> */}
          <div className={css(styles.technology_wrapper)}>
            {data.technology.map((tech, index) => {
              return (
                <Technology
                  key={data.id + "_" + tech.id}
                  name={tech.name}
                  icon={tech.icon.name}
                  color={"green"}
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
  triangle_wrapper: {
    position: "absolute",
    left: "0",
    top: "0",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  triangle_large: {
    position: "absolute",
    top: "-10rem",
    left: "0",
    width: "0",
    height: "0",
    borderTop: "40rem solid transparent",
    borderLeft: "40rem solid",
    borderLeftColor: colors.green.dark,
    borderBottom: "40rem solid transparent",
    "@media only screen and (max-width: 600px)": {
      top: "-4rem",
      borderTopWidth: "12rem",
      borderLeftWidth: "14em",
      borderBottomWidth: "12rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      top: "-5rem",
      borderTopWidth: "20rem",
      borderLeftWidth: "20rem",
      borderBottomWidth: "20rem",
    },
  },
  triangle_medium: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "0",
    height: "0",
    borderTop: "30rem solid transparent",
    borderLeft: "30rem solid ",
    borderLeftColor: colors.green.regular,
    borderBottom: "30rem solid transparent",
    "@media only screen and (max-width: 600px)": {
      borderTopWidth: "8rem",
      borderLeftWidth: "8rem",
      borderBottomWidth: "8rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      borderTopWidth: "15rem",
      borderLeftWidth: "15rem",
      borderBottomWidth: "15rem",
    },
  },
  triangle_small: {
    position: "absolute",
    top: "10rem",
    left: "0",
    width: "0",
    height: "0",
    borderTop: "20rem solid transparent",
    borderLeft: "20rem solid",
    borderLeftColor: colors.green.light,
    borderBottom: "20rem solid transparent",
    "@media only screen and (max-width: 600px)": {
      top: "4rem",
      borderTopWidth: "4rem",
      borderLeftWidth: "4rem",
      borderBottomWidth: "4rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      top: "5rem",
      borderTopWidth: "10rem",
      borderLeftWidth: "10rem",
      borderBottomWidth: "10rem",
    },
  },
  slideInLeft_large: {
    animationName: slideInLeft,
    animationDuration: "3s",
  },
  slideInLeft_regular: {
    animationName: slideInLeft,
    animationDuration: "2s",
  },
  slideInLeft_small: {
    animationName: slideInLeft,
    animationDuration: "1s",
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
    margin: "1rem 0rem",
    padding: "0rem 2rem",
    backgroundColor: colors.green.regular,
    ":hover": {
      backgroundColor: colors.green.dark,
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

export default WebAppPrimary;
