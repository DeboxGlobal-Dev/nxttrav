import ArrivalImage from "/global_assets/images/qoutation/Arrival.png";
import Departure from "/global_assets/images/qoutation/Departure1.png";
import Monument from "/global_assets/images/qoutation/monument.png";
import Hotel from "/global_assets/images/qoutation/hotel.png";
import Activity from "/global_assets/images/qoutation/activity.png";

const data = [
  {
    Name: {
      Name: "Arrival",
      Logo: ArrivalImage,
    },
    Columns: [
      {
        Label: "Flight Name/Number",
        Data: "Air-India-13989",
      },
      {
        Label: "Flight Class Name",
        Data: "First Class",
      },
      {
        Label: "Arrival Departure",
        Data: "New Delhi-Mumbai",
      },
      {
        Label: "Arrival Date Time",
        Data: "10:30",
      },
      {
        Label: "Departure Date Time",
        Data: "11:35",
      },
      {
        Label: "Adult Cost",
        Data: "INR 1500",
      },
      {
        Label: "Child Cost",
        Data: "INR 1200",
      },
    ],
  },
  {
    Name: {
      Name: "Departure",
      Logo: Departure,
    },
    Columns: [
      {
        Label: "Flight Name/Number",
        Data: "Air-India-13989",
      },
      {
        Label: "Flight Class Name",
        Data: "First Class",
      },
      {
        Label: "Arrival Departure",
        Data: "New Delhi-Mumbai",
      },
      {
        Label: "Arrival Date Time",
        Data: "10:30",
      },
      {
        Label: "Departure Date Time",
        Data: "11:35",
      },
      {
        Label: "Adult Cost",
        Data: "INR 1500",
      },
      {
        Label: "Child Cost",
        Data: "INR 1200",
      },
    ],
  },
  {
    Name: {
      Name: "Monument",
      Logo: Monument,
    },
    Columns: [
      {
        Label: "Monument Name",
        Data: "Birla Temple",
      },
      {
        Label: "Adult Cost",
        Data: "1200",
      },
      {
        Label: "Child Cost",
        Data: "1000",
      },
      {
        Label: "Start/End Time",
        Data: "10:30",
      },
    ],
  },
  {
    Name: {
      Name: "Hotel",
      Logo: Hotel,
    },
    Columns: [
      {
        Label: "Hotel Name",
        Data: "Birla Temple",
      },
      {
        Label: "Service Cost",
        Data: "1200",
      },
      {
        Label: "Meal Plan",
        Data: "1000",
      },
      {
        Label: "Tariff Type",
        Data: "10:30",
      },
    ],
  },
  {
    Name: {
      Name: "Activity",
      Logo: Activity,
    },
    Columns: [
      {
        Label: "Activity Name",
        Data: "Deep Diving",
      },
      {
        Label: "Pax Slab",
        Data: "10pax",
      },
      {
        Label: "Per Pax Cost",
        Data: "INR 1200",
      },
      {
        Label: "Arrival Date Time",
        Data: "10:30",
      },
      {
        Label: "Departure Date Time",
        Data: "10:30",
      },
      {
        Label: "Adult Cost",
        Data: "INR 1000",
      },
      {
        Label: "Child Cost",
        Data: "INR 1500",
      },
    ],
  },
];

const data1 = {
  QuotationNumber: "",
  Header: {
    QuotationStage: "",
    QuotationStatus: "",
    QuotationVersion: "",
    QuotationChangeLog: [
      {
        ChangeDateTime: "",
        ChangedByID: "",
        ChangeByValue: "",
        ChangeSetDetail: [
          {
            ChangeFrom: "",
            ChangeTo: "",
          },
        ],
      },
    ],
  },
  QuatationSummary: {
    QuatationSubject: "",
    QuatationHotelCategory: "",
    QutationPaxSlabType: "",
    QutationHotelMarkupType: "",
    QutationHotelStartCategory: "",
    QutationInbuiltPackages: "",
  },
  TourSummary: {
    TourId: "",
    FromDate: "",
    Todate: "",
    NumberOfDays: "",
    NumberOfNights: "",
    PaxCount: "",
    Destiniation: "1~Delhi^2~Jaipur^3~Agra",
    TourType: "",
    TourServiceSummary: "1~Transfer~Hotel^2~Hotel~sightseen~Lunch^3~transfer",
  },
  Pax: {
    AdultCount: "",
    ChildCount: "",
    ChildAge: [
      {
        ChildNumber: "",
        ChildAge: "",
      },
    ],
  },
  CustomerCost: {
    CustomerCostDetails: {
      QuotationCost: "",
      Paidvalue: "",
    },
    CustomerPaymentDetails: [
      {
        PaymentMethod: "",
        PaymentValue: "",
        PaymnetCurrency: "",
      },
    ],
  },

  OptinalExperience: {
    ServiceDetails: [
      {
        ServiceType: "",
        ServiceName: "",
        ServiceAdultCost: "",
        ServiceChildCost: "",
        ServiceGroupCost: "",
        ServiceDay: "",
      },
    ],
  },
  Days: [
    {
      Day: "1",
      DestiniationID: "",
      DestiniationName: "",
      DayTotal: "",
      DayTaxValue: "",
      DayCurrencyType: "",
      DayServices: [
        {
          ServiceId: "",
          ServicePrice: "",
          ServiceTaxType: "",
          ServiceTaxRate: "",
          ServiceTaxValue: "",
          ServiceSourceCurrency: "",
          ServiceCurrencyConversionRate: "",
          ServiceTargetCurrency: "",
          DestiniationID: "",
          ServiceDetails: [
            {   
              ItemName: "",
              ItemCategory: "",
              ItemType: "",
              ItemGrade: "",
              ItemClass: "",
              ItemFromDate: "",
              ItemFromTime: "",
              ItemToDate: "",
              ItemToTime: "",
              ItemUnitCost: "",
              ItemDiscount: "",
              ItemCurrency: "",
              ItemQty: "",
              ItemTotalPrice: "",
              ItemTaxValue: "",
              ItemTaxRate: "",
              ItemGrossTotalValue: "",
              ItemSupplierDeatil: {
                ItemSupplierId: "",
                ItemSupplierName: "",
                ItemSupplierRate: "",
                ItemSupplierCurrency: "",
                SupplierVoucherNumber: "",
                SupplierVoucherDate: "",
                SupplierVoucherValue: "",
                SupplierPaymentStatus: "",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default data;
