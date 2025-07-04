import React, { useEffect, useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { data } from "../data/data";
import { ThemeContext } from "../ThemeContext";

const GitHub = ({ GithubScroll }) => {
  const { theme } = useContext(ThemeContext);
  const cardTheme = theme;

  useEffect(() => {
    AOS.init(data?.aos);
  }, []);

  return (
    <Grid ref={GithubScroll} pb="8%" style={{ ...theme, backgroundColor: theme?.navBgColor }}>
      <Heading pt="5%" mb="4%" textAlign="center">
        GitHub{" "}
        <span style={{ color: data.universal.color }}>
          Overview{" "}
          <a
            href="https://github.com/gr7800"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              fontSize={["30px", "30px", "35px", "35px"]}
              p={0}
              borderRadius="50%"
              transition="all .3s ease-in-out"
              ml="-1"
              mb="1"
              _hover={{
                transform: "scale(1.1)",
                border: "1px solid #3f3d55",
                bg: "#ffff",
                color: "#3f3d55",
              }}
            >
              <BsGithub />
            </Button>
          </a>
        </span>
      </Heading>

      {/* GitHub Stats Section */}
      <Box data-aos="zoom-in" w={"80%"} m="auto" mt="5">
        <SimpleGrid columns={[1, 1, 2, 2]} w="100%" gap={5}>
          {data.github.github_stats.map((item, index) => (
            <Image
              key={index}
              style={cardTheme}
              w="100%"
              m="auto"
              border={`1px solid ${data.universal.color}`}
              p="5px"
              borderRadius="10px"
              className="github_Calender"
              transition="all .5s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
              src={
                theme.backgroundColor === "#1a202c"
                  ? item.light_theme_link
                  : item.dark_theme_link
              }
              alt={`GitHub ${item.name}`}
            />
          ))}

          {/* GitHub Contribution Calendar */}
          <Box
            overflow="hidden"
            style={cardTheme}
            w="100%"
            m="auto"
            p="20px"
            pt={["45px", "45px", "42px", "92px"]}
            pb={["45px", "45px", "42px", "92px"]}
            border={`1px solid ${data.universal.color}`}
            borderRadius="10px"
            title="GitHub Calendar"
            className="github_Calender"
            transition="all .5s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <GitHubCalendar
              username={data.github.github_username}
              // year={new Date().getFullYear()}
              style={{ margin: "auto" }}
            />
          </Box>
        </SimpleGrid>
      </Box>

      {/* Custom Statistics */}
      <SimpleGrid
        columns={[2, 2, 4, 4]}
        w="80%"
        m="auto"
        gap="8"
        mt="14"
        alignItems="center"
        alignContent="center"
        data-aos="zoom-in"
      >
        {data.github.stats.map((item, index) => (
          <Box
            key={index}
            style={cardTheme}
            borderRadius="50"
            p="5"
            border={`1px solid ${data.universal.color}`}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            transition="all .5s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <Heading color={data.universal.color}>{item.number}+</Heading>
            <Heading fontSize={["25", "28", "30", "35"]}>{item.title}</Heading>
            <Text mt="3">{item.subTitle}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Grid>
  );
};

export default GitHub;
