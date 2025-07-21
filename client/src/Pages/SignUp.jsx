import React from 'react'


const SignUp = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className=' w-[500px] h-[600px]  hover:shadow-lg shadow-sm  shadow-emerald-500 rounded-3xl mt-20'>
            <h1 className='text-4xl  font-extrabold p-4 text-center'>SIGN UP</h1>
            <div className='flex flex-col justify-between items-center '>
            <label> UserName  </label>
            <input className='p-2 ' placeholder='username' type="text" />
            <label> Email  </label>
            <input  placeholder="email"type="text" />
            <label> Password </label>
            <input placeholder='password' type="text" />
            <button className='p-2 bg-sky-400 font-bold rounded hover:rounded-3xl'>SIGN UP</button>
            <h5>Don`t have a account? Login</h5>
            </div>
            
          
            
        </div>
      
    </div>
  )
}

export default SignUp