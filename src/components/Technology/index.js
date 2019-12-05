import React from "react";
import { StyleSheet, css } from "aphrodite";
// import Icon from "@mdi/react";
import Tooltip from "@material-ui/core/Tooltip";

import { Icon } from "@iconify/react";

import help from "@iconify/icons-mdi/help";
import react from "@iconify/icons-mdi/react";
import angularjs from "@iconify/icons-mdi/angularjs";
import database from "@iconify/icons-mdi/database";
import python from "@iconify/icons-mdi/language-python";
import php from "@iconify/icons-mdi/language-php";
import mongodb from "@iconify/icons-simple-icons/mongodb";
import sass from "@iconify/icons-mdi/sass";
// import json from "@iconify/icons-mdi/json";
import firebase from "@iconify/icons-mdi/firebase";
import nodejs from "@iconify/icons-mdi/nodejs";
import android from "@iconify/icons-fa-brands/android";
import clock from "@iconify/icons-mdi/clock";

import handlebars from "@iconify/icons-logos/handlebars";

import colors from "../../styles/colors";

const Technology = props => {
  return (
    <Tooltip title={props.name} placement="bottom" disableFocusListener disableTouchListener>
      <div className={css(styles.technology_circle, styles[props.color])}>
        <Icon
          className={css(styles.technology_icon)}
          icon={findIcon(props.icon)}
          title={props.name}
          size={1.5}
        />
      </div>
    </Tooltip>
  );
};

const findIcon = iconName => {
  let icon = help;
  switch (iconName) {
    case "mdiReact":
      icon = react;
      break;
    case "mdiAndroidDebugBridge":
      icon = android;
      break;
    case "mdiAngularjs":
      icon = angularjs;
      break;
    case "mdiDatabase":
      icon = database;
      break;
    case "mdiLanguagePython":
      icon = python;
      break;
    case "mdiLanguagePhp":
      icon = php;
      break;
    case "mdiGraphOutline":
      icon = mongodb;
      break;
    case "mdiSass":
      icon = sass;
      break;
    case "mdiJson":
      icon = mongodb;
      break;
    case "mdiFirebase":
      icon = firebase;
      break;
    case "mdiNodejs":
      icon = nodejs;
      break;
    case "handlebars":
      icon = handlebars;
      break;
    case "clock":
      icon = clock;
      break;
    default:
      icon = help;
  }
  return icon;
};

const styles = StyleSheet.create({
  technology_circle: {
    color: "black",
    height: "4rem",
    width: "4rem",
    margin: "1rem",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    transition: "all .2s ease-in-out",
    fontSize: "2rem",
    ":hover": {
      transform: "scale(1.1)",
      color: "white",
      fill: "white",
      fontSize: "2.5rem",
    },
    "@media only screen and (max-width: 600px)": {
      margin: "0.5rem",
    },
  },
  technology_icon: {
    fontSize: "inherit",
    fontWeight: "500",
    margin: "auto",
    fill: "inherit",
    ":hover": {
      fontSize: "inherit",
    },
  },
  purple: {
    backgroundColor: colors.purple.light,
    ":hover": {
      backgroundColor: colors.purple.regular,
    },
  },
  orange: {
    backgroundColor: colors.orange.regular,
    ":hover": {
      backgroundColor: colors.orange.dark,
    },
  },
  green: {
    backgroundColor: colors.green.regular,
    ":hover": {
      backgroundColor: colors.green.dark,
    },
  },
});

export default Technology;
