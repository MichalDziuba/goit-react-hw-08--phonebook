import { React, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { Phonebook } from "./Components/Phonebook/Phonebook";
import { Navigation } from "./Components/Navigation/Navigation.jsx";
import { LoginForm } from "./Components/Login/Login";
import { RegisterForm } from "./Components/Register/Register";
import { PrivateRoute } from "./Routes/PrivateRoute/PrivateRoute";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "bootstrap/dist/css/bootstrap.min.css";
import { NotFound } from "./Components/NotFound/NotFound";
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Suspense fallback="We are working for you! Please wait a second">
        <Routes>
         
          <Route path="/" element={<Navigation />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
            
             </Route>
            
            <Route element={<PrivateRoute />}>
              <Route path="contacts" element={<Phonebook />} />
            </Route>
            <Route path="*" element= {<NotFound/>} />
          </Routes>
        </Suspense>
    </BrowserRouter>
    
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
