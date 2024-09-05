// import React from "react";
// import "./Step.css";

// export default function Step() {
//   return (
//     <div>
//       <div className="container">
//         <div className="indicator">
//           <span className="line">
//             <span></span>
//           </span>
//           <p className="active">1</p>
//           <p>2</p>
//           <p>3</p>
//           <p>4</p>
//           <p>5</p>
//           <p>6</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./Step.css";

export default function Step({ currentStep }) {
  return (
    <div>
      <div className="container step-container">
        <p>
          <b>Selesaikan step</b>
        </p>
        <div className="indicator">
          <span className="line">
            <span style={{ width: `${((currentStep - 1) / 5) * 100}%` }}></span>
          </span>
          {[...Array(6)].map((_, index) => (
            <p
              key={index}
              className={currentStep === index + 1 ? "active" : ""}
            >
              {index + 1}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
