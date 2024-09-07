import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {lazy, Suspense} from "react";
import "./App.css";
import "../public/global_assets/custom_css/master.css";

const Home = lazy(()=> import("./Pages/home/Home.jsx"));
const Mail = lazy(()=> import("./Pages/mail/Mail.jsx"));
const Query = lazy(()=> import("./Pages/query/Query.jsx"));
const Master = lazy(()=> import("./Pages/master/Master.jsx"));
const Login = lazy(()=> import("./Pages/auth/Login.jsx"));
const Logout = lazy(()=> import("./Pages/auth/Logout.jsx"));
const StateMaster = lazy(()=> import("./Pages/master/masterlist/StateMaster.jsx"));
const CityMaster = lazy(()=> import("./Pages/master/masterlist/CityMaster.jsx"));
const CountryMaster = lazy(()=> import("./Pages/master/masterlist/CountryMaster.jsx"));
const Profile = lazy(()=> import("./Component/Layout/Profile.jsx"));
const Protected = lazy(()=> import("./Pages/auth/Protected.jsx"));
const QueryList = lazy(()=> import("./Pages/query/QueryList.jsx"));
const QueryView = lazy(()=> import("./Pages/query/QueryView.jsx"));
const LeadSource = lazy(()=> import("./Pages/master/masterlist/LeadSource.jsx"));
const DestinationMaster = lazy(()=> import("./Pages/master/masterlist/DestinationMaster.jsx"));
const BusinessType = lazy(()=> import("./Pages/master/masterlist/BusinessType.jsx"));
const Language = lazy(()=> import("./Pages/master/masterlist/Language.jsx"));
const MarketType = lazy(()=> import("./Pages/master/masterlist/MarketType.jsx"));
const DivisionMaster = lazy(()=> import("./Pages/master/masterlist/DivisionMaster.jsx"));
const TourType = lazy(()=> import("./Pages/master/masterlist/TourType.jsx"));
const SeasonMaster = lazy(()=> import("./Pages/master/masterlist/SeasonMaster.jsx"));
const RoomMaster = lazy(()=> import("./Pages/master/masterlist/RoomMaster.jsx"));
const RoomType = lazy(()=> import("./Pages/master/masterlist/RoomType.jsx"));
const Amenties = lazy(()=> import("./Pages/master/masterlist/Amenties.jsx"));
const HotelType = lazy(()=> import("./Pages/master/masterlist/HotelType.jsx"));
const HotelMeal = lazy(()=> import("./Pages/master/masterlist/HotelMeal.jsx"));
const Weekend = lazy(()=> import("./Pages/master/masterlist/Weekend.jsx"));
const HotelCategory = lazy(()=> import("./Pages/master/masterlist/HotelCategory.jsx"));
const HotelAdditional = lazy(()=> import("./Pages/master/masterlist/HotelAdditional.jsx"));
const HotelChain = lazy(()=> import("./Pages/master/masterlist/HotelChain.jsx"));
const Resturant = lazy(()=> import("./Pages/master/masterlist/Resturant.jsx"));
const ResturantMealPlan = lazy(()=> import("./Pages/master/masterlist/ResturantMealPlan.jsx"));
const Monument = lazy(()=> import("./Pages/master/masterlist/Monument.jsx"));
const Sightseeing = lazy(()=> import("./Pages/master/masterlist/Sightseeing.jsx"));
const TourEscort = lazy(()=> import("./Pages/master/masterlist/TourEscrot.jsx"));
const TourEscortPrice = lazy(()=> import("./Pages/master/masterlist/TourEscortPrice.jsx"));
const VisaType = lazy(()=> import("./Pages/master/masterlist/VisaType.jsx"));
const VisaCost = lazy(()=> import("./Pages/master/masterlist/VisaCost.jsx"));
const InsuranceType = lazy(()=> import("./Pages/master/masterlist/InsuranceType.jsx"));
const InsuranceCost = lazy(()=> import("./Pages/master/masterlist/InsuranceCost.jsx"));
const PassportType = lazy(()=> import("./Pages/master/masterlist/PassportType.jsx"));
const PassportCost = lazy(()=> import("./Pages/master/masterlist/PassportCost.jsx"));
const TrainMaster = lazy(()=> import("./Pages/master/masterlist/TrainMaster.jsx"));
const AirlineMaster = lazy(()=> import("./Pages/master/masterlist/AirlineMaster.jsx"));
const AdditionalRequirement = lazy(()=> import("./Pages/master/masterlist/AdditionalRequirement.jsx"));
const OperationRestriction = lazy(()=> import("./Pages/master/masterlist/OperationRestriction.jsx"));
const TransferMaster = lazy(()=> import("./Pages/master/masterlist/TransferMaster.jsx"));
const VehicleType = lazy(()=> import("./Pages/master/masterlist/VehicleType.jsx"));
const TransferType = lazy(()=> import("./Pages/master/masterlist/TransferType.jsx"));
const VehicleBrand = lazy(()=> import("./Pages/master/masterlist/VehicleBrand.jsx"));
const TransportMaster = lazy(()=> import("./Pages/master/masterlist/TransportMaster.jsx"));
const DriverMaster = lazy(()=> import("./Pages/master/masterlist/DriverMaster.jsx"));
const VehicleMaster = lazy(()=> import("./Pages/master/masterlist/VehicleMaster.jsx"));
const FleetMaster = lazy(()=> import("./Pages/master/masterlist/FleetMaster"));
const CruiseCompany = lazy(()=> import("./Pages/master/masterlist/CruiseCompany.jsx"));
const CruiseNameCompany = lazy(()=> import("./Pages/master/masterlist/CruiseNameCompany.jsx"));
const CabinType = lazy(()=> import("./Pages/master/masterlist/CabinType.jsx"));
const CabinCategory = lazy(()=> import("./Pages/master/masterlist/CabinCategory.jsx"));
const CruiseMaster = lazy(()=> import("./Pages/master/masterlist/CruiseMaster.jsx"));
const FerryCompany = lazy(()=> import("./Pages/master/masterlist/FerryCompany.jsx"));
const FerryMaster = lazy(()=> import("./Pages/master/masterlist/FerryMaster.jsx"));
const FerryPrice = lazy(()=> import("./Pages/master/masterlist/FerryPrice.jsx"));
const FerrySeat = lazy(()=> import("./Pages/master/masterlist/FerrySeat.jsx"));
const CurrencyMaster = lazy(()=> import("./Pages/master/masterlist/CurrencyMaster.jsx"));
const TaxMaster = lazy(()=> import("./Pages/master/masterlist/TaxMaster.jsx"));
const ExpenseType = lazy(()=> import("./Pages/master/masterlist/ExpenseType.jsx"));
const ExpenseHead = lazy(()=> import("./Pages/master/masterlist/ExpenseHead.jsx"));
const SACCode = lazy(()=> import("./Pages/master/masterlist/SACCode.jsx"));
const PaymentType = lazy(()=> import("./Pages/master/masterlist/PaymentType.jsx"));
const BankMaster = lazy(()=> import("./Pages/master/masterlist/BankMaster.jsx"));
const ItenaryOverview = lazy(()=> import("./Pages/master/masterlist/ItenaryOverview.jsx"));
const FIT = lazy(()=> import("./Pages/master/masterlist/FIT.jsx"));
const GIT = lazy(()=> import("./Pages/master/masterlist/GIT.jsx"));
const LetterMaster = lazy(()=> import("./Pages/master/masterlist/LetterMaster.jsx"));
const Users = lazy(()=> import("./Component/settings/Users.jsx"));
const AddUser = lazy(()=> import("./Component/settings/AddUser.jsx"));
const Company = lazy(()=> import("./Component/settings/Company.jsx"));
const AddCompany = lazy(()=> import("./Component/settings/AddCompany.jsx"));
const Setting = lazy(()=> import("./Component/settings/Setting.jsx"));
const SettingEmail = lazy(()=> import("./Component/settings/SettingEmail.jsx"));
const SettingProfile = lazy(()=> import("./Component/settings/SettingProfile.jsx"));
const QueryDetails = lazy(()=> import("./Pages/query/QueryDetails.jsx"));
const Quotation = lazy(()=> import("./Pages/query/Quotation.jsx"));
const ClientComm = lazy(()=> import("./Pages/query/ClientComm.jsx"));
const SupplierComm = lazy(()=> import("./Pages/query/SupplierComm.jsx"));
const Payments = lazy(()=> import("./Pages/query/Payments.jsx"));
const HotelMasterCreate = lazy(()=> import("./Pages/master/masterlist/HotelMasterCreate.jsx"));
const ProposalSetting = lazy(()=> import("./Pages/master/masterlist/ProposalSetting.jsx"));
const EmergencyDetails = lazy(()=> import("./Pages/master/masterlist/EmergencyDetails.jsx"));
const CommissionMaster = lazy(()=> import("./Pages/master/masterlist/CommissionMaster.jsx"));
const HotelMaster = lazy(()=> import("./Pages/master/masterlist/HotelMaster.jsx"));
const ItenaryRequirement = lazy(()=> import("./Pages/master/masterlist/ItenaryRequirement.jsx"));
const Proposal = lazy(()=> import("./Pages/query/Proposal.jsx"));
const Vouchers = lazy(()=> import("./Pages/query/Vouchers.jsx"));
const Invoices = lazy(()=> import("./Pages/query/Invoices.jsx"));
const Itineraries = lazy(()=> import("./Pages/query/Itineraries.jsx"));
const Polocies = lazy(()=> import("./Pages/query/Policies.jsx"));
const Commission = lazy(()=> import("./Pages/query/Commission.jsx"));
const Summary = lazy(()=> import("./Pages/query/Summary.jsx"));
const Preview = lazy(()=> import("./Pages/query/Preview.jsx"));
const SupplierPayment = lazy(()=> import("./Pages/query/SupplierPayment.jsx"));
const AgentPayment = lazy(()=> import("./Pages/query/AgentPayment.jsx"));
const ExpenseEntry = lazy(()=> import("./Pages/query/ExpenseEntery.jsx"));
const TourExtension = lazy(()=> import("./Pages/query/TourExtension.jsx"));
const AssignUser = lazy(()=> import("./Pages/query/AssignUser.jsx"));
const Agent = lazy(()=> import("./Pages/master/masterlist/agent/Agent.jsx"));
const AddAgent = lazy(()=> import("./Pages/master/masterlist/agent/AddAgent.jsx"));
const DirectClient = lazy(()=> import("./Pages/master/masterlist/directClient/DirectClient.jsx"));
const AddDirectClient = lazy(()=> import("./Pages/master/masterlist/directClient/AddDirectClient.jsx"));
const ViewDirectClient = lazy(()=> import("./Pages/master/masterlist/directClient/ViewDirectClient.jsx"));
const ViewAgent = lazy(()=> import("./Pages/master/masterlist/agent/ViewAgent.jsx"));
const AddTask = lazy(()=> import("./Pages/master/masterlist/agent/AddTask.jsx"));
const AddMeeting = lazy(()=> import("./Pages/master/masterlist/agent/AddMeeting.jsx"));
const AddCall = lazy(()=> import("./Pages/master/masterlist/agent/AddCall.jsx"));
const Supplier = lazy(()=> import("./Pages/master/masterlist/supplier/Supplier.jsx"));
const AddSupplier = lazy(()=> import("./Pages/master/masterlist/supplier/AddSupplier.jsx"));
const ViewSupplier = lazy(()=> import("./Pages/master/masterlist/supplier/ViewSupplier.jsx"));
const SetPreferrence = lazy(()=> import("./Pages/query/SetPreferrence.jsx"));

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComponentSkeleton from "./Component/Layout/ComponentSkeleton.jsx";
import JsonToExcel from "./helper/JsonToExcel.jsx";


const App = () => {
  return (
    <>
    <ToastContainer />
      <Router>
        <Suspense fallback={<ComponentSkeleton/>}>
        <Routes>
          <Route path="/" element={<Protected><Home /></Protected>}/>
          <Route path="/mail" element={  <Protected><Mail /></Protected>}/>
          <Route path="/querylist" element={ <Protected>  <QueryList />  </Protected>}/>
          <Route path="/preferrence" element={<Protected><SetPreferrence/></Protected>}></Route>
          <Route path="/querylist/queryview" element={<Protected><QueryView /></Protected>}>
          <Route path="/querylist/queryview/preview" element={<Protected><Preview/></Protected>}></Route>
            <Route index element={<Protected><Query/></Protected>}></Route>
            <Route path="quotation" element={<Protected><Quotation/></Protected>}>
              <Route index element={<Protected><Itineraries/></Protected>}></Route>
              <Route path="policies" element={<Protected><Polocies/></Protected>}></Route>
              <Route path="commission" element={<Protected><Commission/></Protected>}></Route>
              <Route path="summary" element={<Protected><Summary/></Protected>}></Route>
            </Route>
            <Route path="costsheet" element={<Protected><QueryDetails/></Protected>}></Route>
            <Route path="payments" element={<Protected><Payments/></Protected>}>
              {/* <Route index element={<Protected><SupplierPayment/></Protected>}></Route>
              <Route path="agentpayments" element={<Protected><AgentPayment/></Protected>}></Route>
              <Route path="expenseentry" element={<Protected><ExpenseEntry/></Protected>}></Route> */}
            </Route>
            <Route path="clientcomm" element={<Protected><ClientComm/></Protected>}></Route>
            <Route path="suppliercomm" element={<Protected><SupplierComm/></Protected>}></Route>
            <Route path="proposal" element={<Protected><Proposal/></Protected>}></Route>
            <Route path="vouchers" element={<Protected><Vouchers/></Protected>}></Route>
            <Route path="invoices" element={<Protected><Invoices/></Protected>}></Route>
            <Route path="tourextension" element={<Protected><TourExtension/></Protected>}></Route>
            <Route path="assignuser" element={<Protected><AssignUser/></Protected>}></Route>
          </Route>

          {/* <Route path="/queylist/queryview/quotation"element={<Protected><QueryView/></Protected>}></Route> */}

          <Route path="/master" element={ <Protected> <Master/> </Protected>}/>
          <Route path="/master/country" element={ <Protected> <CountryMaster /></Protected>}/>
          <Route path="/master/agent" element={ <Protected> <Agent /></Protected>}/>
          <Route path="/master/agent/add" element={ <Protected> <AddAgent /></Protected>}/>
          <Route path="/master/agent/view/:id" element={ <Protected> <ViewAgent /></Protected>}/>
          <Route path="/master/agent/view/task" element={ <Protected> <AddTask /></Protected>}/>
          <Route path="/master/agent/view/meeting" element={ <Protected> <AddMeeting /></Protected>}/>
          <Route path="/master/agent/view/call" element={ <Protected> <AddCall /></Protected>}/>
          <Route path="/master/directclient" element={ <Protected> <DirectClient /></Protected>}/>
          <Route path="/master/directclient/add" element={ <Protected> <AddDirectClient /></Protected>}/>
          <Route path="/master/directclient/view/:id" element={ <Protected> <ViewDirectClient /></Protected>}/>
          <Route path="/master/supplier" element={ <Protected> <Supplier /></Protected>}/>
          <Route path="/master/supplier/add" element={ <Protected> <AddSupplier /></Protected>}/>
          <Route path="/master/supplier/view/:id" element={ <Protected> <ViewSupplier /></Protected>}/>
          <Route path="/master/state" element={<Protected><StateMaster /></Protected>} />
          <Route path="/master/city" element={ <Protected> <CityMaster /></Protected>}/>
          <Route path="/master/lead_source" element={ <Protected> <LeadSource /></Protected>}/>
          <Route path="/master/destination" element={ <Protected> <DestinationMaster /> </Protected>}/>
          <Route path="/master/business_type" element={ <Protected> <BusinessType /></Protected> } />
          <Route path="/master/language" element={ <Protected> <Language /></Protected>} />
          <Route path="/master/market_type" element={ <Protected> <MarketType /> </Protected> } />
          <Route path="/master/division" element={ <Protected> <DivisionMaster /> </Protected>}/>
          <Route path="/master/tour_type" element={ <Protected> <TourType /> </Protected>} />
          <Route path="/master/season" element={ <Protected><SeasonMaster /> </Protected>}/>
          <Route path="/master/room_master" element={<Protected><RoomMaster/></Protected>}></Route>
          <Route path="/master/hotelmaster" element={<Protected><HotelMaster/></Protected>}/>
          <Route path="/master/hotelmaster/create" element={<Protected><HotelMasterCreate/></Protected>}/>
          <Route path="/master/roomtype" element={<Protected><RoomType/></Protected>}></Route>
          <Route path="/master/amenties" element={<Protected><Amenties/></Protected>}></Route>
          <Route path="/master/hoteltype" element={<Protected><HotelType/></Protected>}></Route>
          <Route path="/master/hotelmeal" element={<Protected><HotelMeal/></Protected>}></Route>
          <Route path="/master/weekend" element={<Protected><Weekend/></Protected>}></Route>
          <Route path="/master/hotelcategory" element={<Protected><HotelCategory/></Protected>}></Route>
          <Route path="/master/hotel_additional" element={<Protected><HotelAdditional/></Protected>}></Route>
          <Route path="/master/hotelchain" element={<Protected><HotelChain/></Protected>}></Route>
          <Route path="/master/resturant" element={<Protected><Resturant/></Protected>}></Route>
          <Route path="/master/resturant_mealplan" element={<Protected><ResturantMealPlan/></Protected>}></Route>
          <Route path="/master/monument" element={<Protected><Monument/></Protected>}></Route>
          <Route path="/master/sightseeing" element={<Protected><Sightseeing/></Protected>}></Route>
          <Route path="/master/tourescort" element={<Protected><TourEscort/></Protected>}></Route>
          <Route path="/master/tourescortprice" element={<Protected><TourEscortPrice/></Protected>}></Route>
          <Route path="/master/visatype" element={<Protected><VisaType/></Protected>}></Route>
          <Route path="/master/visacost" element={<Protected><VisaCost/></Protected>}></Route>
          <Route path="/master/insurancecost" element={<Protected><InsuranceCost/></Protected>}></Route>
          <Route path="/master/insurancetype" element={<Protected><InsuranceType/></Protected>}></Route>
          <Route path="/master/passporttype" element={<Protected><PassportType/></Protected>}></Route>
          <Route path="/master/passportcost" element={<Protected><PassportCost/></Protected>}></Route>
          <Route path="/master/train" element={<Protected><TrainMaster/></Protected>}></Route>
          <Route path="/master/airline" element={<Protected><AirlineMaster/></Protected>}></Route>
          <Route path="/master/additionalrequirement" element={<Protected><AdditionalRequirement/></Protected>}></Route>
          <Route path="/master/operationrestriction" element={<Protected><OperationRestriction/></Protected>}></Route>
          <Route path="/master/transfermaster" element={<Protected><TransferMaster/></Protected>}></Route>
          <Route path="/master/vehicletype" element={<Protected><VehicleType/></Protected>}></Route>
          <Route path="/master/transfertype" element={<Protected><TransferType/></Protected>}></Route>
          <Route path="/master/vehiclebrand" element={<Protected><VehicleBrand/></Protected>}></Route>
          <Route path="/master/transport" element={<Protected><TransportMaster/></Protected>}></Route>
          <Route path="/master/driver" element={<Protected><DriverMaster/></Protected>}></Route>
          <Route path="/master/vehiclemaster" element={<Protected><VehicleMaster/></Protected>}></Route>
          <Route path="/master/fleet" element={<Protected><FleetMaster/></Protected>}></Route>
          <Route path="/master/cruisecompany" element={<Protected><CruiseCompany/></Protected>}></Route>
          <Route path="/master/cruisenamecompany" element={<Protected><CruiseNameCompany/></Protected>}></Route>
          <Route path="/master/cabintype" element={<Protected><CabinType/></Protected>}></Route>
          <Route path="/master/cabincategory" element={<Protected><CabinCategory/></Protected>}></Route>
          <Route path="/master/cruisemaster" element={<Protected><CruiseMaster/></Protected>}></Route>
          <Route path="/master/ferrycompany" element={<Protected><FerryCompany/></Protected>}></Route>
          <Route path="/master/ferrymaster" element={<Protected><FerryMaster/></Protected>}></Route>
          <Route path="/master/ferryseat" element={<Protected><FerrySeat/></Protected>}></Route>
          <Route path="/master/ferryprice" element={<Protected><FerryPrice/></Protected>}></Route>
          <Route path="/master/itenararyoverview" element={<Protected><ItenaryOverview/></Protected>}></Route>
          <Route path="/master/itenaryrequirement" element={<Protected><ItenaryRequirement/></Protected>}></Route>
          <Route path="/master/emergencydetails" element={<Protected><EmergencyDetails/></Protected>}></Route>
          <Route path="/master/lettermaster" element={<Protected><LetterMaster/></Protected>}></Route>
          <Route path="/master/proposalsetting" element={<Protected><ProposalSetting/></Protected>}></Route>
          <Route path="/master/fit" element={<Protected><FIT/></Protected>}></Route>
          <Route path="/master/git" element={<Protected><GIT/></Protected>}></Route>
          <Route path="/master/currencymaster" element={<Protected><CurrencyMaster/></Protected>}></Route>
          <Route path="/master/commissionmaster" element={<Protected><CommissionMaster/></Protected>}></Route>
          <Route path="/master/taxmaster" element={<Protected><TaxMaster/></Protected>}></Route>
          <Route path="/master/expensetype" element={<Protected><ExpenseType/></Protected>}></Route>
          <Route path="/master/expensehead" element={<Protected><ExpenseHead/></Protected>}></Route>
          <Route path="/master/saccode" element={<Protected><SACCode/></Protected>}></Route>
          <Route path="/master/paymenttype" element={<Protected><PaymentType/></Protected>}></Route>
          <Route path="/master/bankmaster" element={<Protected><BankMaster/></Protected>}></Route>
          <Route path="/setting/" element={<Protected><Setting/></Protected>}>
            <Route index element={<Protected><Users/></Protected>}></Route>
            <Route path="profile" element={<Protected><SettingProfile/></Protected>}></Route>
            <Route path="company" element={<Protected><Company/></Protected>}></Route>
            <Route path="email" element={<Protected><SettingEmail/></Protected>}></Route>
            <Route path="reporting" element={<Protected><SettingEmail/></Protected>}></Route>
            <Route path="database" element={<Protected><SettingEmail/></Protected>}></Route>
          </Route>
          <Route path="/profile" element={<Protected><Profile/></Protected>}></Route>
          <Route path="/users/add" element={<Protected><AddUser/></Protected>}></Route>
          <Route path="/company/add" element={<Protected><AddCompany/></Protected>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout"element={<Protected><Logout/></Protected>}/>
          <Route path="/excelconverter" element={<JsonToExcel/>}></Route>
        </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;