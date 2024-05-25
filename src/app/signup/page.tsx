import SignUpCard from "@/components/cards/signup-card";
import { NextPage } from "next";

interface Props {}

const SignupPage: NextPage<Props> = ({}) => {
  return (
    <main className="bg-gradient-to-br from-blue-400 via-yellow-200 to-red-400 h-screen">
      <SignUpCard />
    </main>
  );
};

export default SignupPage;
