import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UsersCard from './components/UserCard'
import useFetch from './hooks/useFetch'


function App() {

  const baseUrl = "https://users-crud.academlo.tech/"

  const [users, getAllUsers, createNewUser , deleteUserById, updateUserById] = useFetch(baseUrl)
  const [updateInf, setUpdateInf] = useState()
  const [isCloseForm, setIsCloseForm] = useState(true)

  useEffect(() => {
    getAllUsers('/users')
  }, [])
  const handleOpen = () => {
    setIsCloseForm(false)
  }

  return (
    <div className='container'>
      <header className='header'>
        <div>
          <span className='header__subtitulo'>Welcome back!</span>
          <h1 className='header__titulo'>User Management</h1>
        </div>
        <button className='header__btn' onClick={handleOpen}>
          <i className="bx bx-plus "></i>
          Open Form
          </button>
      </header>
      <div className={`form__container ${isCloseForm && 'form__close '}`}>
        <FormUsers
          createNewUser={createNewUser}
          updateInf={updateInf}
          updateUserById={updateUserById}
          setUpdateInf={setUpdateInf}
          setIsCloseForm={setIsCloseForm}
        />
      </div>
      <div className='register__body'>
        {
          users?.map(user => (
            <UsersCard
            key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInf={setUpdateInf}
              setIsCloseForm={setIsCloseForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App