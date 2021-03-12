// props = {employees: employee[]}
function TBody(props) {
    return <tbody >
        {
            props.employees.map((e, i) => <tr>
                <td><img onChange={props.handleInputChange} src={e.img} alt="" /></td>
                <td onChange={props.handleInputChange}>{e.first}</td>
                <td onChange={props.handleInputChange}>{e.last}</td>
                <td onChange={props.handleInputChange}>{e.email}</td>
                <td onChange={props.handleInputChange}>{e.location}</td>
            </tr>)
        }
    </tbody>
}

export default TBody;