import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const Template7 = () => {
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
    experience = [],
    education = [],
    skills = [],
  } = resumeInfo;

  // Define colors
  const primaryColor = themeColor || '#1abc9c'; // A vibrant teal or theme color
  const textColor = '#2c3e50'; // Dark text color
  const lightTextColor = '#7f8c8d'; // Light text color for additional details

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <div className="bg-white shadow-md rounded-lg p-8 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold" style={{ color: textColor }}>
              {`${firstName || ''} ${lastName || ''}`}
            </h1>
            <h2 className="text-xl font-medium mt-2" style={{ color: lightTextColor }}>
              {jobTitle || 'No Job Title'}
            </h2>
          </div>
          <div className="text-right">
            <p className="text-lg">{phone || 'No phone number provided'}</p>
            <p className="text-lg">{email || 'No email provided'}</p>
            <p className="text-lg">{address || 'No address provided'}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Sidebar for Skills */}
        <div className="col-span-1 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: primaryColor }}>SKILLS</h2>
          {skills.length > 0 ? (
            skills.map((skill) => (
              <div key={skill.id} className="mb-4">
                <h4 className="text-lg" style={{ color: textColor }}>{skill.name}</h4>
                <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${skill.rating * 20}%`,
                      backgroundColor: primaryColor,
                    }}
                  ></div>
                </div>
              </div>
            ))
          ) : (
            <p>No skills listed</p>
          )}
        </div>

        {/* Main Content for Experience and Education */}
        <div className="col-span-2">
          {/* Experience Section */}
          <div className="bg-white shadow-md rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: primaryColor }}>WORK EXPERIENCE</h2>
            {experience.length > 0 ? (
              experience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <h4 className="text-xl font-semibold" style={{ color: textColor }}>
                    {exp.title || 'No title'}
                  </h4>
                  <span className="block text-gray-600">
                    {`${exp.companyName || 'No company name'}, ${exp.city || 'No city'}, ${exp.state || 'No state'}`}
                  </span>
                  <span className="block text-gray-500">
                    {`${exp.startDate || 'No start date'} - ${exp.endDate || 'Present'}`}
                  </span>
                  <p 
                    className="mt-2 text-gray-700" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>
{exp.workSummery || 'No work summary'}</p>
                </div>
              ))
            ) : (
              <p>No work experience listed</p>
            )}
          </div>

          {/* Education Section */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: primaryColor }}>EDUCATION</h2>
            {education.length > 0 ? (
              education.map((edu) => (
                <div key={edu.id} className="mb-6">
                  <h4 className="text-xl font-semibold" style={{ color: textColor }}>
                    {edu.degree || 'No degree'}
                  </h4>
                  <span className="block text-gray-600">
                    {`${edu.universityName || 'No university'}, ${edu.startDate || 'No start date'} - ${edu.endDate || 'No end date'}`}
                  </span>
                  <p 
                    className="mt-2 text-gray-700" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>
{edu.description || 'No description'}</p>
                </div>
              ))
            ) : (
              <p>No education listed</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template7;
