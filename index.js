const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  
]
// function superbowlWin(year) {
//     for(const record of year) 
//         if(record.result === "W") {
//             return (record.year)
//         }
//         else{
//             return 
//         }
//     }
// }
// superbowlWin(record)

function superbowlWin(array) {
    const year = array.find(string => string.result === "W") 
    return array[year]

    
}
