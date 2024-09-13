import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const Template9 = () => {
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
  const headerColor = themeColor || '#1abc9c'; // Teal or theme color
  const timelineColor = '#3498db'; // Light blue for timeline
  const textColor = '#2c3e50'; // Dark text color

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-400 to-teal-500 p-6 text-white text-center">
          <h1 className="text-4xl font-bold">{`${firstName || ''} ${lastName || ''}`}</h1>
          <h2 className="text-xl mt-2">{jobTitle || 'Job Title'}</h2>
        </div>

        {/* Main Content Section */}
        <div className="p-8">
          {/* Summary Section */}
          {summary && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: headerColor }}>
                SUMMARY
              </h3>
              <p className="text-gray-700">{summary}</p>
            </div>
          )}

          {/* Timeline Section */}
          <div className="relative border-l-2 border-gray-300">
            {/* Work Experience */}
            <div className="mb-8 pl-4">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: headerColor }}>
                WORK EXPERIENCE
              </h3>
              {experience.length > 0 ? (
                experience.map((exp, index) => (
                  <div key={exp.id} className="mb-6 relative">
                    <div className="absolute left-[-10px] w-4 h-4 rounded-full" style={{ backgroundColor: timelineColor }}></div>
                    <div className="ml-6">
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
                  </div>
                ))
              ) : (
                <p>No work experience listed</p>
              )}
            </div>

            {/* Education */}
            <div className="pl-4">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: headerColor }}>
                EDUCATION
              </h3>
              {education.length > 0 ? (
                education.map((edu, index) => (
                  <div key={edu.id} className="mb-6 relative">
                    <div className="absolute left-[-10px] w-4 h-4 rounded-full" style={{ backgroundColor: timelineColor }}></div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold" style={{ color: textColor }}>
                        {edu.degree || 'No degree'}
                      </h4>
                      <span className="block text-gray-600">
                        {edu.universityName || 'No university'}, {edu.startDate || 'No start date'} -{' '}
                        {edu.endDate || 'No end date'}
                      </span>
                      <p className="mt-2 text-gray-700">{edu.description || 'No description'}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No education listed</p>
              )}
            </div>
          </div>

          {/* Skills Section */}
          {skills.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: headerColor }}>
                SKILLS
              </h3>
              {skills.map((skill) => (
                <div key={skill.id} className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">{skill.name}</span>
                    <div className="w-1/2 bg-gray-300 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${skill.rating * 20}%`,
                          backgroundColor: headerColor,
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

export default Template9;
