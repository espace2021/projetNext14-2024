'use server'
import { revalidatePath } from 'next/cache'
import {addCategorie,deleteCategorie, fetchCategorieById, editCategorie} from '@/services/CategorieService'

export async function addCategory(prevState, formData) { 
    const nomcategorie= formData.get('nomcategorie')
    const imagecategorie= formData.get('imagecategorie')
    const categorie ={
        nomcategorie,
        imagecategorie
    }

    try {
        const result = await addCategorie(categorie);
        revalidatePath('/admin/categories')
       if(result.nomcategorie) return { message: `Created category ${result.nomcategorie}` }
       else  return { message: 'Failed to create category' }
    } catch (e) {
  return { message: 'Error : Failed to create category' }
}
}

export async function deleteCateg(_id,nomcategorie){
    try {
        const result = await deleteCategorie(_id)
        console.log(result)
         revalidatePath('/admin/categories')
      return { message: `Deleted category ${nomcategorie}` }
    } catch (e) {
      return { message: 'Failed to delete category' }
    }
  }

  export async function fetchOneCateg(_id) {
    try {
        const result = await fetchCategorieById(_id)
        return result 
    } catch (e) {
      return  null 
    }
  }
  

  export async function updateCategory(prevState, formData) {
    const _id= formData.get('_id')
    const nomcategorie= formData.get('nomcategorie')
    const imagecategorie= formData.get('imagecategorie')
    const categorie ={
        _id,
        nomcategorie,
        imagecategorie
    }

    try {
        const result = await editCategorie(categorie)
        revalidatePath('/admin/categories')
       if(result.nomcategorie) return { message: `Updated category ${result.nomcategorie}` }
       else  return { message: 'Failed to update category' }
    } catch (e) {
  return { message: 'Failed to update category' }
}
}
