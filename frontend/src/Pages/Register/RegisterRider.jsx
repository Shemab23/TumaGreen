import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';

const RegisterRider = () => {
  const navigate = useNavigate();

  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [profile,setProfile] = useState(null);
  const [licence,setLicence] = useState(false);
  const [agree,setAgree] = useState(false);

  return (
    <section className='w-[100vw] h-[100vh] bg-green-300 flex-center'>
      <div className='w-[40vw] h-[90vh] bg-red-300/40 flex border-white border-2 gap-6 flex-col items-center pt-2 justify-evenly rounded-xl'>
        <div className='font-bold text-3xl'>Join Us</div>

        <form className='grid space-y-2 pb-5 w-[20vw]'>
          <label className='font-semibold text-xl' >Full Name:</label>
          <input type="email" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name " className='bg-white rounded-lg px-2 h-[35px]'/>
        </form>
        <form className='grid space-y-2 pb-5 w-[20vw]'>
          <label className='font-semibold text-xl' >Phone:</label>
          <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="+250 7xxxxxxxx" className='bg-white rounded-lg px-2 h-[35px]'/>
        </form>
        <form className='grid space-y-2 pb-5 w-[20vw]'>
          <label className='font-semibold text-xl' >Email:</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email '@' " className='bg-white rounded-lg px-2 h-[35px]'/>
        </form>
        <form className='grid space-y-2 pb-5 w-[20vw]'>
          <label className='font-semibold text-xl' >profile:</label>
          <input type="file" value={profile} onChange={(e)=>setProfile(e.target.files[0])} className='bg-white rounded-lg px-2 h-[30px] cursor-pointer '/>
        </form>
        <form className='flex gap-2 pb-5 w-[20vw]'>
          <input type="checkbox" value={licence} onChange={(e)=>setLicence(e.target.value)} />
          <label> I have a Valid Driving licence for the selected vehicle type</label>
        </form>
        <form className='flex gap-2 pb-5 w-[20vw]'>
          <input type="checkbox" value={agree} onChange={(e)=>setAgree(e.target.value)} />
          <label> I agree to TumaGreen Terms and conditions </label>
        </form>
        <div className='flex justify-between '>
          <button className='bg-green-500 text-white font-semibold py-2 px-4 rounded-lg flex gap-2'
          onClick={()=>navigate('/login')}
          > <Send/> Submit the Application</button>
        </div>
      </div>
    </section>
  )
}

export default RegisterRider
