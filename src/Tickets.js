import React from 'react'

export default function Tickets({tickettype, addTicket}) {

    
    return (
        <div style={{color: "black", fontSize: "1rem"}}>
            <h3>{tickettype.name}</h3>
            <span>{tickettype.price} kr</span>

            <button onClick={() => addTicket(tickettype)}>+</button>
        </div>
    )
}
