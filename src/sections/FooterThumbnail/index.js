import React, { useRef, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import { fadeInUp } from "react-animations";
import Icon from "@mdi/react";
import {
  mdiFacebook,
  mdiInstagram,
  mdiTwitter,
  mdiLinkedin,
  mdiWhatsapp,
  mdiPhone,
  mdiWeb,
  mdiEmail,
} from "@mdi/js";

import "html5-device-mockups";

import colors from "../../styles/colors";

import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import "../../styles/overrides.css";

import icon from "../../assets/images/icons/icon-white.png";

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

const FooterThumbnail = ({
  data,
  activeSection,
  activeSectionType,
  fullpageApi,
  currentThemeType,
}) => {
  const isActive = useRef();

  useEffect(() => {
    isActive.current = false;
  }, []);

  if (activeSectionType === "footer") {
    isActive.current = true;
    navDotStyling("footer");
  }

  return (
    <Box
      className={css(
        styles.container,
        currentThemeType === "dark" ? styles.container_dark : styles.container_light,
      )}
    >
      <div className={css(styles.content_wrapper)}>
        <div className={css(styles.content_data)}>
          <span className={css(styles.content_text)}>Thank You, {data.title}</span>

          <Fab
            variant="extended"
            color="primary"
            aria-label="Contact"
            className={css(styles.content_button)}
          >
            Get in Touch
          </Fab>
        </div>
      </div>
      <div className={css(styles.links_wrapper, isActive.current && styles.fadeInUp)}>
        <div className={css(styles.links_content)}>
          <div className={css(styles.icon_wrapper)}>
            <img className={css(styles.icon)} src={icon} alt="Icon" />
          </div>
          <div className={css(styles.technology_wrapper)}>
            <div className={css(styles.technology_container)}>
              {/* Facebook */}
              <Tooltip title="Like us on Facebook">
                <div className={css(styles.technology_circle)}>
                  <Icon
                    className={css(styles.technology_icon)}
                    path={mdiFacebook}
                    title="Facebook"
                    size={0.2}
                  />
                </div>
              </Tooltip>

              {/* Instagram */}
              <Tooltip title="Follow us on Instagram">
                <div className={css(styles.technology_circle)}>
                  <Icon
                    className={css(styles.technology_icon)}
                    path={mdiInstagram}
                    title="Instagram"
                    size={0.2}
                  />
                </div>
              </Tooltip>

              {/* Twitter */}
              <Tooltip title="Follow us on Twitter">
                <div className={css(styles.technology_circle)}>
                  <Icon
                    className={css(styles.technology_icon)}
                    path={mdiTwitter}
                    title="Twitter"
                    size={0.2}
                  />
                </div>
              </Tooltip>

              {/* Whatsapp */}
              <Tooltip title="Ping us on Whatsapp">
                <div className={css(styles.technology_circle)}>
                  <Icon
                    className={css(styles.technology_icon)}
                    path={mdiWhatsapp}
                    title="Whatsapp"
                    size={0.2}
                  />
                </div>
              </Tooltip>

              {/* LinkedIn */}
              <Tooltip title="Connect with us on LinkedIn">
                <div className={css(styles.technology_circle)}>
                  <Icon
                    className={css(styles.technology_icon)}
                    path={mdiLinkedin}
                    title="LinkedIn"
                    size={0.2}
                  />
                </div>
              </Tooltip>

              {/* Phone */}
              <Tooltip title="Call us Maybe">
                <div className={css(styles.technology_circle)}>
                  <Icon
                    className={css(styles.technology_icon)}
                    path={mdiPhone}
                    title="Call"
                    size={0.2}
                  />
                </div>
              </Tooltip>

              {/* Email */}
              <Tooltip title="Drop us a line at">
                <div className={css(styles.technology_circle)}>
                  <Icon
                    className={css(styles.technology_icon)}
                    path={mdiEmail}
                    title="Email"
                    size={0.2}
                  />
                </div>
              </Tooltip>

              {/* Website */}
              <Tooltip title="Check us out ;)">
                <div className={css(styles.technology_circle)}>
                  <Icon
                    className={css(styles.technology_icon)}
                    path={mdiWeb}
                    title="Octalogic Tech Website"
                    size={0.2}
                  />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </Box>
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
      paddingRight: "2px",
      paddingLeft: "2px",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      paddingTop: "1rem",
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
  polygon_wrapper: {
    position: "absolute",
    left: "0",
    bottom: "0",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  polygon_first: {
    position: "absolute",
    backgroundColor: colors.blue.teal,
    bottom: "-20rem",
    left: "-15rem",
    height: "25rem",
    width: "200%",
    transform: "rotateZ(15deg)",
    boxShadow: "10px -8px 6px 1px rgba(0, 0, 0, .2)",
    zIndex: "1",
    "@media only screen and (max-width: 600px)": {
      height: "35rem",
    },
    "@media only screen and (min-width:601px) and (max-width: 769px)": {
      height: "35rem",
    },
  },
  polygon_second: {
    position: "absolute",
    backgroundColor: colors.blue.ocean,
    bottom: "-20rem",
    right: "-15rem",
    height: "25rem",
    width: "200%",
    transform: "rotateZ(-15deg)",
    boxShadow: "10px -8px 6px 1px rgba(0, 0, 0, .2)",
    zIndex: "1",
    "@media only screen and (max-width: 600px)": {
      height: "35rem",
    },
    "@media only screen and (min-width:601px) and (max-width: 769px)": {
      height: "35rem",
    },
  },
  polygon_third: {
    position: "absolute",
    backgroundColor: colors.blue.aquamarine,
    bottom: "-20rem",
    left: "-15rem",
    height: "32rem",
    width: "200%",
    transform: "rotateZ(15deg)",
    boxShadow: "10px -8px 6px 1px rgba(0, 0, 0, .2)",
    zIndex: "1",
    "@media only screen and (max-width: 600px)": {
      height: "40rem",
    },
    "@media only screen and (min-width:601px) and (max-width: 769px)": {
      height: "45rem",
    },
  },
  polygon_fourth: {
    position: "absolute",
    backgroundColor: colors.blue.turquoise,
    bottom: "-20rem",
    right: "-15rem",
    height: "32rem",
    width: "200%",
    transform: "rotateZ(-15deg)",
    boxShadow: "10px -8px 6px 1px rgba(0, 0, 0, .2)",
    zIndex: "1",
    "@media only screen and (max-width: 600px)": {
      height: "40rem",
    },
    "@media only screen and (min-width:601px) and (max-width: 769px)": {
      height: "45rem",
    },
  },
  content_wrapper: {
    width: "100%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
  },
  content_data: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  content_text: {
    fontSize: "12px",
    "@media only screen and (max-width: 600px)": {
      fontSize: "6px",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      fontSize: "8px",
    },
  },
  content_button: {
    fontWeight: "600",
    margin: "4px auto",
    padding: "2px 4px",
    minHeight: "auto",
    height: "12px",
    width: "18px",
    fontSize: "3px",
    backgroundColor: colors.blue.ocean,
    ":hover": {
      backgroundColor: colors.blue.teal,
    },
    "@media (max-width: 769px)": {
      justifyContent: "center",
    },
  },
  content_link: {
    display: "flex",
    justifyContent: "center",
  },
  links_wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    zIndex: "2",
  },
  links_content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  icon_wrapper: {
    margin: "0rem 4px",
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    width: "18px",
    margin: "auto",
    "@media only screen and (max-width: 600px)": {
      width: "12px",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      width: "12px",
    },
  },
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: "3s",
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
  technology_container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    "@media only screen and (max-width: 600px)": {
      width: "70%",
      justifyContent: "center",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      width: "100%",
      justifyContent: "center",
    },
  },
  technology_circle: {
    color: "black",
    height: "8px",
    width: "8px",
    margin: "4px",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: colors.blue.aquamarine,
    transition: "all .2s ease-in-out",
    ":hover": {
      transform: "scale(1.1)",
      backgroundColor: colors.blue.ocean,
      color: "white",
      fill: "white",
    },
    "@media only screen and (max-width: 600px)": {
      height: "8px",
      width: "8px",
      margin: "3px",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      height: "8px",
      width: "8px",
      margin: "3px",
    },
  },
  technology_text: {
    fontSize: "1.2rem",
    fontWeight: "700",
    margin: "auto",
    color: "inherit",
  },
  technology_icon: {
    fontSize: "1.2rem",
    fontWeight: "500",
    margin: "auto",
    fill: "inherit",
    "@media only screen and (max-width: 600px)": {
      fontSize: "0.6rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      fontSize: "0.8rem",
    },
  },
});

export default FooterThumbnail;
