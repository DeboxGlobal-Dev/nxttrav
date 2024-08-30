import React from "react";

const QoutationModal = ({ TabclassName, children, Title }) => {
  return (
    <div
      className={`modal fade ${TabclassName}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg ">
        <div className="modal-content ">
          <div className="modal-header p-2 bg-blue">
            <h5 className="modal-title m-0" id="exampleModalLabel">
              {Title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" className="m-0">
                &times;
              </span>
            </button>
          </div>

          <div className="modal-body p-2">{children}</div>

          <div className="modal-footer p-2 mt-4">
            <button type="button" className="btn  border" data-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QoutationModal;