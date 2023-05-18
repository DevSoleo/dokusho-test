import React, { useState, useEffect } from 'react';

import { socket } from './socket';
import LoggedClient from './components/LoggedClient';

export default function App() {
  const [clients, setClients] = useState([]);

  socket.on('sync', (clients_list) => {
    setClients(clients_list);
  })

  return (
    <div className="App">
      {
        clients.map((client) => {
          return <LoggedClient key={client._id} username={client.username} time={client.time_bank} />
        })
      }
    </div>
  );
}