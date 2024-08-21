import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { axiosOther } from "../../../../../http/axios/axios_new";
import { tr } from "date-fns/locale";

const Meetings = () => {
  const [meetinsList, setMeetingsList] = useState([]);

  const fetchMeetingListData = async () => {
    const { data } = await axiosOther.post("meetingslist", {
      Fk_partnerid: "1",
      Type: "",
    });

    setMeetingsList(data?.DataList);
  };

  useEffect(() => {
    fetchMeetingListData();
  });

  return (
    <>
      <div className="col-12 agent-view-table mt-4">
        <div className="d-flex gap-5">
          <p className="fs-6 font-weight-bold">Meetings</p>
          <NavLink to="/master/agent/view/meeting">
            <p className="fs-6 font-weight-bold text-success cursor-pointer">
              + Add Meetings
            </p>
          </NavLink>
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
            </tr>
          </thead>
          <tbody>
            {meetinsList?.length > 1 ? (
              meetinsList?.map((details, index) => {
                return (
                  <tr>
                    <th className="py-1">{details?.MeetingAgenda}</th>
                    <td className="py-1">{details?.StartDate}</td>
                    <td className="py-1">{details?.MeetingStatus}</td>
                    <td className="py-1">{details?.MeetingOutcome}</td>
                    <td className="py-1">{details?.SalesPerson}</td>
                    <td className="py-1">{details?.Created_At}</td>
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

export default Meetings;
