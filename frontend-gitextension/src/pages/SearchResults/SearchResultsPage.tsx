import { Header } from "../../components/Header/Header"
import { Search } from "../../components/Search/Search"
import { ListOfExtensions } from "../../components/ListOfExtensions/ListOfExtensions"
import useExtensions from "../../hooks/useExtension"
import Spinner from "../../components/Spinner/Spinner"

export const SearchResultsPage = ({params}: {params: {user: string, repo: string}}) => {  
  const { user, repo } = params
  const { loading, extensions } = useExtensions(user, repo)

  return (
    <div className="text-center h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto pt-20 flex flex-wrap justify-center">
        <Search />
        <div className="pt-20">
          { loading
            ? <Spinner />
            : <ListOfExtensions extensions={extensions} />
          }
        </div>
      </div>
    </div>
  )
}
