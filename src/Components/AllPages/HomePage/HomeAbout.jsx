import { Box, Button, Heading, Image, Text } from "@chakra-ui/react"
import {BiSolidPhoneCall} from "react-icons/bi"


export const HomeAbout=()=>{




    
    return(<Box p="10%">
        <Box display={"flex"}>
            <Box w="50%">
                <Image src="https://kamleshyadav.com/wp/astrologer/demo1/wp-content/uploads/sites/2/2021/03/about4.jpg" alt="img" /></Box>
            <Box w="50%" textAlign={"left"}>
            <Box >
                <Heading as={"h2"} fontWeight={"550"} borderBottom={"3px solid #ff7010"} w="40%" fontFamily={"Philosopher"} m="10px" pb="10px" fontSize={"30px"}>Know About</Heading>
            </Box>
            <Box m="10px" pb="10px"> <Text fontSize={"18px"}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it esdehas a more-or less normal distribution of letters.As opposed to using Content here content here making it look likesdesdee readable English.Many desktop publishing packages and web page editors sdesnow use em Ipsum as their default model text, and a search for lorem will usdencover many web sites still in their web page editors sdesnow infancy. </Text></Box>
        <br />
        <Box bgColor={"#ff7010" } w="25%" m="10px" p="10px" textAlign={"center"}> READ MORE</Box>
        <Box>
            <Box><BiSolidPhoneCall /></Box>
            <Box>
                <Box fontSize={"16px"}>Contact Our Expert Astrologers</Box>
                <Box fontSize={"22px"} color="#ff7010">+ (91) 1800-124-105</Box>
            </Box>
        </Box>
        
        </Box>
        </Box>
    </Box>)
}