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

const data = {
  "QueryId": "",
  "FDCode" : "",
  "PackageCode" : "",
  "PackageName" : "",
  "ClientType" : 1,
  "AgentId" : 10,
  "LeadPax" : "Satenra Gurjar",
  "Subject" : "01-02-2024 Satenra Gurjar",
  "AddEmail" : "satendra@mail.com,abc@mail.com",
  "AdditionalInfo" : "Give me best package quotation",
  "QueryType" : 1,
  "ValueAddedServices" : [{
      "Flight": "NO",
      "Visa" : "NO",
      "Insurance": "NO",
      "Train": "NO",
      "Transfer": "NO"
  }],
  "TravelInfo" : 1,
  "PaxType" : 1,
  "TravelDate" : [{
      "Type": 1,
      "FromDate" : "01-02-2024",
      "ToDate" : "03-02-2024",
      "TotalDays" : 3,
      "SeasonType" : 1,
      "SeasonYear" : 2024
  }],
  "PaxInfo" : [{
      "Adult": 2,
      "Child" : 1,
      "Infant": 1
  }],
  "RoomInfo" : [{
      "Single": 1,
      "Double" : 0,
      "Twin": 0,
      "Triple": 0,
      "ExtraBed": 0
  }],
  "Priority" : 1,
  "TAT" : 24,
  "TourType" : 1,
  "LeadSource" : 1,
  "LeadRefrenceId" : "45465ASDF",
  "HotelPrefrence" : 3,
  "HotelType" : 3,
  "MealPlan" : 2,
  "AddedBy" : 1,
  "UpdatedBy" : 0
}

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
