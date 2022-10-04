import React from 'react'
import Card from '../UI/Card'
import classes from './UserCard.module.css'
import userIcon from '../../assets/user.svg'
import expand from '../../assets/expand_more.svg'
import contract from '../../assets/expand_less.svg'

const UserCard = ({ userData }) => {
	console.log(userData)
	const {
		firstName,
		lastName,
		role,
		email,
		street,
		state,
		city,
		zip,
		phone,
		createdAt,
		lastLoggedIn,
	} = userData

	return (
		<Card>
			<div className={classes.container}>
				<div className={classes['icon-wrapper']}>
					<img className={classes['role-icon']} src={userIcon} alt="" />
				</div>
				<section className={classes['info-container']}>
					<div>
						<h3>{`${firstName} ${lastName}`}</h3>
						<h4>{role}</h4>
						<p className={classes.email}>{email}</p>
					</div>
					<div>
						<h3>Address</h3>
						<p>{''}</p>
					</div>
					<div>
						<h3>Phone</h3>
						<p>{phone}</p>
					</div>
					<div>
						<h3>Created At</h3>
						<p>{createdAt}</p>
					</div>
					<div>
						<h3>Last Logged In</h3>
						<p>{lastLoggedIn}</p>
					</div>
				</section>
				<div className={classes.carrot}>
					<img src={contract} alt="" />
				</div>
			</div>
		</Card>
	)
}

export default UserCard
