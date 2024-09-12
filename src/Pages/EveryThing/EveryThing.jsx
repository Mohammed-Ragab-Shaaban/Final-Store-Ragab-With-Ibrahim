import AllProducts from "./AllProducts";
import ProductsFilter from "./ProductsFilter";

export default function EveryThing() {
  return (
    <div className="py-5" style={{backgroundColor:"var(--bgProducts)"}} >
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col-12 col-md-4 border-end border-bottom p-2 "> <ProductsFilter /> </div>
                <div className="col-12 col-md-8 "> <AllProducts /> </div>
            </div>

        </div>
    </div>
  )
}
