import React, { useState } from 'react'

import Card from '../UI/Card'
import UserIcon from './UserIcon'
import classes from './UserCard.module.css'
import expand from '../../assets/expand_more.svg'
import contract from '../../assets/expand_less.svg'
import {
	phoneNumberFormatter,
	dateFormatter,
} from '../../helper-functions/helperFunctions'

const UserCard = ({ userData }) => {
	const [isExpanded, setIsExpanded] = useState(false)
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
	const formattedCreatedAt = dateFormatter(createdAt)
	const formattedLoggedIn = dateFormatter(lastLoggedIn)

	const clickHandler = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<Card>
			<div className={classes['main-container']}>
				<UserIcon role={role} />
				<div className={classes['main-inner']}>
					<div className={classes['top-info']}>
						<div className={classes['top-inner']}>
							<h3>{`${firstName} ${lastName}`}</h3>
							<h4>{role}</h4>
							<p className={classes.email}>{email}</p>
						</div>
						<button className={classes.btn} onClick={clickHandler}>
							<img src={isExpanded ? contract : expand} alt="" />
						</button>
					</div>
					{isExpanded && (
						<section className={classes['bottom-info']}>
							<div className={classes['bottom-inner']}>
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
									<p>{formattedCreatedAt}</p>
								</div>
								<div>
									<h3>Last Logged In</h3>
									<p>{formattedLoggedIn}</p>
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
