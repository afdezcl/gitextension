import { Header } from "../../components/Header/Header"
import { Search } from "../../components/Search/Search"

export const HomePage = () => {
  return (
    <div className="text-center h-screen bg-gray-100">
      <Header />
      <main className="py-32">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#FF6D80] to-[#BA35FE]">
          GitExtension App
        </h1>
        <p className="text-center text-xl">
          A simple app to count the different files in your projects.
        </p>
        <div className="container mx-auto mt-10 flex flex-wrap justify-center">
          <Search />
        </div>
      </main>
    </div>
  )
}
