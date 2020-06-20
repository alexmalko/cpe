import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles({
	root: {
		minWidth: 275
	},
	bullet: {
		display: 'flexk',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
});

export default function ScraperCom() {
	const initialData = JSON.parse(window.localStorage.getItem('data') || '[]');

	const [ data, setData ] = useState(initialData);

	async function fetchData() {
		const result = await axios('/api/scraper');
		setData(result.data);
		window.localStorage.setItem('data', JSON.stringify(result.data));
	}

	const classes = useStyles();

	return (
		<Fragment>
			{data.map((item) => (
				<Card className={classes.root} variant="outlined">
					<CardContent>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							<a href={item} target="_blank">
								{item}
							</a>
						</Typography>
					</CardContent>
				</Card>
			))}
			<Button
				style={{ justifyContent: 'center' }}
				onClick={fetchData}
				variant="contained"
				color="primary"
				startIcon={<CloudDownloadIcon />}
			>
				Fetch
			</Button>
		</Fragment>
	);
}
