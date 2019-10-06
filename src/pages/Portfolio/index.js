import React from "react";
// import cx from 'classnames';
import Button from "@material-ui/core/Button";
import { useParams } from 'react-router-dom';
// import style from './style.module.scss';

const Portfolio = props => {
    const { key } = useParams();
	return (
		<Button variant="contained" color="primary">
			{key}
		</Button>
	);
};

export default Portfolio;
