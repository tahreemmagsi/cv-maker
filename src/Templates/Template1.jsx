import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import React, { useContext } from 'react';
import PersonalDetailPreview from '@/Dashboard/resume/components/preview/personalDetailPreview';
import SummeryPreview from '@/Dashboard/resume/components/preview/SummeryPreview';
import ProfessionalExperience from '@/Dashboard/resume/components/preview/ProfessionalExperience';
import EducationalPreview from '@/Dashboard/resume/components/preview/EducationalPreview';
import SkillsPreview from '@/Dashboard/resume/components/preview/SkillsPreview';

function Template1() {
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

export default Template1;
