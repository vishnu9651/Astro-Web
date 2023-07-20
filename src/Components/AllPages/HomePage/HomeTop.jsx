import { Box, Button, Image } from "@chakra-ui/react"
import "./HomePage.css"
export const HomePageTop=()=>{


    return (<div>
<Box className="home-top-container" >
    <br />
<Box className="home-top-row" w="85%" m="auto" p="50px 10px 20px 10px"> 

<Box className="home-top-row-col-one" textAlign={"left"} w="50%" >
    <Box fontFamily={"Philosopher,sans-serif"} fontSize={"25px"} fontWeight={"550"} color={"#ff7010"}>What's Your Sign ?</Box>
    <Box fontFamily={"Philosopher,sans-serif"} fontSize={"45px"} lineHeight={"1em"} fontWeight={"550"}>Read Your Daily 
    <br />
    Horoscope Today</Box>
    <Box fontFamily={"Roboto,sans-serif"} fontSize={"16px"} mt="10px" w="90%">Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut 
        labore etesde dolore magna aliquapspendisse and the gravida.</Box>
    <br />
    <Box bgColor={"#ff7010"} w="30%" p="6px" _hover={{bgColor:"#ff7010"}} textAlign={"center"}>READ MORE</Box>
</Box>
<Box w="50%"   display={"flex"} justifyContent={"end"}><Image  w="75%" className="rotate" src="https://kamleshyadav.com/wp/astrologer/demo1/wp-content/uploads/sites/2/2021/03/zodiac.png" /></Box>

</Box>


</Box>
    </div>)
}