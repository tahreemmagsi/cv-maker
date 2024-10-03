import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import { Timeline, Typography, Divider } from 'antd';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const { Title, Text } = Typography;

const Template22 = () => {
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
  const mainHeadingColor = themeColor || '#2980b9'; // Bright Blue
  const subHeadingColor = themeColor || '#e74c3c'; // Bright Red

  return (
      <div className="max-w-screen-lg mx-auto bg-white shadow-xl rounded-lg p-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300">
            <img src={image} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="ml-6 text-center md:text-left">
            <Title level={1} style={{ color: mainHeadingColor }}>
              {`${firstName || ''} ${lastName || ''}`}
            </Title>
            <Title level={2} style={{ color: subHeadingColor }}>
              {jobTitle || 'No Job Title'}
            </Title>
            <Text className="text-gray-600 mb-2">
              <FaMapMarkerAlt className="inline-block mr-2" />
              {address || 'No address provided'}
            </Text>
            <Text className="text-gray-600 mb-2">
              <FaPhoneAlt className="inline-block mr-2" />
              {phone || 'No phone number provided'}
            </Text>
            <Text className="text-gray-600">
              <FaEnvelope className="inline-block mr-2" />
              {email || 'No email provided'}
            </Text>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-8 p-6 rounded-lg shadow-lg">
          <Title level={3} style={{ color: mainHeadingColor }}>
            Summary
          </Title>
          <Text>{summery || 'No summary provided'}</Text>
        </div>

        {/* Experience Section */}
        <div className="mt-8">
          <Title level={3} style={{ color: mainHeadingColor }}>
            Experience
          </Title>
          <Timeline mode="left">
            {experience.length > 0 ? (
              experience.map((exp) => (
                <Timeline.Item key={exp.id} color="blue">
                  <Title level={4} style={{ color: subHeadingColor }}>
                    {exp.title || 'No title'}
                  </Title>
                  <Text>{`${exp.companyName || 'No company name'}, ${exp.city || 'No city'}, ${exp.state || 'No state'}`}</Text>
                  <Text>{`${exp.startDate || 'No start date'} - ${exp.endDate || 'Present'}`}</Text>
                  <Text>{exp.workSummery || 'No work summary'}</Text>
                </Timeline.Item>
              ))
            ) : (
              <Text>No work experience listed</Text>
            )}
          </Timeline>
        </div>

        {/* Education Section */}
        <div className="mt-8">
          <Title level={3} style={{ color: mainHeadingColor }}>
            Education
          </Title>
          <Timeline mode="left">
            {education.length > 0 ? (
              education.map((edu) => (
                <Timeline.Item key={edu.id} color="green">
                  <Title level={4} style={{ color: subHeadingColor }}>
                    {edu.degree || 'No degree'}
                  </Title>
                  <Text>{`${edu.universityName || 'No university'}, ${edu.startDate || 'No start date'} - ${edu.endDate || 'No end date'}`}</Text>
                  <Text>{edu.description || 'No description'}</Text>
                </Timeline.Item>
              ))
            ) : (
              <Text>No education listed</Text>
            )}
          </Timeline>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <Title level={3} style={{ color: mainHeadingColor }}>
            Skills
          </Title>
          <Timeline mode="left">
            {skills.length > 0 ? (
              skills.map((skill) => (
                <Timeline.Item key={skill.id} color="purple">
                  <Title level={4} style={{ color: subHeadingColor }}>
                    {skill.name}
                  </Title>
                  <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
                    <div
                      className="h-2 rounded-full"
                      style={{ width: `${skill.rating * 20}%`, backgroundColor: subHeadingColor }}
                    ></div>
                  </div>
                </Timeline.Item>
              ))
            ) : (
              <Text>No skills listed</Text>
            )}
          </Timeline>
        </div>
      </div>
  );
};

export default Template22;
