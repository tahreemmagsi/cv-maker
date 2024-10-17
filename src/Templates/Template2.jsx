import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const Template2 = () => {
  const { resumeInfo } = useContext(ResumeinfoContext);

  // Handle undefined resumeInfo
  if (!resumeInfo) {
    return <p>Loading...</p>;
  }

  const {
    firstName,
    lastName,
    jobTitle,
    address,
    phone,
    email,
    themeColor,
    summery,
    experience = [],
    education = [],
    skills = [],
  } = resumeInfo;

  // Define colors
  const mainHeadingColor = '#000000'; // Black
  const subHeadingColor = themeColor || '#FFD700'; // Mustard Yellow or theme color
  const skillBarColor = themeColor || '#FFD700'; // Mustard Yellow or theme color

  return (
    <div className="bg-gray-100 p-8 min-h-screen" style={{ backgroundColor: '#f0f0f0' }}>
      {/* Name and Job Title */}
      <div className="mb-8">
        <h3 className="text-3xl font-bold" style={{ color: mainHeadingColor }}>
          {`${firstName || ''} ${lastName || ''}`}
        </h3>
        <h6 className="text-xl" style={{ color: subHeadingColor }}>
          {jobTitle || ''}
        </h6>
      </div>

      {/* Main Layout */}
      <div className="flex">
        {/* Left Column */}
        <div className="w-1/3 bg-gray-100 p-6 rounded-lg shadow-md mr-8">
          {/* Profile Summary */}
          <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>PROFILE</h3>
          <p 
            className="mb-6" 
            style={{ 
              wordWrap: 'break-word', 
              wordBreak: 'break-all', 
              overflowWrap: 'break-word',
              whiteSpace: 'normal' 
            }}>
            {summery || 'No summary provided'}
          </p>

          {/* Contact Information */}
          <h3 className="text-xl font-semibold mb-4" style={{ color: subHeadingColor }}>CONTACT</h3>
          <ul className="list-none mb-6">
            <li className="flex items-center mb-2">
              <svg className="w-4 h-4 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 4.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7zM1 4.5a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 15 4.5v7a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 1 11.5v-7z"/>
              </svg>
              <span>{phone || 'No phone number provided'}</span>
            </li>
            <li className="flex items-center mb-2">
              <svg className="w-4 h-4 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8z"/>
              </svg>
              <span className='text-sm'>{email || 'No email provided'}</span>
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 16 16">
                <path d="M7.5 0a.5.5 0 0 1 .5.5V2H9a.5.5 0 0 1 .5.5v1H9a.5.5 0 0 1-.5-.5V2H7V4h1.5v6H7V5H6v6H4V4.5A.5.5 0 0 1 4.5 4H6V2.5A.5.5 0 0 1 6.5 2h.5v.5A.5.5 0 0 1 7 2h.5V0z"/>
              </svg>
              <span>{address || 'No address provided'}</span>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="w-2/3">
          {/* Work Experience */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>WORK EXPERIENCE</h3>
            {experience.length > 0 ? (
              experience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <h6 className="text-xl font-semibold" style={{ color: subHeadingColor }}>{exp.title || 'No title'}</h6>
                  <span className="text-gray-600">{`${exp.companyName || 'No company name'}, ${exp.city || 'No city'}, ${exp.state || 'No state'}`}</span>
                  <span className="text-gray-600 block">{`${exp.startDate || 'No start date'} - ${exp.endDate || 'Present'}`}</span>
                  <p 
                    className="mt-2" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>
                    {exp.workSummery || 'No work summary'}
                  </p>
                </div>
              ))
            ) : (
              <p>No work experience listed</p>
            )}
          </div>

          {/* Education */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>EDUCATION</h3>
            {education.length > 0 ? (
              education.map((edu) => (
                <div key={edu.id} className="mb-6">
                  <h6 className="text-xl font-semibold" style={{ color: subHeadingColor }}>{edu.degree || 'No degree'}</h6>
                  <span className="text-gray-600">{`${edu.universityName || 'No university'}, ${edu.startDate || 'No start date'} - ${edu.endDate || 'No end date'}`}</span>
                  <p 
                    className="mt-2" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>
                    {edu.description || 'No description'}
                  </p>
                </div>
              ))
            ) : (
              <p>No education listed</p>
            )}
          </div>

          {/* Skills */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>SKILLS</h3>
            {skills.length > 0 ? (
              skills.map((skill) => (
                <div key={skill.id} className="mb-4">
                  <span className="text-gray-700">{skill.name}</span>
                  <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${skill.rating * 20}%`,
                        backgroundColor: skillBarColor,
                      }}
                    ></div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-700">No skills listed</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
