import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

const GithubProfileFinder = () => {

    const [userName, setUserName] = useState('khalilovmusa')
    const [userData, setUserData] = useState(null) 
    const [isLoading, setIsLoading] = useState(false)

    async function fetchGithubUserData () {
        setIsLoading(true)
        const response = await fetch(`https://api.github.com/users/${userName}`)

        const data = await response.json()

        if(data){
            setUserData(data)
            setIsLoading(false)
        }
        console.log(data)
    }

    const handleSubmit = () => {

    }

    useEffect(() => {
        fetchGithubUserData()
    },[])

    if(isLoading){
        return <h1>Loading Data please wait...</h1>
    }

  return (
    <div className='github-profile-container'>
        <div className='profile-finder-input-wrapper'>
            <input 
            type="text" 
            name='search-by-username'
            placeholder='Search github user'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            />
            <button
            onClick={handleSubmit}
            >
                Search
            </button>
        </div>
        {userData && <UserCard userData={userData} />}
    </div>
  )
}

export default GithubProfileFinder