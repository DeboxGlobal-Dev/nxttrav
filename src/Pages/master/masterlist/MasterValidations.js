import * as yup from "yup";

export const countryInitialValue = {
  id: "",
  Name: "",
  ShortName: "",
  SetDefault: 0,
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const stateInitialValue = {
  id: "",
  Name: "",
  CountryId: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const cityInitialValue = {
  id: "",
  CountryId: 1,
  StateId: 1,
  Name: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const leadSourceInitialValue = {
  id: "",
  Name: "",
  SetDefault: 0,
  Status: 1,
  AddedBy: 2,
  UpdatedBy: 0,
};
export const businessTypeInitialValue = {
  id: "",
  Name: "",
  SetDefault: 0,
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const divisionInitialValue = {
  id: "",
  Name: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const marketTypeInitialValue = {
  id: "",
  Name: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const languageInitialValue = {
  id: "",
  Name: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const destinationInitialValue = {
  id: "",
  Name: "",
  StateName: "",
  CountryName: "",
  CountryId: 1,
  StateId: 1,
  Description: "",
  SetDefault: 0,
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const tourtypeInitialValue = {
  id: "",
  Name: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
};
export const seasonTypeInitialValue = {
  id: "",
  SeasonName: "1",
  FromDate: "",
  ToDate: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const hotelMasterCreateInitialValue = {
  HotelChain: "",
  HotelName: "",
  HotelCode: "",
  HotelCategory: "",
  HotelType: "",
  HotelDestination: "",
  HotelCountry: "",
  HotelState: "",
  HotelCity: "",
  HotelPinCode: "",
  HotelAddress: "",
  HotelLocality: "",
  HotelGSTN: "",
  HotelWeekend: "",
  CheckIn: "",
  CheckOut: "",
  HotelLink: "",
  HotelInfo: "",
  HotelPolicy: "",
  HotelTC: "",
  HotelAmenties: "",
  HotelRoomType: "",
  HotelStatus: 1,
  SelfSupplier: 1,
  AddedBy: 1,
  UpdatedBy: 0,
  Created_at: "2024-03-27 14:35:08",
  Updated_at: null,
};
export const hotelMasterInitialValue = {
  HotelExcelFile: undefined,
};
export const hotelCategoryInitialValue = {
  id: "",
  Name: "",
  UploadKeyword: "",
  Status: 1,
  AddedBy: 1,
};
export const hotelAdditonalInitialValue = {
  id: "",
  Name: "",
  Details: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
};
export const roomMasterInitialValue = {
  id: "",
  Name: "",
  Status: 1,
  AddedBy: 0,
  UpdatedBy: 0,
};
export const hotelChainInitialValue = {
  id: "",
  Name: "",
  Location: "",
  HotelWebsite: "",
  SelfSupplier: "",
  ContactType: "",
  ContactName: "",
  ContactDesignation: "",
  ContactCountryCode: "",
  ContactMobile: "",
  ContactEmail: "",
  Status: 1,
  AddedBy: 1,
};
export const resturantInitialValue = {
  id: "",
  Name: "",
  DestinationId: "",
  Address: "",
  CountryId: "",
  StateId: "",
  CityId: "",
  SelfSupplier: "1",
  PinCode: "",
  GSTN: "",
  ContactType: "",
  ContactName: "",
  ContactDesignation: "",
  CountryCode: "",
  Phone1: "",
  Phone2: "",
  Phone3: "",
  ContactEmail: "",
  Status: 1,
  AddedBy: 1,
  updatedBy: 1,
};
export const restaurantMealInitialValue = {
  id: "",
  Name: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const amentiesInitialValue = {
  id: "",
  Name: "",
  SetDefault: 0,
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const hotelTypeInitialValue = {
  id: "",
  Name: "",
  UploadKeyword: "",
  ProposalPriority: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const weekendInitialValue = {
  id: "",
  Name: "",
  WeekendDays: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const hotelMealInitialValue = {
  id: "",
  Name: "",
  ShortName: "",
  SetDefault: 0,
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const monumentInitialValue = {
  id: "",
  MonumentName: "",
  Destination: "",
  TransferType: "",
  ClosedOnDays: "",
  DefaultQuotation: "",
  DefaultProposal: "",
  WeekendDays: "",
  Description: "",
  Status: "0",
  AddedBy: 1,
  UpdatedBy: "1",
};
export const sightseeingInitialValue = {
  id: "",
  SightseeingName: "",
  Destination: "",
  TransferType: "",
  DefaultQuotation: "",
  DefaultProposal: "",
  Description: "",
  InclusionsExclusionsTiming: "",
  ImportantNote: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
};
export const visaCostInitialValue = {
  id: "",
  Country: "",
  VisaType: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const visaTypeInitialValue = {
  id: "",
  Name: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
};
export const insuranceTypeInitialValue = {
  id: "",
  InsuranceType: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const insuranceCostInitialValue = {
  id: "",
  InsuranceName: "",
  InsuranceType: 1,
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
};
export const tourEscortPriceInitialValue = {
  id: "",
  ServiceType: "",
  Destination: "",
  TourEscortService: "",
  Status: 1,
  Default: "0",
  AddedBy: 1,
  UpdatedBy: 0,
};
export const tourEscortInitialValue = {
  id: "",
  ServiceType: 1,
  Name: "",
  MobileNumber: "",
  WhatsAppNumber: "",
  AlternateNumber: "",
  Email: "",
  TourEscortLicenseOne: "",
  LicenseExpiry: "",
  Destination: "",
  Language: "",
  Supplier: 1,
  TourEscortLicenseTwo: "",
  ContactPerson: "",
  Designation: "",
  Country: 1,
  State: 1,
  City: 1,
  PinCode: "",
  Detail: "",
  Address: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
};
export const vehicleTypeInitialValue = {
  id: "",
  Name: "",
  PaxCapacity: "",
  Status: 1,
  AddedBy: 1,
};
export const additionalRequiremntInitialValue = {
  id: "",
  Name: "",
  DestinationId: 1,
  CurrencyId: 1,
  CostType: 1,
  TaxSlab: "",
  MarkupApply: "",
  ShowInProposal: "",
  AdultCost: "",
  ChildCost: "",
  InfantCost: "",
  ImageName: "",
  Details: "",
  Status: "",
  AddedBy: "",
  ImageData: "",
};
export const driverMasterInitialValue = {
  id: "",
  Country: "",
  DriverName: "",
  MobileNumber: "",
  AlternateMobileNo: "",
  WhatsappNumber: "",
  LicenseNumber: "",
  BirthDate: "",
  ValidUpto: "",
  PassportNumber: "",
  LicenseName: "",
  LicenseData: "",
  Address: "",
  UpdatedBy: 1,
  AddedBy: 0,
};
export const trainMasterInitialValue = {
  id: "",
  Name: "",
  ImageName: "",
  ImageData: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
};
export const airlineMasterInitialValue = {
  id: "",
  Name: "",
  ImageName: "",
  ImageData: "",
  Status: 1,
  UpdatedBy: 1,
};
export const ferryMasterInitialValue = {
  id: "",
  FerryCompany: 1,
  FerryName: "",
  Capacity: "",
  Status: 1,
  ImageName: "hhhh.png",
  ImageData: "",
  AddedBy: 1,
  UpdatedBy: 1,
};
export const ferrySeatMasterInitialValue = {
  id: "",
  FerrySeat: "",
  Status: 0,
  UpdatedBy: 1,
  AddedBy: 1,
};
export const currencyMasterInitialValue = {
  id: "",
  CountryId: 1,
  CountryCode: "",
  CurrencyName: "",
  Status: 1,
  SetDefault: "",
  AddedBy: 1,
  UpdatedBy: "0",
};
export const roomTypeInitialValue = {
  // change its initial value it for demo
  id: "",
  CountryId: 1,
  CurrencyCode: "",
  CurrencyName: "",
  Status: 1,
  SetDefault: "",
  AddedBy: 1,
  UpdatedBy: "0",
};
export const cruiseCompanyInitialValue = {
  id: "",
  CruiseCompanyName: "",
  Destination: "",
  Country: "",
  State: "",
  City: "",
  PinCode: "",
  Address: "",
  Website: "",
  GST: "",
  SelfSupplier: "",
  Type: "",
  Phone: "",
  Email: "",
  Status: "",
  UpdatedBy: 1,
};
export const ferryCompanyInitialValue = {
  id: "",
  FerryCompanyName: "",
  Destination: "",
  Website: "",
  SelfSupplier: "1",
  Type: "0",
  ContactPers: "",
  Designation: "",
  Phone: "",
  Email: "",
  Status: "0",
  UpdatedBy: "1",
  AddedBy: "1",
};
export const letterMasterInitialValue = {
  id: "",
  FromDestination: "",
  ToDestination: "",
  TransferMode: "",
  Name: "",
  GreetingNote: "",
  WelcomeNote: "",
  Status: "",
  AddedBy: "1",
};
export const taxMasterInitialValue = {
  id: "",
  ServiceType: "",
  TaxSlabName: "",
  TaxValue: "",
  Status: "0",
  SetDefault: "1",
  AddedBy: "1",
  UpdatedBy: "0",
};
export const expenseTypeInitialValue = {
  id: "",
  ExpenseHead: "",
  ExpenseType: "",
  Status: "0",
  AddedBy: "1",
  UpdatedBy: "0",
};
export const expenseHeadInitialValue = {
  id: "",
  ExpenseHead: "",
  Status: "1",
  AddedBy: "1",
  UpdatedBy: "0",
};
export const sacCodeInitialValue = {
  id: "",
  ServiceType: "",
  SacCode: "",
  Status: "1",
  SetDefault: "0",
  AddedBy: "1",
  UpdatedBy: "0",
};
export const paymentTypeInitialValue = {
  id: "",
  PaymentTypeName: "",
  Status: "1",
  AddedBy: "1",
  UpdatedBy: "0",
};
export const fitInitialValue = {
  id: "",
  Name: "",
  Destination: "",
  Inclusion: "",
  Exclusion: "",
  TermsCondition: "",
  Cancelation: "",
  ServiceUpgradation: "",
  OptionalTour: "",
  PaymentPolicy: "",
  Remarks: "",
  SetDefault: "1",
  Status: "1",
  AddedBy: "1",
  UpdatedBy: "0",
};
export const gitInitialValue = {
  id: "",
  Name: "",
  Destination: "",
  Inclusion: "",
  Exclusion: "",
  TermsCondition: "",
  Cancelation: "",
  ServiceUpgradation: "",
  OptionalTour: "",
  PaymentPolicy: "",
  Remarks: "",
  SetDefault: "1",
  Status: "1",
  AddedBy: "1",
  UpdatedBy: "0",
};

export const bankInitialValue = {
  id: "",
  BankName: "",
  AccountNumber: "",
  BranchAddress: "",
  UpiId: "",
  AccountType: "1",
  BeneficiaryName: "",
  BranchIfsc: "",
  BranchSwiftCode: "",
  ImageName: "",
  ImageData:"",
  ShowHide: "1",
  SetDefault: "1",
  Status: "1",
  AddedBy: "1",
  UpdatedBy: "1",
};

// ------------------------VALIDATION SCHEMAS-------------------------- //

export const countryValidationSchema = yup.object().shape({
  Name: yup.string().min(3).max(20).required("Required"),
  ShortName: yup.string().required("Required"),
});
export const stateValidationSchema = yup.object().shape({
  Name: yup.string().min(3).max(20).required("Required"),
});
export const cityValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const leadSourceValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const businessTypeValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const divisionValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const marketTypeValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const languageValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const destinationValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  Description: yup.string().required("Required"),
});
export const tourtypeValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const seasonTypeValidationSchema = yup.object().shape({
  FromDate: yup.string().required("Required"),
  ToDate: yup.string().required("Required"),
});
export const hotelMasterCreateValidationSchema = yup.object().shape({
  HotelName: yup.string().required("Required"),
  HotelDestination: yup.string().required("Required"),
  HotelRoomType: yup.string().required("Required"),
});
export const hotelMasterValidationSchema = yup.object().shape({
  HotelExcelFile: yup.mixed().required("Required"),
});
export const hotelCategoryValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  UploadKeyword: yup.string().required("Required"),
});
export const hotelAdditionalValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  Details: yup.string().required("Required"),
});
export const roomMasterValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const hotelChainValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  Location: yup.string().required("Required"),
  HotelWebsite: yup.string().required("Required"),
  SelfSupplier: yup.string().required("Required"),
  ContactType: yup.string().required("Required"),
  ContactName: yup.string().required("Required"),
  ContactDesignation: yup.string().required("Required"),
  ContactCountryCode: yup
    .string()
    .matches(/^\+[1-9]\d{0,3}$/, "Invalid-Code")
    .required("Required"),
  ContactMobile: yup.string().required("Required"),
  ContactEmail: yup.string().email().required("Required"),
});
export const resturantValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  Address: yup.string().required("Required"),
  PinCode: yup.string().required("Required"),
  GSTN: yup.string().required("Required"),
  ContactName: yup.string().required("Required"),
  ContactDesignation: yup.string().required("Required"),
});
export const restaurantMealValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const amentiesValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const hotelTypeValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  UploadKeyword: yup.string().required("Required"),
  ProposalPriority: yup.string().required("Required"),
});
export const weekendValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  WeekendDays: yup.string().required("Required"),
});
export const hotelMealValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const monumentValidatinSchema = yup.object().shape({
  MonumentName: yup.string().required("Required"),
});
export const sightseeingValidationSchema = yup.object().shape({
  SightseeingName: yup.string().required("Required"),
});
export const visaTypeValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const insuranceTypeValidationSchema = yup.object().shape({
  InsuranceType: yup.string().required("Required"),
});
export const insuranceCostValidationSchema = yup.object().shape({
  InsuranceName: yup.string().required("Required"),
});
export const tourEscortPriceValidationSchema = yup.object().shape({
  TourEscortService: yup.string().required("Required"),
});
export const tourEscortValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  MobileNumber: yup.number().required("Required"),
  Email: yup.string().required("Required"),
  Destination: yup.string().required("Required"),
  Address: yup.string().required("Required"),
});
export const vehicleTypeValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const additionaRequirementValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const driverMasterValidationSchema = yup.object().shape({
  DriverName: yup.string().required("Required"),
  MobileNumber: yup.number().required("Required"),
  WhatsappNumber: yup.number().required("Required"),
  Address: yup.string().required("Address"),
});
export const trainMasterValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const airlineMasterValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const ferryMasterValidationSchema = yup.object().shape({
  FerryName: yup.string().required("Required"),
});
export const currencyMasterValidationSchema = yup.object().shape({
  CountryCode: yup.string().required("Required"),
  CurrencyName: yup.string().required("Required"),
});
export const ferryCompanyValidationSchema = yup.object().shape({
  FerryCompanyName: yup.string().required("Required"),
  Destination: yup.string().required("Required"),
});
export const ferrySeatValidationSchema = yup.object().shape({
  FerrySeat: yup.string().required("Required"),
});
export const taxMasterValidationSchema = yup.object().shape({
  ServiceType: yup.string().required("Required"),
  TaxSlabName: yup.string().required("Required"),
  TaxValue: yup.string().required("Required"),
});
export const expenseTypeValidationSchema = yup.object().shape({
  ExpenseType: yup.string().required("Required"),
  ExpenseHead: yup.string().required("Required"),
});
export const expenseHeadValidationSchema = yup.object().shape({
  ExpenseHead: yup.string().required("Required"),
});
export const sacCodeValidationSchema = yup.object().shape({
  ServiceType: yup.string().required("Required"),
  SacCode: yup.string().required("Required"),
});
export const paymentTypeValidationSchema = yup.object().shape({
  PaymentTypeName: yup.string().required("Required"),
});
export const fitValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  Destination: yup.string().required("Required"),
  Inclusion: yup.string().required("Required"),
});
export const gitValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  Destination: yup.string().required("Required"),
  Inclusion: yup.string().required("Required"),
});
export const letterMasterValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  WelcomeNote: yup.string().required("Required"),
  GreetingNote: yup.string().required("Required"),
});
export const bankMasterValidationSchema = yup.object().shape({
  BankName: yup.string().required('Required'),
  AccountNumber: yup.string().required('Required')
})
// Hotel Master Table Value in JSON-----------------------------------

export const hotelMasterValue = [
  {
    HotelChain: "None",
    HotelName: "Blue Lotus Hotel",
    Destination: "Delhi",
    ContactPerson: "Ansar",
    Category: "5Star",
    Status: "Active",
    RoomType: "Classic",
    Gallery: "Gallery",
    RateSheet: "RateSheet",
  },
  {
    HotelChain: "None",
    HotelName: "Hotel Nikko",
    Destination: "Mumbai",
    ContactPerson: "Ansar",
    Category: "2Star",
    Status: "Active",
    RoomType: "Classic",
    Gallery: "Gallery",
    RateSheet: "RateSheet",
  },
  {
    HotelChain: "None",
    HotelName: "Hotel Nikko",
    Destination: "Mumbai",
    ContactPerson: "Ansar",
    Category: "2Star",
    Status: "Active",
    RoomType: "Classic",
    Gallery: "Gallery",
    RateSheet: "RateSheet",
  },
  {
    HotelChain: "None",
    HotelName: "Hotel Nikko",
    Destination: "Mumbai",
    ContactPerson: "Ansar",
    Category: "2Star",
    Status: "Active",
    RoomType: "Classic",
    Gallery: "Gallery",
    RateSheet: "RateSheet",
  },
  {
    HotelChain: "None",
    HotelName: "Hotel Nikko",
    Destination: "Mumbai",
    ContactPerson: "Ansar",
    Category: "2Star",
    Status: "Active",
    RoomType: "Classic",
    Gallery: "Gallery",
    RateSheet: "RateSheet",
  },
];
