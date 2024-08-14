import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);


// import ReactDOM from 'react-dom/client'
// import axios from 'axios'
// import App from './App'

// axios
//   .get('http://localhost:3001/notes')
//   .then(response => {
//     const notes = response.data
//     ReactDOM.createRoot(document.getElementById('root')).render(
//       <App notes={notes} />
//     )
//   })

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)

