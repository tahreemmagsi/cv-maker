import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import dummydata from '@/data/dummydata';

function EditResume() {
  const params = useParams();
  const [resumeInfo, setResumeInfo] = useState(); // Initialize with dummy data

  useEffect(() => {
    // If you need to fetch data based on params, do it here
    setResumeInfo(dummydata); // Initialize data once
  }, []); // Add dependencies if needed

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
