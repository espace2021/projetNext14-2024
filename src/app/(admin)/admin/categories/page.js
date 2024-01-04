import ListCategories from "@/components/admin/categoriesComponents/listCategories"
import {fetchCategories} from "@/services/CategorieService";

import { Toaster } from 'react-hot-toast'
import CreateForm from '@/components/admin/categoriesComponents/createcateg'

async function getData() {
    const data=await fetchCategories()
    return data;
  }
   
  export default async function Page() {
    const data = await getData()
   return (
    <div>
    <Toaster />
    <CreateForm /> 
    <ListCategories categories={data} />
    </div>
   );
  }
