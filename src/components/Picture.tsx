import Image from "next/image";
import Shadow from "./Shadow";

const Picture: React.FC = () => {
  return (
    <div className={`relative aspect-square flex justify-center`}>
      <div
        className="top-0 mx-[5%] absolute"
        style={{
          transform: `translateY(4%) translateX(4%)`,
        }}
      >
        <Shadow>
          <Image src="/pp.png" alt="Picture" width={450} height={450} />
        </Shadow>
      </div>

      <div
        className={`bottom-0 absolute ml-[3%]   `}
        style={{
          transform: `perspective(1000px) rotateX(4deg) rotateY(4deg)`,
          transformStyle: "preserve-3d",
          marginRight: "5%",
        }}
      >
        <Shadow>
          <Image src="/cardboard.png" alt="Picture" width={450} height={450} />
        </Shadow>
      </div>
    </div>
  );
};

export default Picture;
