// props = {employees: employee[]}
function TBody(props) {
    return <tbody className= "table">
        {
            props.employees.map((e, i) => <tr>
                <td><img src={e.img} alt="" /></td>
                <td>{e.first}</td>
                <td>{e.last}</td>
                <td>{e.email}</td>
                <td>{e.location}</td>
            </tr>)
        }
    </tbody>
}

export default TBody;