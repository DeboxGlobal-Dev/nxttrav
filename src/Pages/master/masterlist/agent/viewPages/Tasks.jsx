import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { axiosOther } from "../../../../../http/axios/axios_new";
import { tr } from "date-fns/locale";

const Tasks = () => {
  const [taskList, setTaskList] = useState([]);

  const fetchTaskListData = async () => {
    const { data } = await axiosOther.post("taskslist", {
      Fk_partnerid: "1",
      Type: "",
    });

    setTaskList(data?.DataList);
  };

  useEffect(() => {
    fetchTaskListData();
  }, []);

  return (
    <>
      <div className="col-12 agent-view-table mt-4">
        <div className="d-flex gap-5">
          <p className="fs-6 font-weight-bold">Task</p>
          <NavLink to="/master/agent/view/task">
            <p className="fs-6 font-weight-bold text-success cursor-pointer">
              + Add Task
            </p>
          </NavLink>
        </div>
        <table className="table table-bordered agent-view-table">
          <thead className="thead-dark">
            <tr>
              <th className="px-1">Subject</th>
              <th className="py-1">Start Date</th>
              <th className="py-1">Status</th>
              <th className="py-1">Sales Person</th>
              <th className="py-1">Created At</th>
            </tr>
          </thead>
          <tbody>
            {taskList?.length > 1 ? (
              taskList?.map((list, index) => {
                return (
                  <tr key={index + 1}>
                    <th className="py-1">{list?.Subject}</th>
                    <td className="py-1">{list?.StartDate}</td>
                    <td className="py-1">{list?.Status}</td>
                    <td className="py-1">{list?.SalesPerson}</td>
                    <td className="py-1">{list?.CreatedAt}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">
                  <p className="text-center fs-6">No Records Found</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tasks;
