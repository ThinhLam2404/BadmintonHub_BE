import Account from "src/models/account";
const handleSignIn = async (
  email: string,
  password: string
): Promise<boolean> => {
  if (email === "email" && password === "password") {
    return true;
  }
  return false;
};

const handleSignUp = async (
  email: string,
  password: string
): Promise<boolean> => {
  return true;
};

export { handleSignIn, handleSignUp };
