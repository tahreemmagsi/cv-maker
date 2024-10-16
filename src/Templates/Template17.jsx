import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const Template17 = ({imageId}) => {
  const { resumeInfo } = useContext(ResumeinfoContext);
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL; 


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
  const mainHeadingColor = themeColor || '#5e5e5e'; // Gray
  const subHeadingColor = themeColor || '#ff6f61'; // Coral
  const sectionBgColor = '#f9f9f9'; // Light Gray

  return (
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-10 relative">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-b from-transparent to-gray-200 z-0"></div>

        {/* Header Section */}
        <div className="flex items-center mb-8 relative z-10">
          <img
              src={imageId ? `${imageBaseUrl}${imageId}` : image}           
              alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-gray-200 shadow-lg"
          />
          <div className="ml-6">
            <h1 className="text-4xl font-bold mb-1" style={{ color: mainHeadingColor }}>
              {`${firstName || ''} ${lastName || ''}`}
            </h1>
            <h2 className="text-xl font-semibold mb-2" style={{ color: subHeadingColor }}>
              {jobTitle || 'No Job Title'}
            </h2>
            <div className="text-gray-600">
              <p>{address || 'No address provided'}</p>
              <p>{phone || 'No phone number provided'}</p>
              <p>{email || 'No email provided'}</p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mb-10 relative z-10">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
            Summary
          </h3>
          <p className="text-gray-700">{summery || 'No summary provided'}</p>
        </div>

        {/* Skills Section */}
        <div className="mb-10 relative z-10">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
            Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.length > 0 ? (
              skills.map((skill) => (
                <div key={skill.id} className="flex-1 max-w-[45%] bg-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-medium mb-2">{skill.name}</h4>
                  <div className="w-full bg-gray-300 rounded-full h-2">
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
        <div className="mb-10 relative z-10">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
            Experience
          </h3>
          {experience.length > 0 ? (
            experience.map((exp) => (
              <div key={exp.id} className="mb-6 p-4 bg-white shadow-md rounded-lg">
                <h4 className="text-xl font-semibold mb-2" style={{ color: subHeadingColor }}>
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
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
            Education
          </h3>
          {education.length > 0 ? (
            education.map((edu) => (
              <div key={edu.id} className="mb-6 p-4 bg-white shadow-md rounded-lg">
                <h4 className="text-xl font-semibold mb-2" style={{ color: subHeadingColor }}>
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

export default Template17;
