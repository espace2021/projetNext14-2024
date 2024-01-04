'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { updateCategory} from '@/lib/actionsCategorie'
import { useEffect, useState, useRef } from 'react'
import toast from 'react-hot-toast'
import Modal from 'react-bootstrap/Modal';

export default function EditCategForm({categorie}) { 

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [state, formAction] = useFormState(updateCategory, {
    message: '',
  })

  const { pending } = useFormStatus()

  const ref = useRef()

  useEffect(() => { 
     setShow(true)
 }, [categorie])

  useEffect(() => { 
     if (state.message){
      setShow(false)
      ref.current?.reset()
      toast(state.message)
    }
  }, [state.message])

  return (
    <div>
        <Modal show={show} onHide={handleClose}>
      <form ref={ref} action={formAction}>
        <Modal.Header closeButton>
          <Modal.Title>  <h2 className="tex-2xl font-bold pm-4">Modification Catégorie</h2> </Modal.Title>
        </Modal.Header>

        <Modal.Body>
         
          <input
                type="hidden"
                id="_id"
                name="_id"
                value={categorie._id} 
                />
            <div className="form-control w-full max-w-xs py-4">
              <label htmlFor="nomcategorie">Name</label>
              <input
                type="text"
                id="nomcategorie"
                name="nomcategorie"
                className="input input-bordered w-full max-w-xs"
                required
                defaultValue={categorie.nomcategorie} 
              />
            </div>
            <div className="form-control w-full max-w-xs py-4">
              <label htmlFor="image">Image</label>
              <input
                type="text"
                id="imagecategorie"
                name="imagecategorie"
                className="input input-bordered w-full max-w-xs"
                required
                defaultValue={categorie.imagecategorie} 
              />
            </div>
            </Modal.Body>

            <Modal.Footer>
            <button
              className="btn btn-primary mr-3"
              type="submit"
              disabled={pending}
            >
              Valider
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={handleClose}
            >
              Back
            </button>
            </Modal.Footer>
            </form>
          </Modal>
    </div>
  )
}
