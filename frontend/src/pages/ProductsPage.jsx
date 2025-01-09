import { Container } from "react-bootstrap";
import TopNavbar from "../components/TopNavbar";
import ProductCard from "../components/ProductCard";
import {routes} from "../layouts/MainLayout";

const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '/products/:id',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    // More products...
];

const ProductsPage = () => {
  return (
    <Container className="mt-5">
        <TopNavbar routes={routes}/>
        <ProductCard products={products}/>
    </Container>
  );
};

export default ProductsPage;
