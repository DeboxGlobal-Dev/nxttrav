import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { axiosOther } from "../../../../../http/axios/axios_new";
import { memo } from "react";

const Calls = ({ partner_payload }) => {
  const [callList, setCallList] = useState([]);
  const navigate = useNavigate();

  const getCallListData = async () => {
    try {
      const { data } = await axiosOther.post("callslist", partner_payload);
      setCallList(data?.DataList);
      console.log("calls-list", data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCallListData();
  }, []);

  const handleNavigate = () => {
    navigate(`/master/agent/view/call`, { state: partner_payload });
  };

  console.log('call-component-rendered')
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
            </tr>
          </thead>
          <tbody>
            {callList?.length > 1 ? (
              callList?.map((list, index) => {
                return (
                  <tr key={index + 1}>
                    <th className="py-1">{list?.CallSubject}</th>
                    <td className="py-1">{list?.StartDate}</td>
                    <td className="py-1">{list?.CallStatus}</td>
                    <td className="py-1">{list?.CallType}</td>
                    <td className="py-1">{list?.SalesPerson}</td>
                    <td className="py-1">{list?.Created_At}</td>
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

export default memo(Calls);
