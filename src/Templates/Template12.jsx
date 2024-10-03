import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const Template12 = () => {
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
  const sidebarColor = themeColor || '#34495e'; // Dark blue for the sidebar or theme color
  const headerColor = '#ecf0f1'; // Light gray for the header
  const mainTextColor = '#2c3e50'; // Dark text color
  const accentColor = '#3498db'; // Blue accent color

  return (
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Sidebar Section */}
        <div
          className="w-1/4 bg-gray-900 text-white p-8 flex flex-col justify-between"
          style={{ backgroundColor: sidebarColor }}
        >
          <div>
            <h1 className="text-3xl font-bold">{`${firstName || ''} ${lastName || ''}`}</h1>
            <h2 className="text-lg mt-2 text-gray-200">{jobTitle || 'Job Title'}</h2>

            {/* Contact Information */}
            <div className="mt-6 text-sm">
              <p className="mt-2">{address || 'No address provided'}</p>
              <p className="mt-2">{phone || 'No phone number provided'}</p>
              <p className="mt-2">{email || 'No email provided'}</p>
            </div>
          </div>

          {/* Skills Section */}
          {skills.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-300">Skills</h3>
              {skills.map((skill) => (
                <div key={skill.id} className="mb-3">
                  <span>{skill.name}</span>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-1 overflow-hidden">
                    <div
                      className="h-2 rounded-full bg-blue-400"
                      style={{
                        width: `${skill.rating * 20}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main Content Section */}
        <div className="w-3/4 p-10" style={{ backgroundColor: headerColor }}>
          {/* Summary Section */}
          {summary && (
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: mainTextColor }}>
                Summary
              </h3>
              <p className="text-gray-800">{summary}</p>
            </div>
          )}

          {/* Work Experience Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: mainTextColor }}>
              Work Experience
            </h3>
            {experience.length > 0 ? (
              experience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <h4 className="text-xl font-semibold" style={{ color: accentColor }}>
                    {exp.title || 'No title'}
                  </h4>
                  <span className="block text-gray-600">
                    {exp.companyName || 'No company name'}, {exp.city || 'No city'},{' '}
                    {exp.state || 'No state'}
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
            <h3 className="text-2xl font-semibold mb-4" style={{ color: mainTextColor }}>
              Education
            </h3>
            {education.length > 0 ? (
              education.map((edu) => (
                <div key={edu.id} className="mb-6">
                  <h4 className="text-xl font-semibold" style={{ color: accentColor }}>
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

export default Template12;
