import { Card } from "../Card/Card"
import { Toast } from "../Toast/Toast"

export const ListOfExtensions = ({ extensions, error }: { extensions: Record<string, number>, error: boolean }) => {

  if (error) return <Toast/>

  return (
    <div className='mx-auto grid grid-cols-1 md:grid-cols-5 gap-4'>
      {
        Object.entries(extensions).map((item:any) => {          
          return (
            <Card key={item[0]} name={item[0]} quantity={item[1]} />            
          )
        })
      }
    </div>
  )
}
