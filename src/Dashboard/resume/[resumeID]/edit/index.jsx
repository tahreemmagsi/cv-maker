import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import dummydata from '@/data/dummydata';
import GlobalApi from './../../../../../service/GlobalApi';

function EditResume() {
  const { resumeID } = useParams();
  const [resumeInfo, setResumeInfo] = useState();
  const [templateId, setTemplateId] = useState(null);
  const location = useLocation(); 
  const state = location.state || {}; 

  useEffect(() => {
    if (state.data === 'new') {
      setTemplateId(state.templateId); 
      setResumeInfo(dummydata);
    } else {
      GetResumeInfo();
    }
  }, []);

  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeID)
      .then(resp => {
        const fetchedData = resp.data.data;
        setResumeInfo(fetchedData);

        // Set the templateId from the fetched resume data
        if (fetchedData.template) {
          setTemplateId(Number(fetchedData.template)); // Ensure templateId is a number if needed
        } else {
          setTemplateId(null); // Default to null or handle accordingly if template is missing
        }
      })
      .catch(err => {
        console.error('Failed to fetch resume info:', err);
      });
  };

  return (
    <ResumeinfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
        <FormSection />
        <div className=''>
          <ResumePreview templateId={templateId} /> 
        </div>
      </div>
    </ResumeinfoContext.Provider>
  );
}

export default EditResume;
