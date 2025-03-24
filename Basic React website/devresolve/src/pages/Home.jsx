import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom"; // Link -> Navigates to the "Ask Questions" page without reloading
import axios from "axios"; //  axios → Makes an API request to get questions from the backend.
import SignIn from "./SignIn";
import SignUp from "./SignUp";


function Home(){
    const[questions, setQuestions] = useState([]); //  useState([]) → Initializes questions as an empty array.
    // Step 2: Declare State


    useEffect(() => {
        axios.get("http://localhost:5000/questions")
          .then((response) => setQuestions(response.data)) // Step 3: Fetch questions  // It will update the state
          .catch((error) => console.error(error));// if not it will give the error
      }, []);


    return (
            <div>
              <h1>Post Questions</h1>
              <Link to="/ask">
                <button>Ask a Question</button>
              </Link>

              <h1>All Questions</h1>
              <Link to="/solver">
                <button>Solver</button>
              </Link>
              
              <ul>
                {questions.map((q) => (
                  <li key={q._id}>
                    <Link to={`/question/${q._id}`}>{q.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          );
          
}
export default Home;


