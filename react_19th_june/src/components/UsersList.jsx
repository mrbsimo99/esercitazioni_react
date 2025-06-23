const UsersList = ({ array }) => {
    return (<>
        {array.map(item => {
            return <div>
                <h2>{item.name}</h2>
                <p>{item.bio}</p>
            </div>

        })}
    </>
    )
}

export default UsersList;