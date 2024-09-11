import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { axiosOther } from "../../../../../http/axios/axios_new";
import { memo } from "react";
import toast from "react-hot-toast";

const Meetings = ({ partner_payload }) => {
  const navigate = useNavigate();
  const [meetinsList, setMeetingsList] = useState([]);

  const fetchMeetingListData = async () => {
    try {
      const { data } = await axiosOther.post("meetingslist", partner_payload);
      setMeetingsList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMeetingListData();
  }, []);

  const handleNavigate = () => {
    navigate("/master/agent/view/meeting", {
      state: { payload: partner_payload },
    });
  };

  const handleEditData = (list) => {
    navigate(`/master/agent/view/meeting`, {
      state: { payload: partner_payload, data: list },
    });
  };

  const handleDeleteData = async (id) => {
    const { data } = await axiosOther.post("destroymeetings", {
      id: id,
    });
    if (data?.Status === 1) {
      toast.success(data?.Message);
      fetchMeetingListData();
    }
  };

  return (
    <>
      <div className="col-12 agent-view-table mt-4">
        <div className="d-flex gap-5">
          <p className="fs-6 font-weight-bold">Meetings</p>
          <p
            className="fs-6 font-weight-bold text-success cursor-pointer"
            onClick={handleNavigate}
          >
            + Add Meetings
          </p>
        </div>
        <table className="table table-bordered agent-view-table">
          <thead className="thead-dark">
            <tr>
              <th className="px-1">Meeting Agenda</th>
              <th className="py-1">Start Date</th>
              <th className="py-1">Status</th>
              <th className="py-1">Meeting Outcome</th>
              <th className="py-1">Sales Person</th>
              <th className="py-1">Created Date</th>
              <th className="py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {meetinsList?.length > 0 ? (
              meetinsList?.map((details, index) => {
                return (
                  <tr key={index + 1}>
                    <th className="py-1">{details?.MeetingAgenda}</th>
                    <td className="py-1">{details?.Startdate}</td>
                    <td className="py-1">{details?.MeetingStatus}</td>
                    <td className="py-1">{details?.MeetingOutcome}</td>
                    <td className="py-1">{details?.SalesPerson}</td>
                    <td className="py-1">{details?.Created_At}</td>
                    <td className="py-1 d-flex justify-content-center gap-2 border-0">
                      <i
                        className="fa-solid fa-pen-to-square fs-6 text-success"
                        onClick={() => handleEditData(details)}
                      ></i>
                      <i
                        className="fa-solid fa-trash fs-6 cursor-pointer text-danger"
                        onClick={() => handleDeleteData(details?.id)}
                      ></i>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6} className="fs-6">
                  No Records Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default React.memo(Meetings);
