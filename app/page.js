import HomePage from "@/components/HomePage";
import data from "@/data/landing-page.json";
export default function Home() {
  return (
    <main>
      <HomePage
        homePage={data.homePage}
        aboutConference={data.aboutConference}
        aboutManavRachna={data.aboutManavRachna}
      />
    </main>
  );
}
