import HomePageComponent from "@/pageComponents/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MetaTitle } from "@/common/MetaTitle";


export default function Home({ handleTogglecontactForm }) {
  return (
    <>
      <MetaTitle
        title="Lasik - Best Eye Hospital in Indore"
        description="Dr. Prateek Tiwari, Lasik Specialist at Antardrishti Netralaya, Indore. Trusted eye surgeon offering advanced technology and compassionate care."
        keywords="Lasik surgery, eye hospital Indore, Dr Prateek Tiwari, Antardrishti Netralaya"
      />
      <HomePageComponent handleTogglecontactForm={handleTogglecontactForm} />
    </>
  )
}
