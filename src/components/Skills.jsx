import { SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "../data/data";
import { ThemeContext } from "../ThemeContext";

const Skills = (props) => {
  const { skillScroll } = props;
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init(data?.aos);
  }, []);

  return (
    <div ref={skillScroll} className="mainDiv" style={theme}>
      <Heading fontSize={[35, 35, 40, 40]}>
        My <span style={{ color: data.universal.color }}>Technical </span>Skills
      </Heading>

      {/* ======== All Skills ======== */}

      <SimpleGrid
        w={["98%", "95%", "90%", "80%"]}
        m="auto"
        mt={["2rem", "2rem", "4rem", "5rem"]}
        columns={[2, 3, 4, 6]}
        spacing={["1.2rem", "1.5rem", "2rem", "2.5rem"]}
        fontSize={["none", "none", "18", "none"]}
        className="SkillsDiv"
        pb={["2.5rem", "3rem", "4rem", "6rem"]}
      >
        {data.skills.map((skill, index) => (
          <Box
            key={index}
            data-aos="zoom-in"
            borderRadius={10}
            p={[2, 3, 4]}
            w={["70%", "80%", "100%"]}
            minW={0}
            m="auto"
            display="grid"
            style={{ ...theme, backgroundColor: theme?.navBgColor }}
          >
            <Image
              w="100%"
              h={["4.5rem", "5.5rem", "6.875rem"]}
              objectFit="contain"
              borderRadius={10}
              m="auto"
              mb={2}
              mixBlendMode={"dark"}
              src={skill.image}
              alt={skill.name}
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "6.875rem",
                minHeight: "3.5rem",
                minWidth: "3.5rem",
                background: "#fff",
                boxSizing: "border-box",
              }}
            />
            <Text
              fontSize={["xs", "sm", "md", "lg"]}
              textAlign="center"
              wordBreak="break-word"
              whiteSpace="pre-line"
              overflowWrap="break-word"
              sx={{
                width: "100%",
                display: "block",
                lineHeight: 1.2,
                minHeight: "2.5em",
                maxWidth: "100%",
                overflowWrap: "break-word",
              }}
            >
              {skill.name}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
};
export default Skills;
