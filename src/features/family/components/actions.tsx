import MentorshipRequests from "./request-mentorship";
import FamilyData from "./family-data";

export default function Actions() {
    return (
      <section className="md:p-6">
        <p className="font-bold pb-4">Acciones</p>
        <div className="grid md:grid-cols-2 gap-4">
          <FamilyData />
          <MentorshipRequests />
        </div>
      </section>
    );
}