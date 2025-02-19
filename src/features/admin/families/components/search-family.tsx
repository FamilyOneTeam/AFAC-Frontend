import { Input } from "@/components/ui";

export default function SearchFamily() {
    return (
      <>
        <div>
          <div className="relative">
            <Input
              placeholder="Buscar familia"
              className="bg-white border-0 rounded-full md:w-2/5 mb-2 pl-10"
            />
            <img
              src="/dashboard/families/search-normal.svg"
              alt="busca por nombre y apellido"
              className=" absolute top-2 left-2"
            />
          </div>
          <p className="text-sm font-semibold">
            Puede buscar por nombre y apellido.
          </p>
        </div>
      </>
    );
}