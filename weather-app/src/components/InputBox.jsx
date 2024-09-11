// export default function InputBox({ handleSubmit, handleChange }) {
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="input-box">
//         <img src="/search-icon.svg" alt="search-icon" />
//         <input
//           className="input-text"
//           type="text"
//           placeholder="Enter a location.."
//           onChange={handleChange}
//         />
//       </div>
//     </form>
//   );
// }

// I have used the forwarRef function in React to access the value of an input area in the another component.

import { forwardRef } from "react";

const InputBox = forwardRef(({ handleSubmit }, ref) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <img src="/search-icon.svg" alt="search-icon" />
        <input
          ref={ref}
          className="input-text"
          type="text"
          placeholder="Enter a location.."
        />
      </div>
    </form>
  );
});

InputBox.displayName = "InputBox";

export default InputBox;
