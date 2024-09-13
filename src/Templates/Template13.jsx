import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Template13 = () => {
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
  const headerBgColor = themeColor || '#2c3e50'; // Dark background color for the header
  const bodyBgColor = '#ecf0f1'; // Light background color for the body
  const accentColor = '#3498db'; // Blue accent color
  const textColor = '#34495e'; // Main text color

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-8">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div
          className="flex flex-col sm:flex-row items-center bg-gray-900 text-white p-8"
          style={{ backgroundColor: headerBgColor }}
        >
          <div className="sm:w-1/3 flex flex-col items-center text-center sm:text-left sm:items-start mb-6 sm:mb-0">
            <h1 className="text-4xl font-bold">
              {firstName || 'First Name'} {lastName || 'Last Name'}
            </h1>
            <h2 className="text-xl mt-2">{jobTitle || 'Job Title'}</h2>
            <div className="mt-4 text-sm text-gray-300">
              <div className="flex items-center mt-2">
                <FaMapMarkerAlt className="mr-2" /> {address || 'No address provided'}
              </div>
              <div className="flex items-center mt-2">
                <FaPhone className="mr-2" /> {phone || 'No phone number provided'}
              </div>
              <div className="flex items-center mt-2">
                <FaEnvelope className="mr-2" /> {email || 'No email provided'}
              </div>
            </div>
          </div>
          <div className="sm:w-2/3 p-4 sm:p-8">
            {summary && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Professional Summary</h3>
                <p className="text-gray-200">{summary}</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col sm:flex-row" style={{ backgroundColor: bodyBgColor }}>
          {/* Skills Section */}
          {skills.length > 0 && (
            <div className="w-full sm:w-1/4 p-6 border-r border-gray-300">
              <h3 className="text-xl font-semibold mb-4" style={{ color: accentColor }}>
                Skills
              </h3>
              <ul className="text-gray-800">
                {skills.map((skill) => (
                  <li key={skill.id} className="flex justify-between my-2">
                    <span>{skill.name}</span>
                    <span className="text-gray-600">{skill.rating}/5</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Experience and Education Section */}
          <div className="w-full sm:w-3/4 p-6">
            {/* Work Experience Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: accentColor }}>
                Work Experience
              </h3>
              {experience.length > 0 ? (
                experience.map((exp) => (
                  <div key={exp.id} className="mb-6">
                    <h4 className="text-lg font-semibold" style={{ color: textColor }}>
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
                    <hr className="my-2 border-gray-300" />
                  </div>
                ))
              ) : (
                <p>No work experience listed</p>
              )}
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: accentColor }}>
                Education
              </h3>
              {education.length > 0 ? (
                education.map((edu) => (
                  <div key={edu.id} className="mb-6">
                    <h4 className="text-lg font-semibold" style={{ color: textColor }}>
                      {edu.degree || 'No degree'}
                    </h4>
                    <span className="block text-gray-600">
                      {edu.universityName || 'No university'}, {edu.startDate || 'No start date'} -{' '}
                      {edu.endDate || 'No end date'}
                    </span>
                    <p className="mt-2 text-gray-700">{edu.description || 'No description'}</p>
                    <hr className="my-2 border-gray-300" />
                  </div>
                ))
              ) : (
                <p>No education listed</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template13;
