import morningCup from './images/portfolio_page/morning-cup-of-javascript.png'
import partayTracker from './images/portfolio_page/partay-tracker.png'
import lyricLystener from './images/portfolio_page/lyric-lysteners.png'
import employeeDirectory from './images/portfolio_page/employee-directory.png'
import employeeTracker from './images/portfolio_page/employee-tracker.png'
import passwordGenerator from './images/portfolio_page/password-generator.png'
import codeQuiz from './images/portfolio_page/code-quiz.png'

const portfolioData = [
  {
    "id": 1,
    "name": "Morning Cup of JavaScript",
    "project_href": "https://secure-wave-92624.herokuapp.com/",
    "repo_href": "https://github.com/Pete-Scale/morning_cup_of_javascript",
    "image": morningCup,
    "alt": "morning_cup_of_javascript_image",
    "description": "A full stack MERN application that caters to the JavaScript enthuiasts who are looking for an all-in-one website. Users have access to tech news, coding challenges, and a project inspiration generator!"
  },
  {
    "id": 2,
    "name": "Partay Tracker",
    "project_href": "https://hidden-ridge-88260.herokuapp.com/",
    "repo_href": "https://github.com/Pete-Scale/partay-tracker",
    "image": partayTracker,
    "alt": "partay_tracker_image",
    "description": "A collaborative coding project, Partay Tracker is a full stack app utilizing a MySQL database that allows users to create and attend parties occuring in their social circle. Users also get updates when new parties are created through email notifications so you can always stay in the loop!"
  },
  {
    "id": 3,
    "name": "LyricLysteners",
    "project_href": "https://pete-scale.github.io/lyric-finder/index.html",
    "repo_href": "https://github.com/Pete-Scale/lyric-finder",
    "image": lyricLystener,
    "alt": "lyric_lysteners_image",
    "description": "A collaborative coding project, LyricLysteners uses a lyric API and a QR code API to find song lyrics and generate a music video QR code. It allows you to share the app and videos in a fun and easy way! Also, with two devices you can scan the QR code to listen to the video while still reading the lyrics!"
  },
  {
    "id": 4,
    "name": "Employee Directory",
    "project_href": "https://pete-scale.github.io/employee-directory/",
    "repo_href": "https://github.com/Pete-Scale/employee-directory",
    "image": employeeDirectory,
    "alt": "employee_directory_image",
    "description": "A React application that allows a manager to view all their employees and quickly access their information. This app features the ability to filter by first or last name as well as sort by location."
  },
  {
    "id": 5,
    "name": "Employee Tracker",
    "project_href": "https://drive.google.com/file/d/1dSbpE480FqtO0zB2zpskDObtYCUw7ntw/view?usp=sharing",
    "repo_href": "https://github.com/Pete-Scale/employee-tracker",
    "image": employeeTracker,
    "alt": "employee_tracker_image",
    "description": "A command-line application for managing a company's employees using Node.js, the inquirer package, and MySQL database. Launch Node.js in your own terminal after cloning the repository to use the app."
  },
  {
    "id": 6,
    "name": "Code Quiz",
    "project_href": "https://pete-scale.github.io/code-quiz/",
    "repo_href": "https://github.com/Pete-Scale/code-quiz",
    "image": codeQuiz,
    "alt": "code_quiz_image",
    "description": "Take a timed quiz on coding fundamentals that awards points for each correct answer and takes away time for each incorrect answer. Locally stores high scores so that you can gauge your progress compared to others. Hurry don't let the time run out!"
  },
  {
    "id": 7,
    "name": "Password Generator",
    "project_href": "https://pete-scale.github.io/password-generator/",
    "repo_href": "https://github.com/Pete-Scale/password-generator",
    "image": passwordGenerator,
    "alt": "password_generator_image",
    "description": "Create a randomly generated password that takes into account several users choices: length of password, whether to include lowercase letters, uppercase letters, numbers, and/or special characters. This way you can create a strong password that provides greater security based on your preferences."
  }
]

export default portfolioData