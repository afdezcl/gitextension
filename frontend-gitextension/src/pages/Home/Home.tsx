import { Header } from "../../components/Header/Header"

export const Home = () => {
  return (
    <div className="App">
      <Header/>
      <main className="h-screen py-20 bg-gray-100">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#FF6D80] to-[#BA35FE]">
          GitExtension App
        </h1>
        <p className="text-center text-xl">
          A simple app to count the different files in your projects.
        </p>
      </main>
    </div>
  )
}
