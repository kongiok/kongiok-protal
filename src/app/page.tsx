import Image from "next/image";
import profilePic from "../../public/images/capybara_profile.png";

export default function Home() {
  return (
    <main className="h-dvh w-dvw flex flex-col items-center justify-center ">
      {/* Portal */}
      <section className="max-w-xl w-full h-full flex flex-col border items-center justify-center">
        <div className="size-96 flex flex-col">
          <div className="flex flex-row items-center justify-around gap-16">
            <h1 className="text-8xl font-bold capitalize ">ong kong giok</h1>
            <Image src={profilePic}
             alt="Profile of me."
             className="rounded-full size-36 border-primary border-2" />
          </div>
          <p className="text-2xl capitalize">A portal to my world!</p>
        </div>
      </section>
    </main>
  );
}
