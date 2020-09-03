import React from 'react';
import ReactJson from 'react-json-view';

const style ={
  json_style: {
    fontSize: '18px',
  }
}

const Code = (props) => {
	return (
		<div className="json__container">
			{props.json_data && <ReactJson style={style.json_style} src={props.json_data} />}
		</div>
	);
};

export default Code;
