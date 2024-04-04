import * as yup from "yup";

export const QueryinputInitialValue = {
  id: "",
  QueryId: "",
  FDCode: "",
  PackageCode: "",
  PackageName: "",
  ClientType: "",
  OperationPerson: "",
  AgentId: "",
  LeadPax: "",
  Subject: "",
  AddEmail: "",
  AdditionalInfo: "",
  TravelInfo: "",
  PaxType: "",
  Priority: "",
  TAT: "",
  TourType: "",
  LeadSource: "",
  LeadRefrenced: "",
  HotelPrefrence: "",
  HotelType: "",
  MealPlan: "",
  AddedBy: "",
  UpdatedBy: "",
  ValueAddededServices: {
    Flight: "No",
    Visa: "No",
    Insurance: "No",
    Train: "No",
    Transfer: "No",
  },
};

export const QueryInputSchema = yup.object().shape({
  Subject: yup.string().required("Required"),
  OperationPerson: yup.string().required("Required"),
  TravelDate: yup.object().shape({
    FromDate: yup.string().required("Required"),
    ToDate: yup.string().required("Required"),
    TotalDays: yup.string().required("Required"),
  }),
  PaxInfo: yup.object().shape({
    Adult: yup.string().required("Required"),
  }),
});
