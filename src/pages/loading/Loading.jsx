import "./_loading.scss";
import loadingImg from "../../assets/loading-image/oceanJpg.jpg";

export const Loading = () => {
  return (
    <div id="loadIcon">
      <div id="iconContainer">
        <div id="circle"></div>
        <img src={loadingImg} alt="ocean loading...." />
      </div>
    </div>
  );
};
