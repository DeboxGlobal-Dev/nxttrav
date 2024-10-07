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
};

export const hotelMasterInitialValue = {
  HotelExcelFile: undefined,
};

export const hotelCategoryInitialValue = {
  id: "",
  Name: "",
  UploadKeyword: "",
  Status: "Active",
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
  Destination: "",
  HotelWebsite: "",
  SelfSupplier: "Yes",
  ContactType: "",
  ContactName: "",
  ContactDesignation: "",
  ContactCountryCode: "",
  ContactMobile: "",
  ContactEmail: "",
  Status: "Active",
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
  IsHouseBoat: "Yes",
  Status: "Active",
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
  SetDefault: "Yes",
  Status: "Active",
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
  Description: "",
  TransferType: "",
  DefaultQuotation: 0,
  DefaultProposal: 0,
  InclusionsExclusionsTiming: "",
  ImportantNote: "",
  Status: 'Active',
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
export const vehicleBrandInitialValue = {
  id: "",
  VehicleType: "",
  Name: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
};
export const vehicleMasterInitialValue = {
  id: "",
  Name: "",
  VehicleType: "",
  Capacity: "",
  VehicleBrand: "",
  ImageName: "",
  ImageData: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
};

export const additionalRequiremntInitialValue = {
  id: "",
  Name: "",
  DestinationId: "",
  TaxSlab: "",
  MarkupApply: 1,
  CurrencyId: "",
  CostType: 1,
  AdultCost: "",
  ChildCost: "",
  InfantCost: "",
  ShowInProposal: 1,
  Details: "",
  Status: 1,
  AddedBy: 1,
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
  Status: 1,
  UpdatedBy: 1,
  AddedBy: 1,
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
  AddedBy: 1,
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
  id: "",
  Name: "",
  MaximumOccupancy: "",
  Bedding: "",
  Size: "",
  Status: "Active",
  AddedBy: "1",
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
  Status: "1",
  UpdatedBy: 1,
};
export const cruiseNameCompanyInitialValue = {
  id: "",
  CruiseCompany: "",
  CruiseName: "",
  Status: "",
  ImageName: "",
  ImageData: "",
  AddedBy: "1",
  UpdatedBy: "1",
};
export const cruiseMasterInitialValue = {
  id: "",
  CruisePackageName: "",
  Destination: "",
  RunningDays: "",
  ArrivalTime: "",
  DepartureTime: "",
  Details: "",
  Status: 1,
  AddedBy: 1,
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
  ImageData: "",
  ShowHide: "1",
  SetDefault: "1",
  Status: "1",
  AddedBy: "1",
  UpdatedBy: "1",
};
export const cabinTypeInitialValue = {
  id: "",
  CruiseName: "",
  CabinType: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
};
export const cabinCategoryInitialValue = {
  id: "",
  Name: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
};
export const itenararyOverviewInitialValue = {
  id: "",
  OverviewName: "",
  OverviewInformation: "",
  HighlightInformation: "",
  ItineraryIntroduction: "",
  ItinerarySummary: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 1,
};
export const transferTypeInitialValue = {
  id: "",
  Name: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const transportMasterInitialValue = {
  id: "",
  Name: "",
  Destinations: "",
  TransferType: "",
  Detail: "",
  Default: 0,
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};
export const itineraryRequirementInitialValue = {
  id: "",
  FromDestination: "",
  ToDestination: "",
  TransferMode: "",
  Title: "",
  Description: "",
  DrivingDistance: "",
  Status: 1,
  AddedBy: 1,
  UpdatedBy: 0,
};

export const guideMasterInitialValue = {
  Name: "",
  ServiceType: "1",
  Rating: "",
  Email: "",
  Address: "",
  Languages: "",
  Destination: "",
  Phone: "",
  MobileNumber: "",
  WhatsappNumber: "",
  AlternateNumber: "",
  GuideLicense: "",
  LicenseExpiry: "",
  PAN: "",
  GST: "",
  guide_image: "",
  ImageData: "",
  Supplier: "1",
  ContactPerson: "",
  Designation: "",
  Country: "",
  State: "",
  City: "",
  Pincode: "",
  Remark: "",
  Feedback: "",
  Default: "0",
  VaccinationStatus: "1",
  Details: "",
  Status: "1",
  AddedBy: "1",
  UpdatedBy: "",
};
export const guidePriceMasterInititalValue = {
  ServiceType: "",
  Destination: "",
  Guide_Porter_Service: "",
  Default: "No",
  Status: "1",
  AddedBy: "1",
  CompanyId: "",
};

// ------------------------VALIDATION SCHEMAS-------------------------- //

export const guideMasterValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  MobileNumber: yup.string().required("Required"),
  Destination: yup.string().required("Required"),
  Country: yup.string().required("Required"),
  Status: yup.string().required("Required"),
  Default: yup.string().required("Required"),
});
export const guidePriceValidationSchema = yup.object().shape({
  ServiceType : yup.string().required("Required"),
  Destination : yup.string().required("Required"),
  Guide_Porter_Service : yup.string().required("Required"),
})

export const countryValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
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
  Country: yup.string().required("Required"),
  Name: yup.string().required("Required"),
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
export const roomTypeValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  MaximumOccupancy: yup.string().required("Required"),
  Bedding: yup.number("Numeric Value").required("Required"),
  Size: yup.string().required("Required"),
});
export const hotelChainValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  Destination: yup.string().required("Required"),
  HotelWebsite: yup.string().required("Required"),
});
export const resturantValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  CountryId: yup.string().required("Required"),
  StateId: yup.string().required("Required"),
  CityId: yup.string().required("Required"),
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
});
export const weekendValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  WeekendDays: yup.string().required("Required"),
});
export const hotelMealValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  ShortName: yup.string().required("Required"),
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
export const vehicleBrandValidationSchema = yup.object().shape({
  VehicleType: yup.string().required("Required"),
  Name: yup.string().required("Required"),
});
export const additionaRequirementValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const driverMasterValidationSchema = yup.object().shape({
  Country: yup.string().required("Required"),
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
  BankName: yup.string().required("Required"),
  AccountNumber: yup.string().required("Required"),
});
export const cruiseNameCompanyValidationSchema = yup.object().shape({
  CruiseCompany: yup.string().required("Required"),
  CruiseName: yup.string().required("Required"),
});
export const cruiseCompanyValidationSchema = yup.object().shape({
  CruiseCompanyName: yup.string().required("Required"),
});
export const cabinTypeValidationSchema = yup.object().shape({
  CruiseName: yup.string().required("Required"),
  CabinType: yup.string().required("Required"),
});
export const cabinCategoryValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const itenararyOverviewValidationSchema = yup.object().shape({
  OverviewName: yup.string().required("Required"),
});
export const transferTypeValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const transportMasterValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const vehicleMasterValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
});
export const cruiseMasterValidationSchema = yup.object().shape({
  CruisePackageName: yup.string().required("Required"),
});
export const itineraryRequirementValidationSchema = yup.object().shape({
  FromDestination: yup.string().required("Required"),
  ToDestination: yup.string().required("Required"),
});

export const direcetClientValidationSchema = yup.object().shape({
  Status: yup.string().required("Required"),
  DOB: yup.string().required("Required"),
  Gender: yup.string().required("Required"),
  LastName: yup.string().required("Required"),
  FirstName: yup.string().required("Required"),
  Title: yup.string().required("Required"),
  Nationality: yup.string().required("Required"),
});

export const agentMasterValidationSchema = yup.object().shape({
  BussinessType: yup.string().required("Required"),
  SalesPerson: yup.string().required("Required"),
  CompanyName: yup.string().required("Required"),
  CompanyEmailAddress: yup.string().required("Required"),
  CompanyPhoneNumber: yup.string().required("Required"),
  AgentHeaderImageData: yup.object().required("Required"),
  AgentFooterImageData: yup.object().required("Required"),
  MarketType: yup.string().required("Required"),
  Nationality: yup.string().required("Required"),
  Status: yup.string().required("Requried"),
});

export const supplierValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  Status: yup.string().required("Required"),
  SupplierService: yup.array().min(1, "Required").required("Required"),
});

export const addAddressValidationSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  Country: yup.string().required("Required"),
});

export const addContactPersonValidationSchema = yup.object().shape({
  OfficeName: yup.string().required("Required"),
  Title: yup.string().required("Required"),
  FirstName: yup.string().required("Required"),
  Division: yup.string().required("Required"),
  Designation: yup.string().required("Required"),
  CountryCode: yup.string().required("Required"),
  Phone: yup.string().required("Required"),
  Email: yup.string().email().required("Required"),
});

export const companyDocumentValidationSchema = yup.object().shape({
  DocumentName: yup.string().required("Required"),
  DocumentImageData: yup.string().required("Required"),
  DocumentImageName: yup.string().required("Required"),
});

export const bankDetailsValidationSchema = yup.object().shape({
  BankName: yup.string().required("Required"),
  BankBranch: yup.string().required("Required"),
  BenificiryName: yup.string().required("Required"),
  AccountNumber: yup.string().required("Required"),
  IfscCode: yup.string().required("Required"),
});

export const callsValidationSchema = yup.object().shape({
  Fk_Leadsource: yup.string().required("Required"),
  BusinessType: yup.string().required("Required"),
  AgentName: yup.string().required("Required"),
  AgentContactPerson: yup.string().required("Required"),
  EmailId: yup.string().required("Required"),
  CountryId: yup.string().required("Required"),
  Destination: yup.array().min(1, "Required").required("Required"),
  SalesPerson: yup.string().required("Required"),
  MobileNumber: yup.string().required("Required"),
  Startdate: yup.string().required("Required"),
  NextFollowUpdate: yup.string().required("Required"),
  CallAgenda: yup.string().required("Required"),
});
export const meetingsValidationSchema = yup.object().shape({
  Fk_Leadsource: yup.string().required("Required"),
  BusinessType: yup.string().required("Required"),
  AgentName: yup.string().required("Required"),
  AgentContactPerson: yup.string().required("Required"),
  EmailId: yup.string().required("Required"),
  CountryId: yup.string().required("Required"),
  Destination: yup.array().min(1, "Required").required("Required"),
  SalesPerson: yup.string().required("Required"),
  MobileNumber: yup.string().required("Required"),
  Startdate: yup.string().required("Required"),
  NextFollowUpdate: yup.string().required("Required"),
  MeetingAgenda: yup.string().required("Required"),
});
export const taskValidationSchema = yup.object().shape({
  Fk_Leadsource: yup.string().required("Required"),
  BusinessType: yup.string().required("Required"),
  AgentName: yup.string().required("Required"),
  AgentContactPerson: yup.string().required("Required"),
  EmailId: yup.string().required("Required"),
  CountryId: yup.string().required("Required"),
  Destination: yup.array().min(1, "Required").required("Required"),
  SalesPerson: yup.string().required("Required"),
  MobileNumber: yup.string().required("Required"),
  Startdate: yup.string().required("Required"),
  NextFollowUpdate: yup.string().required("Required"),
  TaskSubject: yup.string().required("Required"),
});

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
