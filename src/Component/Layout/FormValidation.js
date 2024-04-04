import * as yup from "yup";

export const addUserInitialValue = {
  CompanyKey: "",
  UserCode: "",
  FirstName: "",
  LastName: "",
  Email: "",
  Phone: "",
  Mobile: "",
  Password: "",
  PIN: "",
  Role: "1",
  Street: "",
  LanguageKnown: "",
  TimeFormat: "1",
  Profile: "1",
  Destination: "1",
  UsersDepartment: "1",
  ReportingManager: "1",
  UserType: "1",
  UserLoginType: "1",
  AddedBy: "1",
  UpdatedBy: 1,
};

export const addCompanyInitialValue = {
  CompanyName: "",
  Email: "",
  LicenseKey: "",
  ActionDate: "",
  PAN: "",
  TAN: "",
  CIN: "",
  LUTN: "",
  Address1: "",
  Address2: "",
  Pin: "",
  Status: 1,
};
export const addUserValidationSchema = yup.object().shape({
  UserCode: yup.string().required("Required"),
  FirstName: yup.string().required("Required"),
  Email: yup.string().required("Required"),
  Password: yup.string().required("Required"),
  Role: yup.string().required("Required"),
  UserDepartment: yup.string().required("Required"),
  Profile: yup.string().required("Required"),
  ReportingManager: yup.string().required("Required"),
});
export const addCompanyValidationSchema = yup.object().shape({
  CompanyName: yup.string().required("Required"),
  Email: yup.string().required("Required"),
  LicenseKey: yup.string().required("Required"),
  ActionDate: yup.string().required("Required"),
  Address1: yup.string().required("Required"),
});
