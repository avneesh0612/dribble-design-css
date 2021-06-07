import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Main() {
  return (
    <div className="flex justify-center flex-col mt-5 ml-[10%]">
      <div className="flex flex-col">
        <p>New Collection</p>
        <p>2021</p>
      </div>

      <h1 className="font-bold text-8xl font-designery">Summer</h1>
      <h1 className="font-bold text-8xl ml-20 font-designery">Dreams</h1>
      <div className="flex items-center justify-center mt-5 !pr-28">
        <h3 className="text-xl p-2 ring-2 ring-primary_purple">
          Discover The Collection
        </h3>
        <ArrowNarrowRightIcon className="border-2 p-2 h-[48px] w-10 ml-[2px] border-primary_purple border-l-0" />
      </div>

      <div className="flex absolute bottom-0 left-0">
        <Image
          className="!mr-3"
          width={192}
          height={192}
          src="https://images.unsplash.com/photo-1503058902370-dbb24d772e41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        />
        <Image
          className="!ml-3"
          width={192}
          height={192}
          src="https://images.unsplash.com/photo-1603507311949-07c0aeee4fe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        />
      </div>
    </div>
  );
}

export default Main;
