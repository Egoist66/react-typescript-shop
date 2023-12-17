import {IProduct} from "../models.ts";
import ErrorCatch from "./ErrorCatch.tsx";
import {useFormEngine} from "../hooks/FormEngine.ts";


 const productData : IProduct = {

    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }

}

interface createProductProps {
     onCreate: () => void
}

function Form({onCreate}:createProductProps) {

    const form = useFormEngine(productData, onCreate)


    return (

      <ErrorCatch error={form.ajaxError} errortext='Unable to send data. Network Error'>

          <form onSubmit={form.submitHandler}>

              <input onChange={form.valueChange}
                     value={form.value} placeholder='Enter product title'
                     className='border outline-none py-2 px-4 mb-2'
                     type="text"/>
              {form.InputError ? <p style={{color: "red", textAlign: "center"}}>Please add valid title</p> : null}


              <button
                  type='submit'
                  className='block  my-3 text-center px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm'>
                  {form.loading ? 'Sending...' : 'Create product'}
              </button>
          </form>


      </ErrorCatch>
    );
}

export default Form;