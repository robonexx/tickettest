import React, { useState } from 'react';
import data from './content/content'
import TicketsTest from './TicketsTest';
import Basket from './Basket';

const TicketsPageTest = () => {

    const { ticketTypes } = data
    const [ticketItems, setTicketItems] = useState([])

    const addTicket = (ticket) => {
        const exist = ticketItems.find(x => x.id === ticket.id);
        if (exist) {
            setTicketItems(ticketItems.map(x => x.id === ticket.id ? { ...exist, qty: exist.qty + 1 } : x
            ))
        } else {
            setTicketItems([...ticketItems, { ...ticket, qty: 1 }])
        }
    }

    const removeTicket = (ticket) => {
        const exist = ticketItems.find(x => x.id === ticket.id);
        if (exist.qty === 1) {
            setTicketItems(ticketItems.filter((x) => x.id !== ticket.id))
        } else {
            setTicketItems(ticketItems.map(x => x.id === ticket.id ? { ...exist, qty: exist.qty - 1 } : x
                ))
        }
    }

    return (
        <>
            <h1 style={{color: "blue"}}>SL app</h1>
            <h1 style={{color: "green"}}>Buy tickets function</h1>
            <TicketsTest ticketTypes={ticketTypes} addTicket={addTicket} />
            <Basket ticketItems={ticketItems} addTicket={addTicket} removeTicket={removeTicket}/>
            </>
     );
}
 
export default TicketsPageTest;