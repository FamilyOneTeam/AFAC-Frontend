import { Button } from "@/components/ui";

export default function FamilyCard({
  name,
  date,
  state,
  setDeleteFamily,
  setEditFamily
}: {
  id: number;
  name: string;
  date: string;
  state: string;
  setDeleteFamily: React.Dispatch<React.SetStateAction<boolean>>;
  setEditFamily: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <section className="bg-white p-4 rounded-lg flex justify-between">
      <div className="flex gap-x-4 items-center">
        <div>
          <img src="/dashboard/home/listado.svg" alt="" />
        </div>
        <div>
          <p className="font-semibold">Familia #</p>
          <p className="text-gray-500">{name}</p>
          <p className="text-gray-500">{date}</p>
        </div>
      </div>
      <div className="flex items-center ">
        <p className="text-sm text-greenDark border px-1 m-2 md:m-4 border-greenDark rounded-lg">
          {state}
        </p>
        <Button
          type="button"
          variant={"ghost"}
          className="hover:bg-transparent p-2 md:p-4"
          onClick={() => setEditFamily(true)}
        >
          <img src="/common/edit.svg" alt="editar" className="p-2 md:p-4" />
        </Button>
        <Button
          type="button"
          variant={"ghost"}
          className="hover:bg-transparent p-2 md:p-4"
          onClick={() => setDeleteFamily(true)}
        >
          <img src="/common/delete.svg" alt="borrar" className="" />
        </Button>
      </div>
    </section>
  );
}