import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const Template8 = () => {
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
  const primaryColor = themeColor || '#34495e'; // A dark blue or theme color
  const secondaryColor = '#ecf0f1'; // Light grey background color
  const textColor = '#2c3e50'; // Dark text color

  return (
      <div className="bg-white rounded-lg shadow-lg flex overflow-hidden">
        {/* Sidebar Section */}
        <div className="w-1/3 bg-gray-900 p-8 text-white">
          <div className="mb-6">
            <h1 className="text-4xl font-bold">{`${firstName || ''} ${lastName || ''}`}</h1>
            <h2 className="text-lg mt-2">{jobTitle || 'Job Title'}</h2>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="mt-2">{address || 'No address provided'}</p>
            <p className="mt-2">{phone || 'No phone number provided'}</p>
            <p className="mt-2">{email || 'No email provided'}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Skills</h3>
            <ul className="mt-2 space-y-2">
              {skills.length > 0 ? (
                skills.map((skill) => (
                  <li key={skill.id} className="flex items-center justify-between">
                    <span>{skill.name}</span>
                    <div className="w-24 bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${skill.rating * 20}%`,
                          backgroundColor: primaryColor,
                        }}
                      ></div>
                    </div>
                  </li>
                ))
              ) : (
                <p>No skills listed</p>
              )}
            </ul>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="w-2/3 p-8 bg-white">
          {/* Summary Section */}
          {summary && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2" style={{ color: primaryColor }}>SUMMARY</h2>
              <p className="text-gray-700">{summary}</p>
            </div>
          )}

          {/* Experience Section */}
          <div className="mb-8">
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
                  <p className="mt-2 text-gray-700">{exp.workSummery || 'No work summary'}</p>
                </div>
              ))
            ) : (
              <p>No work experience listed</p>
            )}
          </div>

          {/* Education Section */}
          <div>
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

export default Template8;
