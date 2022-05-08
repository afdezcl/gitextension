import { Extension } from "../../models/extension.interface"

export const Card = ({name, quantity}: Extension) => {
  return (
    <>
      <div id="toast-default" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow" role="alert">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-l">
          <svg className="fill-current h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z" />
          </svg>
        </div>
        <h4 className="ml-3 font-bold text-gray-900">{name}</h4>
        <h5 className="ml-auto text-gray-800 text-2xl font-bold rounded-lg h-8 w-8">{quantity}</h5>
      </div>
    </>
  )
}