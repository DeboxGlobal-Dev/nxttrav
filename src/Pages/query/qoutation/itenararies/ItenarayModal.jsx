import React from "react";

const ItenarayModal = ({tabId, children}) => {
  return (
    <div
      class="modal fade"
      id={tabId}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title" id="exampleModalLabel">
              Modal Title
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {children}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="modal-close-button"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="modal-save-button">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItenarayModal;
