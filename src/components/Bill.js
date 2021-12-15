import React from 'react'

export default function Bill(props) {
    console.log(props)
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.due_date}</td>
            <td>{props.amount_due}</td>
            <td>{props.balance}</td>
            <td>{props.interest_rate}</td>
        </tr>
    )
}
