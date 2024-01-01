import {fetchSCategories} from "@/services/ScategorieService"
import UpdateProduct from '@/components/admin/updateProductComponent';
const getscategories=async()=>{
    const {data}=await fetchSCategories()
    return data;
}

const ProductUpdatePage = async({params}) => {
  const scategories = await getscategories();
  return (
    <div>
       <UpdateProduct params={params} scategories={scategories} />
    </div>
  )
}

export default ProductUpdatePage
