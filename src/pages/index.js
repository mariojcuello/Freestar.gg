import HomeCards from "./HomeCards"
import Search from "./Search"

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="max-w-[85rem] px-8 mt-2 mb-2 lg:px-8 lg:mt-10 mx-auto">
        <h1 className="md:text-4xl text-2xl font-bold">Freestar</h1>
      </div>
      <HomeCards/>
    </div> 
  );
}