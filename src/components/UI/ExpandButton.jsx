import React from 'react'
import classes from './ExpandButton.module.css'
import expand from '../../assets/expand_more.svg'
import contract from '../../assets/expand_less.svg'

const ExpandButton = ({isExpanded, onClick}) => {
	return (
		<button className={classes.btn} onClick={onClick}>
			<img src={isExpanded ? contract : expand} alt="Expand Button" />
		</button>
	)
}

export default ExpandButton
