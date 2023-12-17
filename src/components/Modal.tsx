import React, {useState} from "react";

interface ModalProps {
    children: React.ReactNode,
    title: string
}

const Modal = ({children, title}: ModalProps) => {

    const [isClosed, setCloseModal] = useState(false);

    const handleClose = () => {
        setCloseModal(true)
    }

    return (

        <>

            <div onClick={handleClose} style={{display: isClosed ? 'none' : 'block'}} className='w-full fixed bg-black/50 top-0 r-0 left-0 bottom-0'>
                <button onClick={handleClose} style={{fontSize: 36, color: "white"}}>&times;</button>
            </div>
            {isClosed ?
                null :
                <div className='w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2'>

                <h2 className='text-2xl text-center mb-2'>{title}</h2>
                {children}
            </div>}


        </>

    )
}

export default Modal;

