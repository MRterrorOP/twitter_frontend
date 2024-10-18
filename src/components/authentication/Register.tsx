import { useState } from "react";
import { LoginOrSignUPProps } from "./Login";

export const Register = ({
  isAlreadyUser,
  setAlreadyUser,
}: LoginOrSignUPProps) => {
  const [isPassVisible, setPassVisible] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [isPassValid, setPassValidity] = useState<boolean>(true);
  const [isEmailValid, setEmailValidity] = useState<boolean>(true);
  const [isCnfPassValid, setCnfPassValid] = useState<boolean>(true);
  const [cnfPass, setCnfPass] = useState<string>("");

  //get baseurl from .env file
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e: React.BaseSyntheticEvent<Event>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    //make a post request to register user
    console.log("make a post");
    try {
      const response = await fetch(`${apiBaseUrl}/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
          cnfPassword: formData.get("cnfPassword"),
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePassValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const ValidPasswordPattern =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%])(?=.*[@#$%]).{8,}$/;
    const result = ValidPasswordPattern.test(e.target.value);
    result ? setPassValidity(true) : setPassValidity(false);
  };
  const handleEmailValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validEmailPatter = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const result = validEmailPatter.test(e.target.value);
    result ? setEmailValidity(true) : setEmailValidity(false);
  };
  const handleCnfPassValidation = () => {
    cnfPass === password ? setCnfPassValid(true) : setCnfPassValid(false);
  };

  return (
    <div className="flex gap-x-2 justify-center items-center mt-[10vh] w-[96%] mx-auto ">
      <div className="w-[40%] hidden xl:block  ">
        <h1 className="text-5xl leading-12 my-4">
          Let's build a community together for a better{" "}
          <span className="text-purple-500">Future.</span>
        </h1>
        <p className="w-[70%] leading-6 text-[18px]">
          Join a community where every voice counts and ideas shape the future.
          Share your posts, connect with others, and explore diverse
          perspectives that inspire growth and collaboration. Together, we're
          building a space where creativity and meaningful conversations drive
          positive change.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center xl:w-[40%]">
        <svg
          className="my-9"
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 256 256"
        >
          <path
            fill="#1793D1"
            d="M127.976 0c-11.397 27.936-18.27 46.21-30.959 73.315c7.78 8.245 17.329 17.846 32.837 28.69c-16.673-6.859-28.045-13.746-36.544-20.892C77.07 114.992 51.63 163.25 0 256c40.579-23.422 72.035-37.863 101.35-43.373a74.3 74.3 0 0 1-1.926-17.378l.049-1.3c.644-25.992 14.168-45.98 30.188-44.624c16.02 1.357 28.473 23.542 27.83 49.535c-.122 4.89-.674 9.596-1.638 13.96C184.851 218.49 215.97 232.894 256 256c-7.893-14.529-14.938-27.626-21.666-40.1c-10.598-8.212-21.652-18.9-44.2-30.47c15.498 4.025 26.595 8.67 35.244 13.863C156.973 71.958 151.434 55.038 127.976 0"
          />
        </svg>
        <h3 className="mb-[42px]">Create your account</h3>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          method="POST"
          className="w-[350px]"
        >
          {/*This is for Email input field */}
          <div className="w-[100%] h-[106px]">
            <label htmlFor="email">
              Email Address
              <div
                className={`border-2 rounded flex justify-center border-purple-800  focus-within:border-purple-500 border-solid  my-2  `}
              >
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"
                  />
                </svg>
                <input
                  onChange={(e) => {
                    handleEmailValidation(e);
                  }}
                  type="email"
                  className=" h-[36px] text-[18px] bg-[#242424] w-[80%] outline-none border-none"
                  id="email"
                  name="email"
                  required
                ></input>
              </div>
            </label>
            <p className="mt-1 text-[12px] text-red-500">
              {isEmailValid ? "" : "Enter a valid email"}
            </p>
          </div>
          {/*This is for Password input field */}
          <div className="   h-[106px]">
            <label htmlFor="password">
              Create a password
              <div className="border-2 rounded flex justify-center items-center border-purple-800  focus-within:border-purple-500 border-solid  mt-2  ">
                <svg
                  className="ml-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="rgb(228, 224, 220)"
                    d="M11 10v2H9v2H7v-2H5.8c-.4 1.2-1.5 2-2.8 2c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.3 0 2.4.8 2.8 2zm-8 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m13 4c2.7 0 8 1.3 8 4v2H8v-2c0-2.7 5.3-4 8-4m0-2c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4"
                  />
                </svg>
                <input
                  onChange={(e) => {
                    handlePassValidation(e);
                  }}
                  onBlur={handleCnfPassValidation}
                  type={isPassVisible ? "text" : "password"}
                  className=" h-[36px] ml-2 text-[18px]  bg-[#242424] outline-none border-none"
                  id="password"
                  name="password"
                  required
                ></input>
                <span
                  onClick={() => setPassVisible(!isPassVisible)}
                  className="cursor-pointer mr-2 w-[40px] "
                >
                  {isPassVisible ? "HIDE" : "SHOW"}
                </span>
              </div>
            </label>
            <p className="mt-1 text-[12px] text-red-500">
              {isPassValid
                ? ""
                : "Password must contain at least 1 number , 1 uppercase letter, and 2 special character (@#$%) and longer than 8 letter"}
            </p>
          </div>
          {/*This is for confirm password input field */}
          <div className="w-[100%] h-[106px]">
            <label htmlFor="cnfPassword">
              Confirm your password
              <div className="border-2 rounded flex justify-center border-purple-800  focus-within:border-purple-500 border-solid  my-2  ">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="rgb(228, 224, 220)"
                    d="M11 10v2H9v2H7v-2H5.8c-.4 1.2-1.5 2-2.8 2c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.3 0 2.4.8 2.8 2zm-8 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m13 4c2.7 0 8 1.3 8 4v2H8v-2c0-2.7 5.3-4 8-4m0-2c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4"
                  />
                </svg>
                <input
                  onChange={(e) => {
                    setCnfPass(e.target.value);
                  }}
                  onBlur={handleCnfPassValidation}
                  type="password"
                  className=" h-[36px] text-[18px] bg-[#242424] w-[80%] outline-none border-none"
                  id="cnfPassword"
                  name="cnfPassword"
                  required
                ></input>
              </div>
            </label>
            <p className="mt-1 text-[12px] text-red-500">
              {isCnfPassValid
                ? ""
                : "Both passwords must be identical. Please ensure they match."}
            </p>
          </div>
          <input
            id="submit-button"
            type="submit"
            placeholder="Register"
            value={"Sign up"}
            className="bg-purple-500 outline-none border-solid border-purple-800 text-[18px] rounded bg-transparent w-[100%] h-[42px] mb-2 cursor-pointer"
          />
        </form>
        <span className="my-2">
          Already have a account?
          <a
            className="text-purple-500 ml-2 hover:underline cursor-pointer"
            onClick={() => setAlreadyUser(!isAlreadyUser)}
          >
            Login
          </a>
        </span>
      </div>
    </div>
  );
};
