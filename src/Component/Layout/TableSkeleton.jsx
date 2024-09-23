import React from 'react'

const TableSkeleton = () => {
    return (
        <div className="container-fluid p-3 mb-4">
            <div className="row mt-3">
                <div className="col-12">
                    <div className="table">
                        <div className="table-row">
                            <div className="table-cell shimmer"></div>
                            <div className="table-cell shimmer"></div>
                            <div className="table-cell shimmer"></div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell shimmer"></div>
                            <div className="table-cell shimmer"></div>
                            <div className="table-cell shimmer"></div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell shimmer"></div>
                            <div className="table-cell shimmer"></div>
                            <div className="table-cell shimmer"></div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell shimmer"></div>
                            <div className="table-cell shimmer"></div>
                            <div className="table-cell shimmer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableSkeleton