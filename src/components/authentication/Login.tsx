export interface LoginOrSignUPProps {
  isAlreadyUser: boolean;
  setAlreadyUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Login = ({
  isAlreadyUser,
  setAlreadyUser,
}: LoginOrSignUPProps) => {
  return (
    <>
      <h1>this is Login</h1>
      <button onClick={() => setAlreadyUser(!isAlreadyUser)}>Register</button>
    </>
  );
};
