import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const JsonToExcel = () => {
  
  const data = [
    { name: "John", profession:"data scientist", email: "john@example.com", age: 28 },
    { name: "Jane", profession:"data scientist", email: "jane@example.com", age: 32 },
    { name: "Josep", profession:"data scientist", email: "jane@example.com", age: 32 },
    { name: "Jogin", profession:"data scientist", email: "jane@example.com", age: 32 },
    { name: "Dane", profession:"data scientist", email: "jane@example.com", age: 32 },
    { name: "Babe", profession:"data scientist", email: "jane@example.com", age: 32 },
    { name: "Jane", profession:"data scientist", email: "jane@example.com", age: 32 }
  ];
  
  const exportToExcel = () => {

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    
    // Buffer to store the generated Excel file

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(blob, "data.xlsx");
  };

  return (
    <>
      <div className="container-fluid p-5">
        <div className="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col">Proff</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.age}</td>
                    <td>{value.profession}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button className="btn btn-primary mt-3" onClick={exportToExcel}>Download Excel</button>
      </div>
    </>
  );
};

export default JsonToExcel;
