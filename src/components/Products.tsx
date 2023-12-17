import Product from "./Product.tsx";
import Loader from "./Loader.tsx";
import ErrorCatch from "./ErrorCatch.tsx";
import {useProductEngine} from "../hooks/ProductsEngine.ts";

const Products = () => {


    const {loading, data, error, LoadProductByCount} = useProductEngine();

    return (
        <>
            {loading && <Loader />}
            <ErrorCatch errortext='Something went wrong...' error={error}>

                {data.map(item => <Product key={item.id} product={item} />)}

            </ErrorCatch>

            <button
                onClick={LoadProductByCount}
                className='my-3 text-center px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm'>
                {loading ? 'Loading...': 'Load More'}
            </button>
        </>
    )
}

export default Products