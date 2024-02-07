import "./_scan.scss";
//React-icon
import { BiQrScan } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
//Image File
// import qrcode from "../../assets/scan-image/qrcode.png";
import { Link } from "react-router-dom";
// import api from "../../ApiService";
import { GENERATE_QR } from "../../constant/ApiEndpoint";
import UseQueryRe from "../../customHooks/UseQueryRe";

export const QrScanner = () => {
  const [qrcode, setQrCode] = useState("");
  // const fetchData = async () => {
  //   await api
  //     .get(GENERATE_QR,"")
  //     .then((res) => {
  //       setQrCode(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // console.log(qrcode);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const { data } = UseQueryRe("qrGenerate", GENERATE_QR, "");
  useEffect(() => {
    setQrCode(data);
  }, [data]);

  return (
    <main className="scan bg-primary text-white">
      <div className="nav d-flex justify-content-between mx-4 py-4 align-items-center">
        <Link to="/home" className="text-decoration-none">
          <IoMdCloseCircleOutline className="closed text-white" />
        </Link>
        <h2 className="my-0">Scan QR Code</h2>
        <BiQrScan className="fs-1" />
      </div>
      <section className="text d-flex flex-column fs-4 mx-4 justify-content-center align-items-center">
        <p className="text-center">
          Please qr code inside the frame to scan please avoid shake to get
          result quickly.
        </p>
        <article className="bg-white  qr my-4 p-3">
          <img src={qrcode} alt="QrCode not found" />
        </article>
        <p>Scanning Code....</p>
      </section>
    </main>
  );
};
