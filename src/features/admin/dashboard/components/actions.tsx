import GeneralDatabase from "./general-database.tsx";
import MonitoringVolunteering from "./monitoring-volunteering";

export default function Actions() {
    return (
      <section className="md:p-6">
        <p className="font-bold pb-4">Acciones</p>
        <div className="grid md:grid-cols-2 gap-4">
          <MonitoringVolunteering />
          <GeneralDatabase />
        </div>
      </section>
    );
}