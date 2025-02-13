import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui";
import HomeLayout from "@/layouts/home.layout";
import { Link } from "react-router-dom";
import Help from "@/components/shared/help";
import NoMentorshipsRequests from "./components/no-requests";
import RequestCard from "./components/request-card";


type mentorships = {
  status: string;
  name: string;
  date: string;
};
//const mentorships: mentorships[] = [];
const mentorships: mentorships[] = [
  {
    status: "Pendiente",
    name: "Javier Diaz",
    date: "12.05.2025",
  },
  {
    status: "Pendiente",
    name: "Javier Diaz",
    date: "12.05.2025",
  },
  {
    status: "Completada",
    name: "Javier Diaz",
    date: "12.05.2025",
  },
  {
    status: "Completada",
    name: "Javier Diaz",
    date: "12.05.2025",
  },
  {
    status: "Completada",
    name: "Javier Diaz",
    date: "12.05.2025",
  },
  {
    status: "Completada",
    name: "Javier Diaz",
    date: "12.05.2025",
  },
];

export default function MentorshipRequests() {
  const [pending, setPending] = useState(false);
  const filteredMentorships: mentorships[] = mentorships.filter((family) =>
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
            Solicitud de Mentorias
          </h1>
          <p>Estas son las familias que esperan por recibir mentorías:</p>
        </div>
        {!mentorships ||
          (mentorships.length === 0 && (
            <>
              <NoMentorshipsRequests />
            </>
          ))}
        {mentorships && mentorships.length !== 0 && (
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
              {filteredMentorships.map((family) => (
                <div key={family.name}>
                  <RequestCard 
                    status={family.status}
                    name={family.name}
                    date={family.date}
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
