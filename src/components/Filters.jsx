import '../style/filters.css'

const Filters = ({titles, onChange, searchName, clear, title, search}) => {
    return (
        <div className="filter-container">
            <div className="select-filter">
                <label htmlfor="select">Select a Title: </label>
                <select id="select" className="drop-down" value={title} onChange={onChange}>
                    <option value="">All</option>
                    {
                        titles.map(title => <option key={title} value={title}>{title}</option>)
                    }
                </select>
                <label htmlfor="search">Search by Name: </label>
                <input id="search" className="search-bar" value={search} type="text" placeholder="Enter Name" onChange={searchName} />
                <button onClick={clear}>Clear</button>
            </div>
        </div>
    )
}

export default Filters;