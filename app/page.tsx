import NightSky from "@/components/NightSky";
import FloatingHearts from "@/components/FloatingHearts";
import GreetingCard from "@/components/GreetingCard";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-12">
      {/* Lớp nền: bầu trời đêm + trái tim bay */}
      <NightSky />
      <FloatingHearts />

      {/* Nội dung chính */}
      <GreetingCard />
    </main>
  );
}
