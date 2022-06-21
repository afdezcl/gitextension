import { Card } from "../Card/Card"
import { Toast } from "../Toast/Toast"

export const ListOfExtensions = ({ extensions, error }: { extensions: Record<string, number> | null, error: boolean }) => {

  if (error) return <Toast/>

  return (
    <div className='mx-auto grid grid-cols-1 md:grid-cols-5 gap-4'>
      { extensions ?
        Object.entries(extensions).map((item: [string, number]) => {       
          const name = item[0]   
          const quantity = item[1]
          return (
            <Card key={name} name={name} quantity={quantity} />            
          )
        }) : null
      }
    </div>
  )
}
