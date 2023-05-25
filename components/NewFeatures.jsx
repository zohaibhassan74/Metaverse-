import styles from "../styles";
import { staggerContainer } from "./../utils/motion";

const NewFeatures = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="flex flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
      >
        <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
      </div>
      <h1 className="mt-[20px] font-bold text-[24px] text-white leading-[30px]">
        Title {title}
      </h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-32px">
        {subtitle}
      </p>
    </div>
  );
};

export default NewFeatures;
