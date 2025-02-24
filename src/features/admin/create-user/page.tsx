import { useState } from "react";
import { Button } from "@/components/ui";
import CreateUserForm from "./form";

interface CreateUserProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateUser({ isOpen, onClose }: CreateUserProps) {
  const [changeText, setChangeText] = useState(false);
  if (!isOpen) return null;
  const handleClose = () => {
    setChangeText(false);
    onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-gray-500/50 flex items-center justify-center z-10 overflow-hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full h-full md:h-auto flex items-center justify-center p-4">
        <div className="w-[97%] md:max-w-xl bg-white rounded-sm shadow-lg flex flex-col">
          <div className="p-6 border-b flex items-center justify-between shrink-0">
            <div>
              <h3 className="font-semibold text-lg md:text-xl">
                {changeText ? "¡Usuario creado con éxito!" : "Nuevo Usuario"}
              </h3>
              {changeText && (
                <p className="text-sm font-semibold">
                  Estas son las credenciales.
                </p>
              )}
            </div>
            <Button
              type="button"
              className="bg-transparent p-0 py-0 m-0 hover:bg-transparent"
              onClick={handleClose}
            >
              <img src="/common/cerrar-dialogo.svg" alt="cerrar el dialogo" />
            </Button>
          </div>
          <div className="p-6 overflow-y-auto">
            <div>
              <CreateUserForm
                handleClose={handleClose}
                setChangeText={setChangeText}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
