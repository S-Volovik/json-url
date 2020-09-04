import React, { useState } from 'react';
import './App.css';

// components
import Main from './components/Main';
import Code from './components/Code';
import Header from './components/Header';
import CircularProgress from '@material-ui/core/CircularProgress';

const App = () => {
	const [json_data, setJSONData] = useState('');
	const [url, setUrl] = useState('');
	const [url_error, setUrlError] = useState('');
	const [loading, setLoading] = useState(false);
	const [timer, setTimer] = useState('');

	return (
		<>
			<div className="container">
				<Header />
				<Main
					json_data={json_data}
					setJSONData={setJSONData}
					url={url}
					setUrl={setUrl}
					url_error={url_error}
					setUrlError={setUrlError}
					setLoading={setLoading}
					timer={timer}
					setTimer={setTimer}
				/>
				{loading && <CircularProgress className="logo__loading" />}
				{timer && (
					<span className="speed__header">
						Request-response speed:  <strong className="timer__strong">{timer} ms</strong>.
					</span>
				)}
				{!loading && json_data && <Code json_data={json_data} />}
			</div>
		</>
	);
};

export default App;
