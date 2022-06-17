import { Header } from "../../components/Header/Header"
import { Search } from "../../components/Search/Search"
import { ListOfExtensions } from "../../components/ListOfExtensions/ListOfExtensions"
import useExtensions from "../../hooks/useExtension"
import Spinner from "../../components/Spinner/Spinner"

export const SearchResultsPage = ({params}: {params: {user: string, repo: string}}) => {  
  const { user, repo } = params
  const { loading, extensions, error } = useExtensions(user, repo)

  if (error) return <h1>ERROR</h1>

  return (
    <div className="text-center h-screen bg-gray-100 overflow-x-hidden">
      <Header />
      <div className="pt-20 mx-10 md:mx-40">
        <Search />
      </div>
      <div className="py-20 mx-10 md:mx-40">
        { loading
          ? <Spinner />
          : <ListOfExtensions extensions={extensions} />
        }
      </div>
    </div>
  )
}
