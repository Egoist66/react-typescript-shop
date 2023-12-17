import {IProduct} from "../models.ts";
import {useState} from "react";

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) =>{

    const [isVisible, setVisibility] = useState(false);

    const handleVisibility = () => {
        setVisibility(isVisible => !isVisible)
    }

    return (

        <div className='product border py-2 px-4 rounded flex flex-col items-center mb-2'>

            <div className='card'>

                <h3><strong>Title: </strong>{product.title}</h3>
                <p><strong>Price: </strong>{product.price}$</p>
                <p><strong>Category: </strong>{product.category}</p>
                <div>
                    <img className='w-1/6' src={product.image} alt={product.title}/>
                </div>

                {isVisible ? <p className='py-3'><strong>Description: </strong>{product.description}</p> : null}
                <div>
                    <button
                        onClick={handleVisibility}
                        className='my-3 px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm'>
                        {isVisible ? 'Hide details' : 'Show details'}
                    </button>
                </div>

            </div>


        </div>
    )
}

export default Product