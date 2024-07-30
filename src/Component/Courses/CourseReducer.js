import { ENROLL_COURSE, SET_FILTER_TYPE, SET_FILTER_VALUE, SET_SEARCH_VALUE } from './CourseActions';


    export const initialCoursesState = {
    courses: [
        {
            "name": "Introduction to Computer Science",
            "categories": ["Computer Science"],
            "dates": {
                "start": "2024-09-01",
                "end": "2024-12-15"
            },
            "syllabus": [
                "Week 1: Basics of Programming",
                "Week 2: Data Structures",
                "Week 3: Algorithms",
                "Week 4: Software Development",
                "Week 5: Computer Architecture",
                "Week 6: Operating Systems",
                "Week 7: Networks",
                "Week 8: Databases",
                "Week 9: Web Development",
                "Week 10: Final Project"
            ],
            "schedule": {
                "lectures": "Mon, Wed, Fri - 10:00 AM to 11:30 AM",
                "labs": "Thu - 1:00 PM to 3:00 PM"
            },
            "prerequisites": ["None"],
            "instructors": ["Dr. Alice Johnson"],
            "difficulty_level": "Beginner",
            "seats": 30,
            "enrolled": 0
        },
        {
            "name": "Artificial Intelligence",
            "categories": ["Computer Science", "AI"],
            "dates": {
                "start": "2024-09-01",
                "end": "2024-12-15"
            },
            "syllabus": [
                "Week 1: Introduction to AI",
                "Week 2: Search Algorithms",
                "Week 3: Machine Learning Basics",
                "Week 4: Neural Networks",
                "Week 5: Natural Language Processing",
                "Week 6: Robotics",
                "Week 7: Computer Vision",
                "Week 8: AI Ethics",
                "Week 9: AI Applications",
                "Week 10: Final Project"
            ],
            "schedule": {
                "lectures": "Tue, Thu - 2:00 PM to 3:30 PM",
                "labs": "Fri - 3:00 PM to 5:00 PM"
            },
            "prerequisites": ["Introduction to Computer Science"],
            "instructors": ["Dr. Bob Smith"],
            "difficulty_level": "Intermediate",
            "seats": 25,
            "enrolled": 0
        },
        {
            "name": "Biology 101",
            "categories": ["Biology"],
            "dates": {
                "start": "2024-09-01",
                "end": "2024-12-15"
            },
            "syllabus": [
                "Week 1: Introduction to Biology",
                "Week 2: Cell Structure and Function",
                "Week 3: Genetics",
                "Week 4: Evolution",
                "Week 5: Ecology",
                "Week 6: Human Anatomy",
                "Week 7: Plant Biology",
                "Week 8: Microbiology",
                "Week 9: Biotechnology",
                "Week 10: Final Project"
            ],
            "schedule": {
                "lectures": "Mon, Wed, Fri - 9:00 AM to 10:30 AM",
                "labs": "Tue - 1:00 PM to 3:00 PM"
            },
            "prerequisites": ["None"],
            "instructors": ["Dr. Carol Williams"],
            "difficulty_level": "Beginner",
            "seats": 40,
            "enrolled": 0
        },
        {
            "name": "Machine Learning",
            "categories": ["Computer Science", "AI"],
            "dates": {
                "start": "2024-09-01",
                "end": "2024-12-15"
            },
            "syllabus": [
                "Week 1: Introduction to Machine Learning",
                "Week 2: Supervised Learning",
                "Week 3: Unsupervised Learning",
                "Week 4: Reinforcement Learning",
                "Week 5: Neural Networks",
                "Week 6: Deep Learning",
                "Week 7: Model Evaluation",
                "Week 8: Feature Engineering",
                "Week 9: Advanced Topics",
                "Week 10: Final Project"
            ],
            "schedule": {
                "lectures": "Mon, Wed - 11:00 AM to 12:30 PM",
                "labs": "Thu - 2:00 PM to 4:00 PM"
            },
            "prerequisites": ["Artificial Intelligence"],
            "instructors": ["Dr. David Brown"],
            "difficulty_level": "Advanced",
            "seats": 20,
            "enrolled": 0
        },
        {
            "name": "Genomics",
            "categories": ["Biology"],
            "dates": {
                "start": "2024-09-01",
                "end": "2024-12-15"
            },
            "syllabus": [
                "Week 1: Introduction to Genomics",
                "Week 2: DNA Sequencing",
                "Week 3: Genome Assembly",
                "Week 4: Functional Genomics",
                "Week 5: Comparative Genomics",
                "Week 6: Genomic Medicine",
                "Week 7: Population Genomics",
                "Week 8: Bioinformatics Tools",
                "Week 9: Case Studies",
                "Week 10: Final Project"
            ],
            "schedule": {
                "lectures": "Tue, Thu - 10:00 AM to 11:30 AM",
                "labs": "Wed - 3:00 PM to 5:00 PM"
            },
            "prerequisites": ["Biology 101"],
            "instructors": ["Dr. Emily Davis"],
            "difficulty_level": "Intermediate",
            "seats": 15,
            "enrolled": 0
        },
        {
            "name": "Deep Learning",
            "categories": ["Computer Science", "AI"],
            "dates": {
                "start": "2024-09-01",
                "end": "2024-12-15"
            },
            "syllabus": [
                "Week 1: Introduction to Deep Learning",
                "Week 2: Neural Network Architectures",
                "Week 3: Convolutional Neural Networks",
                "Week 4: Recurrent Neural Networks",
                "Week 5: Generative Models",
                "Week 6: Transfer Learning",
                "Week 7: Optimization Techniques",
                "Week 8: Applications of Deep Learning",
                "Week 9: Case Studies",
                "Week 10: Final Project"
            ],
            "schedule": {
                "lectures": "Mon, Wed - 2:00 PM to 3:30 PM",
                "labs": "Fri - 1:00 PM to 3:00 PM"
            },
            "prerequisites": ["Machine Learning"],
            "instructors": ["Dr. Frank Miller"],
            "difficulty_level": "Advanced",
            "seats": 10,
            "enrolled": 0
        },
        {
            "name": "Physics 101",
            "categories": ["Physics"],
            "dates": {
                "start": "2024-09-01",
                "end": "2024-12-15"
            },
            "syllabus": [
                "Week 1: Introduction to Physics",
                "Week 2: Classical Mechanics",
                "Week 3: Electromagnetism",
                "Week 4: Thermodynamics",
                "Week 5: Optics",
                "Week 6: Quantum Mechanics",
                "Week 7: Relativity",
                "Week 8: Nuclear Physics",
                "Week 9: Particle Physics",
                "Week 10: Final Project"
            ],
            "schedule": {
                "lectures": "Mon, Wed, Fri - 1:00 PM to 2:30 PM",
                "labs": "Thu - 2:00 PM to 4:00 PM"
            },
            "prerequisites": ["None"],
            "instructors": ["Dr. George Martin"],
            "difficulty_level": "Beginner",
            "seats": 35,
            "enrolled": 0
        },
        {
            "name": "Chemistry 101",
            "categories": ["Chemistry"],
            "dates": {
                "start": "2024-09-01",
                "end": "2024-12-15"
            },
            "syllabus": [
                "Week 1: Introduction to Chemistry",
                "Week 2: Atomic Structure",
                "Week 3: Chemical Bonding",
                "Week 4: Thermodynamics",
                "Week 5: Chemical Kinetics",
                "Week 6: Equilibrium",
                "Week 7: Acids and Bases",
                "Week 8: Electrochemistry",
                "Week 9: Organic Chemistry",
                "Week 10: Final Project"
            ],
            "schedule": {
                "lectures": "Tue, Thu - 11:00 AM to 12:30 PM",
                "labs": "Fri - 2:00 PM to 4:00 PM"
            },
            "prerequisites": ["None"],
            "instructors": ["Dr. Helen White"],
            "difficulty_level": "Beginner",
            "seats": 45,
            "enrolled": 0
        },
        {
            "name": "Economics 101",
            "categories": ["Economics"],
            "dates": {
                "start": "2024-09-01",
                "end": "2024-12-15"
            },
            "syllabus": [
                "Week 1: Introduction to Economics",
                "Week 2: Microeconomics",
                "Week 3: Macroeconomics",
                "Week 4: Economic Systems",
                "Week 5: Supply and Demand",
                "Week 6: Market Structures",
                "Week 7: International Trade",
                "Week 8: Economic Policies",
                "Week 9: Development Economics",
                "Week 10: Final Project"
            ],
            "schedule": {
                "lectures": "Mon, Wed - 3:00 PM to 4:30 PM",
                "labs": "Fri - 10:00 AM to 12:00 PM"
            },
            "prerequisites": ["None"],
            "instructors": ["Dr. Ian Roberts"],
            "difficulty_level": "Beginner",
            "seats": 50,
            "enrolled": 0
        },
        {
            "name": "Psychology 101",
            "categories": ["Psychology"],
            "dates": {
                "start": "2024-09-01",
                "end": "2024-12-15"
            },
            "syllabus": [
                "Week 1: Introduction to Psychology",
                "Week 2: Developmental Psychology",
                "Week 3: Cognitive Psychology",
                "Week 4: Behavioral Psychology",
                "Week 5: Social Psychology",
                "Week 6: Clinical Psychology",
                "Week 7: Neuropsychology",
                "Week 8: Psychopathology",
                "Week 9: Psychological Therapies",
                "Week 10: Final Project"
            ],
            "schedule": {
                "lectures": "Tue, Thu - 1:00 PM to 2:30 PM",
                "labs": "Wed - 3:00 PM to 5:00 PM"
            },
            "prerequisites": ["None"],
            "instructors": ["Dr. Jessica Thompson"],
            "difficulty_level": "Beginner",
            "seats": 40,
            "enrolled": 0
        },
        {
            "name": "Sociology 101",
            "categories": ["Sociology"],
            "dates": {
                "start": "2024-09-01",
                "end": "2024-12-15"
            },
            "syllabus": [
                "Week 1: Introduction to Sociology",
                "Week 2: Culture and Society",
                "Week 3: Socialization",
                "Week 4: Social Stratification",
                "Week 5: Social Institutions",
                "Week 6: Deviance and Crime",
                "Week 7: Race and Ethnicity",
                "Week 8: Gender and Sexuality",
                "Week 9: Social Change",
                "Week 10: Final Project"
            ],
            "schedule": {
                "lectures": "Mon, Wed, Fri - 2:00 PM to 3:30 PM",
                "labs": "Thu - 1:00 PM to 3:00 PM"
            },
            "prerequisites": ["None"],
            "instructors": ["Dr. Kevin Anderson"],
            "difficulty_level": "Beginner",
            "seats": 30,
            "enrolled": 0
        },
        {
            "name": "Philosophy 101",
            "categories": ["Philosophy"],
            "dates": {
                "start": "2024-09-01",
                "end": "2024-12-15"
            },
            "syllabus": [
                "Week 1: Introduction to Philosophy",
                "Week 2: Ancient Philosophy",
                "Week 3: Medieval Philosophy",
                "Week 4: Modern Philosophy",
                "Week 5: Contemporary Philosophy",
                "Week 6: Ethics",
                "Week 7: Metaphysics",
                "Week 8: Epistemology",
                "Week 9: Political Philosophy",
                "Week 10: Final Project"
            ],
            "schedule": {
                "lectures": "Tue, Thu - 9:00 AM to 10:30 AM",
                "labs": "Fri - 11:00 AM to 1:00 PM"
            },
            "prerequisites": ["None"],
            "instructors": ["Dr. Laura Green"],
            "difficulty_level": "Beginner",
            "seats": 35,
            "enrolled": 0
        }
       
           
    ],
    filterType: '',
    filterValue: '',
    searchValue: ''
};

const CourseReducer = (state = initialCoursesState, action) => {
  switch (action.type) {
      case SET_FILTER_TYPE:
          return {
              ...state,
              filterType: action.payload,
              filterValue: '' 
          };
      case SET_FILTER_VALUE:
          return {
              ...state,
              filterValue: action.payload
          };
      case SET_SEARCH_VALUE:
          return {
              ...state,
              searchValue: action.payload
          };
          case ENROLL_COURSE:
            return {
                ...state,
                courses: state.courses.map((course) =>
                    course.name === action.payload
                        ? { ...course, enrolled: (course.enrolled || 0) + 1 }
                        : course
                ),
            };
      default:
          return state;
  }
};

export default CourseReducer;
