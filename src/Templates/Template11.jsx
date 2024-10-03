import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const Template11 = () => {
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
  const headerColor = themeColor || '#1abc9c'; // Green for the header or theme color
  const sidebarColor = '#f39c12'; // Orange for the sidebar
  const mainBgColor = '#ecf0f1'; // Light gray for the main content background
  const textColor = '#2c3e50'; // Dark text color

  return (
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 text-white">
          <h1 className="text-4xl font-bold">{`${firstName || ''} ${lastName || ''}`}</h1>
          <h2 className="text-2xl mt-2">{jobTitle || 'Job Title'}</h2>
        </div>

        <div className="flex">
          {/* Main Content Section */}
          <div className="w-2/3 p-8" style={{ backgroundColor: mainBgColor }}>
            {/* Summary Section */}
            {summary && (
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: sidebarColor }}>
                  Summary
                </h3>
                <p className="text-gray-800">{summary}</p>
              </div>
            )}

            {/* Work Experience Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: sidebarColor }}>
                Work Experience
              </h3>
              {experience.length > 0 ? (
                experience.map((exp) => (
                  <div key={exp.id} className="mb-6">
                    <h4 className="text-xl font-semibold" style={{ color: textColor }}>
                      {exp.title || 'No title'}
                    </h4>
                    <span className="block text-gray-700">
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
                Education
              </h3>
              {education.length > 0 ? (
                education.map((edu) => (
                  <div key={edu.id} className="mb-6">
                    <h4 className="text-xl font-semibold" style={{ color: textColor }}>
                      {edu.degree || 'No degree'}
                    </h4>
                    <span className="block text-gray-700">
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

          {/* Sidebar Section */}
          <div className="w-1/3 bg-orange-400 p-6 text-white flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-sm">{address || 'No address provided'}</p>
              <p className="text-sm">{phone || 'No phone number provided'}</p>
              <p className="text-sm">{email || 'No email provided'}</p>
            </div>
            {skills.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                {skills.map((skill) => (
                  <div key={skill.id} className="mb-3">
                    <div className="flex items-center justify-between">
                      <span>{skill.name}</span>
                      <div className="w-1/2 bg-gray-300 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${skill.rating * 20}%`,
                            backgroundColor: '#fff',
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default Template11;
