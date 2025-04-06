import { VeganScanRef } from "../references/veganScan";
import { Button } from "../ui";

export const References = () => {
  return (
    <div>
      <div className="flex snap-start">
        <div className="md:sticky top-0 left-0 h-screen items-center flex flex-1/3 p-4">
          <div className="space-y-4">
            <h1 className=" text-4xl font-black w-fit">Vegan Scanner</h1>
            <p>
              A App Which allows to scan the ingridientlist of any produkt and
              analyze it to check if the ingridients are vegan.
            </p>
            <Button>Download APK</Button>
            <Button>App Store (soon)</Button>
          </div>
        </div>
        <div className="flex-2/3 my-[25%]">
          <VeganScanRef />
        </div>
      </div>
      <div className="flex snap-start">
        <div className="md:sticky top-0 left-0 h-screen items-center flex flex-1/3 p-4">
          <div className="space-y-4">
            <h1 className=" text-4xl font-black w-fit">Linkhub</h1>
            <p>Alinkhubfsd f</p>
          </div>
        </div>
        <div className="flex-2/3 my-[25%]">
          <VeganScanRef />
        </div>
      </div>
    </div>
  );
};
