import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Main Home Page</h1>
      <Image src={"/images/interview.svg"} alt="interview" width={200} height={200} />
    </main>
  );
}