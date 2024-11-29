import Image from "next/image";
import RegistrationForm from "../components/registrationform";

export default function Home() {
  return (
    <div
      // style={{ backgroundColor: "skyblue", minHeight: "100vh", padding: "1rem" }}
      className="bg-blue-300 min-h-screen p-4 text-center font-bold text-4xl"
    >
      <h1>Welcome to NextPortfolio</h1>
      <RegistrationForm />
    </div>
  );
}
