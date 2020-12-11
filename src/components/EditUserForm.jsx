import React from 'react'
import { useForm } from "react-hook-form";

function EditUserForm({ currentUser, updateUser }) {
  const { register, handleSubmit, errors, setValue } = useForm({
    defaultValues: currentUser
  })

  setValue('name', currentUser.name)
  setValue('username', currentUser.username)

  const sendUser = (data, e) => {
    console.log(data)

    data.id = currentUser.id

    updateUser(currentUser.id, data)

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
      <button type="submit">Edit user</button>
    </form>
  )
}

export default EditUserForm
