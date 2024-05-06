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
  setImageValue
}) => {
  
  const closeModel = () => {
    document.getElementById("cancel").click();
  };
  

  const handleSubmit = async (values, { resetForm }) => {
    console.log('Submit Modal Value', {...values, ...imageValue});
    
    try {
      const response = await axiosOther.post(apiurl, {...values, ...imageValue});
      if (response.data.Status) {
        toast.success(response.data.Message);
        setUpdateData(!updateData);
        resetForm();
        closeModel();
        console.log(response);
        imageValue != undefined && setImageValue({ImageName:""});
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
            <div className="modal-header  bg-info-700">
              <h5 className="modal-title" id="exampleModalLabel">
                {heading}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
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
              {({ values, handleChange, handleBlur, setFieldValue}) => {
                {
                  useEffect(() => {
                    setChangeValue(values);
                  }, [values]);
                }
                return (
                  <Form>
                    <div className="modal-body">
                      {/* modal body */}
                      {children}
                      {/* /modal body */}
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        id="cancel"
                        className="default-button"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="green-button">
                        {"Save"}
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
