import './App.css'
import Header from './components/UI/Header'
import UserCard from './components/user/UserCard'
import data from './data/users.json'

console.log(data)

function App() {
	return (
		<div className="user-view-container">
			<Header />
			<section className="cards-container">
				{data.map(user => {
          return <UserCard key={user.id} userData={user} />
        })}
			</section>
		</div>
	)
}

export default App
