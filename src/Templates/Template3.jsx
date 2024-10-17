import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const Template3 = () => {
  const { resumeInfo } = useContext(ResumeinfoContext);

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
    summery, // Assuming summery is a typo, should be "summary"
    experience = [],
    education = [],
    skills = [],
  } = resumeInfo;

  const headerBgColor = themeColor || '#00008B'; // Blue background color for the header
  const mainHeadingColor = '#000000';
  const subHeadingColor = themeColor || '#00008B';
  const skillBarColor = themeColor || '#00008B';

  return (
    <div className="bg-gray-100 min-h-screen" style={{ backgroundColor: '#f0f0f0' }}>
      {/* Header Section */}
      <div className="p-8" style={{ backgroundColor: headerBgColor, color: '#ffffff' }}>
        <h3 className="text-4xl font-bold">
          {`${firstName || ''} ${lastName || ''}`}
        </h3>
        <h6 className="text-2xl">
          {jobTitle || ''}
        </h6>
        <p>
          {address || 'No address provided'} | {phone || 'No phone provided'} | {email || 'No email provided'}
        </p>
      </div>

      <div className="p-8">
        {/* Summary Section */}
        {summery && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold" style={{ color: mainHeadingColor }}>Summary</h3>
            <p className="text-gray-600">{summery}</p>
          </div>
        )}
        <div>
          <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>Skills</h3>
          {skills.length > 0 ? (
            skills.map((skill) => (
              <div key={skill.id} className="mb-4">
                <span className="text-gray-700">{skill.name}</span>
                <div className="w-64 bg-gray-300 rounded-full h-2 mt-1">
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
            <p>No skills listed</p>
          )}
        </div>

        {/* Timeline Section */}
        <div>
          <h3 className="text-2xl font-semibold" style={{ color: mainHeadingColor }}>Experience & Education</h3>
          <div className="mt-8">
            {experience.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xl font-semibold" style={{ color: subHeadingColor }}>Work Experience</h4>
                <div className="relative pl-6 border-l-2 border-gray-300">
                  {experience.map((exp) => (
                    <div key={exp.id} className="mb-6 relative">
                      {/* Adjusted the dot position to avoid overlap */}
                      <div className="absolute left-[-15px] top-[5px] w-3 h-3  rounded-full"style={{ color: subHeadingColor }}></div>
                      <h5 className="font-bold">{exp.title}</h5>
                      <p className="text-sm text-gray-600">{exp.companyName} | {exp.city}, {exp.state}</p>
                      <span className="text-sm">{exp.startDate} - {exp.endDate || 'Present'}</span>
                      <p className="text-gray-600 mt-1">{exp.workSummery}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {education.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xl font-semibold" style={{ color: subHeadingColor }}>Education</h4>
                <div className="relative pl-6 border-l-2 border-gray-300">
                  {education.map((edu) => (
                    <div key={edu.id} className="mb-6 relative">
                      {/* Adjusted the dot position to avoid overlap */}
                      <h5 className="font-bold">{edu.degree}</h5>
                      <p className="text-sm text-gray-600">{edu.universityName}</p>
                      <span className="text-sm">{edu.startDate} - {edu.endDate}</span>
                      <p className="text-gray-600 mt-1">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Skills Section */}
      </div>
    </div>
  );
};

export default Template3;
