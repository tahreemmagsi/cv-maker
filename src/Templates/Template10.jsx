import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const Template10 = () => {
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
  const sidebarColor = themeColor || '#34495e'; // Dark blue for sidebar or theme color
  const textColor = '#2c3e50'; // Dark text color

  return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl w-full flex">
        {/* Sidebar Section */}
        <div className="w-1/3 bg-gradient-to-b from-blue-800 to-blue-600 p-6 text-white">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">{`${firstName || ''} ${lastName || ''}`}</h1>
            <h2 className="text-lg mt-2">{jobTitle || 'Job Title'}</h2>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-sm">{address || 'No address provided'}</p>
            <p className="text-sm">{phone || 'No phone number provided'}</p>
            <p className="text-sm">{email || 'No email provided'}</p>
          </div>
          {skills.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              {skills.map((skill) => (
                <div key={skill.id} className="mb-3">
                  <div className="flex items-center justify-between">
                    <span>{skill.name}</span>
                    <div className="w-1/2 bg-gray-500 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${skill.rating * 20}%`,
                          backgroundColor: '#ecf0f1',
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main Content Section */}
        <div className="w-2/3 p-8">
          {/* Summary Section */}
          {summary && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: sidebarColor }}>
                SUMMARY
              </h3>
              <p className="text-gray-700">{summary}</p>
            </div>
          )}

          {/* Work Experience Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: sidebarColor }}>
              WORK EXPERIENCE
            </h3>
            {experience.length > 0 ? (
              experience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <h4 className="text-xl font-semibold" style={{ color: textColor }}>
                    {exp.title || 'No title'}
                  </h4>
                  <span className="block text-gray-600">
                    {exp.companyName || 'No company name'}, {exp.city || 'No city'}, {exp.state || 'No state'}
                  </span>
                  <span className="block text-gray-500">
                    {exp.startDate || 'No start date'} - {exp.endDate || 'Present'}
                  </span>
                  <p className="mt-2 text-gray-700">{exp.workSummery || 'No work summary'}</p>
                </div>
              ))
            ) : (
              <p>No work experience listed</p>
            )}
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: sidebarColor }}>
              EDUCATION
            </h3>
            {education.length > 0 ? (
              education.map((edu) => (
                <div key={edu.id} className="mb-6">
                  <h4 className="text-xl font-semibold" style={{ color: textColor }}>
                    {edu.degree || 'No degree'}
                  </h4>
                  <span className="block text-gray-600">
                    {edu.universityName || 'No university'}, {edu.startDate || 'No start date'} -{' '}
                    {edu.endDate || 'No end date'}
                  </span>
                  <p className="mt-2 text-gray-700">{edu.description || 'No description'}</p>
                </div>
              ))
            ) : (
              <p>No education listed</p>
            )}
          </div>
        </div>
      </div>
  );
};

export default Template10;
