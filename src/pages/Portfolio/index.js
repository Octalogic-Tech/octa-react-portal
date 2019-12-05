import React, { useState, Fragment } from "react";
// import * as firebase from "firebase/app";
// import "firebase/analytics";
import ReactFullpage from "@fullpage/react-fullpage";
import { StyleSheet, css } from "aphrodite";
import Icon from "@mdi/react";
import changeCase from "change-case";
import { mdiMenuOpen, mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";

import colors from "../../styles/colors";

import Landing from "../../sections/Landing";
import Footer from "../../sections/Footer";
import WebAppPrimary from "../../sections/WebAppPrimary";
import MobileAppPrimary from "../../sections/MobileAppPrimary";
import EmergingAppPrimary from "../../sections/EmergingAppPrimary";

import Thumbnail from "../../components/Thumbnail";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const Portfolio = ({ toggleTheme, currentTheme, data, switchTheme }) => {
  // firebase.analytics().logEvent('select_content', {
  // 	content_type: 'image',
  // 	content_id: 'P12453',
  // 	items: [{ name: 'Kittens' }]
  //   });

  const [activeSection, setActiveSection] = useState("landing");
  const [activeSectionType, setActiveSectionType] = useState("landing");
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [fullPageApi, setFullPageApi] = useState(false);
  // const currentThemeType = currentTheme.palette.type;
  const currentThemeType = currentTheme;
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const renderSection = (section, fullpageApi) => {
    let component = null;
    switch (section.category.name) {
      case "Web Development":
        component = (
          <div className="section" key={section.id} anchor={section.id}>
            <WebAppPrimary
              key={section.id}
              data={section}
              activeSection={activeSection}
              activeSectionType={activeSectionType}
              fullpageApi={fullpageApi}
            />
          </div>
        );
        break;
      case "Mobile Development":
        component = (
          <div className="section" key={section.id} anchor={section.id}>
            <MobileAppPrimary
              key={section.id}
              data={section}
              activeSection={activeSection}
              activeSectionType={activeSectionType}
              fullpageApi={fullpageApi}
            />
          </div>
        );
        break;
      case "Emerging Tech":
        component = (
          <div className="section" key={section.id} anchor={section.id}>
            <EmergingAppPrimary
              key={section.id}
              data={section}
              activeSection={activeSection}
              activeSectionType={activeSectionType}
              fullpageApi={fullpageApi}
            />
          </div>
        );
        break;
      default:
        component = (
          <div className="section" key={section.id} anchor={section.id}>
            <WebAppPrimary
              key={section.id}
              data={section}
              activeSection={activeSection}
              activeSectionType={activeSectionType}
              fullpageApi={fullpageApi}
            />
          </div>
        );
    }
    return component;
  };

  const getNavData = data => {
    let anchors = [];
    let navigationTooltips = [];
    anchors.push("landing");
    navigationTooltips.push("Landing");
    data.components.forEach(function(project) {
      anchors.push(changeCase.paramCase(project.id));
      navigationTooltips.push(project.name);
    });
    anchors.push("footer");
    navigationTooltips.push("Footer");
    return { anchors, navigationTooltips };
  };

  const Menu = fullpageApi => {
    return (
      <div className={css(styles.header)}>
        <div className={css(styles.header_content)}>
          {currentThemeType === "dark" ? (
            <Icon
              className={css(styles.header_icon, styles.header_icon_dark)}
              path={mdiWhiteBalanceSunny}
              onClick={() => {
                toggleTheme();
                switchTheme();
              }}
              title="React"
              size={1.5}
            />
          ) : (
            <Icon
              className={css(styles.header_icon, styles.header_icon_light)}
              path={mdiWeatherNight}
              onClick={() => {
                toggleTheme();
                switchTheme();
              }}
              title="React"
              size={1.5}
            />
          )}

          <Icon
            className={css(
              styles.header_icon,
              currentThemeType === "dark" ? styles.header_icon_dark : styles.header_icon_light,
            )}
            path={mdiMenuOpen}
            onClick={() => {
              setSideBarOpen(true);
              navBarScroll();
            }}
            title="Menu Open"
            size={1.5}
          />
        </div>
        <SwipeableDrawer
          id="right-sidebar"
          anchor="right"
          open={isSideBarOpen}
          onClose={() => {
            setSideBarOpen(false);
          }}
          onOpen={() => {
            setSideBarOpen(true);
            navBarScroll();
          }}
          disableDiscovery={iOS}
        >
          <div id="menu" className={css(styles.sidebar)}>
            {fullPageApi ? (
              <Fragment>
                <Thumbnail
                  fullpageApi={fullPageApi}
                  key={"landing"}
                  activeSection={activeSection}
                  setSideBarOpen={setSideBarOpen}
                  component={{
                    id: "landing",
                    category: "Web",
                    name: "Landing",
                    key: "landing",
                    media: data.media,
                  }}
                />
                {data.components.map((component, index) => {
                  return (
                    <Thumbnail
                      key={component.id}
                      fullpageApi={fullPageApi}
                      activeSection={activeSection}
                      setSideBarOpen={setSideBarOpen}
                      component={component}
                    />
                  );
                })}
                <Thumbnail
                  fullpageApi={fullPageApi}
                  key="footer"
                  activeSection={activeSection}
                  setSideBarOpen={setSideBarOpen}
                  component={{
                    id: "footer",
                    category: "Web",
                    name: "Footer",
                    key: "footer",
                    media: data.media,
                  }}
                />
              </Fragment>
            ) : (
              <Fragment></Fragment>
            )}
          </div>
        </SwipeableDrawer>
      </div>
    );
  };

  const navBarScroll = () => {
    setTimeout(function() {
      const element = document.getElementById(activeSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <Fragment>
      <Menu fullpageApi={fullPageApi} />
      <ReactFullpage
        licenseKey={"4FC26219-C3024BCD-A2C3C34F-D83CCD47"}
        scrollingSpeed={1000}
        dragAndMove={true}
        navigation={true}
        navigationPosition={"right"}
        slidesNavigation={true}
        controlArrows={false}
        anchors={getNavData(data).anchors}
        /* navigationTooltips={getNavData(data).navigationTooltips} */
        lockAnchors={true}
        normalScrollElements={"#right-sidebar"}
        menu={"#menu"}
        onLeave={(origin, destination, direction) => {
          data.components.forEach((item, index) => {
            if (destination.anchor === item.id) {
              setActiveSectionType(item.category);
              setActiveSection(destination.anchor);
            }
          });

          if (destination.anchor === "landing" || destination.anchor === "footer") {
            setActiveSectionType(destination.anchor);
            setActiveSection(destination.anchor);
          }
        }}
        render={({ state, fullpageApi, onLeave }) => {
          setFullPageApi(fullpageApi);
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Landing
                  key={"landing"}
                  anchor={"landing"}
                  data={data}
                  activeSection={activeSectionType}
                  currentThemeType={currentThemeType}
                  fullpageApi={fullpageApi}
                  toggleTheme={toggleTheme}
                />
              </div>
              {data.components.map((component, index) => {
                return renderSection(component, fullpageApi);
              })}
              <div className="section">
                <Footer
                  key={"footer"}
                  anchor={"footer"}
                  data={data}
                  activeSection={activeSectionType}
                  currentThemeType={currentThemeType}
                  fullpageApi={fullpageApi}
                  toggleTheme={toggleTheme}
                />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    position: "fixed",
    top: "0",
    zIndex: "100",
  },
  header_content: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  header_icon: {
    cursor: "pointer",
    margin: "1rem 1rem",
  },
  header_icon_dark: {
    fill: colors.gray.three,
  },
  header_icon_light: {
    fill: colors.gray.six,
  },
  sidebar: {
    width: "18rem",
    "@media only screen and (max-width: 600px)": {
      width: "15rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      width: "17rem",
    },
  },
});

export default Portfolio;
