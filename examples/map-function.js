let images = [
  { height: "34px", width: "39px" },
  { height: "54px", width: "19px" },
  { height: "83px", width: "75px" },
];

let trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

let heigths = images.map(function (image) {
  return image.height;
});

let speeds = trips.map(function (trip) {
  return trip.distance / trip.time;
});
