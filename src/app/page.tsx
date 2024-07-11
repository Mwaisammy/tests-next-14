// "use client";
import ReactHookForm from "@/components/react-hook-form";
import { useProductStore } from "@/hooks/use-product-store";
import { redis } from "@/lib/redis";

async function Home() {
  const id = "826131ba-1944-462d-ab34-b3822912854a";

  const data = await redis.get(`key-${id}`);
  console.log(data);
  // const { count, addCount, removeCount } = useProductStore();
  return (
    <div>
      <ReactHookForm />
    </div>
    // <div className="flex items-center justify-center pt-54">
    //   {/* <p>Home Page</p> */}
    //   <div className="flex items-center gap-3">
    //     <h1 className="font-bold">{count}</h1>
    //     <button
    //       onClick={addCount}
    //       className="p-5 text-white bg-green-400 rounded-sm "
    //     >
    //       Increase
    //     </button>
    //     <button
    //       onClick={removeCount}
    //       className="p-5 text-white bg-rose-400 rounded-sm"
    //     >
    //       Decrease
    //     </button>
    //   </div>
    // </div>
  );
}

export default Home;
