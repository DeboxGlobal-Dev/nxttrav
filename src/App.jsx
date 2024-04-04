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
import HotelMaster from "./Pages/master/masterList/HotelMaster.jsx";
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

const App = () => {
  return (
    <>
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
          <Route path="/master/room_master" element={<RoomMaster/>}></Route>
          <Route path="/master/hotelmaster" element={<Protected><HotelMaster/></Protected>}/>
          <Route path="/master/hotelmaster/create" element={<Protected><HotelMasterCreate/></Protected>}/>
          <Route path="/master/roomtype" element={<RoomType/>}></Route>
          <Route path="/master/amenties" element={<Amenties/>}></Route>
          <Route path="/master/hoteltype" element={<HotelType/>}></Route>
          <Route path="/master/hotelmeal" element={<HotelMeal/>}></Route>
          <Route path="/master/weekend" element={<Weekend/>}></Route>
          <Route path="/master/hotelcategory" element={<HotelCategory/>}></Route>
          <Route path="/master/hotel_additional" element={<HotelAdditional/>}></Route>
          <Route path="/master/hotelchain" element={<HotelChain/>}></Route>
          <Route path="/master/resturant" element={<Resturant/>}></Route>
          <Route path="/master/resturant_mealplan" element={<ResturantMealPlan/>}></Route>
          <Route path="/master/monument" element={<Monument/>}></Route>
          <Route path="/master/sightseeing" element={<Sightseeing/>}></Route>
          <Route path="/master/tourescort" element={<TourEscort/>}></Route>
          <Route path="/master/tourescortprice" element={<TourEscortPrice/>}></Route>
          <Route path="/master/visatype" element={<VisaType/>}></Route>
          <Route path="/master/visacost" element={<VisaCost/>}></Route>
          <Route path="/master/insurancecost" element={<InsuranceCost/>}></Route>
          <Route path="/master/insurancetype" element={<InsuranceType/>}></Route>
          <Route path="/master/passporttype" element={<PassportType/>}></Route>
          <Route path="/master/passportcost" element={<PassportCost/>}></Route>
          <Route path="/master/train" element={<TrainMaster/>}></Route>
          <Route path="/master/airline" element={<AirlineMaster/>}></Route>
          <Route path="/master/additionalrequirement" element={<AdditionalRequirement/>}></Route>
          <Route path="/master/operationrestriction" element={<OperationRestriction/>}></Route>
          <Route path="/master/transfermaster" element={<TransferMaster/>}></Route>
          <Route path="/master/vehicletype" element={<VehicleType/>}></Route>
          <Route path="/master/transfertype" element={<TransferType/>}></Route>
          <Route path="/master/vehiclebrand" element={<VehicleBrand/>}></Route>
          <Route path="/master/transport" element={<TransportMaster/>}></Route>
          <Route path="/master/driver" element={<DriverMaster/>}></Route>
          <Route path="/master/vehiclemaster" element={<VehicleMaster/>}></Route>
          <Route path="/master/fleet" element={<FleetMaster/>}></Route>
          <Route path="/master/cruisecompany" element={<CruiseCompany/>}></Route>
          <Route path="/master/cruisenamecompany" element={<CruiseNameCompany/>}></Route>
          <Route path="/master/cabintype" element={<CabinType/>}></Route>
          <Route path="/master/cabincategory" element={<CabinCategory/>}></Route>
          <Route path="/master/cruisemaster" element={<CruiseMaster/>}></Route>
          <Route path="/master/ferrycompany" element={<FerryCompany/>}></Route>
          <Route path="/master/ferrymaster" element={<FerryMaster/>}></Route>
          <Route path="/master/ferryseat" element={<FerrySeat/>}></Route>
          <Route path="/master/ferryprice" element={<FerryPrice/>}></Route>
          <Route path="/master/itenararyoverview" element={<ItenaryOverview/>}></Route>
          <Route path="/master/lettermaster" element={<LetterMaster/>}></Route>
          <Route path="/master/fit" element={<FIT/>}></Route>
          <Route path="/master/git" element={<GIT/>}></Route>
          <Route path="/master/currencymaster" element={<CurrencyMaster/>}></Route>
          <Route path="/master/taxmaster" element={<TaxMaster/>}></Route>
          <Route path="/master/expensetype" element={<ExpenseType/>}></Route>
          <Route path="/master/expensehead" element={<ExpenseHead/>}></Route>
          <Route path="/master/saccode" element={<SACCode/>}></Route>
          <Route path="/master/paymenttype" element={<PaymentType/>}></Route>
          <Route path="/master/bankmaster" element={<BankMaster/>}></Route>

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

