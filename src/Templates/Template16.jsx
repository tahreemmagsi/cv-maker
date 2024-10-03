import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const Template16 = () => {
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
    image,
  } = resumeInfo;

  // Define colors
  const mainHeadingColor = themeColor || '#4a90e2'; // Blue
  const subHeadingColor = themeColor || '#50e3c2'; // Teal
  const sectionBgColor = '#ffffff'; // White

  return (
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Header Section */}
        <div className="flex items-center mb-8 border-b border-gray-300 pb-4">
          <img
            src={image}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-200"
          />
          <div className="ml-6">
            <h1 className="text-3xl font-bold mb-1" style={{ color: mainHeadingColor }}>
              {`${firstName || ''} ${lastName || ''}`}
            </h1>
            <h2 className="text-xl font-semibold mb-2" style={{ color: subHeadingColor }}>
              {jobTitle || 'No Job Title'}
            </h2>
            <p className="text-gray-600">{address || 'No address provided'}</p>
            <p className="text-gray-600">{phone || 'No phone number provided'}</p>
            <p className="text-gray-600">{email || 'No email provided'}</p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
            Summary
          </h3>
          <p className="text-gray-700">{summery || 'No summary provided'}</p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
            Skills
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.length > 0 ? (
              skills.map((skill) => (
                <div key={skill.id} className="flex items-center">
                  <div className="flex-1 pr-4">
                    <h4 className="text-lg font-medium">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${skill.rating * 20}%`,
                        backgroundColor: subHeadingColor,
                      }}
                    ></div>
                  </div>
                </div>
              ))
            ) : (
              <p>No skills listed</p>
            )}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
            Experience
          </h3>
          {experience.length > 0 ? (
            experience.map((exp) => (
              <div key={exp.id} className="mb-6 border-l-4 border-gray-300 pl-4">
                <h4 className="text-xl font-semibold" style={{ color: subHeadingColor }}>
                  {exp.title || 'No title'}
                </h4>
                <p className="text-gray-600">
                  {`${exp.companyName || 'No company name'}, ${exp.city || 'No city'}, ${exp.state || 'No state'}`}
                </p>
                <p className="text-gray-600">{`${exp.startDate || 'No start date'} - ${exp.endDate || 'Present'}`}</p>
                <p className="mt-2 text-gray-700">{exp.workSummery || 'No work summary'}</p>
              </div>
            ))
          ) : (
            <p>No work experience listed</p>
          )}
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
            Education
          </h3>
          {education.length > 0 ? (
            education.map((edu) => (
              <div key={edu.id} className="mb-6 border-l-4 border-gray-300 pl-4">
                <h4 className="text-xl font-semibold" style={{ color: subHeadingColor }}>
                  {edu.degree || 'No degree'}
                </h4>
                <p className="text-gray-600">
                  {`${edu.universityName || 'No university'}, ${edu.startDate || 'No start date'} - ${edu.endDate || 'No end date'}`}
                </p>
                <p className="mt-2 text-gray-700">{edu.description || 'No description'}</p>
              </div>
            ))
          ) : (
            <p>No education listed</p>
          )}
        </div>
      </div>
  );
};

export default Template16;
