import React from 'react';
import Tickets from './Tickets';


const TicketsTest = ({ticketTypes, addTicket}) => {

    return (
        <div>
            <h1>Biljetter</h1>
            {ticketTypes.map((tickettype) => (
                <Tickets key={tickettype.id} tickettype={tickettype} addTicket={addTicket}>
                    {tickettype.name}
                </Tickets>
            ))}
        </div>
     );
}
 
export default TicketsTest;