import React from 'react'
import userIcon from '../../assets/user.svg'
import classes from './UserIcon.module.css'

const UserIcon = ({ role }) => {
	const roleClass =
		role !== 'Administrator'
			? role === 'User'
				? 'user'
				: 'viewer'
			: 'admin'

	return (
		<div className={classes['icon-wrapper']}>
			<img
				className={`${classes['role-icon']} ${classes[roleClass]}`}
				src={userIcon}
				alt="User Icon"
			/>
		</div>
	)
}

export default UserIcon
