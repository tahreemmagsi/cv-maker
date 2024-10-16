import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const Template15 = ({imageId}) => {
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
    image, // Assuming image URL is part of resumeInfo
  } = resumeInfo;

  // Define new colors
  const mainHeadingColor = themeColor || '#1f2937'; // Dark Slate Gray or theme color
  const subHeadingColor = themeColor || '#3b82f6'; // Sky Blue or theme color
  const sectionBgColor = '#f9fafb'; // Light Gray

  return (
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="flex items-center bg-gray-200 p-6 rounded-t-lg">
          <div className="flex-shrink-0">
            <img
              src={imageId ? `${imageBaseUrl}${imageId}` : image}           
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-300"
            />
          </div>
          <div className="ml-6">
            <h1 className="text-4xl font-bold" style={{ color: mainHeadingColor }}>
              {`${firstName || ''} ${lastName || ''}`}
            </h1>
            <h2 className="text-xl font-medium mt-1" style={{ color: subHeadingColor }}>
              {jobTitle || 'No Job Title'}
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/3 p-6">
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: mainHeadingColor }}>
                PERSONAL INFORMATION
              </h3>
              <p className="mb-2">{summery || 'No summary provided'}</p>
              <ul className="list-none">
                <li className="flex items-center mb-2">
                  <span className="font-medium text-gray-700">Phone:</span>
                  <span className="ml-2">{phone || 'No phone number provided'}</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="font-medium text-gray-700">Email:</span>
                  <span className="ml-2">{email || 'No email provided'}</span>
                </li>
                <li className="flex items-center">
                  <span className="font-medium text-gray-700">Address:</span>
                  <span className="ml-2">{address || 'No address provided'}</span>
                </li>
              </ul>
            </div>

            {/* Skills Section */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4" style={{ color: mainHeadingColor }}>
                SKILLS
              </h3>
              {skills.length > 0 ? (
                skills.map((skill) => (
                  <div key={skill.id} className="mb-4">
                    <span className="text-gray-700">{skill.name}</span>
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
                <p className="text-gray-700">No skills listed</p>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="w-2/3 p-6">
            {/* Work Experience Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6" style={{ backgroundColor: sectionBgColor }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
                WORK EXPERIENCE
              </h3>
              {experience.length > 0 ? (
                experience.map((exp) => (
                  <div key={exp.id} className="mb-6">
                    <h4 className="text-lg font-semibold" style={{ color: subHeadingColor }}>
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

            {/* Education Section */}
            <div className="bg-white p-6 rounded-lg shadow-md" style={{ backgroundColor: sectionBgColor }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
                EDUCATION
              </h3>
              {education.length > 0 ? (
                education.map((edu) => (
                  <div key={edu.id} className="mb-6">
                    <h4 className="text-lg font-semibold" style={{ color: subHeadingColor }}>
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
        </div>
      </div>
  );
};

export default Template15;
