import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowDown, XIcon } from "lucide-react";
import Image from "next/image";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[300px] md:w-[500px] lg:w-[900px] bg-gradient-to-br from-stone-400  to-stone-700 pb-6 lg:pb-16  ">
        <div className="p-2">
          <Image
            src={`/sun-behind-large-cloud.svg`}
            alt="cloud-with-lightning"
            width={100}
            height={100}
            className="object-contain h-16 w-16"
          />
        </div>
        <div className="flex items-center py-6 px-10   justify-center">
          <div className="flex items-center bg-white w-[300px] rounded-xl px-2">
            <Input
              className=" bg-transparent ring-0 ring-offset-0 focus-within:ring-0 focus-within:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
              placeholder="Search location"
            />
            <XIcon className="w-4 h-4" />
          </div>
        </div>
        <div className="flex  flex-col items-center justify-center space-y-4 py-2">
          {/* changes made */}
          <div className="flex items-center flex-col lg:flex-row">
            <Image
              src={`cloud-with-rain.svg`}
              alt="cloud-with-rain"
              width={100}
              height={100}
              className="object-contain h-24 w-24 md:h-28 md:w-28 lg:h-48 lg:w-48  "
            />

            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-2xl text-white md:text-4xl lg:text-5xl py-2">
                26° C
              </h3>

              <p className="mt-2 capitalize text-neutral-800 text-sm md:text-base lg:text-lg tracking-wider ">
                drizzel
              </p>

              <h3 className="text-sm md:text-xl lg:text-2xl text-white">
                Samoa,{" "}
                <span className="text-white font-semibold text-sm md:text-xl lg:text-2xl">
                  WS
                </span>
              </h3>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src={`/hygrometer.png`}
                    alt="hygrometer"
                    width={100}
                    height={100}
                    className="object-contain h-8 w-8 md:h-10 md:w-10 lg:w-12 lg:h-12"
                  />

                  <div className="flex flex-col text-white font-medium">
                    94%
                    <div>Humidty</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Image
                    src={`/windy.png`}
                    alt="wind"
                    width={100}
                    height={100}
                    className="w-8 h-8 invert"
                  />

                  <div className="flex flex-col text-white">
                    <div>3.5Km/s</div>
                    <div>Wind Speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white text-sm lg:pl-56 font-medium flex items-center space-x-4 capitalize">
            show more
            <ArrowDown className="w-4 h-4 ml-1 animate-bounce" />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Home;
