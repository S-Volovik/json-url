import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const style = {
	btn: {
		position: 'absolute',
		right: '0',
		borderRadius: '0',
		padding: '17px 25px',
	},
};

const Main = (props) => {
	const getJSON = (e) => {
		e.preventDefault();

		props.setTimer('');
		props.setLoading(true);

		if (props.url !== undefined && props.url !== '') {
			const fetchUrl = async () => {
				try {
					const res = await axios.get(
						`https://api-demo.cognitiveadscience.com/analyze-demo?url=${props.url}/`,
						{
							mode: 'no-cors',
						}
					);
					
					// set time
					props.setTimer(res.data.time);
					delete res.data.time;

					// set json data
					props.setJSONData(res.data);

					props.setLoading(false);
				} catch {
					// reset
					props.setTimer('');
					props.setUrlError(`Incorrect url "${props.url}"`);
					props.setJSONData('');
					props.setLoading(false);
				}
			};

			fetchUrl();

			// reset error
			props.setUrlError('');
			// reset url
			props.setUrl('');
		} else {
			props.setTimer('');
			props.setUrl('');
			props.setUrlError('Please, write correct URL');
			props.setLoading(false);
			props.setJSONData('');
		}
	};

	return (
		<main className="main">
			<div className="search">
				<input
					type="text"
					placeholder="Enter the URL..."
					onChange={(e) => props.setUrl(e.target.value)}
					onKeyDown={(e) => {
						if (e.keyCode === 13) {
							getJSON(e);
						}
					}}
					value={props.url}
				/>
				<Button
					type="submit"
					style={style.btn}
					variant="contained"
					color="primary"
					onClick={(e) => getJSON(e)}
				>
					Submit
				</Button>
				{props.url_error && (
					<span className="input__error">{props.url_error}</span>
				)}
			</div>
		</main>
	);
};

export default Main;
