
const express= require('express');
const app = express();
app.use(express.json());

//we can create .env file to  store port number
const PORT = process.env.PORT||5000;


//creating data for rooms
const rooms = [
  {
    roomID: 0,
    roomName: "300",
    noOfSeatsAvailable: "2",
    amenities: ["Parking", "Breakfast", "Wifi", "Fitness Center"],
    pricePerHr: 100,
    bookedStatus: true,
    customerDetails: {
      customerName: "Anu",
      date: "23/05/2022",
      startTime: "12:00",
      endTime: "16:00",
    },
  },
  {
    roomID: 1,
    roomName: "301",
    noOfSeatsAvailable: "2",
    amenities: ["Parking", "Breakfast", "Wifi", "Fitness Center"],
    pricePerHr: 100,
    bookedStatus: true,
    customerDetails: {
      customerName: "Bhanu",
      date: "16/05/2022",
      startTime: "11:00",
      endTime: "18:00",
    },
  },
  {
    roomID: 2,
    roomName: "302",
    noOfSeatsAvailable: "2",
    amenities: ["Parking", "Breakfast", "Wifi", "Fitness Center"],
    pricePerHr: 100,
    bookedStatus: true,
    customerDetails: {
      customerName: "Chitra",
      date: "18/05/2022",
      startTime: "10:00",
      endTime: "18:00",
    },
  },
  {
    roomID: 3,
    roomName: "303",
    noOfSeatsAvailable: "2",
    amenities: ["Parking", "Breakfast", "Wifi", "Fitness Center"],
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
    amenities: ["Parking", "Breakfast", "Wifi", "Fitness Center"],
    pricePerHr: 100,
    bookedStatus: false,
    customerDetails: {
      customerName: "",
      date: "",
      startTime: "",
      endTime: "",
    },
  },
];

//below code helps us to route to home page
app.get("/", (request, response) => {
  response.send("Hall Booking API");
});

//Creating a room
app.post("/rooms/create",(request, response) => {

 const newRoom = request.body;
  rooms.push(newRoom);
  response.send(newRoom);
  console.log(newRoom);
})

// Booking a room
app.post("/rooms", (request, response) => {
console.log("booking a room")
  const booking = request.body;

    rooms.map((room) => {
        if (room.roomID == booking.roomID) {
          console.log(room);
            if (room.customerDetails.date != booking.date) {
                room.customerDetails.customerName = booking.customerName;
                room.customerDetails.date = booking.date;
                room.customerDetails.startTime = booking.startTime;
                room.customerDetails.endTime = booking.endTime;
                room.bookedStatus = !room.bookedStatus;
                response.send("Booking successfull")
            } else {
                response.send("Sorry! Room already booked for that date. Please choose another room")
            }
        }
        return room;
    })

})

//List all rooms with booked data
app.get("/rooms", (request, response) => {
  response.send(
    rooms.map((room) => {
      if (room.bookedStatus == true) {
        return {
          "Room name": room.roomName,
          "Booked Status": "Booked",
          "Customer Name": room.customerDetails.customerName,
          "Date": room.customerDetails.date,
          "Start Time": room.customerDetails.startTime,
          "End Time": room.customerDetails.endTime,
        };
      } else {
        return { "Room name": room.roomName, "Booked Status": "Vacant" };
      }
    })
  );
});

//List all customers with booked data
app.get("/customers", (request, response) => {
  response.send(
    rooms
      .filter((room) => {
        if (room.bookedStatus === true) {
          return room;
        }
      })
      .map((room) => {
        return {
          "Customer name": room.customerDetails.customerName,
          "Room name": room.roomName,
          Date: room.customerDetails.date,
          "Start Time": room.customerDetails.startTime,
          "End Time": room.customerDetails.endTime,
        };
      })
  );
});

//specifying port to use
app.listen(PORT, () => console.log("server has started at port", PORT));
