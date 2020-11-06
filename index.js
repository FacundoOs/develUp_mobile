import React from "react";
import { registerRootComponent } from "expo";
import App from "./App";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3000/api/";
axios.defaults.baseURL = "https://my-json-server.typicode.com/FacundoOs/develUp_mobile/ ";

registerRootComponent(App);

