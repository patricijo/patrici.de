import { VeganScanRef } from "../references/veganScan";
import { Button } from "../ui";

export const References = () => {
  return (
    <>
      <div className="snap-start flex flex-col md:flex-row space-x-4">
        <div className="md:sticky md:top-0 md:left-0 flex md:flex-1/3 md:h-screen items-center p-4">
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
        <div className="md:flex-2/3 my-[25%] p-4">
          <VeganScanRef />
        </div>
      </div>
      <div className="snap-start flex flex-col md:flex-row space-x-4">
        <div className="md:sticky md:top-0 md:left-0 flex md:flex-1/3 md:h-screen items-center p-4">
          <div className="space-y-4">
            <h1 className=" text-4xl font-black w-fit">Linkhub</h1>
            <p>Alinkhubfsd f</p>
          </div>
        </div>
        <div className="md:flex-2/3 my-[25%] p-4">
          <VeganScanRef />
        </div>
      </div>
    </>
  );
};
