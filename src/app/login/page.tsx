import LoginCard from "@/components/cards/login-card";
import { NextPage } from "next";

interface Props {}

const LoginPage: NextPage<Props> = ({}) => {
  return (
    <main className="bg-gradient-to-br from-blue-400 via-yellow-200 to-red-400 h-screen">
      <LoginCard />
    </main>
  );
};
export default LoginPage;
