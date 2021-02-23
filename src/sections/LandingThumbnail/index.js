import React, { useRef, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";

import colors from "../../styles/colors";

import icon from "../../assets/images/icons/icon-loader.png";

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

const LandingThumbnail = ({ currentThemeType, activeSection, activeSectionType, data }) => {
  console.log("LandingThumbnail -> currentThemeType", currentThemeType);
  const isActive = useRef();

  useEffect(() => {
    isActive.current = false;
  }, []);

  if (activeSectionType === "landing") {
    isActive.current = true;
    navDotStyling("landing");
  }

  function createMarkup(html) {
    return {
      __html: html,
    };
  }

  return (
    <div
      className={css(
        styles.container,
        currentThemeType === "dark" ? styles.container_dark : styles.container_light,
      )}
    >
      <div className={css(styles.content)}>
        <div className={css(styles.content_greeting)}>
          <div className={css(styles.greeting_main)}>
            <div className={css(styles.greeting_wrapper)}>
              <p
                className={css(
                  styles.greeting_main_hey,
                  currentThemeType === "dark" ? styles.light_text : styles.dark_text,
                )}
              >
                Hey
              </p>
              <p
                className={css(
                  styles.greeting_main_name,
                  currentThemeType === "dark"
                    ? styles.greeting_main_name_dark
                    : styles.greeting_main_name_light,
                )}
              >
                {data.title}
              </p>
            </div>
            <div className={css(styles.icon_wrapper)}>
              <img className={css(styles.icon)} src={icon} alt="Icon" />
              <span className={css(styles.icon_text)}>Octalogic</span>
            </div>
          </div>
        </div>
        <div className={css(styles.content_description)}>
          <div className={css(styles.description_wrapper)}>
            <p
              className={css(styles.description_text)}
              dangerouslySetInnerHTML={createMarkup(data.description)}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "8rem",
    width: "100%",
    "@media only screen and (max-width: 600px)": {
      paddingTop: "2rem",
      width: "40%",
      margin: "auto",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      paddingTop: "3rem",
      width: "70%",
      margin: "auto",
    },
  },
  container_dark: {
    backgroundColor: "#212121",
  },
  container_light: {
    backgroundColor: "#fafafa",
  },
  background_text_light: {
    color: colors.gray.four,
    opacity: "0.5",
  },
  background_text_dark: {
    color: colors.gray.eight,
    opacity: "0.5",
  },
  content: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    "@media only screen and (max-width: 600px)": {
      flexDirection: "column",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      flexDirection: "column",
    },
  },
  content_greeting: {
    height: "100%",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  content_description: {
    height: "100%",
    flex: "1",
    flexDirection: "column",
    "@media only screen and (max-width: 600px)": {
      flex: "2",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      flex: "2",
    },
  },
  light_text: {
    color: colors.gray.three,
  },
  dark_text: {
    color: colors.gray.six,
  },
  greeting_main: {
    height: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@media only screen and (max-width: 600px)": {
      justifyContent: "flex-end",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      justifyContent: "flex-end",
    },
  },
  greeting_main_hey: {
    margin: "0rem 1rem",
    fontSize: "16px",
    lineHeight: "1",
    "@media only screen and (max-width: 600px)": {
      fontSize: "6px",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      fontSize: "8px",
    },
  },
  greeting_main_name: {
    margin: "0rem 1rem",
    fontSize: "20px",
    lineHeight: "1",
    "@media only screen and (max-width: 600px)": {
      fontSize: "8px",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      fontSize: "12px",
    },
  },
  greeting_main_name_light: {
    color: colors.blue.teal,
  },
  greeting_main_name_dark: {
    color: colors.blue.aquamarine,
  },
  icon_wrapper: {
    margin: "1px",
    display: "flex",
    alignContent: "flex-start",
    "@media only screen and (max-width: 600px)": {
      display: "none",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      display: "none",
    },
  },
  icon: {
    height: "10px",
    margin: "1px 8px",
  },
  icon_text: {
    fontSize: "10px",
    lineHeight: "1",
    color: colors.octalogic.base,
  },
  description_wrapper: {
    margin: "16px 1px",
    "@media only screen and (max-width: 600px)": {
      margin: "16px 18px",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      margin: "16px 18px",
    },
  },
  description_text: {
    fontSize: "6px",
    "@media only screen and (max-width: 600px)": {
      fontSize: "4px",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      fontSize: "6px",
    },
  },
});

export default LandingThumbnail;
