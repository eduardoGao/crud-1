import React from 'react'
import { useForm } from "react-hook-form";

function AddUserForm({ addUser }) {

  const { register, handleSubmit, errors } = useForm()


  const sendUser = (data, e) => {
    console.log(data)
    addUser(data)
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit(sendUser)}>
      <div>
        <label>User</label>
        <input
          type='text'
          name='name'
          ref={register}
        />
      </div>
      <div>
        <label>Username</label>
        <input
          type='text'
          name='username'
          ref={register}
        />
      </div>
      <button type="submit" >Add user</button>
    </form>
  )
}

export default AddUserForm
