import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import react-icons

const Template20 = ({imageId}) => {
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
  const mainHeadingColor = themeColor || '#2980b9'; // Bright Blue
  const subHeadingColor = themeColor || '#e74c3c'; // Bright Red
  const sectionBgColor = '#fdfdfd'; // Off-white

  return (
      <div className="max-w-screen-lg mx-auto bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="w-full md:w-1/3 bg-gradient-to-b from-blue-100 to-blue-300 p-6 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-6">
            <img
              src={imageId ? `${imageBaseUrl}${imageId}` : image}           
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">{`${firstName || ''} ${lastName || ''}`}</h1>
          <h2 className="text-xl font-semibold text-white mb-4">{jobTitle || 'No Job Title'}</h2>
          <div className="text-gray-600 mb-4">
            <p className="mb-2"><FaMapMarkerAlt className="inline-block mr-2" /> {address || 'No address provided'}</p>
            <p className="mb-2"><FaPhoneAlt className="inline-block mr-2" /> {phone || 'No phone number provided'}</p>
            <p><FaEnvelope className="inline-block mr-2" /> {email || 'No email provided'}</p>
          </div>

          {/* Skills Section */}
          <div className="w-full mt-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>
            {skills.length > 0 ? (
              skills.map((skill) => (
                <div key={skill.id} className="mb-4">
                  <div className="text-gray-200 mb-1">{skill.name}</div>
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
              <p className="text-gray-200">No skills listed</p>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 p-6">
          {/* Summary Section */}
          <div className="mb-8 p-6 rounded-lg shadow-lg" style={{ backgroundColor: sectionBgColor }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
              Summary
            </h3>
            <p 
                    className="mt-2 text-gray-700" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>{summery || 'No summary provided'}</p>
          </div>

          {/* Experience Section */}
          <div className="mb-8 p-6 rounded-lg shadow-lg" style={{ backgroundColor: sectionBgColor }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
              Experience
            </h3>
            {experience.length > 0 ? (
              experience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <h4 className="text-xl font-semibold mb-2" style={{ color: subHeadingColor }}>
                    {exp.title || 'No title'}
                  </h4>
                  <p className="text-gray-700 mb-1">
                    {`${exp.companyName || 'No company name'}, ${exp.city || 'No city'}, ${exp.state || 'No state'}`}
                  </p>
                  <p className="text-gray-700 mb-2">
                    {`${exp.startDate || 'No start date'} - ${exp.endDate || 'Present'}`}
                  </p>
                  <p 
                    className="mt-2 text-gray-700" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>{exp.workSummery || 'No work summary'}</p>
                </div>
              ))
            ) : (
              <p>No work experience listed</p>
            )}
          </div>

          {/* Education Section */}
          <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: sectionBgColor }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
              Education
            </h3>
            {education.length > 0 ? (
              education.map((edu) => (
                <div key={edu.id} className="mb-6">
                  <h4 className="text-xl font-semibold mb-2" style={{ color: subHeadingColor }}>
                    {edu.degree || 'No degree'}
                  </h4>
                  <p className="text-gray-700 mb-1">
                    {`${edu.universityName || 'No university'}, ${edu.startDate || 'No start date'} - ${edu.endDate || 'No end date'}`}
                  </p>
                  <p 
                    className="mt-2 text-gray-700" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>{edu.description || 'No description'}</p>
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

export default Template20;
