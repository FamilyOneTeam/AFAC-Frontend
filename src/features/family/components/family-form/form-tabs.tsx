import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { FaCircleArrowDown } from "react-icons/fa6";

type FormKey = "personal" | "familia" | "estado";

const labels: Record<FormKey, string> = {
  personal: "Datos personales del Representante",
  familia: "Datos de la Familia",
  estado: "Estado de Acogimiento",
};

export default function FamilyFormTabs({
  setForm,
  form,
}: {
  form: string;
  setForm: React.Dispatch<React.SetStateAction<string>>;
}) {

  const handleDropdownChange = (value: string) => {
    const newValue = value as FormKey;
    setForm(newValue);
  };
  return (
    <>
      <Tabs defaultValue="personal" className="w-full hidden md:grid">
        <TabsList className="bg-transparent">
          <div className={`${form === "personal" ? "bg-greenLight" : ""} w-full`}>
            <TabsTrigger
              value="personal"
              onClick={() => setForm("personal")}
              className={`border-0 w-full data-[state=active]:border-0`}
            >
              Datos personales del Representante
            </TabsTrigger>
          </div>
          <div className={`${form === "familia" ? "bg-greenLight" : ""} w-full`}>
            <TabsTrigger
              value="familia"
              onClick={() => setForm("familia")}
              className="w-full border-0 data-[state=active]:border-0"
            >
              Datos de la Familia
            </TabsTrigger>
          </div>
          <div className={`${form === "estado" ? "bg-greenLight" : ""} w-full`}>
            <TabsTrigger
              value="estado"
              onClick={() => setForm("estado")}
              className="w-full border-0 data-[state=active]:border-0"
            >
              Estado de Acogimiento
            </TabsTrigger>
          </div>
        </TabsList>
      </Tabs>
      <div className="block md:hidden relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full p-0 relative hover:bg-greenLight"
            >
              {labels[form as FormKey]}
            </Button>
          </DropdownMenuTrigger>
          <FaCircleArrowDown className=" absolute bottom-3 right-4 text-greenNormal hover:cursor-pointer" />
          <DropdownMenuContent className="w-[93.5vw] bg-gray-50 ml-4">
            <DropdownMenuRadioGroup
              value={form}
              onValueChange={handleDropdownChange}
            >
              <DropdownMenuRadioItem
                value="personal"
                className="hover:bg-greenLight"
              >
                {labels.personal}
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="familia"
                className="hover:bg-greenLight"
              >
                {labels.familia}
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="estado"
                className="hover:bg-greenLight"
              >
                {labels.estado}
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
