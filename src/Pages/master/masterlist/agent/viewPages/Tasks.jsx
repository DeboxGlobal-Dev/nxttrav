import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { axiosOther } from "../../../../../http/axios/axios_new";
import { memo } from "react";
import toast from "react-hot-toast";

const Tasks = ({ partner_payload }) => {
  const [taskList, setTaskList] = useState([]);
  const navigate = useNavigate();

  const fetchTaskListData = async () => {
    try {
      const { data } = await axiosOther.post("taskslist", partner_payload);
      setTaskList(data?.DataList);
    } catch (err) {
      console.log("task-list-err", err);
    }
  };

  useEffect(() => {
    fetchTaskListData();
  }, []);

  const handleNavigate = () => {
    navigate("/master/agent/view/task", { state: {payload:partner_payload} });
  };


  const handleEditData = (list) => {
    navigate(`/master/agent/view/task`, {
      state: { payload: partner_payload, data: list },
    });
  };

  const handleDeleteData = async (id) => {
    const { data } = await axiosOther.post("destroytasks", {
      id: id,
    });
    if (data?.Status === 1) {
      toast.success(data?.Message);
      fetchTaskListData();
    }
    console.log(data);
  };
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
              <th className="py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {taskList?.length > 0 ? (
              taskList?.map((list, index) => {
                console.log('task-list', list)
                return (
                  <tr key={index + 1}>
                    <th className="py-1">{list?.TaskSubject}</th>
                    <td className="py-1">{list?.Startdate}</td>
                    <td className="py-1">{list?.TaskStatus}</td>
                    <td className="py-1">{list?.SalesPerson}</td>
                    <td className="py-1">{list?.CreatedAt}</td>
                    <td className="py-1 d-flex justify-content-center gap-2 border-0">
                      <i
                        className="fa-solid fa-pen-to-square fs-6 text-success"
                        onClick={() => handleEditData(list)}
                      ></i>
                      <i
                        className="fa-solid fa-trash fs-6 cursor-pointer text-danger"
                        onClick={() => handleDeleteData(list?.id)}
                      ></i>
                    </td>
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
