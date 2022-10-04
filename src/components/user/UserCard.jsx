import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './UserCard.module.css'
import userIcon from '../../assets/user.svg'
import expand from '../../assets/expand_more.svg'
import contract from '../../assets/expand_less.svg'
import { phoneNumberFormatter } from '../../helper-functions/helperFunctions'

const UserCard = ({ userData }) => {
	const [isExpanded, setIsExpanded] = useState(false)

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

	const formattedPhone = phoneNumberFormatter(phone)

	console.log(formattedPhone)

	const clickHandler = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<Card>
			<div className={classes.container}>
				<div className={classes['icon-wrapper']}>
					<img
						className={classes['role-icon']}
						src={userIcon}
						alt=""
					/>
				</div>
				<div className={classes['inner-container']}>
					<div className={classes['top-container']}>
						<div className={classes['info-container']}>
							<h3>{`${firstName} ${lastName}`}</h3>
							<h4>{role}</h4>
							<p className={classes.email}>{email}</p>
						</div>
						<button className={classes.btn} onClick={clickHandler}>
							<img src={isExpanded ? contract : expand} alt="" />
						</button>
					</div>
					{isExpanded && (
						<section className={classes['bottom-container']}>
							<div className={classes.inner}>
								<div>
									<h3>Address</h3>
									<p>{`${street}, ${city}, ${state} ${zip}`}</p>
								</div>
								<div>
									<h3>Phone</h3>
									<p>{formattedPhone}</p>
								</div>
								<div>
									<h3>Created At</h3>
									<p>{createdAt}</p>
								</div>
								<div>
									<h3>Last Logged In</h3>
									<p>{lastLoggedIn}</p>
								</div>
							</div>
						</section>
					)}
				</div>
			</div>
		</Card>
	)
}

export default UserCard
