import React from 'react'

const UserCard = ({userData}) => {
  return (
    <div className='github-profile-header'
    style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '700px',
        padding: '10px 15px',
        borderColor: '#fff',
        borderWidth: '1px',
        borderRadius: '15px',
        borderStyle: 'solid'
    }}
    >
       <div>
       <p style={{
            fontSize: '20px',
            fontWeight: 'bold'
        }}>
            Name: {userData.name}
        </p>
        <p>
            Username: {userData.login}
        </p>
        <p>
            Following: {userData.following}
        </p>
        <p>
            Followers: {userData.followers}
        </p>
        <p>
            Location: {userData.location}
        </p>
        <p>
            Public repos: {userData.public_repos}
        </p>
        <a href={userData.url} target='_blank'>
            {userData.url}
        </a>
       </div>
        <img 
        style={{
            borderRadius: '50%',
            height: '250px'
        }}
         src={userData.avatar_url} 
         alt="user_avatar" />
    </div>
  )
}

export default UserCard