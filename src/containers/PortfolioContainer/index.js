import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Portfolio from "../../pages/Portfolio";

import { doFetchPortfolio } from "../../redux/actionCreators/portfolio";
import {
	selectPortfolioData,
	selectPortfolioDataStatus
} from "../../redux/selectors/portfolio";

const PortfolioContainer = ({
	ownProps,
	fetchPortfolio,
	portfolioData,
	portfolioDataStatus
}) => {
	let { key } = useParams();

	useEffect(() => {
		fetchPortfolio({ key: key });
	}, [fetchPortfolio, key]);

	return (
		<Fragment>
			{portfolioDataStatus ? (
				<span>No loaded</span>
			) : (
				<Portfolio
					toggleTheme={ownProps.toggleTheme}
					currentTheme={ownProps.currentTheme}
					data={portfolioData}
				/>
			)}
		</Fragment>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		fetchPortfolio: payload => dispatch(doFetchPortfolio(payload))
	};
};

const mapStateToProps = (state, ownProps) => {
	return {
		ownProps: ownProps,
		portfolioData: selectPortfolioData(state),
		portfolioDataStatus: selectPortfolioDataStatus(state)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);
