import React, { useContext, useState, useEffect } from "react";
import { queryInitial } from "../QueryInitialValue";
import { addQueryContext } from "./AddQuery";
import { axiosOther } from "../../../http/axios/axios_new";

const Contact = () => {
  const context = useContext(addQueryContext);
  const { queryFields, setQueryFields } = context?.queryObjects;
  const { dropdownState } = context?.dropdownObject;
  const [errors, setErrors] = useState({});
  const [agentList, setAgentList] = useState([]);
  const [showAgentPopup, setShowAgentPopup] = useState(true);
  const [agentData, setAgentData] = useState({
    Agent: "",
    Contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQueryFields({ ...queryFields, [name]: value });
  };

  useEffect(() => {
    setAgentList([]);
    setAgentData({
      Agent: "",
      Contact: "",
    });

    const gettingDataForDropdown = async () => {
      try {
        const { data } = await axiosOther.post("agentlist", {
          id: "",
          BussinessType: queryFields.ClientType,
        });

        setAgentList(data?.DataList);
      } catch (err) {
        console.log(err);
      }
    };
    gettingDataForDropdown();
  }, [queryFields.ClientType]);

  const handleSetDataToAgent = (agent, contact) => {
    setAgentData({
      Agent: agent,
      Contact: contact,
    });
    setQueryFields({
      ...queryFields,
      SalesPerson: agent.SalesPerson,
      AssignUser: agent.OperationsPerson,
      ClientType: agent?.CompanyName,
    });
  };

  return (
    <div className="col-12 col-sm  query-box-shadow py-1 position-relative">
      <div className="row row-gap-2 p-0 pt-1 pb-2">
        <div className="col-12 col-sm-6 col-lg-8 d-flex align-items-center">
          <p className="m-0 fs-6 font-weight-bold">Contact Information</p>
        </div>
        <div className="col-12 col-sm col-lg-4  ">
          <label htmlFor="queryType" className="m-0">
            Query Type
          </label>
          <select
            component={"select"}
            className="form-input-2"
            name="QueryType"
            value={queryFields.QueryType}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {dropdownState?.queryType?.map((query, ind) => {
              return (
                <option value={query.id} key={ind + 1}>
                  {query.Name}
                </option>
              );
            })}
          </select>
        </div>
        {queryFields.QueryType == "3" && (
          <div className="col-12">
            <label htmlFor="" className="m-0">
              Query Id
            </label>
            <input
              type="text"
              name="QueryId"
              placeholder="Query Id"
              className="form-input-2"
              value={queryFields.QueryId}
              onChange={handleChange}
            />
          </div>
        )}
        {queryFields.QueryType == "2" && (
          <>
            <div className="col-12 col-sm-6">
              <label htmlFor="" className="m-0">
                Package Code
              </label>
              <input
                type="text"
                name="PackageCode"
                placeholder="Enter Package Code"
                className="form-input-2"
                value={queryFields.PackageCode}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-sm-6">
              <label htmlFor="" className="m-0">
                Package Name
              </label>
              <input
                type="text"
                name="PackageName"
                placeholder="Enter Package Name"
                className="form-input-2"
                value={queryFields.PackageName}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        <div className="col-12 col-lg-4">
          <div className="d-flex justify-content-between">
            <label htmlFor="firstname" className="m-0">
              Bussiness Type
              <span className="text-danger">*</span>
            </label>
            {errors?.BusinessType && (
              <span className="text-danger font-size-10 m-0">
                {errors?.BusinessType}
              </span>
            )}
          </div>
          <select
            className="form-input-2"
            name="ClientType"
            value={queryFields.ClientType}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {dropdownState.businessType.map((value, index) => {
              return (
                <option value={value.id} key={index}>
                  {value.Name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-12 col-lg-8">
          <div className="d-flex gap-2">
            <label htmlFor="firstname" className="m-0">
              Agent/Client Name
              <span className="text-danger">*</span>
            </label>
            {errors?.ClientType && (
              <span className="text-danger font-size-10 m-0">
                {errors?.ClientType}
              </span>
            )}
          </div>
          <div className="d-flex">
            <input
              type="text"
              className="form-input-2"
              placeholder="Enter Agent/Client Name"
              name="AgentId"
              value={queryFields?.AgentId}
              onChange={handleChange}
              onClick={() => setShowAgentPopup(true)}
            />
            <button
              className="btn btn-primary d-flex align-items-center ml-1"
              style={{ height: "30px" }}
            >
              Add
            </button>
          </div>
        </div>
        {agentData.Agent != "" && agentData.Contact != "" && (
          <div className="col-12">
            <div className="border d-flex justify-content-between p-1 flex-wrap gap-2">
              <div className="d-flex justify-content-between align-items-center">
                <i className="fa-solid fa-user font-size-12"></i>
                <p className="m-0 pl-1 font-size-12">
                  {agentData?.Contact?.Name}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <i className="fa-solid fa-phone-volume font-size-12"></i>
                <p className="m-0 pl-1 font-size-12">
                  {agentData?.Contact?.Phone}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <i className="fa-solid fa-envelope font-size-12"></i>
                <p className="m-0 pl-1 font-size-12">
                  {agentData?.Agent?.CompanyEmailAddress}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <label htmlFor="market" className="m-0 font-size-12">
                  Market Type :
                </label>
                <p className="m-0 pl-1 font-size-12">
                  {agentData?.Agent?.MarketType}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <label htmlFor="market" className="m-0 font-size-12">
                  Nationalty :
                </label>
                <p className="m-0 pl-1 font-size-12">
                  {agentData?.Agent?.Nationality}
                </p>
              </div>
            </div>
          </div>
        )}
        {agentData.Agent == "" && agentData.Contact == "" && (
          <div className="col-12">
            <div className="border d-flex justify-content-between p-1 flex-wrap gap-2">
              <div className="d-flex justify-content-between align-items-center text-secondary">
                <i className="fa-solid fa-user font-size-12"></i>
                <p className="m-0 pl-1 font-size-12">John Doe</p>
              </div>
              <div className="d-flex justify-content-between align-items-center text-secondary">
                <i className="fa-solid fa-phone-volume font-size-12"></i>
                <p className="m-0 pl-1 font-size-12">990XXXXXX</p>
              </div>
              <div className="d-flex justify-content-between align-items-center text-secondary">
                <i className="fa-solid fa-envelope font-size-12"></i>
                <p className="m-0 pl-1 font-size-12">example@gmail.com</p>
              </div>
              <div className="d-flex justify-content-between align-items-center text-secondary">
                <label htmlFor="market" className="m-0 font-size-12">
                  Market Type :
                </label>
                <p className="m-0 pl-1 font-size-12">General</p>
              </div>
              <div className="d-flex justify-content-between align-items-center text-secondary">
                <label htmlFor="market" className="m-0 font-size-12">
                  Nationalty :
                </label>
                <p className="m-0 pl-1 font-size-12">XXXXXXX </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {showAgentPopup && queryFields.ClientType !== "" && (
        <div className="custom-search-dropdown">
          <div
            className="col-12 d-flex justify-content-end cursor-pointer p-0"
            onClick={() => setShowAgentPopup(!showAgentPopup)}
          >
            <i className="fa-solid fa-xmark font-size-15 font-weight-bold px-1"></i>
          </div>
          <div className="row w-100 align-items-center gap-1 m-0 px-1">
            {agentList
              ?.filter((agent) => {
                return queryFields?.ClientType != ""
                  ? agent.CompanyName.toLowerCase().includes(
                      queryFields?.ClientType.toLowerCase()
                    )
                  : agent;
              })
              .map((agent, ind) => {
                return (
                  <div
                    className="col-12 d-flex flex-column py-1 rounded border"
                    key={ind + 1}
                  >
                    <div>
                      <span className="font-weight-bold">
                        {agent?.CompanyName}
                      </span>
                    </div>
                    {agent?.ContactList[0]?.ContactDetail?.map(
                      (contact, ind) => {
                        return (
                          <div
                            className="d-flex justify-content-between p-2 rounded cursor-pointer alternate-color mb-1"
                            key={ind + 1}
                            onClick={() => {
                              handleSetDataToAgent(agent, contact),
                                setShowAgentPopup(!showAgentPopup);
                            }}
                          >
                            <span className="m-0 ">{contact?.Name}</span>
                            <span className="m-0 ">{contact?.Phone}</span>
                          </div>
                        );
                      }
                    )}
                  </div>
                );
              })}
            <div className="col-12 d-flex justify-content-center">
              {agentList == "" && (
                <h6 className="text-secondary">Loading Data..</h6>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Contact);
