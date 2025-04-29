import Link from "next/link";
import { Button } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export default function Home() {
  return (
    <div className="relative text-gray-200">
      <section
        id="impressum"
        className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl w-full space-y-8">
          <div className="mb-6 inline-flex ">
            <Link href="/">
              <Button className="w-auto">
                <div className="flex items-center gap-2">
                  <ArrowLeft size={18} />
                  Back to Home
                </div>
              </Button>
            </Link>
          </div>
          <div className=" bg-black/40 p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-extrabold mb-6 text-white">
              Impressum
            </h1>
            <h2 className="text-xl font-semibold mb-4 text-gray-200">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mb-6">
              Sebastian Patrici Gil
              <br />
              E-Mail:{" "}
              <a
                href="mailto:sebastian.patrici@gmail.com"
                className="text-blue-400 hover:underline transition-colors"
              >
                sebastian.patrici@gmail.com
              </a>
            </p>
            <h2 className="text-xl font-semibold mb-4 text-gray-200">
              Hinweis
            </h2>
            <p className="text-gray-400">
              Diese Webseite dient ausschließlich der Präsentation von
              Arbeitsproben für Bewerbungen bei sozialversicherungspflichtigen
              Stellen und verfolgt keine geschäftsmäßigen Ziele.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
