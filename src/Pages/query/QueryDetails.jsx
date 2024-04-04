import React from "react";
const QueryDetails = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row" style={{ marginTop: "10px" }}>
                    <div className="col-xl-4">
                        <div className="card shadow-none border" >
                            <div className="">
                                <div className="row justify-content-between px-3 py-2">
                                    <div className="col-4 border p-0">
                                        <div
                                            className="d-flex align-items-center px-1"
                                            style={{ background: "#f0ffef" }}
                                        >
                                            <div className="w-100">
                                                <a
                                                    href="#"
                                                    className="text-default font-weight-semibold letter-icon-title"
                                                >
                                                    Start City
                                                </a>
                                                <div className="text-muted font-size-sm w-100">
                                                    <img
                                                        src="/assets/icons/countries.png"
                                                        alt="image"
                                                        style={{ width: "15px" }}
                                                    />
                                                    <span className="pl-2">Delhi</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 border p-0">
                                        <div
                                            className="d-flex align-items-center px-1"
                                            style={{ background: "#f0ffef" }}
                                        >
                                            <div>
                                                <a
                                                    href="#"
                                                    className="text-default font-weight-semibold letter-icon-title"
                                                >
                                                    Nights
                                                </a>
                                                <div className="text-muted font-size-sm
                          m-auto w-100
                        ">
                                                    <i
                                                        className="fa fa-light fa-moon"
                                                        style={{ color: "black", fontSize: "11px" }}
                                                    ></i>
                                                    <span className="pl-2">2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 border p-0">
                                        <div
                                            className="d-flex align-items-center px-1"
                                            style={{ background: "#f0ffef" }}
                                        >
                                            <div className="w-100">
                                                <a
                                                    href="#"
                                                    className="text-default font-weight-semibold letter-icon-title"
                                                >
                                                    End City
                                                </a>
                                                <div className="text-muted font-size-sm w-100
                        ">
                                                    <img
                                                        src="/assets/icons/countries.png"
                                                        alt="image"
                                                        style={{ width: "15px" }}
                                                    />
                                                    <span className="pl-2">Mumbai</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th className="px-2"></th>
                                            <th className="px-2">Destination</th>
                                            <th className="px-2">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        <tr>
                                            <td className="px-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <a
                                                            href="#"
                                                            className="text-default font-weight-semibold letter-icon-title"
                                                        >
                                                            Day 1
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <a
                                                            href="#"
                                                            className="text-default font-weight-semibold letter-icon-title"
                                                        >
                                                            Delhi
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <a
                                                            href="#"
                                                            className="text-default font-weight-semibold letter-icon-title"
                                                        >
                                                            Banglore
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <a
                                                            href="#"
                                                            className="text-default font-weight-semibold letter-icon-title"
                                                        >
                                                            Day 2
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <a
                                                            href="#"
                                                            className="text-default font-weight-semibold letter-icon-title"
                                                        >
                                                            Banglore
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <a
                                                            href="#"
                                                            className="text-default font-weight-semibold letter-icon-title"
                                                        >
                                                            Mumbai
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card border-left-3 border-left-danger-400 rounded-left-0">
                            <div className="card-body">
                                <div className="col-xl-12">
                                    <div className="media">
                                        <div className="media-body" style={{ flex:"auto", width: "1%" }}>
                                            <span className="text-muted">Travel Type</span>
                                            <div className="media-title font-weight-semibold">Domestic</div>
                                        </div>
                                        <div className="media-body" style={{ flex:"auto", width: "1%" }}>
                                            <span className="text-muted">Pax Type</span>
                                            <div className="media-title font-weight-semibold">GIT</div>
                                        </div>
                                        <div className="media-body" style={{ flex:"auto", width: "1%" }}>
                                            <span className="text-muted">Prority</span>
                                            <div className="media-title font-weight-semibold">High</div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-body" style={{ flex: "auto", width: "1%" }}>
                                            <span className="text-muted">TAT</span>
                                            <div className="media-title font-weight-semibold">
                                                24 Hours										</div>
                                        </div>
                                        <div className="media-body" style={{ flex: "auto", width: "1%" }}>
                                            <span className="text-muted">Tour Type</span>
                                            <div className="media-title font-weight-semibold">
                                                Adventure Type										</div>
                                        </div>
                                        <div className="media-body" style={{ flex:"auto", width:"1%" }}>
                                            <span className="text-muted">Lead Source</span>
                                            <div className="media-title font-weight-semibold">Website</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="card border-left-3 border-left-danger-400 rounded-left-0">
                            <div className="card-body">
                                <div className="col-xl-12">
                                    <div className="media">
                                        <div className="media-body" style={{ flex:"auto", width: "1%" }}>
                                            <span className="text-muted">Hotel Preference</span>
                                            <div className="media-title font-weight-semibold">3 Star</div>
                                        </div>
                                        <div className="media-body" style={{ flex:"auto", width: "1%" }}>
                                            <span className="text-muted">Hotel Type</span>
                                            <div className="media-title font-weight-semibold">Standard</div>
                                        </div>
                                        <div className="media-body" style={{ flex:"auto", width: "1%" }}>
                                            <span className="text-muted">Meal Plan</span>
                                            <div className="media-title font-weight-semibold">HP</div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-body" style={{ flex: "auto", width: "1%" }}>
                                            <span className="text-muted">Tour Type</span>
                                            <div className="media-title font-weight-semibold">
                                                Adventure Type										</div>
                                        </div>
                                        <div className="media-body" style={{ flex:"auto", width:"1%" }}>
                                            <span className="text-muted">Lead Source</span>
                                            <div className="media-title font-weight-semibold">Website</div>
                                        </div>
                                        <div className="media-body" style={{ flex:"auto", width: "1%" }}>
                                            <span className="text-muted">Hotel Preference</span>
                                            <div className="media-title font-weight-semibold">3 Star</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default QueryDetails;