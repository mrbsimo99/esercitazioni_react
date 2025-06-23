const Table = ({ array }) =>
    <table>
        {array && array.length > 0 ? (
            array.map(item => (
                <tr key={item.id}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>

            ))
        ) : (
            <tr>
                <td>empty data</td>
            </tr>
        )}
    </table>

export default Table;