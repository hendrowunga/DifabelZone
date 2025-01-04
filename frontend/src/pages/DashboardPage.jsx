import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import TopNavbar from "../components/TopNavbar";
import {routes} from "../layouts/MainLayout";

const DashboardPage = () => {
  // Menggunakan hook useNavigate untuk mengatur navigasi
  const navigate = useNavigate();

  // Mengambil data user dari local storage
  const user = JSON.parse(localStorage.getItem('user'));

  // useEffect untuk handle jika user belum login
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);
  
  // Fungsi untuk memformat tanggal
const formatDate = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    return new Date(date).toLocaleDateString('id-ID', options);
  };
  
  return (
    <>
      <TopNavbar routes={routes} />
      <Container className="mt-5">
        <h1 className="mb-3 border-bottom fw-bold">Dashboard</h1>
        <Row className="mb-4">
          <Col md={10}>
            <Card className="h-100 justify-content-center">
              <Card.Body>
                <h1 className="fw-bold display-6 mb-3">Selamat datang, {user?.username}!</h1>
                <p className="mb-0">Kamu sudah login sejak:</p>
                <p className="fw-bold lead mb-2">{formatDate(user?.loginAt)}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card>
              <Card.Body>
                <p>Bukti sedang ngantor:</p>
                <img src="https://via.placeholder.com/150" className="img-fluid rounded" alt="Tidak Ada Gambar" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardPage;