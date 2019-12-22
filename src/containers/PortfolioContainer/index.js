import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Portfolio from "../../pages/Portfolio";
import Loading from "../../pages/Loading";

import { doFetchPortfolio } from "../../redux/actionCreators/portfolio";
import { selectPortfolioData, selectPortfolioDataStatus } from "../../redux/selectors/portfolio";

import { doThemeSwitch } from "../../redux/actionCreators/theme";
import { selectCurrentTheme } from "../../redux/selectors/theme";

import { doAddAnalyticsToStore } from "../../redux/actionCreators/analytics";
import { fetchAnalyticsFromStore } from "../../redux/selectors/analytics";

const PortfolioContainer = ({
  ownProps,
  fetchPortfolio,
  portfolioData,
  portfolioDataStatus,
  switchTheme,
  currentTheme,
  addAnalytics,
  analytics,
}) => {
  let { key } = useParams();
  useEffect(() => {
    fetchPortfolio({ key: key });
    const analyticsObject = ownProps.analytics;
    addAnalytics({ data: analyticsObject });
    // currentTheme={ownProps.currentTheme}
  }, [fetchPortfolio, addAnalytics, ownProps, key]);

  return (
    <Fragment>
      {portfolioDataStatus ? (
        <Loading />
      ) : (
        <Portfolio
          toggleTheme={ownProps.toggleTheme}
          data={portfolioData}
          switchTheme={switchTheme}
          currentTheme={currentTheme}
          analytics={analytics}
        />
      )}
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPortfolio: payload => dispatch(doFetchPortfolio(payload)),
    switchTheme: payload => dispatch(doThemeSwitch(payload)),
    addAnalytics: payload => dispatch(doAddAnalyticsToStore(payload)),
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps: ownProps,
    portfolioData: selectPortfolioData(state),
    portfolioDataStatus: selectPortfolioDataStatus(state),
    currentTheme: selectCurrentTheme(state),
    analytics: fetchAnalyticsFromStore(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);
