import { useForm } from "react-hook-form"
import { useLocation } from "wouter"
import { SearchForm } from "../../models/searchForm.interface"

export const Search = () => {
  const { register, handleSubmit } = useForm<SearchForm>()
  const [_, setLocation] = useLocation()
 
  const onSubmit = (data: SearchForm) => {
    const { user, repo } = data
    setLocation(`/${user}/${repo}`)
  }

  return (    
    <form className="flex w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full md:w-1/3 px-3">
        <label className="flex uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          GitHub User
        </label>
        <input {...register("user", { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="user" type="text" placeholder="Username" />
      </div>
      <div className="w-full md:w-1/3 px-3">
        <label className="flex uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          GitHub Repo
        </label>
        <input {...register("repo", { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="repo" type="text" placeholder="Repository" />
      </div>
      <div className="flex items-end w-full md:w-1/3 px-3">
        <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-4 rounded">
          Search
        </button>
      </div>
    </form>    
  )
}