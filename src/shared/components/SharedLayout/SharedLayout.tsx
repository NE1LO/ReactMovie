import { Outlet } from "react-router-dom";
import { Header } from "../../../modules/Header";
import { Footer } from "../../../modules/Footer";
import { WeelFortune } from "../../../modules/WeelFortune/WeelFortune/WeelFortune";
import { useState } from "react";

export const SharedLayout = () => {
  const [weelModal, setModal] = useState(false);
  return (
    <>
      <Header openWeelModal={() => setModal(true)} />
      <Outlet />
      <Footer />
      {weelModal && <WeelFortune closeModal={() => setModal(false)} />}
    </>
  );
};
