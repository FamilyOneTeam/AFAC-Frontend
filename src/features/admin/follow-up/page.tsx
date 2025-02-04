import HomeLayout from "@/layouts/home.layout";
import { Link } from "react-router-dom";
import FollowUpCard from "./components/follow-up-card";
import Help from "@/components/shared/help";
import NoFollowUp from "./components/no-follow-up";
type families = {
  status: string,
  name: string,
  place: string
};
// const families: families[] = [];
const families: families[] = [
  {
    status: "Completada",
    name: "Javier Diaz",
    place: "Santiago",
  },
  {
    status: "Completada",
    name: "Javier Diaz",
    place: "Santiago",
  },
  {
    status: "Completada",
    name: "Javier Diaz",
    place: "Santiago",
  },
  {
    status: "Completada",
    name: "Javier Diaz",
    place: "Santiago",
  },
  {
    status: "Completada",
    name: "Javier Diaz",
    place: "Santiago",
  },
  {
    status: "Completada",
    name: "Javier Diaz",
    place: "Santiago",
  },
];

export default function FollowUp() {
    return (
      <HomeLayout>
        <main className="grid gap-8 pt-12 md:pt-16  px-4 w-full max-w-5xl mx-auto">
          <div className="flex flex-col gap-2">
            <Link to={"/home"} className="text-sm text-gray-400 underline">
              Volver al Dashboard
            </Link>
            <h1 className="font-semibold text-lg md:text-xl">
              Seguimiento de Familias
            </h1>
            <p>Estas familias necesitan llamada de seguimiento:</p>
          </div>
          {!families ||
            (families.length === 0 && (
              <>
                <NoFollowUp />
              </>
            ))}
          {families && families.length !== 0 && (
            <>
              <div className="flex justify-end w-full">
                <p className="px-8 py-2 border-b-2 border-gray-300">
                  Pendientes
                </p>
                <p className="px-8 py-2 border-b-2 border-greenDarker">
                  Completadas
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-3 md:gap-4">
                {families.map((family) => (
                  <div key={family.name}>
                    <FollowUpCard status={family.status} name={family.name} place={family.place}/>
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <Help />
              </div>
            </>
          )}
        </main>
      </HomeLayout>
    );
}