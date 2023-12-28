import Menu from '@/components/client/menu';
import CarouselHome from '@/components/client/carouselHome'
import MainGridHome from '@/components/client/mainGridHome';
import MeilleuresOffres from '@/components/client/meilleuresOffres';
import Footer from '@/components/client/footer';
import CategoriesMenu from '@/components/client/categoriesMenu';
export default function Home() {
  return (
    <>
     <Menu><CategoriesMenu/></Menu>
     <CarouselHome />
     <MainGridHome />
     <MeilleuresOffres /> 
     <Footer/>
    </>
  )
}
