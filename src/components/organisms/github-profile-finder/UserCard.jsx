import React from 'react'

const UserCard = ({userData}) => {
    const {avatar_url, followers, following, public_repos, location, login, name, created_at} = userData;

    const createdData = new Date(created_at);

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
            Name: {name}
        </p>
        <p>
            Username: {login}
        </p>
        <p>
            Following: {following}
        </p>
        <p>
            Followers: {followers}
        </p>
        <p>
            Location: {location}
        </p>
        <p>
            Public repos: {public_repos}
        </p>
        <a href={`https://www.github.com/${login}`} target='_blank'>
            {`https://www.github.com/${login}`}
        </a>
        <p>Joined at: {`${createdData.getDate()} ${createdData.toLocaleString('en-us', {month: 'short'})} ${createdData.getFullYear()} `}</p>
       </div>
        <img 
        style={{
            borderRadius: '50%',
            height: '250px'
        }}
         src={avatar_url} 
         alt="user_avatar" />
    </div>
  )
}

export default UserCard