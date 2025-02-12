import { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import NavbarCard from "./navbar-card";
import NotificationsCard from "./notification-card";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  return (
    <nav className=" bg-white w-full p-2 border-b-2 border-b-greenNormal">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <section>
          <Link to={"/home"}>
            <img src="/common/logo-AFAC.svg" alt="AFAC" className="max-w-14" />
          </Link>
        </section>
        <section className="flex gap-4 relative">
          <div className="relative">
            <IoIosNotificationsOutline
              className="text-3xl hover:cursor-pointer"
              onClick={() => setOpenNotifications(true)}
            />
            <div className="w-2 h-2 right-[6px] bottom-[16px] bg-redNormal absolute rounded-full"></div>
          </div>

          <BiUser
            className="text-3xl hover:cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
          <NavbarCard openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <NotificationsCard
            openNotifications={openNotifications}
            setOpenNotifications={setOpenNotifications}
          />
        </section>
      </div>
    </nav>
  );
}
