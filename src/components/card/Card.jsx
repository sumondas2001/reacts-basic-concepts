import Img from "./Img"
import Titel from "./Titel"
import Price from "./Price"


export default function Card(props) {
     // console.log(props);
     return (
          <div>

               <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                         <img src="./img/img.jpg" alt="Shoes" class="rounded-xl" />
                    </figure>

                    <div class="card-body items-center text-center">
                         <h2 class="card-title">{props.title}</h2>
                         <p>If a dog chews shoes whose shoes does he choose?</p>
                         <div class="card-actions">
                              <button class="btn btn-primary">Buy Now</button>
                         </div>
                    </div>
                    <div className="text-xl font-bold text-center mb-4 text-white">
                         <h1>{props.price}</h1>

                    </div>

               </div>

          </div>
     )
}