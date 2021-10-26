import React from 'react';
import './App.css'

export default function Basket({ ticketItems, addTicket, removeTicket }) {

    const ticketPrice = ticketItems.reduce((a, c) => a + c.price * c.qty, 0)
    
    
    return (
        <aside className="basket">
            <h2>Summa</h2><span></span>
            <div>
                {ticketItems.length === 0 && 
                    <div>Inga biljetter</div>
                }</div>
            {ticketItems.map((ticket) => (
                <div key={ticket.id} className="ticketBasket">
                    <span>{ticket.name}</span>
                    <div>
                       
                        <button onClick={() => removeTicket(ticket)}>-</button>
                        <button onClick={() =>addTicket(ticket)}>+</button>
                    </div>
                    <div>{ticket.qty} summa {ticket.price}</div>
                </div>
            ))}
            <div>
                {ticketItems.length !== 0 ? (
                    < h1 > Total summa = {ticketPrice}</h1>
                ) :
                (
                <h1> Total Summa = 0</h1>
                )
                }
            </div>
        </aside>
    )
}