import axios from "axios";
import ImgMan from "../assets/images/img-man.png";
import { useEffect, useState } from "react";

function Card() {
  const [data, setData] = useState([]);
  const [error, setIsError] = useState(false);
  const [isPending, setIsPending] = useState(true);

  const parseImageURL = (imageString) => {
    try {
      if (imageString.startsWith("{") && imageString.endsWith("}")) {
        imageString = imageString.slice(1, -1);
      }
      imageString = imageString.replace(/"/g, "");
      return imageString;
    } catch (e) {
      console.error("Error parsing image URL:", e);
      return null;
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://be-ppdb-online-update.vercel.app/api/v1/major"
      );
      console.log("API Response:", res.data);
      setData(res.data.data); // Asumsi bahwa data yang diterima adalah array of objects
      setIsPending(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError(true);
      setIsPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  return (
    <div className="container">
      <div className="title-major  mb-5">
        <h3 className="title-major-major mb-4">Yuk Kenali Minat Kamu</h3>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-centerrow row-cols-1 row-cols-md-3 g-4 justify-content-center">
        {data.map((major) => (
          <div className="col" key={major.id}>
            <div className="card h-100">
              <img
                src={parseImageURL(major.major_picture) || ImgMan}
                className="mt-2 mx-auto d-block"
                alt={major.major_name}
                style={{ maxWidth: "3000px", maxHeight: "auto" }}
              />
              <div className="card-body">
                <h5 className="title-card">{major.major_name}</h5>
                <p className="card-text">{major.major_description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-major">
        <p className="text-center">
          Bidang keahlian di SMK 3 Muhammadiyah memiliki prestasi dan potensi
          masing-masing, raih prestasimu dan daftarkan segera!
        </p>
      </div>
    </div>
  );
}

export default Card;
