import React from "react";
import Hero from "../../components/Hero/Hero";
import Img from "../../assets/images/img-student.png";
import NavbarGet from "../../components/Navbar/NavbarGet";
import Box from "../../components/Ui/Box/Box";
import { Button } from "../../components/Ui/Button/Button";
import { useNavigate } from "react-router";

export default function Article(props) {
  const navigate = useNavigate();
  function handleClick(route) {
    navigate(route);
  }
  return (
    <>
      <NavbarGet />

      <Hero title="Pengumuman" img={Img}></Hero>
      <Box>
        <style>
          {`
            .announcement {
              background-color: #ffffff;
              border: 1px solid #ddd;
              border-radius: 8px;
              padding: 20px;
              max-width: 600px;
              margin: 20px auto;
              box-shadow: 0 0 10px rgba(0,0,0,0.1);
              font-family: Arial, sans-serif;
              color: #333;
            }
            .announcement h1 {
              font-size: 24px;
              color: #333;
              margin-top: 0;
            }
            .announcement p {
              font-size: 16px;
              color: #555;
              line-height: 1.5;
              margin: 10px 0;
            }
            .announcement .date {
              font-weight: bold;
              color: #333;
              background-color: #e0f7fa;
              padding: 10px;
              border-radius: 5px;
              margin-top: 20px;
            }
            .announcement .note {
              background-color: #e8f5e9;
              padding: 10px;
              border-radius: 5px;
              font-size: 14px;
              color: #00796b;
              margin-top: 20px;
            }
              
          `}
        </style>

        <div className="announcement">
          <h1>
            <b>Hai, calon siswa SMK 3 Muhammadiyah Yogyakarta! 😊</b>
          </h1>
          <br />
          <p>
            Kamu telah menyelesaikan pendaftaran kalian. Sekarang waktunya untuk
            melangkah ke tahap berikutnya – wawancara!
          </p>
          <div className="date">
            📅 <strong>Jadwal Wawancara:</strong>
            <br /> Tanggal: Rabu, 05 November 2025
            <br />
            Waktu: 08.00 WIB - 12.00 WIB
            <br />
            Lokasi: Hall SMK 3 Muhammadiyah Yogyakarta
          </div>
          <p>
            Jangan lupa datang 15 menit lebih awal, periksa kembali apakah data
            kamu sudah sesuai. Kalau ada yang bingung atau butuh info lebih
            lanjut, jangan ragu untuk kontak kami ya!
          </p>
          <div className="note">
            Kami gak sabar untuk bertemu dan mengenal kalian lebih dekat.
            Semangat dan sampai jumpa! 🌟
          </div>
        </div>
        <div>
          <div className="d-grid gap-5 d-md-flex justify-content-md-end mt-5">
            <Button
              className="btn btn-primary me-md-5 mb-5"
              type="button"
              onClick={() => handleClick("/dataSiswa")}
            >
              Lihat Data Anda
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
}
