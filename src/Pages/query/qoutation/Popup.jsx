import React from "react";
import QoutationModal from "./QoutationModal";
import {
  ItenararyModalForm,
  HotelModalForm,
  GuideModalForm,
  ActivityModalForm,
  MonumentModalForm,
  TransferModalForm,
  FlightModalForm,
  EnrouteModalForm,
  RestaurantModalForm,
  TransportationModalForm,
  TrainModalForm,
  AddOnsModalForm
} from "./QouttionAllForm";

const Popup = () => {
  return (
    <div className="col-12 p-0 mt-2">
      <div className="col-12 p-0 mt-2">
        <div className="row justify-content-center">
          <div className="col-11 border rounded-pill shadow sticky">
            <div className="row px-2 py-1">
              {/* itenarary info */}
              <div
                className="col d-flex flex-column align-items-center pt-1"
                data-toggle="modal"
                data-target=".bd-itenarary-modal-lg"
              >
                <img
                  className="image-hw cursor-pointer"
                  src="\global_assets\images\qoutation\itenary.png"
                  alt="activity"
                />
                <span className="span-font-size cursor-pointer">
                  Itenary Info
                </span>
              </div>
              {/* Flight */}
              <div
                className="col d-flex flex-column align-items-center pt-1"
                data-toggle="modal"
                data-target=".bd-flight-modal-lg"
              >
                <img
                  className="image-hw cursor-pointer"
                  src="\global_assets\images\qoutation\flight.png"
                  alt="activity"
                />
                <span className="span-font-size cursor-pointer">Flight</span>
              </div>
              {/* hotel */}
              <div
                className="col d-flex flex-column align-items-center pt-1"
                data-toggle="modal"
                data-target=".bd-hotel-modal-lg"
              >
                <img
                  className="image-hw cursor-pointer"
                  src="\global_assets\images\qoutation\hotel.png"
                  alt="activity"
                />
                <span className="span-font-size cursor-pointer">Hotel</span>
              </div>
              {/* transfer */}
              <div
                className="col d-flex flex-column align-items-center pt-1"
                data-toggle="modal"
                data-target=".bd-transfer-modal-lg"
              >
                <img
                  className="image-hw cursor-pointer"
                  src="\global_assets\images\qoutation\transfer.png"
                  alt="activity"
                />
                <span className="span-font-size cursor-pointer">Transfer</span>
              </div>
              {/* monument */}
              <div
                className="col d-flex flex-column align-items-center pt-1"
                data-toggle="modal"
                data-target=".bd-monument-modal-lg"
              >
                <img
                  className="image-hw cursor-pointer"
                  src="\global_assets\images\qoutation\monument.png"
                  alt="activity"
                />
                <span className="span-font-size cursor-pointer">Monument</span>
              </div>
              {/* enroute */}
              <div
                className="col d-flex flex-column align-items-center pt-1"
                data-toggle="modal"
                data-target=".bd-enroute-modal-lg"
              >
                <img
                  className="image-hw cursor-pointer"
                  src="\global_assets\images\qoutation\enroute.png"
                  alt="activity"
                />
                <span className="span-font-size cursor-pointer">Enroute</span>
              </div>
              {/* restaurant */}
              <div
                className="col d-flex flex-column align-items-center pt-1"
                data-toggle="modal"
                data-target=".bd-restaurant-modal-lg"
              >
                <img
                  className="image-hw cursor-pointer"
                  src="\global_assets\images\qoutation\restaurant.png"
                  alt="activity"
                />
                <span className="span-font-size cursor-pointer">
                  Restaurant
                </span>
              </div>
              {/* activity */}
              <div
                className="col d-flex flex-column align-items-center pt-1"
                data-toggle="modal"
                data-target=".bd-activity-modal-lg"
              >
                <img
                  className="image-hw cursor-pointer"
                  src="\global_assets\images\qoutation\activity.png"
                  alt="activity"
                />
                <span className="span-font-size  cursor-pointer">Activity</span>
              </div>
              {/* guide */}
              <div
                className="col d-flex flex-column align-items-center pt-1"
                data-toggle="modal"
                data-target=".bd-guide-modal-lg"
              >
                <img
                  className="image-hw cursor-pointer"
                  src="\global_assets\images\qoutation\guide.png"
                  alt="activity"
                />
                <span className="span-font-size cursor-pointer">Guide</span>
              </div>
              {/* transportation */}
              <div
                className="col d-flex flex-column align-items-center pt-1"
                data-toggle="modal"
                data-target=".bd-transportation-modal-lg"
              >
                <img
                  className="image-hw cursor-pointer"
                  src="\global_assets\images\qoutation\transportation.png"
                  alt="activity"
                />
                <span className="span-font-size cursor-pointer">
                  {" "}
                  Tranportation{" "}
                </span>
              </div>
              {/* trains */}
              <div
                className="col d-flex flex-column align-items-center pt-1"
                data-toggle="modal"
                data-target=".bd-train-modal-lg"
              >
                <img
                  className="image-hw cursor-pointer"
                  src="\global_assets\images\qoutation\train.png"
                  alt="activity"
                />
                <span className="span-font-size cursor-pointer">Trains</span>
              </div>
              {/* add ons */}
              <div
                className="col d-flex flex-column align-items-center pt-1"
                data-toggle="modal"
                data-target=".bd-addons-modal-lg"
              >
                <img
                  className="image-hw cursor-pointer"
                  src="\global_assets\images\qoutation\add.png"
                  alt="activity"
                />
                <span className="span-font-size cursor-pointer">Add Ons</span>
              </div>
            </div>
          </div>

          {/* all modals */}

          <QoutationModal TabclassName={"bd-itenarary-modal-lg"} Title="Delhi">
            <ItenararyModalForm />
          </QoutationModal>

          <QoutationModal TabclassName={"bd-flight-modal-lg"} Title="Flight Title">
            <FlightModalForm/>
          </QoutationModal>

          <QoutationModal
            TabclassName={"bd-hotel-modal-lg"}
            Title=" Guest Hotel | Thu 22 Aug 2024  |  Pax Type: FIT  "
          >
            <HotelModalForm />
          </QoutationModal>

          <QoutationModal
            TabclassName={"bd-transfer-modal-lg"}
            Title="Transfer Title"
          >
            <TransferModalForm/>
          </QoutationModal>

          <QoutationModal
            TabclassName={"bd-monument-modal-lg"}
            Title="Monument Modal"
          >
            <MonumentModalForm/>
          </QoutationModal>

          <QoutationModal
            TabclassName={"bd-enroute-modal-lg"}
            Title="Enroute Modal"
          >
            <EnrouteModalForm/>
          </QoutationModal>

          <QoutationModal
            TabclassName={"bd-restaurant-modal-lg"}
            Title="Restaurant Modal"
          >
            <RestaurantModalForm/>
          </QoutationModal>

          <QoutationModal
            TabclassName={"bd-activity-modal-lg"}
            Title="Activity | Experiences | Thu 22 Aug 2024 "
          >
            <ActivityModalForm />
          </QoutationModal>

          <QoutationModal
            TabclassName={"bd-guide-modal-lg"}
            Title="Guide | Fri 23 Aug 2024 "
          >
            <GuideModalForm />
          </QoutationModal>

          <QoutationModal
            TabclassName={"bd-transportation-modal-lg"}
            Title="Transportation"
          >
            <TransportationModalForm/>
          </QoutationModal>

          <QoutationModal TabclassName={"bd-train-modal-lg"} Title="Train Modal">
            <TrainModalForm/>
          </QoutationModal>

          <QoutationModal TabclassName={"bd-addons-modal-lg"} Title="Add Ons Title">
            <AddOnsModalForm />
          </QoutationModal>
        </div>
      </div>
    </div>
  );
};

export default Popup;
