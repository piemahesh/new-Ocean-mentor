import "./_batchboard.scss";

import { Link, useNavigate } from "react-router-dom";

import circle from "../../assets/background-image/Ellipse 347.svg";
import student from "../../assets/student-images/student.avif";
import trophy1 from "../../assets/tropy-images/trophy1.svg";
import trophy2 from "../../assets/tropy-images/trophy2.svg";
import trophy3 from "../../assets/tropy-images/trophy3.svg";

import { FaAward } from "react-icons/fa";
import { AiOutlineInfoCircle, AiFillStar } from "react-icons/ai";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useParams } from "react-router-dom";
import UseQueryRe from "../../customHooks/UseQueryRe";
import { BATCHBOARD } from "../../constant/ApiEndpoint";

export const BatchBoard = () => {
  const { batchId } = useParams();

  const navigate = useNavigate();
  const { data } = UseQueryRe("batchBoard", BATCHBOARD, batchId);
  const datas = data || [];

  const handleNavigate = () => {
    navigate(-1);
  };
  const firstRank = datas[0];
  const secondRank = datas[1];
  const thirdRank = datas[3];
  return (
    <main className="batch">
      <div className="batch-header position-relative">
        <section>
          <img
            className="circle1 position-absolute"
            src={circle}
            alt="not found"
          />
          <img
            className="circle2 position-absolute"
            src={circle}
            alt="not found"
          />
          <img
            className="circle3 position-absolute"
            src={circle}
            alt="not found"
          />
          <img
            className="circle4 position-absolute"
            src={circle}
            alt="not found"
          />

          <img
            className="circle5 position-absolute"
            src={circle}
            alt="not found"
          />
        </section>
        <nav className="sticky-top d-flex justify-content-between align-items-center text-white px-3 w-100">
          <article className="d-flex align-items-center ">
            <Link onClick={handleNavigate} className="text-decoration-none">
              <MdOutlineKeyboardArrowLeft className="left-arrow text-white" />
            </Link>
            <p className="m-0 fs-4">
              <span className="award">
                <FaAward className="fs-5" />
              </span>
              BatchBoard
            </p>
          </article>
          <Link to="/batchinfo" className="text-decoration-none">
            <AiOutlineInfoCircle className="info text-white" />
          </Link>
        </nav>
        <div className="batch-trophy d-flex justify-content-between align-items-end my-5 px-5 w-100">
          <article className="d-flex flex-column align-items-center">
            <img className="trophy2" src={trophy2} alt="trophy2 not found" />
            <span className="text-white py-2 fw-bold">2</span>
          </article>
          <article className="trophy1 d-flex flex-column align-items-center">
            <img src={trophy1} alt="trophy1 not found" />
            <span className="text-white py-2 fw-bold">1</span>
          </article>
          <article className="d-flex flex-column align-items-center">
            <img className="trophy3" src={trophy3} alt="trophy3 not found" />
            <span className="text-white py-2 fw-bold">3</span>
          </article>
        </div>
        <section className="batch-trophy-win position-relative bg-white w-100 d-flex align-items-end">
          <div className="batch-trophy-win1 bg-white d-flex flex-column align-items-center">
            <section className="d-flex align-items-center justify-content-center border position-relative">
              <AiFillStar className="star text-warning position-absolute" />
              <span className="number position-absolute">2</span>
            </section>
            <article className="d-flex flex-column align-items-center">
              <img
                className="trophy-winner border-primary border mt-4"
                src={secondRank?.photo || student}
                alt="not found"
              />
            </article>
            <article className="batch-trophy-text my-2 text-center">
              <p className="m-0 fw-bold">
                {secondRank?.name || "second place"}
              </p>
              <span className="text-secondary">
                <pre> </pre>
              </span>
            </article>
          </div>
          <div className="batch-trophy-win2 bg-white d-flex flex-column align-items-center">
            <section className="d-flex align-items-center justify-content-center border position-relative">
              <AiFillStar className="star position-absolute" />
              <span className="number position-absolute fw-bold">1</span>
            </section>
            <article className="d-flex flex-column align-items-center">
              <img
                className="trophy-winner border-primary border mt-4"
                src={firstRank?.photo || student}
                alt="not found"
              />
            </article>
            <article className="batch-trophy-text my-2 text-center">
              <p className="m-0 fw-bold">{firstRank?.name || "First place"}</p>
              <span className="text-secondary">
                <pre> </pre>
              </span>
            </article>
          </div>
          <div className="batch-trophy-win3 bg-white position-relative d-flex flex-column align-items-center">
            <section className="d-flex align-items-center justify-content-center border position-relative">
              <AiFillStar className="star text-warning position-absolute" />
              <span className="number position-absolute">3 </span>
            </section>
            <article className="d-flex flex-column align-items-center">
              <img
                className="trophy-winner border-primary border mt-4"
                src={thirdRank?.photo || student}
                alt="not found"
              />
            </article>
            <article className="batch-trophy-text my-2 text-center">
              <p className="m-0 fw-bold">{thirdRank?.name || "third place"}</p>
              <span className="text-secondary">
                <pre> </pre>
              </span>
            </article>
          </div>
        </section>
      </div>

      <StudentTask datas={datas} />
    </main>
  );
};

export const StudentTask = ({ datas }) => {
  return (
    datas &&
    datas.map((e, i) => {
      return (
        <main
          className="StudentTask border d-flex align-items-center justify-content-between  "
          key={i}
        >
          <div
            style={{
              height: "80px",
              width: "80px",
              minWidth: "80px",
              overflow: "hidden",
              border: "2px solid black",
              borderRadius: "50%",
            }}
          >
            <img
              src={e?.photo}
              alt="img"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>

          <section className="d-flex justify-content-between">
            <div>
              <h5 className="text-primary">{e?.name}</h5>
            </div>
          </section>
          <div className=" d-flex starCont justify-content-center align-items-center position-relative">
            <AiFillStar className="star position-absolute  text-primary" />
            <span className="number position-absolute  text-white">
              {i + 1}
            </span>
          </div>
        </main>
      );
    })
  );
};
