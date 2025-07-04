import {
    SimpleGrid,
    Box,
    Heading,
    Text,
    Image,
    Link,
    Flex,
} from "@chakra-ui/react";
import React, { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "../data/data";
import { ThemeContext } from "../ThemeContext";

const Experience = ({ experienceScroll }) => {
    const { theme } = useContext(ThemeContext);
    const theme1 = theme;

    useEffect(() => {
        AOS.init(data?.aos);
    }, []);

    return (
        <div ref={experienceScroll} className="mainDiv" style={{ ...theme, backgroundColor: theme?.navBgColor }}>
            <Heading fontSize={40} mb={8} textAlign="center">
                My <span style={{ color: data.universal.color }}>Experience</span>
            </Heading>
            <SimpleGrid
                m="auto"
                mt={"20"}
                w={"80%"}
                columns={[1, 1, 1, 1]}
                spacing="30px"
                className="ExperienceDiv"
                textAlign={"center"}
                pb={"40px"}
            >
                {data.experience.map((item, idx) => (
                    <Box
                        key={idx}
                        data-aos="zoom-in"
                        borderRadius={16}
                        p={[5, 7]}
                        boxShadow="0 4px 24px rgba(0,0,0,0.08)"
                        border={`2px solid ${data.universal.color}`}
                        style={theme1}
                        transition="transform 0.2s, box-shadow 0.2s"
                        _hover={{
                            transform: 'scale(1.03)',
                            boxShadow: `0 8px 32px ${data.universal.color}33`,
                        }}
                    >
                        <Flex alignItems="center" mb={3} gap={4} justifyContent="flex-start">
                            <Link href={item.website} target="_blank">
                                <Image
                                    src={item.company_logo}
                                    alt={item.company_name}
                                    bgColor={"black"}
                                    h="56px"
                                    w="56px"
                                    borderRadius={8}
                                    padding={2}
                                    border={`2px solid ${data.universal.color}`}
                                    bg="#fff"
                                    objectFit="contain"
                                    mr={3}
                                />
                            </Link>

                            <Box textAlign="left">
                                <Heading fontSize={"24px"} m={0} color={data.universal.color}>
                                    {item.company_name}
                                </Heading>
                                <Text fontSize="15px">{item.address}</Text>
                            </Box>
                        </Flex>
                        <Text fontSize={"18px"} fontWeight="bold" mt={2} textAlign="left">
                            {item.role}
                        </Text>
                        <Text fontSize={"15px"} color={data.universal.color} fontWeight="semibold" mt={1} textAlign="left">
                            {item.duration}
                        </Text>
                        <Text fontSize={["15px", "15px", "17px", "16px"]} mt={3} textAlign="left" >
                            {item.description}
                        </Text>
                        <Text
                            mt={3}
                            textAlign={"left"}
                            fontSize={["14px", "14px", "16px", "15px"]}
                            color={data.universal.color}
                        >
                            <span style={{ fontSize: "16px", fontWeight: 600 }}>
                                TECH STACKS: {" "}
                            </span>
                            {item.tech_stacks}
                        </Text>
                    </Box>
                ))}
            </SimpleGrid>
        </div>
    );
};

export default Experience;
