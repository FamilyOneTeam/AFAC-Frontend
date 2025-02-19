import { Button } from "@/components/ui/button";

export default function DeleteFamily({ setDeleteFamily }: { setDeleteFamily: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-500/50 flex items-center justify-center z-10">
        {/* Modal */}
        <div className="w-full max-w-md mx-4 bg-white rounded-md p-6 grid gap-8 shadow-lg">
          <div>
            <p className="text-redNormal font-semibold text-lg text-center">
              ¿Quieres eliminar esta familia?
            </p>
            <p className="font-semibold text-center">
              Se desactivará el acceso a la plataforma.
            </p>
          </div>
          <div className="flex gap-4 px-4">
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => setDeleteFamily(false)}
            >
              Cancelar
            </Button>
            <Button variant="error" className="w-full">
              Eliminar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
