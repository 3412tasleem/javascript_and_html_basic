const wall = "wall";
const room = "room";
const diagram_b = [
  {
    room_one: {
      top: wall,
      right: room,
      bottom: wall,
      left: wall,
      dirt: 5,
    },
  },
  {
    room_two: {
      top: wall,
      right: wall,
      bottom: room,
      left: wall,
      dirt: 10,
    },
  },
  {
    room_three: {
      top: wall,
      right: wall,
      bottom: wall,
      left: room,
      dirt: 1,
    },
  },
  {
    room_four: {
      top: room,
      right: wall,
      bottom: wall,
      left: wall,
      dirt: 2,
    },
  },
];

const checking_room_one = (cost, time, room_one) => {
  if (room_one.dirt > 0) {
    cost = room_one.dirt + cost;
    room_one = {
      ...room_one,
      dirt: 0,
    };
    time = time + 1;
  }
  const moving_location =
    room_one.top == room
      ? "top"
      : room_one.right == room
      ? "right"
      : room_one.bottom == room
      ? "bottom"
      : "left";
  console.log(`vacuum is moving to ${moving_location}`);
  return {
    room_one,
    time,
    cost,
    moving_location,
  };
};
const checking_room_two = (cost, time, room_two) => {
  if (room_two.dirt > 0) {
    cost = room_two.dirt + cost;
    room_two = {
      ...room_two,
      dirt: 0,
    };
    time = time + 1;
  }
  const moving_location =
    room_two.top == room
      ? "top"
      : room_two.right == room
      ? "right"
      : room_two.bottom == room
      ? "bottom"
      : "left";
  console.log(`vacuum is moving to ${moving_location}`);
  return {
    room_two,
    time,
    cost,
    moving_location,
  };
};

const checking_room_three = (cost, time, room_three) => {
  if (room_three.dirt > 0) {
    cost = room_three.dirt + cost;
    room_three = {
      ...room_three,
      dirt: 0,
    };
    time = time + 1;
  }
  const moving_location =
    room_three.top == room
      ? "top"
      : room_three.right == room
      ? "right"
      : room_three.bottom == room
      ? "bottom"
      : "left";
  console.log(`vacuum is moving to ${moving_location}`);
  return {
    room_three,
    time,
    cost,
    moving_location,
  };
};
const checking_room_four = (cost, time, room_four) => {
  if (room_four.dirt > 0) {
    cost = room_four.dirt + cost;
    room_four = {
      ...room_four,
      dirt: 0,
    };
    time = time + 1;
  }
  const moving_location =
    room_four.top == room
      ? "top"
      : room_four.right == room
      ? "right"
      : room_four.bottom == room
      ? "bottom"
      : "left";
  console.log(`vacuum is moving to ${moving_location}`);
  return {
    room_four,
    time,
    cost,
    moving_location,
  };
};

// calling a function of room one
const calling_room_one = checking_room_one(0, 0, diagram_b[0].room_one);
// calling a function of room two
const calling_room_two = checking_room_two(
  calling_room_one.cost,
  calling_room_one.time,
  diagram_b[1].room_two
);
// calling a function of room room_three
const calling_room_three = checking_room_three(
  calling_room_two.cost,
  calling_room_two.time,
  diagram_b[2].room_three
);
// calling a function of room room_four
const calling_room_four = checking_room_four(
  calling_room_three.cost,
  calling_room_three.time,
  diagram_b[3].room_four
);
console.log(`total time for clean diagram b is = ${calling_room_four.time}`);
console.log(`total energy for clean diagram b is = ${calling_room_four.cost}`);
