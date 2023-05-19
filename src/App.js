import React, { useState, useEffect } from 'react';

import { socket } from './socket';
import LoggedClient from './components/Client';
import ControlPanel from './components/ControlPanel';
import Form from './components/panel/Form';

export default function App() {
  const [clients, setClients] = useState([]);

  socket.on('sync', (clients_list) => {
    setClients(clients_list);
  })

  return (
    <div className="App">
      <div className='clients'>
        {
          clients.map((client) => {
            return <LoggedClient key={client._id} username={client.username} time={client.time_bank} status={client.status} />
          })
        }
      </div>
      <ControlPanel>
        <Form title='Mon formulaire'>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={() => socket.emit('sync')}>Sync</button>
        </Form>
      </ControlPanel>
    </div>
  );
}