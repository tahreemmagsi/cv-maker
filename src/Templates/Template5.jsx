import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const Template5 = () => {
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
  const mainHeadingColor = themeColor || '#d35400'; // Orange or theme color
  const sectionBgColor = '#f7f9fc'; // Light background for sections
  const textColor = '#2c3e50'; // Dark text color

  return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="flex items-center justify-between p-8 bg-gray-200" style={{ backgroundColor: mainHeadingColor }}>
          <div>
            <h1 className="text-5xl font-bold text-white">{`${firstName || ''} ${lastName || ''}`}</h1>
            <h3 className="text-xl font-medium text-white">{jobTitle || 'No Job Title'}</h3>
          </div>
          <div className="text-right text-white">
            <p>{phone || 'No phone number provided'}</p>
            <p>{email || 'No email provided'}</p>
            <p>{address || 'No address provided'}</p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="p-6 text-center" style={{ color: textColor }}>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>PROFESSIONAL SUMMARY</h2>
          <p className="text-lg">{summary || 'No summary provided'}</p>
        </div>

        <div className="flex">
          {/* Experience Section */}
          <div className="w-1/2 p-6" style={{ backgroundColor: sectionBgColor }}>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>WORK EXPERIENCE</h2>
            {experience.length > 0 ? (
              experience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <h4 className="text-xl font-semibold" style={{ color: textColor }}>
                    {exp.title || 'No title'}
                  </h4>
                  <span className="text-gray-600 block">{`${exp.companyName || 'No company name'}, ${exp.city || 'No city'}, ${exp.state || 'No state'}`}</span>
                  <span className="text-gray-600 block">{`${exp.startDate || 'No start date'} - ${exp.endDate || 'Present'}`}</span>
                  <p className="mt-2">{exp.workSummery || 'No work summary'}</p>
                </div>
              ))
            ) : (
              <p>No work experience listed</p>
            )}
          </div>

          {/* Skills Section */}
          <div className="w-1/2 p-6" style={{ backgroundColor: '#fff' }}>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>SKILLS</h2>
            {skills.length > 0 ? (
              skills.map((skill) => (
                <div key={skill.id} className="mb-4">
                  <span className="text-gray-700">{skill.name}</span>
                  <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${skill.rating * 20}%`,
                        backgroundColor: mainHeadingColor,
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

        {/* Education Section */}
        <div className="p-6" style={{ backgroundColor: sectionBgColor }}>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>EDUCATION</h2>
          {education.length > 0 ? (
            education.map((edu) => (
              <div key={edu.id} className="mb-6">
                <h4 className="text-xl font-semibold" style={{ color: textColor }}>
                  {edu.degree || 'No degree'}
                </h4>
                <span className="text-gray-600 block">{`${edu.universityName || 'No university'}, ${edu.startDate || 'No start date'} - ${edu.endDate || 'No end date'}`}</span>
                <p className="mt-2">{edu.description || 'No description'}</p>
              </div>
            ))
          ) : (
            <p>No education listed</p>
          )}
        </div>
      </div>
  );
};

export default Template5;
