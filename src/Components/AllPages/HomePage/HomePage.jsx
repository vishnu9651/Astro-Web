import { Box, Image } from "@chakra-ui/react"
import "./HomePage.css"
import { HomePageTop } from "./HomeTop"
import { HomeAbout } from "./HomeAbout"
export const HomePage=()=>{


    return (<div>
<Box>
<HomePageTop />
<HomeAbout />
</Box>
    </div>)
}