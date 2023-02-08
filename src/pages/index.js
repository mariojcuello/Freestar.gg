import HomeCards from "./HomeCards"

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="max-w-[85rem] px-8 mt-9 lg:px-8 lg:mt-14 mx-auto">
        <h1 className="md:text-4xl text-2xl font-bold">Freestar - The Galaxy is our Frontier</h1>
      </div>
      <HomeCards/>
    </div> 
  );
}