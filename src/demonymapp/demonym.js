import React from 'react'
//import './Demonymapp/Demonymapp.css';

export default function demonym(props) {
	console.log(props.name)
	console.log(props.country)
	return (
		<div className="demonym">
      A {props.name} comes from {props.country}
    </div>
	);
}