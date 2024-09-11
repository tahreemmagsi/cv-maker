import Header from '@/components/ui/custom/header';
import { Button } from '@/components/ui/button';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import ResumePreview from '@/Dashboard/resume/components/ResumePreview';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../service/GlobalApi';
import { RWebShare } from 'react-web-share';


function ViewResume() {

  const [resumeInfo,setResumeInfo]=useState();
  const {resumeID}=useParams();

  useEffect(()=>{
      GetResumeInfo();
  },[])
  const GetResumeInfo=()=>{
      GlobalApi.GetResumeById(resumeID).then(resp=>{
          console.log(resp.data.data);
          setResumeInfo(resp.data.data);
      })
  }

  const HandleDownload=()=>{
      window.print();
  }

return (
  <ResumeinfoContext.Provider value={{resumeInfo,setResumeInfo}} >
      <div id="no-print">
      <Header/>

      <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
          <h2 className='text-center text-2xl font-medium'>
              Congrats! Your Resume is ready ! </h2>
              <p className='text-center text-gray-400'>Now you are ready to download your resume and you can share unique 
                  resume url with your friends and family </p>
          <div className='flex justify-center gap-6 px-44 my-10'>
              <Button onClick={HandleDownload}>Download</Button>
             
              <RWebShare
      data={{
        text: "Hello Everyone, This is my resume please open url to see it",
        url: import.meta.env.VITE_BASE_URL+"/my-resume/"+resumeID+"/view",
        title: resumeInfo?.firstName+" "+resumeInfo?.lastName+" resume",
      }}
      onClick={() => console.log("shared successfully!")}
    > <Button>Share</Button>
    </RWebShare>
          </div>
      </div>
      </div>
      <div className='flex justify-center items-center my-10 mx-10 md:mx-20 lg:mx-36'>
        <div id="print-area" className="max-h-[600px] max-w-[600px]">
          <ResumePreview />
        </div>
      </div>
    </ResumeinfoContext.Provider>
  );
}

export default ViewResume;
