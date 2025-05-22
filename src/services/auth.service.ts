import Account from "src/models/account";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const salts = 10;

const handleSignIn = async (
  email: string,
  password: string
): Promise<string | boolean> => {
  const user = await Account.findOne({ email });
  if (!user) return false;
  const check = await bcrypt.compare(password, user.password);
  if (!check) {
    return false;
  }
  const token = jwt.sign({ email, userId: user._id }, process.env.JWT_KEY!);

  return token;
};

const handleSignUp = async (
  email: string,
  password: string,
  username: string,
  phone: string,
  address: string
): Promise<boolean | string> => {
  const user = await Account.findOne({ email });
  if (user) return false;
  const hashedPassword = await bcrypt.hash(password, salts);

  const newUser = await Account.create({
    email,
    password: hashedPassword,
    username,
    phone,
    address,
  });

  const token = jwt.sign({ email, userId: newUser._id }, process.env.JWT_KEY!);

  return token;
};

export { handleSignIn, handleSignUp };
