import "./_landing.scss";
import { HiOutlineUserGroup } from "@react-icons/all-files/hi/HiOutlineUserGroup";
import { Outlet } from "react-router-dom";
import { Group } from "../../components/group/Group";
import { useState } from "react";
import { SideBar } from "../filters/SideBar";
import { NavBar } from "../navbar/NavBar";
import { FilterSection } from "../filters/FilterSection";
import { BatchDivision } from "../filters/BatchDivision";
// import { GroupAdd } from "../filters/GroupAdd";
import { FooterHoming } from "../filters/FooterHoming";

export const Landing = () => {
  const [sidebar, setSideBar] = useState(false);
  const [search, setSearch] = useState("");
  const [c_batch, setbatches] = useState("on-going");
  function aside() {
    return setSideBar(!sidebar);
  }

  return (
    <main className="landing position-relative overflow-hidden">
      <SideBar
        onclose={aside}
        style={{
          transform: sidebar ? "translateX(0%)" : "translateX(-100%)",
        }}
      />
      {/* navbar */}
      <NavBar opensidebar={aside} />
      <div className="add-list d-flex flex-column my-0">
        <FilterSection />
        <BatchDivision
          setView={setbatches}
          searching={search}
          setSearching={setSearch}
        />
        <article className="mx-3 scroll batchCont ">
          <Group searchVal={search} view={c_batch} />
        </article>
        <div className="group-text d-none position-absolute d-flex flex-column align-items-center">
          <article className="group-icon d-flex justify-content-center my-3 align-items-center rounded-circle">
            <HiOutlineUserGroup className="fs-1 text-secondary" />
          </article>
          <p className="text-secondary text-center fs-5">No Group exist here</p>
        </div>
        {/* <GroupAdd /> */}
        {/* group add component is not working but future we will use */}
      </div>
      {/* outlet */}
      <Outlet />
      <FooterHoming />
    </main>
  );
};
