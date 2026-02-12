const questionsData = [
  {
    id: 1,
    question:
      "JVM is a core component of Java architecture that enables platform independence by executing bytecode. What does JVM stand for?",
    options: [
      "Java Variable Machine",
      "Java Virtual Machine",
      "Java Verified Method",
      "Joint Virtual Method"
    ],
    answer: "Java Virtual Machine"
  },
  {
    id: 2,
    question:
      "Which OOP concept allows a class to acquire properties and behavior from another class?",
    options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
    answer: "Inheritance"
  },
  {
    id: 3,
    question:
      "Which keyword is used in Java to prevent a method from being overridden?",
    options: ["static", "final", "abstract", "private"],
    answer: "final"
  },
  {
    id: 4,
    question:
      "Which collection in Java does NOT allow duplicate elements?",
    options: ["List", "ArrayList", "Set", "Vector"],
    answer: "Set"
  },
  {
    id: 5,
    question:
      "In Java, which exception is thrown when dividing a number by zero?",
    options: [
      "NullPointerException",
      "ArithmeticException",
      "IOException",
      "ClassNotFoundException"
    ],
    answer: "ArithmeticException"
  },
  {
    id: 6,
    question:
      "Which React hook is used to manage state in functional components?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    answer: "useState"
  },
  {
    id: 7,
    question:
      "Which hook is used to handle side effects such as API calls in React?",
    options: ["useState", "useEffect", "useMemo", "useCallback"],
    answer: "useEffect"
  },
  {
    id: 8,
    question:
      "In React, which method is used to render lists dynamically?",
    options: ["forEach()", "map()", "filter()", "reduce()"],
    answer: "map()"
  },
  {
    id: 9,
    question:
      "Props in React are primarily used to:",
    options: [
      "Store local state",
      "Pass data from parent to child",
      "Handle lifecycle",
      "Connect to database"
    ],
    answer: "Pass data from parent to child"
  },
  {
    id: 10,
    question:
      "Node.js is built on which JavaScript engine?",
    options: ["SpiderMonkey", "V8 Engine", "Java Engine", "Chakra"],
    answer: "V8 Engine"
  },
  {
    id: 11,
    question:
      "Which HTTP method is used to update an existing resource?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "PUT"
  },
  {
    id: 12,
    question:
      "Which HTTP status code indicates 'Not Found'?",
    options: ["200", "201", "400", "404"],
    answer: "404"
  },
  {
    id: 13,
    question:
      "Which database is a NoSQL document-based database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    answer: "MongoDB"
  },
  {
    id: 14,
    question:
      "Which SQL keyword is used to retrieve data from a table?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    answer: "SELECT"
  },
  {
    id: 15,
    question:
      "Which SQL clause is used to filter records?",
    options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
    answer: "WHERE"
  },
  {
    id: 16,
    question:
      "Which CSS feature is mainly used for responsive design?",
    options: ["Flexbox", "Position", "Media Queries", "Float"],
    answer: "Media Queries"
  },
  {
    id: 17,
    question:
      "Which CSS layout model is best suited for one-dimensional layouts?",
    options: ["Grid", "Flexbox", "Table", "Inline-block"],
    answer: "Flexbox"
  },
  {
    id: 18,
    question:
      "Git command used to upload local commits to remote repository is:",
    options: ["git add", "git commit", "git push", "git clone"],
    answer: "git push"
  },
  {
    id: 19,
    question:
      "Which command initializes a new Git repository?",
    options: ["git start", "git init", "git new", "git create"],
    answer: "git init"
  },
  {
    id: 20,
    question:
      "Which DevOps practice focuses on automating integration and testing?",
    options: ["CI", "CD", "Manual Testing", "Debugging"],
    answer: "CI"
  },
  {
    id: 21,
    question:
      "Docker is primarily used for:",
    options: [
      "Database management",
      "Containerization",
      "Frontend styling",
      "Version control"
    ],
    answer: "Containerization"
  },
  {
    id: 22,
    question:
      "In REST APIs, which format is commonly used for data exchange?",
    options: ["XML only", "JSON", "Binary", "CSV"],
    answer: "JSON"
  },
  {
    id: 23,
    question:
      "Which Java keyword is used to create an object?",
    options: ["class", "new", "object", "create"],
    answer: "new"
  },
  {
    id: 24,
    question:
      "localStorage in web development is used to:",
    options: [
      "Store data on server",
      "Store data in browser even after refresh",
      "Encrypt passwords",
      "Manage backend sessions"
    ],
    answer: "Store data in browser even after refresh"
  },
  {
    id: 25,
    question:
      "Which React feature allows global state management across components?",
    options: ["Props", "Context API", "useState", "map()"],
    answer: "Context API"
  }
];

export default questionsData;
