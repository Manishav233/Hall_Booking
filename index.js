
const express= require('express');
const app = express();
app.use(express.json());

//we can create .env file to  store port number
// const PORT = process.env.PORT||5000;

const PORT=5000;

//creating data for rooms
const rooms = [
  {
    roomID: 0,
    roomName: "300",
    noOfSeatsAvailable: "2",
    amenities: ["Hot shower", "WIFI", "Intercom", "Room service"],
    pricePerHr: 100,
    bookedStatus: false,
    customerDetails: {
      customerName: "",
      date: "",
      startTime: "",
      endTime: "",
    },
  },
  {
    roomID: 1,
    roomName: "301",
    noOfSeatsAvailable: "2",
    amenities: ["Hot shower", "WIFI", "Intercom", "Room service"],
    pricePerHr: 100,
    bookedStatus: true,
    customerDetails: {
      customerName: "Rajesh",
      date: "16/10/2021",
      startTime: 1100,
      endTime: 1800,
    },
  },
  {
    roomID: 2,
    roomName: "302",
    noOfSeatsAvailable: "2",
    amenities: ["Hot shower", "WIFI", "Intercom", "Room service"],
    pricePerHr: 100,
    bookedStatus: false,
    customerDetails: {
      customerName: "Mallesh",
      date: "18/10/2021",
      startTime: 1000,
      endTime: 1800,
    },
  },
  {
    roomID: 3,
    roomName: "303",
    noOfSeatsAvailable: "2",
    amenities: ["Hot shower", "WIFI", "Intercom", "Room service"],
    pricePerHr: 100,
    bookedStatus: false,
    customerDetails: {
      customerName: "",
      date: "",
      startTime: "",
      endTime: "",
    },
  },
  {
    roomID: 4,
    roomName: "304",
    noOfSeatsAvailable: "2",
    amenities: ["Hot shower", "WIFI", "Intercom", "Room service"],
    pricePerHr: 100,
    bookedStatus: false,
    customerDetails: {
      customerName: "Priya",
      date: "16/11/2021",
      startTime: 1200,
      endTime: 2000,
    },
  },
];

//below code helps us to route to home page
app.get("/", (request, response) => {
  response.send("Hall Booking API");
});
//specifying port to use
app.listen(PORT, () => console.log("server has started at:", PORT));
