import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { axiosOther } from "../../../../../http/axios/axios_new";
import { memo } from "react";
import toast from "react-hot-toast";

const Calls = ({ partner_payload }) => {
  const [callList, setCallList] = useState([]);
  const navigate = useNavigate();

  const getCallListData = async () => {
    try {
      const { data } = await axiosOther.post("callslist", partner_payload);
      setCallList(data?.DataList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCallListData();
  }, []);

  const handleNavigate = () => {
    navigate(`/master/agent/view/call`, {
      state: { payload: partner_payload },
    });
  };

  const handleEditData = (list) => {
    navigate(`/master/agent/view/call`, {
      state: { payload: partner_payload, data: list },
    });
  };

  const handleDeleteData = async (id) => {
    const { data } = await axiosOther.post("destroycalls", {
      id: id,
    });
    if (data?.Status === 1) {
      toast.success(data?.Message);
      getCallListData();
    }
  };

  return (
    <>
      <div className="col-12 agent-view-table mt-4">
        <div className="d-flex gap-5">
          <p className="fs-6 font-weight-bold">Calls</p>
          <p
            className="fs-6 font-weight-bold text-success cursor-pointer"
            onClick={handleNavigate}
          >
            + Add Calls
          </p>
        </div>
        <table className="table table-bordered agent-view-table">
          <thead className="thead-dark">
            <tr>
              <th className="px-1">Call Subject</th>
              <th className="py-1">Start Date</th>
              <th className="py-1">Status</th>
              <th className="py-1">Call Type</th>
              <th className="py-1">Sales Person</th>
              <th className="py-1">Created Date</th>
              <th className="py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {callList?.length > 0 ? (
              callList?.map((list, index) => {
                return (
                  <tr key={index + 1}>
                    <th className="py-1">{list?.CallAgenda}</th>
                    <td className="py-1">{list?.Startdate}</td>
                    <td className="py-1">{list?.CallStatus}</td>
                    <td className="py-1">{list?.CallType}</td>
                    <td className="py-1">{list?.SalesPerson}</td>
                    <td className="py-1">{list?.Created_At}</td>
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
                <td colSpan={6}>
                  <p className="fs-6">No Records Found</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default React.memo(Calls);
