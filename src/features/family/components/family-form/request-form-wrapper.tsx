import { Button } from "@/components/ui";
import RequestForm from "./request-form";

export default function RequestFormWrapper({
  setRequestForm,
}: {
  setRequestForm: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation();
    setRequestForm(false);
  };

  return (
    <>
      {/* Overlay - Fixed position, prevents background scrolling */}
      <div className="fixed inset-0 bg-gray-500/50 flex items-center justify-center z-10 overflow-hidden">
        {/* Modal wrapper - Handles scrolling for the entire modal */}
        <div className="relative w-full h-full md:h-auto flex items-center justify-center p-4">
          {/* Modal content - Scrollable container with max-height */}
          <div className="w-[97%] md:max-w-fit bg-white rounded-sm shadow-lg max-h-[90vh] flex flex-col">
            {/* Header - Fixed at top */}
            <div className="p-6 border-b flex items-center justify-between shrink-0">
              <h3 className="font-semibold text-lg md:text-xl">
                Solicitar Mentoría
              </h3>
              <Button
                onClick={handleClose}
                type="button"
                className="bg-transparent p-0 py-0 m-0 hover:bg-transparent"
              >
                <img src="/common/cerrar-dialogo.svg" alt="cerrar el dialogo" />
              </Button>
            </div>

            {/* Scrollable content area */}
            <div className="p-6 overflow-y-auto">
              <div className="grid gap-6">
                <RequestForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
