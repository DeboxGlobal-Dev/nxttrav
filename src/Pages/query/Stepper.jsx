import React, { useState } from "react";

const Stepper = () => {
  const [stepper ,setStepper] = useState(7);
  return (
    <>
      <div className="container-fluid stepper px-3 pt-1">
        <div className="row">
          <div className="col-10">
            {stepper == 1 && (
              <img
                src="\global_assets\images\stepper\step1.png"
                alt="step1"
                className="img-fluid"
              />
            )}
            {stepper == 2 && (
              <img
                src="\global_assets\images\stepper\step2.png"
                alt="step2"
                className="img-fluid"
              />
            )}
            {stepper == 3 && (
              <img
                src="\global_assets\images\stepper\step3.png"
                alt="step3"
                className="img-fluid"
              />
            )}
            {stepper == 4 && (
              <img
                src="\global_assets\images\stepper\step4.png"
                alt="step4"
                className="img-fluid"
              />
            )}
            {stepper == 5 && (
              <img
                src="\global_assets\images\stepper\step5.png"
                alt="step5"
                className="img-fluid"
              />
            )}
            {stepper == 6 && (
              <img
                src="\global_assets\images\stepper\step6.png"
                alt="step6"
                className="img-fluid"
              />
            )}
            {stepper == 7 && (
              <img
                src="\global_assets\images\stepper\step7.png"
                alt="step7"
                className="img-fluid"
              />
            )}
            {stepper == 8 && (
              <img
                src="\global_assets\images\stepper\step8.png"
                alt="step8"
                className="img-fluid"
              />
            )}
            {stepper == 9 && (
              <img
                src="\global_assets\images\stepper\step9.png"
                alt="step9"
                className="img-fluid"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stepper;
