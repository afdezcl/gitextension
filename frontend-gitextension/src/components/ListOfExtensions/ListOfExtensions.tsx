import { Card } from "../Card/Card"

export const ListOfExtensions = ({ extensions }: { extensions: Record<string, number> }) => {
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
