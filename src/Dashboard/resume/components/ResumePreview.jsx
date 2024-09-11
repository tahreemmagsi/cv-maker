import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import React, { useContext } from 'react';
import PersonalDetailPreview from './preview/personalDetailPreview';
import SummeryPreview from './preview/SummeryPreview';
import ProfessionalExperience from './preview/ProfessionalExperience';
import EducationalPreview from './preview/EducationalPreview';
import SkillsPreview from './preview/SkillsPreview';

function ResumePreview() {
  const { resumeInfo } = useContext(ResumeinfoContext);


  return (
    <div
      className='shadow-lg h-full p-14 border-t-[20px]'
      style={{
        borderColor: resumeInfo?.themeColor,
      }}
    >
      <PersonalDetailPreview resumeInfo={resumeInfo} />
      <SummeryPreview resumeInfo={resumeInfo} />
      <ProfessionalExperience resumeInfo={resumeInfo} />
      <EducationalPreview resumeInfo={resumeInfo} />
      <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  );
}

export default ResumePreview;
