import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<div>
    <VideoCard 
    title={"I joined Microsoft"}
    image={"photo.png"}
    author={"Sanket Singh"}
    views={"43Mn"}
    timestamp={"2 days ago"}
    ></VideoCard>
</div>
  )
}
