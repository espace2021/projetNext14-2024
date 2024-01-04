'use client'
import React from 'react'
import { MaterialReactTable} from 'material-react-table';

import DeleteForm from './deleteCateg'

import EditCategForm from './editCategForm'
import { fetchOneCateg } from '@/lib/actionsCategorie'
import { useFormStatus } from 'react-dom'

const ListCategories = ({categories}) => {

    const [isEdit,setIsEdit]=React.useState(false)
    const [categorie, setCategorie]=React.useState("")
  
    const { pending } = useFormStatus()
  
    const columns = React.useMemo(
        () => [
            {
                accessorKey: 'imagecategorie', 
                header: 'Image',
                Cell: ({ cell }) => (
                       <img
                            src={cell.getValue()}
                            width={150}
                            height={250}
                            className="rounded-lg"
                            style={{maxWidth:'150px', maxHeight: "250px" }}
                            alt="Image Category"
                           />
                    )
                 },
          {
            accessorKey: 'nomcategorie', 
            header: 'Name',
            size: 150,
          },
          {
            accessorKey: '_id',
            header: 'Actions',
            size: 100,
            Cell: ({ cell, row }) => (
                <div >
                    
                <form
                action={async () => {
                    const res = await fetchOneCateg(cell.row.original._id)
                    setCategorie(res)
                    setIsEdit(true)
                }}
                >
                <button type="submit" disabled={pending} className="btn btn-ghost text-success">
                    Edit
                </button>
                </form>  

                    <DeleteForm
                    _id={cell.row.original._id}
                    nomcategorie={cell.row.original.nomcategorie}
                  />

                </div>
            ),
        },
          ],
        [],
      );

  return (
    <>
    <MaterialReactTable columns={columns} data={categories} />
    {isEdit ? <EditCategForm categorie={categorie} />
    :null}
   </>
 )
}

export default ListCategories
