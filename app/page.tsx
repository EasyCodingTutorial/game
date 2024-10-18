import Image from "next/image";
import styles from "./page.module.css";

// for Components
import { SliderBg } from "@/app/Components/SliderBg/SliderBg";
import Wrapper from "./Components/Wrapper/Wrapper";
import { Features } from "./Components/Features/Features";
import { Aboutus } from "./Components/Aboutus/Aboutus";
import { HighResolution } from "./Components/HighResolution/HighResolution";
import { NewModel } from "./Components/NewModel/NewModel";

export const metadata = {
  title: "Home - Easy Games"
}

export default function Home() {
  return (
    <>
      <SliderBg />

      <Wrapper>
        {/* For Features */}
        <Features />

        {/* For About us */}
        <Aboutus />


        {/* for High Resolution Games */}
        <HighResolution />

        <NewModel />


      </Wrapper>




    </>
  );
}
