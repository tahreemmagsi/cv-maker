
import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import DOMPurify from 'dompurify';

const Template4 = () => {
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
  } = resumeInfo;

  // Define colors
  const mainHeadingColor = themeColor || '#3498db'; // Blue or theme color
  const subHeadingColor = themeColor || '#2ecc71'; // Green or theme color
  const sectionBgColor = '#f4f4f9'; // Light background for sections

  return (
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg mr-8">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold" style={{ color: mainHeadingColor }}>
              {`${firstName || ''} ${lastName || ''}`}
            </h2>
            <h4 className="text-lg font-medium" style={{ color: subHeadingColor }}>
              {jobTitle || 'No Job Title'}
            </h4>
          </div>

          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2" style={{ color: mainHeadingColor }}>
              PERSONAL INFORMATION
            </h3>
            <p 
                    className="mt-2" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>
{summery || 'No summary provided'}</p>
            <ul className="list-none">
              <li className="flex items-center mb-2">
                <span className="text-gray-600">Phone:</span>
                <span className="ml-2">{phone || 'No phone number provided'}</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-gray-600">Email:</span>
                <span className="ml-2">{email || 'No email provided'}</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600">Address:</span>
                <span className="ml-2">{address || 'No address provided'}</span>
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: mainHeadingColor }}>SKILLS</h3>
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
        <div className="w-2/3">
          {/* Work Experience Section */}
          <div className="mb-8 p-6 rounded-lg shadow-lg" style={{ backgroundColor: sectionBgColor }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>WORK EXPERIENCE</h3>
            {experience.length > 0 ? (
              experience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <h6 className="text-xl font-semibold" style={{ color: subHeadingColor }}>
                    {exp.title || 'No title'}
                  </h6>
                  <span className="text-gray-600 block">{`${exp.companyName || 'No company name'}, ${exp.city || 'No city'}, ${exp.state || 'No state'}`}</span>
                  <span className="text-gray-600 block">{`${exp.startDate || 'No start date'} - ${exp.endDate || 'Present'}`}</span>
                  {/* <p className="mt-2">{exp.workSummery || 'No work summary'}</p> */}
                  <p 
                    className="mt-2" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>
{exp.workSummery || 'No work summary provided'}</p>

                </div>
              ))
            ) : (
              <p>No work experience listed</p>
            )}
          </div>

          {/* Education Section */}
          <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: sectionBgColor }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>EDUCATION</h3>
            {education.length > 0 ? (
              education.map((edu) => (
                <div key={edu.id} className="mb-6">
                  <h6 className="text-xl font-semibold" style={{ color: subHeadingColor }}>
                    {edu.degree || 'No degree'}
                  </h6>
                  <span className="text-gray-600 block">{`${edu.universityName || 'No university'}, ${edu.startDate || 'No start date'} - ${edu.endDate || 'No end date'}`}</span>
                  <p 
                    className="mt-2" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>
{edu.description || 'No description'}</p>
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

export default Template4;
