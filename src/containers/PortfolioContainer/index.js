import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Portfolio from "../../pages/Portfolio";

import { doFetchPortfolio } from "../../redux/actionCreators/portfolio";
import {
	selectPortfolioData,
	selectPortfolioDataStatus
} from "../../redux/selectors/portfolio";

import { doThemeSwitch } from "../../redux/actionCreators/theme";
import { selectCurrentTheme } from "../../redux/selectors/theme";

const PortfolioContainer = ({
	ownProps,
	fetchPortfolio,
	portfolioData,
	portfolioDataStatus,
	switchTheme,
	currentTheme
}) => {
	let { key } = useParams();

	useEffect(() => {
		fetchPortfolio({ key: key });
		// currentTheme={ownProps.currentTheme}
	}, [fetchPortfolio, key]);

	return (
		<Fragment>
			{portfolioDataStatus ? (
				<span>No loaded</span>
			) : (
				<Portfolio
					toggleTheme={ownProps.toggleTheme}
					data={portfolioData}
					switchTheme={switchTheme}
					currentTheme={currentTheme}
				/>
			)}
		</Fragment>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		fetchPortfolio: payload => dispatch(doFetchPortfolio(payload)),
		switchTheme: payload => dispatch(doThemeSwitch(payload))
	};
};

const mapStateToProps = (state, ownProps) => {
	return {
		ownProps: ownProps,
		portfolioData: selectPortfolioData(state),
		portfolioDataStatus: selectPortfolioDataStatus(state),
		currentTheme: selectCurrentTheme(state)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);
