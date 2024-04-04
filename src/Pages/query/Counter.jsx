const Counter = ({ value, dispatch, counter }) => {
  return (
    <>
      <div
        className="text-center rounded text-dark row m-0"
        style={{ height: "25px" }}
      >
        <div
          onClick={() => dispatch({ type: "DECREMENT", counter })}
          className="col backgroundColor-2 rounded-left
                    text-light cursor-pointer h-100
                    d-flex align-items-center justify-content-center px-1"
        >
          -
        </div>

        <div
          className="col backgroundColor-1
          text-dark h-100
          d-flex align-items-center justify-content-center px-1"
        >
          {value}
        </div>

        <div
          onClick={() => dispatch({ type: "INCREMENT", counter })}
          className="col backgroundColor-2 rounded-right
                text-light cursor-pointer h-100
                d-flex align-items-center justify-content-center px-1"
        >
          +
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center pt-1">
        <div
          className="py-0 border rounded cursor-pointer green-hover padding-x 
          d-flex justify-content-center align-items-center"
          onClick={() => dispatch({ type:"SET",value:1, counter })}
          style={{ height: "19px" }}
        >
          1
        </div>
        <div
          className="py-0 border rounded cursor-pointer green-hover padding-x
           d-flex justify-content-center align-items-center"
          onClick={() => dispatch({ type:"SET",value:2, counter })}
          style={{ height: "19px" }}
        >
          2
        </div>
        <div
          className="py-0 border rounded cursor-pointer green-hover padding-x 
          d-flex justify-content-center align-items-center"
          onClick={() => dispatch({ type: "SET",value:3, counter })}
          style={{ height: "19px" }}
        >
          3
        </div>
        <div
          className="py-0 border rounded cursor-pointer green-hover padding-x 
          d-flex justify-content-center align-items-center"
          onClick={() => dispatch({ type: "SET",value:4, counter })}
          style={{ height: "19px" }}
        >
          4
        </div>
      </div>
    </>
  );
};
export default Counter;
