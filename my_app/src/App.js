import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from "./features/tripsSlice";
import NavBar from "./components/Navbar";
import Quotes from "./components/Quotes";
import CreateTripForm from "./components/CreateTripForm";
import TripList from "./components/TripList";

const store = configureStore({
  reducer: {
    trips: tripsReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <div className="background-img">
          <div className="left-section">
            <Quotes />
          </div>
          <div className="right-section">
            <CreateTripForm />
          </div>
        </div>
        <TripList />
      </div>
    </Provider>
  );
};

export default App;
