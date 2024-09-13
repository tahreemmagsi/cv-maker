import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const Template6= () => {
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
    summary,
    experience = [],
    education = [],
    skills = [],
  } = resumeInfo;

  // Define colors
  const sidebarColor = themeColor || '#34495e'; // Dark blue-grey or theme color
  const accentColor = '#e74c3c'; // Red for accents
  const textColor = '#2c3e50'; // Dark text color

  return (
    <div className="min-h-screen flex bg-gray-200">
      {/* Sidebar Section */}
      <div className="w-1/3 bg-gray-800 text-white p-8 flex flex-col justify-between" style={{ backgroundColor: sidebarColor }}>
        <div>
          <h1 className="text-4xl font-bold">{`${firstName || ''} ${lastName || ''}`}</h1>
          <h3 className="text-xl font-medium mt-2">{jobTitle || 'No Job Title'}</h3>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>CONTACT</h2>
          <p className="mb-1">{phone || 'No phone number provided'}</p>
          <p className="mb-1">{email || 'No email provided'}</p>
          <p>{address || 'No address provided'}</p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>PROFESSIONAL SUMMARY</h2>
          <p>{summary || 'No summary provided'}</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-2/3 p-8">
        {/* Experience Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: accentColor }}>WORK EXPERIENCE</h2>
          {experience.length > 0 ? (
            experience.map((exp) => (
              <div key={exp.id} className="mb-6">
                <h4 className="text-xl font-semibold" style={{ color: textColor }}>
                  {exp.title || 'No title'}
                </h4>
                <span className="text-gray-700 block">{`${exp.companyName || 'No company name'}, ${exp.city || 'No city'}, ${exp.state || 'No state'}`}</span>
                <span className="text-gray-600 block">{`${exp.startDate || 'No start date'} - ${exp.endDate || 'Present'}`}</span>
                <p className="mt-2">{exp.workSummery || 'No work summary'}</p>
              </div>
            ))
          ) : (
            <p>No work experience listed</p>
          )}
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: accentColor }}>EDUCATION</h2>
          {education.length > 0 ? (
            education.map((edu) => (
              <div key={edu.id} className="mb-6">
                <h4 className="text-xl font-semibold" style={{ color: textColor }}>
                  {edu.degree || 'No degree'}
                </h4>
                <span className="text-gray-700 block">{`${edu.universityName || 'No university'}, ${edu.startDate || 'No start date'} - ${edu.endDate || 'No end date'}`}</span>
                <p className="mt-2">{edu.description || 'No description'}</p>
              </div>
            ))
          ) : (
            <p>No education listed</p>
          )}
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: accentColor }}>SKILLS</h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.length > 0 ? (
              skills.map((skill) => (
                <div key={skill.id} className="flex flex-col mb-4">
                  <span className="text-gray-800">{skill.name}</span>
                  <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${skill.rating * 20}%`,
                        backgroundColor: accentColor,
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

export default Template6;
