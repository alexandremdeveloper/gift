import Counter from "@/components/Counter";
import FadeInSection from "@/components/FadeInSection";
import FinalSection from "@/components/FinalSection";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import Moments from "@/components/Moments";
import OpenWhen from "@/components/OpenWhen";
import Reasons from "@/components/Reasons";
import Timeline from "@/components/Timeline";
import MusicPlayer from "@/components/MusicPlayer";
import MemoryCarousel from "@/components/MemoryCarousel";
import MemoryExperience from "@/components/MemoryExperience/MemoryExperience";

export default function Home() {
  return (
    <main className="bg-stone-50 text-zinc-900">
      <MusicPlayer />
      <Hero />
      <Counter />
      <MemoryExperience />
      <Letter />
      <MemoryCarousel />
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