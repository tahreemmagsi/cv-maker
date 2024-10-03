import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import dummydata from '@/data/dummydata';
import GlobalApi from './../../../../../service/GlobalApi';

function EditResume() {
  const { resumeID } = useParams();
  const [resumeInfo, setResumeInfo] = useState({});
  const [templateId, setTemplateId] = useState(null);
  const [imageId, setImageId] = useState(null);

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

        if (fetchedData.template) {
          setTemplateId(Number(fetchedData.template)); 
        } else {
          setTemplateId(null); 
        }

        if (fetchedData.image && fetchedData.image.url) {
          setImageId(fetchedData.image.url);  
        } else {
          setImageId(null);  
        }

        console.log(fetchedData, 'Fetched resume data');
      })
      .catch(err => {
        console.error('Failed to fetch resume info:', err);
      });
  };

  console.log(templateId, 'templateId in EditResume');
  console.log(imageId, 'imageId in EditResume'); 

  return (
    <ResumeinfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
        <FormSection templateId={templateId} setImageId={setImageId} />
        <div>
        <ResumePreview templateId={templateId} imageId={imageId} />
        </div>
      </div>
    </ResumeinfoContext.Provider>
  );
}

export default EditResume;
