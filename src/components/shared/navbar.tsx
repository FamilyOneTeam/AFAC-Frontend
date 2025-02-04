import { IoIosNotificationsOutline } from "react-icons/io";
import { BiUser } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className=" bg-white w-full p-2 border-b-2 border-b-greenNormal">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <section>
          <img src="/common/logo-AFAC.svg" alt="AFAC" className="max-w-14" />
        </section>
        <section className="flex gap-4">
          <div className="relative">
            <IoIosNotificationsOutline className="text-3xl" />
            <div className="w-2 h-2 right-[6px] bottom-[16px] bg-redNormal absolute rounded-full"></div>
          </div>

          <BiUser className="text-3xl" />
        </section>
      </div>
    </nav>
  );
}
