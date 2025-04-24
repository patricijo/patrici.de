import Image from "next/image";
import { Card } from "../ui";

export const VeganScanRef = () => {
  return (
    <>
      <div className="columns-2 gap-4 lg:gap-8 lg:space-y-8 space-y-4">
        <Card>
          <Image
            src={"/demo/demo.webp"}
            fill
            alt="React Native"
            className="w-full h-full max-w-[390px] object-contain"
          />
        </Card>
        <Card>
          <Image
            src={"/veganScanner/reactNative.png"}
            fill
            alt="React Native"
            className="w-full h-full max-w-[390px] object-contain"
          />
        </Card>
        <Card>
          <Image
            src={"/demo/demo2.webp"}
            fill
            alt="React Native"
            className="w-full h-full max-w-[390px] object-contain"
          />
        </Card>

        <Card>
          <Image
            src={"/veganScanner/expo.png"}
            fill
            alt="Expo Cli"
            className="w-full h-full max-w-[390px] object-contain px-16"
          />
        </Card>
        <Card>
          <Image
            src={"/demo/demo3.webp"}
            fill
            alt="React Native"
            className="w-full h-full max-w-[390px] object-contain"
          />
        </Card>
        <Card>
          <Image
            src={"/veganScanner/gemini.png"}
            fill
            alt="Expo Cli"
            className="w-full h-full max-w-[390px] object-contain px-16"
          />
        </Card>
        <Card>
          <Image
            src={"/demo/demo1.webp"}
            fill
            alt="React Native"
            className="w-full h-full max-w-[390px] object-contain"
          />
        </Card>
      </div>
    </>
  );
};
