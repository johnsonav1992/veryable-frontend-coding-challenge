import React from 'react'
import userIcon from '../../assets/user.svg'
import classes from './UserIcon.module.css'

const UserIcon = ({role}) => {
	return (
		<div className={classes['icon-wrapper']}>
			<img className={classes['role-icon']} src={userIcon} alt="User Icon" />
		</div>
	)
}

export default UserIcon
