import Image from "next/image";

const Picture: React.FC = () => {
  return (
    <div className={`relative aspect-square flex justify-center`}>
      <div
        className="top-0 mx-[5%] absolute"
        style={{
          transform: `translateY(4%) translateX(4%)`,
        }}
      >
        <Image src="/pp.png" alt="Picture" width={450} height={450} />
      </div>

      <div
        className={`bottom-0 absolute ml-[3%]   `}
        style={{
          transform: `perspective(1000px) rotateX(4deg) rotateY(4deg)`,
          transformStyle: "preserve-3d",
          marginRight: "5%",
        }}
      >
        <Image src="/cardboard.png" alt="Picture" width={450} height={450} />
      </div>
    </div>
  );
};

export default Picture;
