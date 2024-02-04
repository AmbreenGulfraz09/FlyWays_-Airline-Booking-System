var flightsData = [
  {
    "airlineName": "Emirates",
    "arrivalTime": "11:30 AM",
    "departureTime": "10:00 AM",
    "price": "PKR 56,500",
    "sourceCountry": "Pakistan",
    "destinationCountry": "UAE",
    "durationOfFlight": "3 hours"
  },
  {
    "airlineName": "Qatar Airways",
    "arrivalTime": "12:00 PM",
    "departureTime": "10:30 AM",
    "price": "PKR 5600",
    "sourceCountry": "Pakistan",
    "destinationCountry": "Qatar",
    "durationOfFlight": "4 hours"
  },
  {
    "airlineName": "Etihad Airways",
    "arrivalTime": "1:30 PM",
    "departureTime": "11:00 AM",
    "price": "PKR 7500",
    "sourceCountry": "Pakistan",
    "destinationCountry": "UAE",
    "durationOfFlight": "5 hours"
  },
  {
    "airlineName": "Gulf Air",
    "arrivalTime": "2:00 PM",
    "departureTime": "11:30 AM",
    "price": "PKR 7800",
    "sourceCountry": "Pakistan",
    "destinationCountry": "Bahrain",
    "durationOfFlight": "6 hours"
  },
  {
    "airlineName": "Oman Air",
    "arrivalTime": "2:30 PM",
    "departureTime": "12:00 PM",
    "price": "PKR 9600",
    "sourceCountry": "Pakistan",
    "destinationCountry": "Oman",
    "durationOfFlight": "7 hours"
  },
  {
    "airlineName": "Saudi Arabian Airlines",
    "arrivalTime": "3:00 PM",
    "departureTime": "12:30 PM",
    "price": "PKR 9000",
    "sourceCountry": "Pakistan",
    "destinationCountry": "Saudi Arabia",
    "durationOfFlight": "8 hours"
  },
  {
    "airlineName": "EgyptAir",
    "arrivalTime": "3:30 PM",
    "departureTime": "1:00 PM",
    "price": "PKR 9100",
    "sourceCountry": "Pakistan",
    "destinationCountry": "Egypt",
    "durationOfFlight": "9 hours"
  },
  {
    "airlineName": "Royal Jordanian Airlines",
    "arrivalTime": "4:00 PM",
    "departureTime": "1:30 PM",
    "price": "PKR 6200",
    "sourceCountry": "Pakistan",
    "destinationCountry": "Jordan",
    "durationOfFlight": "10 hours"
  },
  {
    "airlineName": "Kuwait Airways",
    "arrivalTime": "4:30 PM",
    "departureTime": "2:00 PM",
    "price": "PKR 6300",
    "sourceCountry": "Pakistan",
    "destinationCountry": "Kuwait",
    "durationOfFlight": "11 hours"
  },
  {
    "airlineName": "Turkish Airlines",
    "arrivalTime": "5:00 PM",
    "departureTime": "2:30 PM",
    "price": "PKR 7400",
    "sourceCountry": "Pakistan",
    "destinationCountry": "Turkey",
    "durationOfFlight": "12 hours"
  },
  {
    "airlineName": "Air India",
    "arrivalTime": "5:30 PM",
    "departureTime": "3:00 PM",
    "price": "PKR 7500",
    "sourceCountry": "Pakistan",
    "destinationCountry": "India",
    "durationOfFlight": "13 hours"
  },
  {
    "airlineName": "Silver Cloud Airlines",
    "arrivalTime": "11:35 AM",
    "departureTime": "05:50 AM",
    "price": "PKR 6540.00",
    "sourceCountry": "Argentina",
    "destinationCountry": "Brazil",
    "durationOfFlight": "6 hours"
  },
  {
    "airlineName": "Volcano Airways",
    "arrivalTime": "08:20 AM",
    "departureTime": "12:30 PM",
    "price": "PKR 7510.75",
    "sourceCountry": "Peru",
    "destinationCountry": "Colombia",
    "durationOfFlight": "5 hours"
  },
  {
    "airlineName": "Northern Breeze",
    "arrivalTime": "05:05 AM",
    "departureTime": "09:20 AM",
    "price": "PKR 6580.50",
    "sourceCountry": "Canada",
    "destinationCountry": "United States",
    "durationOfFlight": "7 hours"
  },
  {
    "airlineName": "Emerald Sky",
    "arrivalTime": "1:40 PM",
    "departureTime": "5:55 AM",
    "price": "PKR 7550.25",
    "sourceCountry": "Australia",
    "destinationCountry": "New Zealand",
    "durationOfFlight": "3 hours"
  },
  {
    "airlineName": "Majestic Wings",
    "arrivalTime": "07:25 AM",
    "departureTime": "11:40 AM",
    "price": "PKR 7520.50",
    "sourceCountry": "France",
    "destinationCountry": "Germany",
    "durationOfFlight": "6 hours"
  },
  {
    "airlineName": "Eclipse Airlines",
    "arrivalTime": "3:00 AM",
    "departureTime": "7:15 AM",
    "price": "PKR 7980.00",
    "sourceCountry": "Italy",
    "destinationCountry": "Spain",
    "durationOfFlight": "5 hours"
  },
  {
    "airlineName": "Astral Travel",
    "arrivalTime": "11:50 PM",
    "departureTime": "06:05 AM",
    "price": "PKR 6650.75",
    "sourceCountry": "Japan",
    "destinationCountry": "South Korea",
    "durationOfFlight": "8 hours"
  },
  {
    "airlineName": "Silver Lining Airways",
    "arrivalTime": "8:35 PM",
    "departureTime": "2:50 PM",
    "price": "PKR 7370.50",
    "sourceCountry": "Netherlands",
    "destinationCountry": "Belgium",
    "durationOfFlight": "4 hours"
  },
  {
    "airlineName": "Golden Gate Flights",
    "arrivalTime": "5:20 AM",
    "departureTime": "9:35 PM",
    "price": "PKR 7000.25",
    "sourceCountry": "United Kingdom",
    "destinationCountry": "Ireland",
    "durationOfFlight": "3 hours"
  },
  {
    "airlineName": "Everest Airlines",
    "arrivalTime": "1:55 PM",
    "departureTime": "6:10 PM",
    "price": "PKR 7750",
    "sourceCountry": "Nepal",
    "destinationCountry": "Bhutan",
    "durationOfFlight": "5 hours"
  },
  {
    "airlineName": "Aurora Borealis Airways",
    "arrivalTime": "12:45 PM",
    "departureTime": "07:00 PM",
    "price": "PKR 7450",
    "sourceCountry": "Sweden",
    "destinationCountry": "Norway",
    "durationOfFlight": "6 hours"
  },
  {
    "airlineName": "Coral Skies",
    "arrivalTime": "9:30 AM",
    "departureTime": "3:45 PM",
    "price": "PKR 7110.50",
    "sourceCountry": "Malaysia",
    "destinationCountry": "Singapore",
    "durationOfFlight": "7 hours"
  },
  {
    "airlineName": "Sapphire Air",
    "arrivalTime": "6:15 AM",
    "departureTime": "10:30 PM",
    "price": "PKR 7880.25",
    "sourceCountry": "South Africa",
    "destinationCountry": "Kenya",
    "durationOfFlight": "4 hours"
  },
  {
    "airlineName": "Polar Express",
    "arrivalTime": "1:50 PM",
    "departureTime": "6:05 AM",
    "price": "PKR 7550.00",
    "sourceCountry": "Finland",
    "destinationCountry": "Denmark",
    "durationOfFlight": "6 hours"
  },
  {
    "airlineName": "Amazon Airways",
    "arrivalTime": "10:40AM",
    "departureTime": "04:55PM",
    "price": "PKR 7230.75",
    "sourceCountry": "Brazil",
    "destinationCountry": "Chile",
    "durationOfFlight": "5 hours"
  },
  {
    "airlineName": "Aurum Airlines",
    "arrivalTime": "7:25AM",
    "departureTime": "11:40PM",
    "price": "PKR 7990.50",
    "sourceCountry": "Mexico",
    "destinationCountry": "USA",
    "durationOfFlight": "8 hours"
  }
  ]


let root = document.getElementById('root')
flightsData.forEach(function (flights) {
    root.innerHTML += (
        `<div class="container box">

  <div>
    <img class="flight-icon" src="static/images/departures.png" alt="flight-icon">
</div>
  <div>
  <div class="flight-details">
    <h3>${flights.airlineName}</h3>
    <span>${flights.arrivalTime} - ${flights.departureTime}</span>
  </div>

  <div class="flight-details">
    <h3>${flights.sourceCountry} - ${flights.destinationCountry}</h3>
    <span>${flights.durationOfFlight}</span>
  </div>

  <div class="flight-details">
    <h3>PA-110 (value)</h3>
    <span>Non-Stop</span>
  </div>

  <div class="price">${flights.price}</div>

  <div class="book-btn">
    <a href="/bookingform">Book Now</a>
  </div>
    </div>
</div>`
    )
})