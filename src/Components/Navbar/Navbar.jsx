import { Box, Image, Text } from "@chakra-ui/react"
import { IoIosMailOpen } from "react-icons/io"
import { BsHeadset } from "react-icons/bs"
import { MdOutlineManageAccounts } from "react-icons/md"
import {AiOutlineSearch}  from "react-icons/ai"

export const Navbar = () => {


    return (<Box fontSize={"16px"} fontFamily={"sans-serif"} >

        <Box display="flex" bgColor={"#07273c"} gap="10px" >
            {/* left-col */}
            {/* nav-icon */}
            <Box w="20%" display={"flex"} flexDirection={"column"} justifyContent={"center"} >
                <Image src="https://kamleshyadav.com/wp/astrology/demo1/wp-content/uploads/sites/2/2021/08/logo-01.svg" objectFit={"cover"} p="25px" alt="nav-icon" />
            </Box>
            {/* right-col */}
            <Box w="100%" borderLeft={"1px solid gray"} >
                {/* top-section */}
                <Box display={"flex"} justifyContent={"space-between"} gap="10px" padding={"15px 20px 15px 20px"} borderBottom={"1px solid gray"}>
                    <Box display={"flex"}  w="45%" justifyContent={"space-between"} gap="30px">
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap="10px">
                            <Box bgColor={"#17384e"} p="15px" borderRadius={"full"}>
                                <BsHeadset size="20px" />
                            </Box>
                            <Box> <Text>+ (91) 1800-124-105 </Text></Box></Box>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap="10px">
                            <Box bgColor={"#17384e"} p="15px" borderRadius={"full"}><IoIosMailOpen size="20px" /></Box>
                            <Box><Text>Support@gmail.com</Text></Box></Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap="10px">
                        <Box bgColor={"#17384e"} p="15px" borderRadius={"full"}><MdOutlineManageAccounts size="22px" objfit="contain" /></Box><Box></Box><Text>Log In / Register</Text></Box>
                </Box>
                {/* bottom-section */}
                <Box w="70%" display={"flex"} justifyContent={"space-between"} fontWeight={"500"} flexDirection={"row"} marginLeft={"auto"} padding={"25px"} alignItems={"center"}>
                    <Box>Home</Box>
                    <Box>About Us</Box>
                    <Box>Services</Box>
                    <Box>Events</Box>
                    <Box>Blog</Box>
                    <Box>Shop</Box>
                    <Box>Appointment</Box>
                    <Box>Pages</Box>
                    <Box>Contact</Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} ><AiOutlineSearch size="25"  color="orangered" /></Box>
                </Box>
            </Box>
        </Box>
    </Box>)
}