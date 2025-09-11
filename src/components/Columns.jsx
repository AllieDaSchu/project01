import '../style/columns.css'

const Columns = ({children, id}) => {
    return (
        <div className="profile-grid" id={id}>
            {children}
        </div>
    )
}

export default Columns;