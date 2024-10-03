import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Template14 = () => {
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
    linkedin,
    github,
    themeColor,
    summary,
    experience = [],
    education = [],
    skills = [],
  } = resumeInfo;

  const primaryColor = themeColor || '#1abc9c';
  const headerBgColor = '#2c3e50';
  const textColor = '#34495e';

  return (
      <div className="relative max-w-4xl w-full h-auto bg-white shadow-xl rounded-lg p-8 flex flex-col space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold" style={{ color: headerBgColor }}>
            {firstName || 'First'} {lastName || 'Last'}
          </h1>
          <h2 className="text-xl mt-2" style={{ color: primaryColor }}>
            {jobTitle || 'Job Title'}
          </h2>
          <p className="mt-4 text-gray-700">{summary || 'A brief professional summary.'}</p>
        </div>

        {/* Timeline Section */}
        <div className="relative border-l-4 border-gray-300 ml-4 pl-8 space-y-6">
          
          {/* Contact Information Section */}
          <div className="relative flex items-start space-x-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full">
              <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Contact</h3>
              <div className="flex flex-col space-y-2 text-gray-800">
                <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> {address || 'Address'}</p>
                <p className="flex items-center"><FaPhone className="mr-2" /> {phone || 'Phone'}</p>
                <p className="flex items-center"><FaEnvelope className="mr-2" /> {email || 'Email'}</p>
                {linkedin && <p className="flex items-center"><FaLinkedin className="mr-2" /> <a href={linkedin} className="text-blue-500">LinkedIn</a></p>}
                {github && <p className="flex items-center"><FaGithub className="mr-2" /> <a href={github} className="text-blue-500">GitHub</a></p>}
              </div>
            </div>
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-gray-300 border-2 border-white"></div>
          </div>

          {/* Skills Section */}
          <div className="relative flex items-start space-x-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full">
              <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Skills</h3>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex flex-col mb-2">
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${(skill.rating / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-gray-300 border-2 border-white"></div>
          </div>

          {/* Experience Section */}
          <div className="relative flex items-start space-x-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full">
              <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Experience</h3>
              {experience.map((exp) => (
                <div key={exp.id} className="mb-2">
                  <h4 className="text-sm font-semibold" style={{ color: textColor }}>
                    {exp.title || 'Title'} @ {exp.companyName || 'Company'}
                  </h4>
                  <p className="text-xs text-gray-600">{exp.startDate || 'Start'} - {exp.endDate || 'End'}</p>
                  <p className="mt-2 text-gray-700">{exp.workSummery || 'No description'}</p>

                </div>
              ))}
            </div>
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-gray-300 border-2 border-white"></div>
          </div>

          {/* Education Section */}
          <div className="relative flex items-start space-x-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full">
              <h3 className="text-lg font-semibold mb-2" style={{ color: primaryColor }}>Education</h3>
              {education.map((edu) => (
                <div key={edu.id} className="mb-2">
                  <h4 className="text-sm font-semibold" style={{ color: textColor }}>
                    {edu.degree || 'Degree'}
                  </h4>
                  <p className="text-xs text-gray-600">{edu.startDate || 'Start'} - {edu.endDate || 'End'}</p>
                  <p className="mt-2 text-gray-700">{edu.description || 'No description'}</p>

                </div>
              ))}
            </div>
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-gray-300 border-2 border-white"></div>
          </div>

        </div>
      </div>
  );
};

export default Template14;
