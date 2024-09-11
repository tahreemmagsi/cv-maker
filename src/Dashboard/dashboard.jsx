import React, { useEffect, useState } from 'react'
import AddResume from '../components/ui/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../service/GlobalApi';
import ResumeCarditems from '@/components/ResumeCarditems';

function Dashboard() {

  const {user}=useUser();
  const[resumeList,setresumeList]=useState([])

  useEffect(()=>{
user&&GetResumesList()
  },[user])
  const GetResumesList=()=>{
    GlobalApi.GetUserResume(user?.primaryEmailAddress?.emailAddress)
    .then(resp=>{
      setresumeList(resp.data.data)
      console.log(setresumeList.data);
    })

  }
  return (
    <div className='p-10 md:px-20 lg:px-32'>
        <h2 className='font-bold text-3xl'>My Resume</h2>
        <p className='mt-2'> Start creating resume for you new job</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          <AddResume/>
          {resumeList.length>0 &&resumeList.map((resume,index)=>(
            <ResumeCarditems resume={resume} key={index } refreshData={GetResumesList}/> 

          ))}
          
          </div></div>
  )
}

export default Dashboard