import Comp1 from "@/components/landing/Comp1";
import Nav from "@/components/Nav";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Nav/>
      <main className="w-screen px-6 py-4">
        <Comp1/>  
      </main>
    </div>
  );
}
