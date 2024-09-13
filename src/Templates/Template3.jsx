import React, { useContext } from 'react';
import styled from 'styled-components';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const HomePageContainer = styled.div`
  font-family: 'Urbanist', sans-serif;
  margin: 0 auto;
  max-width: 750px;
  padding: 20px;
  background: #f5f5f5;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NameSection = styled.section`
  background: ${({ themeColor }) => themeColor || '#0A3D62'};
  padding: 20px;
  color: white;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const NameTitle = styled.h1`
  font-size: 1.5rem;
  margin: 5px 0;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const ContactHeading = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: #f0f0f0;
  font-weight: bold;
  min-width: 100px;
`;

const ContactInfo = styled.p`
  font-size: 0.85rem;
  margin: 0;
  padding-left: 10px;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  font-size: 1.2rem;
  color: ${({ themeColor }) => themeColor || '#0A3D62'};
  padding-bottom: 2px;
  margin-bottom: 8px;
`;

const SectionContent = styled.p`
  font-size: 0.8rem;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  padding: 5px 0;
  margin-bottom: 5px;
  color: #333;
  position: relative;
  padding-left: 20px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: ${({ themeColor }) => themeColor || '#0A3D62'};
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  padding: 20px 0;
  margin: 0;
  border-left: 3px solid ${({ themeColor }) => themeColor || '#0A3D62'};
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 50px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  &:before {
    content: '';
    position: absolute;
    left: -10px;
    top: 0;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: ${({ themeColor }) => themeColor || '#0A3D62'};
    border: 2px solid white;
  }
`;

const TimelineContent = styled.div`
  padding-left: 10px;
`;

function Template3() {
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
    summery,
    experience = [],
    education = [],
    skills = [],
  } = resumeInfo;

  return (
    <HomePageContainer>
      <ContentSection>
        <NameSection themeColor={themeColor}>
          <NameTitle>{`${firstName} ${lastName}`}</NameTitle>
          <ContactContainer>
            <ContactHeading>Job Title:</ContactHeading>
            <ContactInfo>{jobTitle || 'No job title provided'}</ContactInfo>
          </ContactContainer>
          <ContactContainer>
            <ContactHeading>Address:</ContactHeading>
            <ContactInfo>{address || 'No address provided'}</ContactInfo>
          </ContactContainer>
          <ContactContainer>
            <ContactHeading>Contact:</ContactHeading>
            <ContactInfo>{phone || 'No phone number provided'}</ContactInfo>
          </ContactContainer>
          <ContactContainer>
            <ContactHeading>Email:</ContactHeading>
            <ContactInfo>{email || 'No email provided'}</ContactInfo>
          </ContactContainer>
        </NameSection>

        <TimelineContainer themeColor={themeColor}>
          <TimelineItem themeColor={themeColor}>
            <TimelineContent>
              <SectionTitle themeColor={themeColor}>Summary</SectionTitle>
              <SectionContent>{summery || 'No summary provided'}</SectionContent>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem themeColor={themeColor}>
            <TimelineContent>
              <SectionTitle themeColor={themeColor}>Skills</SectionTitle>
              <List>
                {skills.length > 0 ? (
                  skills.map((skill, index) => (
                    <ListItem key={index} themeColor={themeColor}>
                      {skill.name || 'Unnamed Skill'}
                    </ListItem>
                  ))
                ) : (
                  <ListItem>No skills listed</ListItem>
                )}
              </List>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem themeColor={themeColor}>
            <TimelineContent>
              <SectionTitle themeColor={themeColor}>Work History</SectionTitle>
              {experience.length > 0 ? (
                experience.map((exp, index) => (
                  <div key={index}>
                    <h3 style={{ fontSize: '0.8rem' }}>
                      {exp.position || 'Position not specified'}
                    </h3>
                    <p>
                      {exp.company || 'Company not specified'} —{' '}
                      {exp.location || 'Location not specified'} |{' '}
                      <em>
                        {exp.startDate || 'Start date not specified'} –{' '}
                        {exp.endDate || 'Present'}
                      </em>
                    </p>
                    <List>
                      {(exp.details || []).map((detail, detailIndex) => (
                        <ListItem key={detailIndex}>
                          {detail || 'Detail not specified'}
                        </ListItem>
                      ))}
                    </List>
                  </div>
                ))
              ) : (
                <p>No work experience listed</p>
              )}
            </TimelineContent>
          </TimelineItem>

          <TimelineItem themeColor={themeColor}>
            <TimelineContent>
              <SectionTitle themeColor={themeColor}>Education</SectionTitle>
              {education.length > 0 ? (
                education.map((edu, index) => (
                  <div key={index}>
                    <p style={{ fontSize: '0.9rem' }}>
                      {edu.degree || 'Degree not specified'}
                    </p>
                    <p style={{ fontSize: '0.9rem' }}>
                      {edu.institution || 'Institution not specified'} —{' '}
                      {edu.location || 'Location not specified'} |{' '}
                      <em>
                        Graduation: {edu.graduationDate || 'Graduation date not specified'}
                      </em>
                    </p>
                  </div>
                ))
              ) : (
                <p>No education details listed</p>
              )}
            </TimelineContent>
          </TimelineItem>
        </TimelineContainer>
      </ContentSection>
    </HomePageContainer>
  );
}

export default Template3;
