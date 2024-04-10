import { BrowserRouter as Router, Routes, Route, createBrowserRouter, BrowserRouter } from "react-router-dom";
import "./App.css";
import "../public/global_assets/custom_css/master.css";
import Home from "./Pages/home/Home";
import Mail from "./Pages/mail/Mail";
import Query from "./Pages/query/Query";
import Master from "./Pages/master/Master";
import Login from "./Pages/auth/Login";
import Logout from "./Pages/auth/Logout";
import StateMaster from "./Pages/master/masterList/StateMaster";
import CityMaster from "./Pages/master/masterList/CityMaster";
import CountryMaster from "./Pages/master/masterList/CountryMaster";
import Profile from "./Component/Layout/Profile.jsx";
import Protected from "./Pages/auth/Protected";
import QueryList from "./Pages/query/QueryList";
import QueryView from "./Pages/query/QueryView";
import LeadSource from "./Pages/master/masterList/LeadSource";
import DestinationMaster from "./Pages/master/masterList/DestinationMaster";
import BusinessType from "./Pages/master/masterList/BusinessType";
import Language from "./Pages/master/masterList/Language";
import MarketType from "./Pages/master/masterList/MarketType";
import DivisionMaster from "./Pages/master/masterList/DivisionMaster";
import TourType from "./Pages/master/masterList/TourType";
import SeasonMaster from "./Pages/master/masterList/SeasonMaster";
import RoomMaster from "./Pages/master/masterList/RoomMaster";

import RoomType from "./Pages/master/masterList/RoomType";
import Amenties from "./Pages/master/masterList/Amenties";
import HotelType from "./Pages/master/masterList/HotelType";
import HotelMeal from "./Pages/master/masterList/HotelMeal";
import Weekend from "./Pages/master/masterList/Weekend";
import HotelCategory from "./Pages/master/masterList/HotelCategory";
import HotelAdditional from "./Pages/master/masterList/HotelAdditional";
import HotelChain from "./Pages/master/masterList/HotelChain";
import Resturant from "./Pages/master/masterList/Resturant";
import ResturantMealPlan from "./Pages/master/masterList/ResturantMealPlan";
import Monument from "./Pages/master/masterList/Monument";
import Sightseeing from "./Pages/master/masterList/Sightseeing";
import TourEscort from "./Pages/master/masterList/TourEscrot";
import TourEscortPrice from "./Pages/master/masterList/TourEscortPrice";
import VisaType from "./Pages/master/masterList/VisaType";
import VisaCost from "./Pages/master/masterList/VisaCost";
import InsuranceType from "./Pages/master/masterList/InsuranceType";
import InsuranceCost from "./Pages/master/masterList/InsuranceCost";
import PassportType from "./Pages/master/masterList/PassportType";
import PassportCost from "./Pages/master/masterList/PassportCost";
import TrainMaster from "./Pages/master/masterList/TrainMaster";
import AirlineMaster from "./Pages/master/masterList/AirlineMaster";
import AdditionalRequirement from "./Pages/master/masterList/AdditionalRequirement";
import OperationRestriction from "./Pages/master/masterList/OperationRestriction";
import TransferMaster from "./Pages/master/masterList/TransferMaster";
import VehicleType from "./Pages/master/masterList/VehicleType";
import TransferType from "./Pages/master/masterList/TransferType";
import VehicleBrand from "./Pages/master/masterList/VehicleBrand";
import TransportMaster from "./Pages/master/masterList/TransportMaster";
import DriverMaster from "./Pages/master/masterList/DriverMaster";
import VehicleMaster from "./Pages/master/masterList/VehicleMaster";
import FleetMaster from "./Pages/master/masterList/FleetMaster";
import CruiseCompany from "./Pages/master/masterList/CruiseCompany";
import CruiseNameCompany from "./Pages/master/masterList/CruiseNameCompany";
import CabinType from "./Pages/master/masterList/CabinType";
import CabinCategory from "./Pages/master/masterList/CabinCategory";
import CruiseMaster from "./Pages/master/masterList/CruiseMaster";
import FerryCompany from "./Pages/master/masterList/FerryCompany";
import FerryMaster from "./Pages/master/masterList/FerryMaster";
import FerrySeat from "./Pages/master/masterList/FerrySeat";
import FerryPrice from "./Pages/master/masterList/FerryPrice";
import CurrencyMaster from "./Pages/master/masterList/CurrencyMaster";
import TaxMaster from "./Pages/master/masterList/TaxMaster";
import ExpenseType from "./Pages/master/masterList/ExpenseType";
import ExpenseHead from "./Pages/master/masterList/ExpenseHead";
import SACCode from "./Pages/master/masterList/SACCode.jsx";
import PaymentType from "./Pages/master/masterList/PaymentType.jsx";
import BankMaster from "./Pages/master/masterList/BankMaster.jsx";
import ItenaryOverview from "./Pages/master/masterList/ItenaryOverview.jsx";
import FIT from "./Pages/master/masterList/FIT.jsx";
import GIT from "./Pages/master/masterList/GIT.jsx";
import LetterMaster from "./Pages/master/masterList/LetterMaster.jsx";
import Users from "./Component/settings/Users.jsx";
import AddUser from "./Component/settings/AddUser.jsx";
import Company from "./Component/settings/Company.jsx";
import AddCompany from "./Component/settings/AddCompany.jsx";
import Setting from "./Component/settings/Setting.jsx";
import SettingEmail from "./Component/settings/SettingEmail.jsx";
import SettingProfile from "./Component/settings/SettingProfile.jsx";
import QueryDetails from "./Pages/query/QueryDetails.jsx";
import Quotation from "./Pages/query/Quotation.jsx";
import ClientComm from "./Pages/query/ClientComm.jsx";
import SupplierComm from "./Pages/query/SupplierComm.jsx";
import TourExtension from "./Pages/query/TourExtension.jsx";
import HotelMasterCreate from "./Pages/master/masterList/HotelMasterCreate.jsx";
import EmergencyDetails from "./Pages/master/masterList/EmergencyDetails.jsx";
import ProposalSetting from "./Pages/master/masterList/ProposalSetting.jsx";
import CommissionMaster from "./Pages/master/masterList/CommissionMaster.jsx";
import HotelMaster from "./Pages/master/masterlist/HotelMaster.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ItenaryRequirement from "./Pages/master/masterList/ItenaryRequirement.jsx";
import Proposal from "./Pages/query/Proposal.jsx";
import Vouchers from "./Pages/query/Vouchers.jsx";
import Invoices from "./Pages/query/Invoices.jsx";


const App = () => {
  return (
    <>
    <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Protected><Home /></Protected>}/>
          <Route path="/mail" element={  <Protected><Mail /></Protected>}/>
          <Route path="/querylist" element={ <Protected>  <QueryList />  </Protected>}/>
          <Route path="/querylist/queryview" element={<Protected><QueryView /></Protected>}>
            <Route index element={<Protected><Query/></Protected>}></Route>
            <Route path="querydetails" element={<Protected><QueryDetails/></Protected>}></Route>
            <Route path="quotation" element={<Protected><Quotation/></Protected>}></Route>
            <Route path="tourextension" element={<Protected><TourExtension/></Protected>}></Route>
            <Route path="clientcomm" element={<Protected><ClientComm/></Protected>}></Route>
            <Route path="suppliercomm" element={<Protected><SupplierComm/></Protected>}></Route>
            <Route path="proposal" element={<Protected><Proposal/></Protected>}></Route>
            <Route path="vouchers" element={<Protected><Vouchers/></Protected>}></Route>
            <Route path="invoices" element={<Protected><Invoices/></Protected>}></Route>
          </Route>

          <Route path="/master" element={ <Protected> <Master/> </Protected>}/>
          <Route path="/master/country" element={ <Protected> <CountryMaster /></Protected>}/>
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
            <Route path="email" element={<Protected><SettingEmail/></Protected>}></Route>
            <Route path="reporting" element={<Protected><SettingEmail/></Protected>}></Route>
            <Route path="database" element={<Protected><SettingEmail/></Protected>}></Route>
          </Route>

          <Route path="/profile" element={<Protected><Profile/></Protected>}></Route>
          <Route path="/users/add" element={<Protected><AddUser/></Protected>}></Route>
          <Route path="/company" element={<Protected><Company/></Protected>}></Route>
          <Route path="/company/add" element={<Protected><AddCompany/></Protected>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout"element={<Protected><Logout/></Protected>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;

