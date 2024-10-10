import React, { useEffect, useState } from "react";
import { axiosOther } from "../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, useFormik } from "formik";

const Model = ({
  children,
  heading,
  apiurl,
  initialValues,
  validationSchema,
  forEdit,
  isEditing,
  setIsEditing,
  setChangeValue,
  setUpdateData,
  updateData,
  imageValue,
  setImageValue,
  description,
}) => {
  const closeModel = () => {
    document.getElementById("cancel").click();
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Submit Modal Value", {
      ...values,
      ...imageValue,
      ...description,
    });

    try {
      const response = await axiosOther.post(apiurl, {
        ...values,
        ...imageValue,
        ...description,
      });
      console.log("response", response);
      if (response.data.Status) {
        toast.success(response.data.Message);
        setUpdateData(!updateData);
        resetForm();
        closeModel();
        console.log(response);
        imageValue != undefined && setImageValue({ ImageName: "" });
      } else {
        toast.error(response.data.Name);
        console.log(response.data.Name);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button
        type="button"
        className={"blue-button"}
        data-toggle="modal"
        data-target="#modal_form_vertical"
        onClick={() => setIsEditing(false)}
      >
        <span>Create New</span>
      </button>

      {/* <!-- Modal --> */}
      <Toaster />
      <div
        className="modal fade"
        id="modal_form_vertical"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-info-700 py-1">
              <h5 className="modal-title m-0" id="exampleModalLabel">
                {heading}
              </h5>
              <p
                className="m-0 cursor-pointer font-weight-normal"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="m-0 fs-3">
                  &times;
                </span>
              </p>
            </div>
            <Formik
              method="POST"
              action=""
              initialValues={isEditing ? forEdit : initialValues}
              validationSchema={validationSchema}
              enableReinitialize
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values, { resetForm });
              }}
            >
              {({ values, handleChange, handleBlur, setFieldValue }) => {
                {
                  useEffect(() => {
                    setChangeValue(values);
                  }, [values]);
                }
                return (
                  <Form>
                    <div className="modal-body p-3">
                      {/* modal body */}
                      {children}
                      {/* /modal body */}
                    </div>

                    <div className="modal-footer p-3 pt-0">
                      <button type="submit" className="modal-save-button">
                        Save
                      </button>
                      <button
                        type="button"
                        id="cancel"
                        className="modal-close-button"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
