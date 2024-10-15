import React, { useState, useReducer, useEffect, useContext } from "react";
import Counter from "../Counter";
import { queryInitial } from "../QueryInitialValue";
import { paxInitial } from "../QueryInitialValue";
import { addQueryContext } from "./Addquery";

// const PaxDetails = () => {
//   const [PaxTotal, setPaxTotal] = useState(0);
//   const { paxObject, queryObjects } = useContext(addQueryContext);
//   const [errors, setErrors] = useState({});
//   const { queryFields, setQueryFields } = queryObjects;
//   const { PaxInfo, setPaxInfo } = paxObject;
//   const initialState = {
//     counter1: 1,
//     counter2: 0,
//     counter3: 0,
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setQueryFields({ ...queryFields, [name]: value });
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return { ...state, [action.counter]: state[action.counter] + 1 };
//       case "DECREMENT":
//         return {
//           ...state,
//           [action.counter]: Math.max(0, state[action.counter] - 1),
//         };
//       case "SET":
//         return {
//           ...state,
//           [action.counter]: (state[action.counter] = action.value),
//         };
//       default:
//         return state;
//     }
//   };
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const updateTotal = () => {
//     const { counter1, counter2, counter3 } = state;
//     setPaxTotal(counter1 + counter2 + counter3);
//   };

//   useEffect(() => {
//     updateTotal();
//     setPaxInfo({
//       Adult: state.counter1,
//       Child: state.counter2,
//       Infant: state.counter3,
//     });
//   }, [state]);

//   return (
//     <div className="col-12 col-sm query-box-shadow py-1">
//       <div className="row row-gap-2 p-0 pt-1 pb-2">
//         <div className="col-12 col-sm-6 col-lg-8 d-flex align-items-center">
//           <p className="m-0 fs-6 font-weight-bold">Pax Details</p>
//         </div>
//         <div className="col-12 col-sm-6 col-lg-4">
//           <label htmlFor="paxtype" className="m-0">
//             Pax Type
//           </label>
//           <select
//             id="paxtype"
//             component={"select"}
//             className="form-input-2"
//             name="PaxType"
//             value={queryFields.PaxType}
//             onChange={handleChange}
//           >
//             <option value="1">FIT</option>
//             <option value="2">GIT</option>
//           </select>
//         </div>
//         <div className="col-6 col-sm-4 col-md-4">
//           <div className="d-flex justify-content-between">
//             <label htmlFor="adult" className="m-0">
//               Adult
//               <i className="fa-solid fa-person pl-2"></i>{" "}
//               <span className="text-danger">*</span>
//             </label>
//             {errors?.Adult && (
//               <span className="text-danger font-size-10">{errors?.Adult}</span>
//             )}
//           </div>
//           <Counter
//             value={state.counter1}
//             dispatch={dispatch}
//             counter="counter1"
//           />
//         </div>
//         <div className="col-6 col-sm-4 col-md-4">
//           <label htmlFor="" className="m-0">
//             Child
//             <i className="fa-solid fa-child-reaching pl-2"></i>
//           </label>
//           <Counter
//             value={state.counter2}
//             dispatch={dispatch}
//             counter="counter2"
//           />
//         </div>
//         <div className="col-6 col-sm-4 col-md-4">
//           <label htmlFor="" className="m-0">
//             Infant
//             <i className="fa-solid fa-person-breastfeeding pl-2"></i>
//           </label>
//           <Counter
//             value={state.counter3}
//             dispatch={dispatch}
//             counter="counter3"
//           />
//         </div>
//         <div className="col-6 col-sm-12 col-md-12">
//           <label htmlFor="" className="m-0 text-center">
//             Total
//           </label>
//           <div
//             className="backgroundColor-1 rounded
//                       d-flex justify-content-center align-items-center font-weight-bold"
//             style={{ height: "25px" }}
//           >
//             Total Pax : {PaxTotal}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const PaxDetails = () =>{
  return(
    <h1>Pax Details</h1>
  )
}

export default React.memo(PaxDetails);
