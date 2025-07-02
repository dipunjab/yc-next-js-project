import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-2xl text-center">Home</h1>

      <article className="">
        <h1 className=" ">This should be large and styled</h1>
        <p>Typography plugin test</p>
      </article>
    </>
  );
}
