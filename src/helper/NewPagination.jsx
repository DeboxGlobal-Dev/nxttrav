import React, { useEffect, useState } from "react";


const NewPagination = ({tableData, setTableRecords}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = tableData.slice(firstIndex, lastIndex);
  const npages = Math.ceil(tableData.length/ dataPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  useEffect(()=>{
    setTableRecords(records);
  },[currentPage])

  const changeCPage = (n) => {
    setCurrentPage(n);
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <ul className="pagination">
        <li className="page-item">
          <span onClick={prevPage} className="page-link bg-teal-300">
            Prev
          </span>
        </li>
        {numbers.map((n, i) => {
          return (
            <li
              className={`page-item ${n === currentPage ? "active" : ""}`}
              key={i}
            >
              <span className="page-link " onClick={() => changeCPage(n)}>
                {n}
              </span>
            </li>
          );
        })}
        <li className="page-item">
          <span className="page-link bg-teal-300" onClick={nextPage}>
            Next
          </span>
        </li>
      </ul>
    </>
  );
};

export default NewPagination;
