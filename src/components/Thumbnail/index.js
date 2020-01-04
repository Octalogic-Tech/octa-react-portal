import React from "react";
import { StyleSheet, css } from "aphrodite";
import classNames from "classnames";

import colors from "../../styles/colors";

import landing from "../../assets/images/projects/webapp.png";
import headerImage from "../../assets/images/projects/header.png";
import footerImage from "../../assets/images/projects/footer.png";
import webDefaultImage from "../../assets/images/device_frames/web-default.png";
import mobileDefaultImage from "../../assets/images/device_frames/mobile-default.png";

const Thumbnail = ({ fullpageApi, component, activeSection, setSideBarOpen }) => {
  let thumbnail = null;
  const generateContent = () => {
    switch (component.category.name) {
      case "Web Development":
        thumbnail = (
          <div className={css(styles.thumbnail_wrapper_web)}>
            <img
              className={css(styles.thumbnail_image, styles.thumbnail_image_web)}
              src={component.cover ? component.cover.link : webDefaultImage}
              alt="project"
            />
          </div>
        );
        break;
      case "Mobile Development":
        thumbnail = (
          <div className={css(styles.thumbnail_wrapper_mobile)}>
            <img
              className={css(styles.thumbnail_image, styles.thumbnail_image_mobile)}
              src={component.cover ? component.cover.link : mobileDefaultImage}
              alt="project"
            />
          </div>
        );
        break;
      case "Emerging Tech":
        thumbnail = (
          <div className={css(styles.thumbnail_wrapper_emerging)}>
            <img
              className={css(styles.thumbnail_image, styles.thumbnail_image_emerging)}
              src={component.cover ? component.cover.link : webDefaultImage}
              alt="project"
            />
          </div>
        );
        break;
      case "Landing":
        thumbnail = (
          <div className={css(styles.thumbnail_wrapper_emerging)}>
            <img
              className={css(styles.thumbnail_image, styles.thumbnail_image_landing)}
              src={headerImage}
              alt="project"
            />
          </div>
        );
        break;
      case "Footer":
        thumbnail = (
          <div className={css(styles.thumbnail_wrapper_emerging)}>
            <img
              className={css(styles.thumbnail_image, styles.thumbnail_image_landing)}
              src={footerImage}
              alt="project"
            />
          </div>
        );
        break;
      default:
        thumbnail = (
          <div className={css(styles.thumbnail_wrapper_landing)}>
            <img
              className={css(styles.thumbnail_image, styles.thumbnail_image_landing)}
              src={headerImage}
              alt="project"
            />
          </div>
        );
    }
    return thumbnail;
  };

  const moveToSection = key => {
    fullpageApi.moveTo(key);
    setSideBarOpen(false);
  };

  // this.container.parentElement.scrollTop = 200;

  return (
    <div
      onClick={() => {
        moveToSection(component.id);
      }}
      key={component.id}
      id={component.id}
      data-menuanchor={component.id}
      className={classNames(
        activeSection === component.id ? "active" : "",
        css(styles.thumbnail_link),
      )}
    >
      <div className={classNames("thumbnail_wrapper", css(styles.thumbnail_wrapper))}>
        {generateContent(component)}
        <div className={css(styles.thumbnail_text)}>
          <p className={css(styles.thumbnail_title)}>{component.name}</p>
          <p className={css(styles.thumbnail_subtitle)}>{component.category.name}</p>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  thumbnail_wrapper: {
    margin: "2rem 1rem",
    border: "2px solid",
    borderColor: colors.gray.eight,
    backgroundColor: "rgba(5, 5, 5, 0.20)",
    borderRadius: "6px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    ":hover": {
      border: "2px solid",
      borderColor: colors.gray.five,
    },
  },
  thumbnail_link: {
    textDecoration: "none",
    cursor: "pointer",
  },
  thumbnail_title: {
    fontSize: "0.9rem",
    margin: "0rem",
    fontWeight: "700",
    "@media only screen and (max-width: 600px)": {
      fontSize: "0.7rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      fontSize: "0.8rem",
    },
  },
  thumbnail_subtitle: {
    fontSize: "0.8rem",
    margin: "0rem",
    fontWeight: "300",
    "@media only screen and (max-width: 600px)": {
      fontSize: "0.6rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      fontSize: "0.7rem",
    },
  },
  thumbnail_text: {
    padding: "0.5rem 1rem",
  },
  thumbnail_wrapper_web: {
    borderRadius: "6px 6px 0 0",
    width: "100%",
  },
  thumbnail_wrapper_mobile: {
    paddingTop: "0.5rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  thumbnail_wrapper_emerging: {
    borderRadius: "6px 6px 0 0",
    width: "100%",
  },
  thumbnail_wrapper_landing: {
    borderRadius: "6px 6px 0 0",
    width: "100%",
  },
  thumbnail_image: {
    borderRadius: "6px 6px 0 0",
  },
  thumbnail_image_web: {
    width: "100%",
  },
  thumbnail_image_mobile: {
    width: "40%",
  },
  thumbnail_image_emerging: {
    width: "100%",
  },
  thumbnail_image_landing: {
    width: "100%",
  },
});

export default Thumbnail;
