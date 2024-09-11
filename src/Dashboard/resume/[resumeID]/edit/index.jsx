import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import dummydata from '@/data/dummydata';
import GlobalApi from './../../../../../service/GlobalApi';
import { useLocation } from 'react-router-dom';

function EditResume() {
  const { resumeID } = useParams();
  const [resumeInfo, setResumeInfo] = useState();
  const [isNewResume, setIsNewResume] = useState(false);
  const location = useLocation(); 
  const state = location.state || {}; 







  useEffect(() => {

    if (state.data === 'new') {
      // setIsNewResume(true);
      setResumeInfo(dummydata);
    } else {
      // console.log("resumeID", resumeID);
      // setIsNewResume(false);
      GetResumeInfo();
    }
  }, []);

  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeID).then(resp => {
      console.log(resp.data.data);
      setResumeInfo(resp.data.data);
    }).catch(err => {
      console.error('Failed to fetch resume info:', err);
    });
  };

  return (
    <ResumeinfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
        <FormSection />
        <ResumePreview />
      </div>
    </ResumeinfoContext.Provider>
  );
}

export default EditResume;
