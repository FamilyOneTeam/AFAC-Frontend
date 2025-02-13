import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui";
import HomeLayout from "@/layouts/home.layout";
import { Link } from "react-router-dom";
import Help from "@/components/shared/help";
import NoVolunteers from "./components/no-volunteers";
import VolunteerCard from "./components/volunteers-card";

type volunteers = {
  status: string;
  name: string;
  place: string;
};
//const volunteers: volunteers[] = [];
const volunteers: volunteers[] = [
  {
    status: "Pendiente",
    name: "Javier Diaz",
    place: "Santiago",
  },
  {
    status: "Completada",
    name: "Javier Diaz",
    place: "Santiago",
  },
  {
    status: "En revisión",
    name: "Javier Diaz",
    place: "Santiago",
  },
  {
    status: "En revisión",
    name: "Javier Diaz",
    place: "Santiago",
  },
  {
    status: "En revisión",
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
    status: "Pendiente",
    name: "Javier Diaz",
    place: "Santiago",
  },
];

export default function Volunteers() {
  const [pending, setPending] = useState(false);
  const filteredVolunteers: volunteers[] = volunteers.filter((family) =>
    pending ? family.status !== "Completada" : family.status === "Completada"
  );
  return (
    <HomeLayout>
      <main className="grid gap-8 pt-12 md:pt-16 px-4 w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-2">
          <Link to={"/home"} className="text-sm text-gray-400 underline">
            Volver al Dashboard
          </Link>
          <h1 className="font-semibold text-lg md:text-xl">
            Familias Voluntarias
          </h1>
          <p>Estas son las familias que quieren ser voluntarias:</p>
        </div>
        {!volunteers ||
          (volunteers.length === 0 && (
            <>
              <NoVolunteers />
            </>
          ))}
        {volunteers && volunteers.length !== 0 && (
          <>
            <div className="flex justify-end w-full">
              <Tabs
                defaultValue="completadas"
                className="grid justify-end w-full"
              >
                <TabsList className="bg-transparent">
                  <TabsTrigger
                    value="pendientes"
                    onClick={() => setPending(true)}
                  >
                    Pendientes
                  </TabsTrigger>
                  <TabsTrigger
                    value="completadas"
                    onClick={() => setPending(false)}
                    className="-ml-1"
                  >
                    Completadas
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="grid md:grid-cols-3 gap-3 md:gap-4">
              {filteredVolunteers.map((family) => (
                <div key={family.name}>
                  <VolunteerCard
                    status={family.status}
                    name={family.name}
                    place={family.place}
                  />
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
