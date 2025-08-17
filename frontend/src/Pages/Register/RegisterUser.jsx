import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
  const navigate = useNavigate();

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [profile,setProfile] = useState(null);
  const [password,setpassword] = useState('');
  const [password1,setpassword1] = useState('');

  return (
    <section className='w-[100vw] h-[100vh] bg-green-300 flex-center'>
      <div className='w-[40vw] h-[87vh] bg-red-300/40 flex border-white border-2 gap-6 flex-col items-center pt-2 justify-evenly rounded-xl'>
        <div className='font-bold text-3xl'>Registration Page</div>

        <form className='grid space-y-2 pb-5 w-[20vw]'>
          <label className='font-semibold text-xl' >Name:</label>
          <input type="email" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name " className='bg-white rounded-lg px-2 h-[35px]'/>
        </form>
        <form className='grid space-y-2 pb-5 w-[20vw]'>
          <label className='font-semibold text-xl' >Email:</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email '@' " className='bg-white rounded-lg px-2 h-[35px]'/>
        </form>
        <form className='grid space-y-2 pb-5 w-[20vw]'>
          <label className='font-semibold text-xl' >profile:</label>
          <input type="file" value={profile} onChange={(e)=>setProfile(e.target.files[0])} className='bg-white rounded-lg px-2 h-[30px] cursor-pointer '/>
        </form>
        <form className='grid space-y-2 pb-5 w-[20vw]'>
          <label className='font-semibold text-xl' >password:</label>
          <input type="password" value={password} onChange={(e)=>setpassword(e.target.files[0])} placeholder='**********' className='bg-white rounded-lg px-2 h-[35px]'/>
        </form>
        <form className='grid space-y-2 pb-5 w-[20vw]'>
          <label className='font-semibold text-xl' >Confirm password:</label>
          <input type="password" value={password1} onChange={(e)=>setpassword1(e.target.files[0])} placeholder='**********' className='bg-white rounded-lg px-2 h-[35px]'/>
        </form>
        <div className='flex justify-between '>
          <button className='bg-green-500 text-white font-semibold py-2 px-4 rounded-lg'
          onClick={()=>navigate('/login')}
          >Register</button>
        </div>
      </div>
    </section>
  )
}

export default RegisterUser
