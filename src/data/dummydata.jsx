import profile from './../images/profilepic.PNG';

export default {
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Software Developer',
    address: '1234 Placeholder Lane, ZZ 99999',
    phone: '(000)-000-0000',
    email: 'placeholder@example.com',
    // themeColor: "#414141",
    summery: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident.',
    experience: [
        {
            id: 1,
            title: 'Software Engineer',
            companyName: 'ABC Corp',
            city: ' XYZZZ',
            state: 'ZZ',
            startDate: 'Jan 2020',
            endDate: '',
            currentlyWorking: true,
            workSummery: 'Developed various internal and external applications using a range of technologies.\n' +
                '• Collaborated with team members to deliver high-quality software solutions.\n' +
                '• Created and maintained APIs to ensure smooth communication between front-end and back-end systems.\n' +
                '• Led front-end development initiatives using React.js.'
        },
        {
            id: 2,
            title: 'Junior Developer',
            companyName: 'XYZ Solutions',
            city: ' XYZZZ',
            state: 'YY',
            startDate: 'Feb 2018',
            endDate: 'Dec 2019',
            currentlyWorking: false,
            workSummery: 'Assisted in developing client-side applications with a focus on user experience.\n' +
                '• Supported senior developers in building APIs using Node.js and Express.\n' +
                '• Participated in agile development processes to meet project deadlines.'
        }
    ],
    education: [
        {
            id: 1,
            universityName: 'Imaginary University',
            startDate: 'Aug 2015',
            endDate: 'May 2019',
            degree: 'XYZZZ',
            major: 'Computer Science',
            description: 'Focused on software development, data structures, and algorithms. Completed various projects using modern programming languages and frameworks.'
        },
        {
            id: 2,
            universityName: 'Fictional College',
            startDate: 'Aug 2012',
            endDate: 'May 2015',
            degree: 'XYZZZ',
            major: 'Information Technology',
            description: 'Learned the basics of software engineering, networking, and database management. Completed hands-on projects in web development and system administration.'
        }
    ],
    skills: [
        {
            id: 1,
            name: 'XYZScript',
            rating: 4,
        },
        {
            id: 2,
            name: 'NimbleLang',
            rating: 5,
        },
        {
            id: 3,
            name: 'QuantumSQL',
            rating: 3,
        },
        {
            id: 4,
            name: 'MetaNode.js',
            rating: 4,
        }
    ],
    image: profile // Updated to use the imported profile image
};
