const test2 = [
  { day: "mon", from: "11:00", to: "23:00" },
  { day: "tue", from: "11:00", to: "23:00" },
  { day: "thu", from: "11:00", to: "23:00" },
  { day: "sat", from: "11:00", to: "23:00" },
  { day: "sun", from: "11:00", to: "23:00" },
];


const readableTimetable = (workdays) => {
    if(workdays){
        for(const ele of workdays){
    console.log(`${ele.day}: ${ele.from} - ${ele.to})
    }
    }else{
        return []
    }
};