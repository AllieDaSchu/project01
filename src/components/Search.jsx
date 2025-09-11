import {useState} from 'react'

const searchBar = () => {
    const [value, setValue] = useState('');

    return (
        <div className="container">
            <label htmlfor="search">Search by Name:</label>
            <input id="search" type="text" placeholder="Enter Name" />
        </div>
    )
}