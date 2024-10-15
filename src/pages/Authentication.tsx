import { Login } from "../components/authentication/Login";
import { Register } from "../components/authentication/Register";
import { useState } from "react";

export default function Authentication() {
  const [isAlreadyUser, setAlreadyUser] = useState(false);
  return isAlreadyUser ? (
    <Login isAlreadyUser={isAlreadyUser} setAlreadyUser={setAlreadyUser} />
  ) : (
    <Register isAlreadyUser={isAlreadyUser} setAlreadyUser={setAlreadyUser} />
  );
}
