const Table = ({ id, userId, title, body }) => {
    return (
        <tr>
            <td>{userId}</td>
            <td>{id}</td>
            <td>{title}</td>
            <td>{body}</td>
        </tr>
    );
};

export default Table;  