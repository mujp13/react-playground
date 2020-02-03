import React from 'react'
//import './Demonymapp/Demonymapp.css';

export default function demonym(props) {
	
	return (
		<div className="demonym">
      A {props.name} comes from {props.country}
    </div>
	);
}