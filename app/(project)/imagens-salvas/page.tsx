import { getDocumentsData } from "@/app/server/get-documents";
import Link from "next/link";

export default async function ImagensSalvas() {
  const data = await getDocumentsData();

  return (
    <div className="flex flex-col items-center h-screen gap-4 my-5">
      <Link href="/">Voltar</Link>
      {data?.map((item) => (
        <div
          key={item.id}
          className="border rounded-md p-4 flex flex-col gap-2 items-center"
        >
          <span className="text-lg font-bold">{item.name}</span>
          <div className="flex gap-2 overflow-x-auto">
            {item.uploadUrls.map((path) => (
              <img key={path} src={path} alt={item.name} className="w-56" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
