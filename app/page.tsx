import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
export default function Home() {
  return (
    <div>
      <main className="min-h-[125vh] bg-cover bg-center bg-opacity-100 contrast-70 filter  " style={{ backgroundImage: "url('/assets/hero.png')" }} >
        <Hero />
        <div className="z-10 relative mt-20">

        </div>
      </main>
      <section className="max-w-5xl mx-auto">
        <Explore />
      </section>
      <Trending/>
      <section>

      </section>

    </div>
  );
}
