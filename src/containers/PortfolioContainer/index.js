import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Portfolio from "../../pages/Portfolio";
import Loading from "../../pages/Loading";

import { doFetchPortfolio } from "../../redux/actionCreators/portfolio";
import { selectPortfolioData, selectPortfolioDataStatus } from "../../redux/selectors/portfolio";

import { doFetchClientInfo, doSendClientInfo } from "../../redux/actionCreators/client";
import { selectClientData } from "../../redux/selectors/client";

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
  fetchClientInfo,
  sendClientInfo,
  clientInfo,
}) => {
  let { key } = useParams();
  useEffect(() => {
    fetchPortfolio({ key: key });
    const analyticsObject = ownProps.analytics;
    addAnalytics({ data: analyticsObject });
    fetchClientInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPortfolio, addAnalytics, key]);

  useEffect(() => {
    console.log(clientInfo);
    if (clientInfo) {
      sendClientInfo({ ...clientInfo, key: key });
    }
  }, [clientInfo, sendClientInfo, key]);

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
    fetchClientInfo: payload => dispatch(doFetchClientInfo(payload)),
    sendClientInfo: payload => dispatch(doSendClientInfo(payload)),
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps: ownProps,
    portfolioData: selectPortfolioData(state),
    portfolioDataStatus: selectPortfolioDataStatus(state),
    currentTheme: selectCurrentTheme(state),
    analytics: fetchAnalyticsFromStore(state),
    clientInfo: selectClientData(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);
