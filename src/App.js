import React, { useState } from 'react'
import styles from './styles.module.css'
import './template.css'
import { v4 as uuidv4 } from 'uuid';

import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'

function App() {
  const usersData = [
    { id: uuidv4(), name: 'Eduardo', username: 'lalo10' },
    { id: uuidv4(), name: 'Diana', username: 'dianita-horror' },
    { id: uuidv4(), name: 'Sebastián', username: 'sebas_1' },
    { id: uuidv4(), name: 'Manuel', username: 'momo' }
  ]

  const [users, setUsers] = useState(usersData)

  //Agregar Usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  return (
    <div className={styles.app}>
      <h1>CRUD App with Hooks</h1>
      <div className={styles.container}>
        <div className={styles.containerUser}>
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className={styles.containerUser}>
          <h2>View User</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
