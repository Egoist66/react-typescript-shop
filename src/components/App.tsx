// @ts-ignore
import Products from "./Products.tsx";
import Modal from "./Modal.tsx";
import Form from "./Form.tsx";
import {useState} from "react";



// @ts-ignore
const App = ({classname}) => {

    const [modal, setModal] = useState(true);

    const closeModal = () => {
        setModal(false)
    }

    return (

      <div className={classname}>

          <h1 className='text-3xl font-bold'>Shop</h1>
          <Products />


          {modal && <Modal  title='Product form'>

              <Form onCreate={closeModal}  />

          </Modal>}

      </div>

  )
}



export default App


