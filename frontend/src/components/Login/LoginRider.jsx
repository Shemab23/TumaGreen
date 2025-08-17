import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const LoginUser = () => {
  const navigate = useNavigate();

  const [name,setName] = useState();
  const [password,setpassword] = useState();

  return (
    <section className='w-[100vw] h-[100vh] bg-cyan-400 flex-center'>
      <div className='w-[40vw] h-[70vh] bg-red-300/40 flex border-white border-2 gap-6 flex-col items-center pt-5 justify-evenly rounded-xl'>
        <div className='font-bold text-3xl'>Riders' Login Page</div>
        <button
          className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg w-[20vw]'
          onClick={()=>alert(`apply google login`)}
        >Login With Google</button>
        <form className='grid space-y-2 pb-5 w-[20vw]'>
          <label className='font-semibold text-xl' >Email:</label>
          <input type="email" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your Email '@' " className='bg-white rounded-lg px-2 h-[35px]'/>
        </form>
        <form className='grid space-y-2 pb-5 w-[20vw]'>
          <label className='font-semibold text-xl' >Password:</label>
          <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="******" className='bg-white rounded-lg px-2 h-[35px]'/>
        </form>
        <div className='flex justify-between w-[15vw]'>
          <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg'
          onClick={()=>navigate('/rider')}
          >Login</button>
          <button className='bg-green-500 text-white font-semibold py-2 px-4 rounded-lg'
          onClick={()=>navigate('/register/rider')}
          >Register</button>
        </div>
        <div>
          Forgot your Password click <span className='px-2 font-bold cursor-pointer text-blue-500' onClick={()=>alert(`we sent pleas your Email to proceed.`)}>Here</span>
        </div>
      </div>
    </section>
  )
}

export default LoginUser
