export default function FollowUpCard({ status, name, place}: {status: string, name: string, place: string}) {
    return (
      <div className="grid gap-4 bg-white rounded-md py-6 px-3">
        <div className="flex justify-between">
          <img src="/dashboard/home/seguimiento.svg" alt="" />
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
        </div>
        <div>
          <p className="font-semibold">Seguimiento #</p>
          <p className="text-gray-500">{name}</p>
          <p className="text-gray-500">{place}</p>
        </div>
      </div>
    );
}