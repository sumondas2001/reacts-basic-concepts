import { useEffect, useState } from "react"

export default function UseState() {
     const arrayOfObjects = [
          { id: 1, name: "John" },
          { id: 2, name: "Alice" },
          { id: 3, name: "Bob" },
          { id: 4, name: "Emily" },
          { id: 5, name: "David" },
          { id: 6, name: "Sarah" },
          { id: 7, name: "Michael" },
          { id: 8, name: "Olivia" },
          { id: 9, name: "James" },
          { id: 10, name: "Emma" }
     ];
     const [data, setValue] = useState(arrayOfObjects)
     const hendelAllRemove = () => {
          setValue([])
     }
     const handelRemove = (id) => {
          // console.log(id)
          const remove = data.filter(item => item.id !== id);
          setValue(remove);
     }


     return (

          <div className="text-center font-mono text-2xl text-white m-9">
               {
                    data.map(value => (
                         <div>
                              <h1>{value.name}</h1>
                              <button onClick={() => handelRemove(value.id)} className="btn btn-secondary">Remove</button>
                         </div>
                    ))
               }
               <button onClick={hendelAllRemove} className="btn btn-accent mt-4">All Remove</button>

          </div>

     )
}