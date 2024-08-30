import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { axiosOther } from "../../../../../http/axios/axios_new";
import { memo } from "react";

const Tasks = ({ partner_payload }) => {
  const [taskList, setTaskList] = useState([]);
  const navigate = useNavigate();

  const fetchTaskListData = async () => {
    try {
      const { data } = await axiosOther.post("taskslist", partner_payload);
      setTaskList(data?.DataList);
      console.log("tasklist-data", data);
    } catch (err) {
      console.log("task-list-err", err);
    }
  };

  useEffect(() => {
    fetchTaskListData();
  }, []);

  const handleNavigate = () => {
    navigate("/master/agent/view/task", { state: partner_payload });
  };

  console.log('task-component-rendered')

  return (
    <>
      <div className="col-12 agent-view-table mt-4">
        <div className="d-flex gap-5">
          <p className="fs-6 font-weight-bold">Task</p>
          <p
            className="fs-6 font-weight-bold text-success cursor-pointer"
            onClick={handleNavigate}
          >
            + Add Task
          </p>
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

export default memo(Tasks);
