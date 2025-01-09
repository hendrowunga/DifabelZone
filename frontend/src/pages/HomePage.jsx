import { Container, Row, Col } from 'react-bootstrap';
import ImageCarousel from '../components/ImageCarousel';
import imgBakery1 from '../assets/images/bakery1.jpeg';
import imgBakery2 from '../assets/images/bakery2.jpeg';
import imgBakery3 from '../assets/images/bakery3.jpeg';
import TopNavbar from "../components/TopNavbar";
import imgFeaturette1 from '../assets/images/featurette-1.jpg';
import imgFeaturette2 from '../assets/images/featurette-2.jpg';
import {routes} from "../layouts/MainLayout";

const images = [
  {
    img: imgBakery1,
    title: 'First slide label',
    description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    img: imgBakery2,
    title: 'Second slide label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: imgBakery3,
    title: 'Third slide label',
    description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  },
];

const HomePage = () => {
  return (
    <>
      <TopNavbar routes={routes} />
      <ImageCarousel images={images} />
      <Container className="mt-5">
      <Row>
        <Col md={7}>
          <h2 className="fw-normal">
            Bakery pertama dan satu-satunya <strong className="text-primary">yang fiksional</strong>.
          </h2>
          <p className="lead">
            Dibuat oleh <strong className="text-primary">[namaLengkap]</strong>, Mahasiswa Universitas Atma Jaya Yogyakarta dari program studi Informatika.
          </p>
          <p className="lead">
            Nomor Pokok Mahasiswa: <strong className="text-primary">[NPM]</strong>.
          </p>
        </Col>
        <Col md={5}>
          <img src={imgFeaturette1} className="img-fluid mx-auto rounded shadow" alt="Gambar featurette 1" />
        </Col>
      </Row>
      <hr className='mt-5 mb-5'/>
      </Container>
    </>
  );
};

export default HomePage;