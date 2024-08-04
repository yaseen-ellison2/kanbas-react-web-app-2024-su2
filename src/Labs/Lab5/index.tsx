
import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HttpClient";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a href={`${REMOTE_SERVER}/lab5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div><hr />
      <EnvironmentVariables />
      <PathParameters />
      <QueryParameters />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <HttpClient />
    </div>
  );
}


// import EncodingParametersInURLS from "./EncodingParametersinURLs";
// import EnvironmentVariables from "./EnvironmentVariables";

// export default function Lab5() {
//   return (
//     <div id="wd-lab5">
//       <h2>Lab 5</h2>
//       <div className="list-group">
//         <a href="http://localhost:4000/lab5/welcome"
//           className="list-group-item">
//           Welcome to Assignment 5
//         </a>
//       </div><hr />
//       <EnvironmentVariables />
//       <h2> Calculator </h2>
//       <EncodingParametersInURLS />
//     </div>
//   );
// }
