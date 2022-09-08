import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const FormLogin = () => {

   const {register, handleSubmit, reset} = useForm()

   const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL,data)
    .then(response => localStorage.setItem('token', response.data.data.token))
    .catch(err => console.log(err))
    /* console.log(data)
    reset(
        {
            email: '',
            password: ''
        }
    ) */
   }

  return (
    <form onSubmit={handleSubmit(submit)} className='login__form'>
        <h2 className='login__title'>Ingresa tu Email y Password</h2>
        <div className='login__div-email'>
            <label className='login__label' htmlFor="email">Email</label>
            <input {...register('email')} className='loggin__password' type="email" id='email' />
        </div>
        <div className='login__div-password'>
            <label className='login__label' htmlFor="password">Password</label>
            <input {...register('password')} className='loggin__password' type="password" id='password' />
        </div>
        <button className='login__btn'>Login</button>
    </form>
  )
}

export default FormLogin