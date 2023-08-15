export const mcq = [
    {questions: [
      {
        question: "What is Next.js?",
        options :[
           "A programming language",
          "A JavaScript framework",
           "A server-side rendering framework for React",
           "A database management system"
        ],
        correctAnswer: 'C',
    },
      {
        question: "Which rendering strategy does Next.js support?",
        options: [
         "Client-side rendering (CSR) only",
          "Server-side rendering (SSR) only",
           "Static site generation (SSG) only",
           "All of the above"
        ],
        correctAnswer: 'D'
      },
      {
        question: "What is the purpose of the getStaticProps function in Next.js?",
        options: [
           "To fetch data at build time and generate static pages",
          "To fetch data on the client side",
           "To handle authentication in the application",
           "To define routing for dynamic pages"
        ],
        correctAnswer: 'A'
      },
      {
        question: "Which file is used to configure server-side routing in Next.js?",
        options: [
           "next.json",
          "routes.js",
           "pages/api/[route].js",
           "next.config.js"
        ],
        correctAnswer: 'D'
      },
      {
        question: "In Next.js, how can you create a dynamic route with a parameter?",
        options: [
           "Create a folder with the parameter name and an index.js file",
          "Define the route in the routes.js file",
           "Use the getDynamicRoute function in your component",
           "Create a file with square brackets, e.g., [parameter].js"
        ],
        correctAnswer: 'D'
      },
      {
        question: "Which function is used for client-side navigation between pages in Next.js?",
        options: [
           "navigateTo",
          "gotoPage",
           "push",
           "router.push"
        ],
        correctAnswer: 'D'
      },
      {
        question: "How does Next.js help optimize the loading performance of a website?",
        options: [
           "By automatically minifying the JavaScript code",
          "By optimizing images and other assets",
           "By utilizing lazy loading for components",
           "All of the above"
        ],
        correctAnswer: 'D'
      },
      {
        question: "What is the purpose of the _app.js file in Next.js?",
        options: [
           "To define global styles and layouts",
          "To handle API requests",
           "To define routes for the application",
           "To manage state using Redux"
    ],        correctAnswer: 'A'
      },
      {
        question: "How can you add environment variables in Next.js?",
        options:[ "Define them in a .env file at the root of the project",
          "Add them to the next.config.js file",
           "Use the process.env object directly in your code",
           "All of the above"
        ],
        correctAnswer: 'D'
      },
      {
        question: "Which command is used to start a Next.js development server?",
        options: [
           "npm start",
          "npm run dev",
           "npm serve",
           "npm run build"
    ],        correctAnswer: 'B'
      }
  ]  }
]
  