import Image from "next/image";
import { Card } from "../ui";

export const VeganScanRef = () => {
  return (
    <>
      <div className="columns-2 gap-4 lg:gap-8 lg:space-y-8 space-y-4">
        <Card>
          <Image
            src={"/demo/demo.webp"}
            width={300}
            height={800}
            alt="React Native"
            className="w-full h-full object-contain"
          />
        </Card>
        <Card>
          <Image
            src={"/veganScanner/reactNative.png"}
            width={300}
            height={200}
            alt="React Native"
            className="w-full h-full object-contain"
          />
        </Card>
        <Card>
          <Image
            src={"/demo/demo2.webp"}
            width={300}
            height={800}
            alt="React Native"
            className="w-full h-full object-contain"
          />
        </Card>

        <Card>
          <Image
            src={"/veganScanner/expo.png"}
            width={300}
            height={200}
            alt="Expo Cli"
            className="w-full h-full object-contain px-16"
          />
        </Card>
        <Card>
          <Image
            src={"/demo/demo3.webp"}
            width={300}
            height={800}
            alt="React Native"
            className="w-full h-full object-contain"
          />
        </Card>
        <Card>
          <Image
            src={"/veganScanner/gemini.png"}
            width={300}
            height={200}
            alt="Expo Cli"
            className="w-full h-full object-contain px-16"
          />
        </Card>
        <Card>
          <Image
            src={"/demo/demo1.webp"}
            width={300}
            height={800}
            alt="React Native"
            className="w-full h-full object-contain"
          />
        </Card>
      </div>
    </>
  );
};
