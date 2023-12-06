import userReducer from "./Account/users/reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;



// var request = require("request");

// var options = {
//   method: 'GET',
//   url: 'https://v1.basketball.api-sports.io/games',
//   qs: {date: '2019-11-23'},
//   headers: {
//     'x-rapidapi-host': 'v1.basketball.api-sports.io',
//     'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx'
//   }
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);

// 	console.log(body);
// });