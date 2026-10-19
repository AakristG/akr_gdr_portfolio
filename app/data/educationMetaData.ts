export interface CourseworkItem {
  code: string;
  name: string;
}

export interface EducationItem {
  school: string;
  location: string;
  degree: string;
  expectedGraduation: string;
  activities: Array<string>;
  coursework: Array<CourseworkItem>;
}

export const education: EducationItem = {
  school: "University of Texas at Dallas",
  location: "Richardson, TX",
  degree: "B.S. in Engineering and Computer Science",
  expectedGraduation: "",
  activities: [
    "Software Mentor, FRC Robotics",
    "Association of Computing Machinery",
    "UTD AI Society",
  ],
  coursework: [
    {
      code: "CS 3345",
      name: "Data Structures and Foundations of Algorithmic Analysis",
    },
    {
      code: "CS 4349",
      name: "Advanced Algorithm Design and Analysis",
    },
    {
      code: "CS 2340",
      name: "Computer Architecture",
    },
    {
      code: "CS 3377",
      name: "Systems Programming in UNIX and Other Environments",
    },
    {
      code: "CS 4375",
      name: "Foundations of Machine Learning",
    },
    {
      code: "CS 4347",
      name: "Database Systems",
    },
    {
      code: "CS 4348",
      name: "Operating Systems Concepts",
    },
    {
      code: "CS 4365",
      name: "Artificial Intelligence",
    },
    {
      code: "MATH 2418",
      name: "Linear Algebra",
    },
    {
      code: "CS 4361",
      name: "Computer Graphics",
    },
    {
      code: "CS 3341",
      name: "Probability and Statistics in Computer Science and Software Engineering",
    },
  ],
};
