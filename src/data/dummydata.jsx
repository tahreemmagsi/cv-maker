import profile from './../images/profilepic.PNG';

export default {
    firstName: 'James',
    lastName: 'Carter',
    jobTitle: 'Full Stack Developer',
    address: '525 N Tryon Street, NC 28117',
    phone: '(123)-456-7890',
    email: 'example@gmail.com',
    // themeColor: "#414141",
    summery: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    experience: [
        {
            id: 1,
            title: 'Full Stack Developer',
            companyName: 'Amazon',
            city: 'New York',
            state: 'NY',
            startDate: 'Jan 2021',
            endDate: '',
            currentlyWorking: true,
            workSummery: 'Designed, developed, and maintained full-stack applications using React and Node.js.\n' +
                '• Implemented responsive user interfaces with React, ensuring seamless user experiences across\n' +
                'various devices and browsers.\n' +
                '• Maintaining the React Native in-house organization application.\n' +
                '• Created RESTful APIs with Node.js and Express, facilitating data communication between the front-end' +
                'and back-end systems.'
        },
        {
            id: 2,
            title: 'Frontend Developer',
            companyName: 'Google',
            city: 'Charlotte',
            state: 'NC',
            startDate: 'May 2019',
            endDate: 'Jan 2021',
            currentlyWorking: false,
            workSummery: 'Designed, developed, and maintained full-stack applications using React and Node.js.\n' +
                '• Implemented responsive user interfaces with React, ensuring seamless user experiences across\n' +
                'various devices and browsers.\n' +
                '• Maintaining the React Native in-house organization application.\n' +
                '• Created RESTful APIs with Node.js and Express, facilitating data communication between the front-end' +
                'and back-end systems.'
        }
    ],
    education: [
        {
            id: 1,
            universityName: 'Western Illinois University',
            startDate: 'Aug 2018',
            endDate: 'Dec 2019',
            degree: 'Master',
            major: 'Computer Science',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
        },
        {
            id: 2,
            universityName: 'Western Illinois University',
            startDate: 'Aug 2018',
            endDate: 'Dec 2019',
            degree: 'Master',
            major: 'Computer Science',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
        }
    ],
    skills: [
        {
            id: 1,
            name: 'Angular',
            rating: 4,
        },
        {
            id: 2,
            name: 'React',
            rating: 5,
        },
        {
            id: 3,
            name: 'MySQL',
            rating: 3,
        },
        {
            id: 4,
            name: 'React Native',
            rating: 5,
        }
    ],
    image: profile // Updated to use the imported profile image
};
