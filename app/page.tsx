import Counter from "@/components/Counter";
import FadeInSection from "@/components/FadeInSection";
import FinalSection from "@/components/FinalSection";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import Moments from "@/components/Moments";
import OpenWhen from "@/components/OpenWhen";
import Reasons from "@/components/Reasons";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="bg-stone-50 text-zinc-900">
      <Hero />
      <Counter />
      <Letter />
      <FadeInSection>
        <Timeline />
      </FadeInSection>
      <Moments />
      <Reasons />
      {/* <OpenWhen /> */}
      <FinalSection />
    </main>
  );
}