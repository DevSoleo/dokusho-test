import React, { useState, useEffect } from 'react';

import { socket } from './socket';
import ClientBox from './components/boxes/ClientBox';
import LoginBox from './components/boxes/LoginBox';
import ControlPanel from './components/panel/ControlPanel';
import Form from './components/panel/Form';

export default function App() {
  const [clients, setClients] = useState([]);

  socket.on('sync', (clients_list) => {
    setClients(clients_list)
  })

  return (
    <div className="App">
      <div className='boxes'>
        {
          clients.map((client) => {
            return <ClientBox key={client._id} username={client.username} time={client.time_bank} status={client.status} />
          })
        }

        <LoginBox />
      </div>
      <ControlPanel>
        <Form title='Nouvel utilisateur'>
          <input type="text" placeholder="Prénom" />
          <input type="text" placeholder="Nom" />
          <input type="email" placeholder="Adresse e-mail" />
          <input type="password" placeholder="Password" />
          
          <br />

          <button onClick={() => {}}>Créer</button>
        </Form>
      </ControlPanel>
    </div>
  );
}