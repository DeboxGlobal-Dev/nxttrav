import React from "react";

const QoutationModal = ({ TabClass, children, Title }) => {
  return (
    <div
      class={`modal fade ${TabClass}`}
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header p-2 bg-blue">
            <h5 class="modal-title" id="exampleModalLabel" className="m-0">
              {Title}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" className="m-0">
                &times;
              </span>
            </button>
          </div>

          <div class="modal-body p-2">{children}</div>

          {/* <div class="modal-footer p-2">
            <button type="button" class="btn  border" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default QoutationModal;