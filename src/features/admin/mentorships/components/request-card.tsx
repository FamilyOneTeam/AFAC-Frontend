export default function RequestCard({
  status,
  name,
  date,
}: {
  status: string;
  name: string;
  date: string;
}) {
  return (
    <div className="grid gap-4 bg-white rounded-md py-6 px-3">
      <div className="flex justify-between">
        <img src="/dashboard/home/mentorias.svg" alt="" />
        {status === "Completada" && (
          <>
            <p className="border-2 border-greenDark text-greenDark rounded-lg px-1 flex items-center">
              {status}
            </p>
          </>
        )}
        {status === "Pendiente" && (
          <>
            <p className="border-2 border-redDark text-redDark rounded-lg px-1 flex items-center">
              {status}
            </p>
          </>
        )}
        {status === "En revisión" && (
          <>
            <p className="border-2 border-yellowDark text-yellowDark rounded-lg px-1 flex items-center">
              {status}
            </p>
          </>
        )}
      </div>
      <div>
        <p className="font-semibold">Mentoría #</p>
        <p className="text-gray-500">{name}</p>
        <p className="text-gray-500">{date}</p>
      </div>
    </div>
  );
}
