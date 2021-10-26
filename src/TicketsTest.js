import React from 'react';
import Ticketos from './Ticketos';


const TicketsTest = ({ticketTypes, addTicket}) => {

    return (
        <div>
            <h1>Biljetter</h1>
            {ticketTypes.map((tickettype) => (
                <Ticketos key={tickettype.id} tickettype={tickettype} addTicket={addTicket}></Ticketos>
            ))}
        </div>
     );
}
 
export default TicketsTest;