import React, { useEffect, useState } from 'react'

const SearchAutocomplete = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSerchParam] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleUserSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSerchParam(query);
        if(query.length > 1) {
            const filteredData = users && users.length ? users.filter(item => item.toLowerCase().indexOf(query) > -1)
            : [];
            setFilteredUsers(filteredData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }

    const fetchListOfUsers = async () => {
        try{
            setIsLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            if(data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => ( userItem.firstName )))
                setIsLoading(false);
                setError(null);
            }

        }catch(error){
            // throw new Error(error)
            setIsLoading(false);
            setError(error)
        }
    }


    useEffect(() => {
        fetchListOfUsers()
    },[])

  return (
    <div className='search-autocomplete-container'>
        <input 
        name='search-users' 
        type="text" 
        placeholder='Search users here...'
        value={searchParam}
        onChange={handleUserSearch}
        />
        {showDropdown ? 
        filteredUsers.map((item) => {
            return <li>{item}</li>
        })
        : null}
    </div>
  )
}

export default SearchAutocomplete