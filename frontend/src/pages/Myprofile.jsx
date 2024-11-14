import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Myprofile = () => {
  const [userData,setUserData] = useState({
    name:"Richael Mehra",
    image: assets.profile_pic,
    email:"richaelmehra@gmail.com",
    phone:"+91 94495-94942",
    address:{
      line1 : "25, Gokul Dham Colony, Sector 10",
      line2 : "Dwarka, New Delhi, Delhi - 110075"
    },
    gender: 'male',
    dob : '2000-01-01'
  })

  const [isEdit,setEdit] = useState(false);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
        <img className='w-36 rounded outline-none border-none shadow-lg' src={assets.profile_pic} alt="" />
        {
          isEdit
          ? <input className='  bg-gray-50 text-xl font-medium max-w-60 mt-4 text-neutral-700' type='text' value={userData.name} onChange={(e)=>{setUserData(prev => ({...prev,name:e.target.value}))}}/>
          :<p className='font-medium text-xl text-neutral-700 mt-4'>{userData.name}</p>
        }
        <hr className='bg-zinc-400 h-[1px] border-none' />
        <div>
          <p className='underline  text-neutral-500 mt-3'>CONTACT INFORMATION</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Email id:</p>
            <p className='text-blue-500'>{userData.email}</p>
            <p className='font-medium'>Phone:</p>
            {
              isEdit
              ? <input className='bg-gray-100 max-w-52 ' type='text' value={userData.phone} onChange={(e)=>{setUserData(prev => ({...prev,phone:e.target.value}))}}/>
              :<p className='text-blue-400'>{userData.phone}</p>

            }
            <p className='font-medium'>Address:</p>
            {
              isEdit?
              <p>
                <input className='bg-gray-100 max-w-52 ' value={userData.address.line1} onChange={(e)=>{setUserData(prev=>({...prev.address,line1:e.target.value}))}} type='text'/>
                <br />
                <input className='bg-gray-100 max-w-52 ' value={userData.address.line2} onChange={(e)=>{setUserData(prev=>({...prev.address,line2:e.target.value}))}} type='text'/>
              </p>
              :
              <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            }
          </div>
        </div>
        <div >
          <p className='underline  text-neutral-500 mt-3'>BASIC INFORMATION</p>
          <div className='grid grid-cols-[1fr_3fr] mt-4 gap-y-2.5 text-neutral-700'>
            <p className='font-medium'>Gender:</p>
            {
              isEdit?<select className='bg-gray-100 max-w-52 ' for="gender"  name='gender' value={userData.gender} onChange={(e)=>{setUserData(prev=>({...prev, gender:e.target.value}))}} id="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              :
              <p>{userData.gender}</p>
            }
            <p className='font-medium'>Birthday:</p>
            {
              isEdit?<input className='bg-gray-100 max-w-52 ' type='date' value={userData.dob} onChange={(e)=>{setUserData(prev=>({...prev,dob:e.target.value}))}}/>
              :
              <p>{userData.dob}</p>
            }
          </div>
        </div>
        <div className='mt-5'>
          {
            isEdit? 
            <button className='border py-3 px-8 rounded-full bg-primary text-white outline-none hover:drop-shadow-lg hover: scale-110 hover:bg-sky-100 hover:text-gray-800 transition-all duration-300' onClick={()=>setEdit(false)}>Save Profile</button>
            :
            <button className='border py-3 px-8 rounded-full bg-primary text-white outline-none hover:drop-shadow-lg hover: scale-110 hover:bg-sky-100 hover:text-gray-800 transition-all duration-300' onClick={()=>setEdit(true)}>Edit Profile</button>
          }
        </div>
    </div>
  )
}

export default Myprofile
