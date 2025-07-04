import React, { useRef, useContext } from "react";
import { useState } from "react";
import Home from "./Home";
import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Slide from "./Slide";
import AOS from "aos";
import "aos/dist/aos.css";
import GitHub from "./GitHub";
import { data } from "../data/data";
import { ThemeContext } from "../ThemeContext";

const NAV_LABELS = [
  data.profile?.nav_home || "HOME",
  data.profile?.nav_about || "ABOUT",
  data.profile?.nav_project || "PROJECT",
  data.profile?.nav_github || "GITHUB",
  data.profile?.nav_skills || "SKILLS",
  data.profile?.nav_contact || "CONTACT",
  data.profile?.nav_resume || "RESUME",
];

const Main = () => {
  const { theme, isDark, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const projectScroll = useRef(null);
  const GithubScroll = useRef(null);
  const aboutScroll = useRef(null);
  const skillScroll = useRef(null);
  const contactScroll = useRef(null);
  const Toast = useToast();

  useEffect(() => {
    Toast({
      title: "Welcome to my Portfolio 😊",
      status: "info",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  }, [Toast]);

  const Darkmode = () => {
    if (isDark) {
      Toast({
        title: "Light Mode ☀️",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "bottom-left",
      });
    } else {
      Toast({
        title: "Dark Mode 🌑",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "bottom-left",
        variant: "left-accent",
      });
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
    toggleTheme();
  };

  // =================== Scrolling =====================>
  const executeProject = () =>
    projectScroll.current.scrollIntoView({ behavior: "smooth" });

  const executeGithub = () =>
    GithubScroll.current.scrollIntoView({ behavior: "smooth" });

  const executeAbout = () =>
    aboutScroll.current.scrollIntoView({ behavior: "smooth" });

  const executeSkill = () =>
    skillScroll.current.scrollIntoView({ behavior: "smooth" });

  const executeContact = () =>
    contactScroll.current.scrollIntoView({ behavior: "smooth" });

  // =================== Animation =====================>

  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  function downloadResume(event) {
    event.preventDefault();
    const link = data.profile.resume;
    window.open(link, "_blank");
    setTimeout(() => {
      const a = document.createElement("a");
      a.href = link;
      a.download = "Guddu-Tiwari-Resume.pdf";
      a.click();
    }, 100);
  }

  return (
    <div>
      {/*======================== MAin div ======================= */}

      <div className="Nab">
        {/*======================== 2 main div ======================= */}

        <SimpleGrid
          bg={"#edf2f8"}
          display="flex"
          border="2px solid #fe8f191b"
          justifyContent={"space-between"}
          spacing={10}
          borderBottomRadius="25px"
          style={{...theme, backgroundColor: theme?.navBgColor}}
          position={"sticky"}
        >
          {/*================= left 2 color name ======================= */}

          <Heading
            p={3}
            pt={["2", "2", "5", "2"]}
            pb={["2", "2", "5", "2"]}
            fontSize={["25px", "25px", "25px", "40px"]}
            ml={[1, 2, 5]}
            textAlign={"left"}
            fontWeight={700}
            cursor="pointer"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            {data.profile.first_name?.substring(0, 3).toUpperCase() || "GUD"}
            <span
              style={{
                color: data.universal.color,
              }}
            >
              {data.profile.first_name?.substring(3, data?.profile?.first_name?.length).toUpperCase() || "Du"}
            </span>
          </Heading>

          {/*=============== Right side option main div ================== */}

          <SimpleGrid
            mr={[5]}
            ml={["-8"]}
            fontSize={"16px"}
            fontWeight={600}
            display="flex"
            alignItems={"center"}
            style={{...theme, backgroundColor: theme?.navBgColor}}
            float={"right"}
            gap={["0", "0", "2", "5"]}
          >
            <Text
              cursor={"pointer"}
              display={["none", "none", "block", "block"]}
              className="navH"
              _hover={{
                color: data.universal.color,
              }}
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              {NAV_LABELS[0]}
            </Text>
            <Text
              cursor={"pointer"}
              display={["none", "none", "block", "block"]}
              className="navH"
              _hover={{
                color: data.universal.color,
              }}
              onClick={executeAbout}
            >
              {NAV_LABELS[1]}
            </Text>
            <Text
              cursor={"pointer"}
              display={["none", "none", "block", "block"]}
              className="navH"
              _hover={{
                color: data.universal.color,
              }}
              onClick={executeProject}
            >
              {NAV_LABELS[2]}
            </Text>
            <Text
              cursor={"pointer"}
              display={["none", "none", "block", "block"]}
              className="navH"
              _hover={{
                color: data.universal.color,
              }}
              onClick={executeGithub}
            >
              {NAV_LABELS[3]}
            </Text>
            <Text
              cursor={"pointer"}
              display={["none", "none", "block", "block"]}
              className="navH"
              _hover={{
                color: data.universal.color,
              }}
              onClick={executeSkill}
            >
              {NAV_LABELS[4]}
            </Text>
            <Text
              cursor={"pointer"}
              display={["none", "none", "block", "block"]}
              className="navH"
              _hover={{
                color: data.universal.color,
              }}
              onClick={executeContact}
            >
              {NAV_LABELS[5]}
            </Text>
            <span role="button" tabIndex={0} onClick={downloadResume} style={{ outline: 'none' }}>
              <Text
                cursor={"pointer"}
                display={["none", "none", "block", "block"]}
                className="navH"
                _hover={{
                  color: data.universal.color,
                }}
                w={["110px", "110px", "80px", "73x"]}
                title="View Resume on Google Drive"
              >
                {NAV_LABELS[6]}
              </Text>
            </span>

            {/*===================== Dark theme Icons ======================= */}

            <Box
              onClick={Darkmode}
              borderRadius="10px"
              w={["40px", "40px", "40px", "50px"]}
              ml={["-70%", "-70%", "0%", "0%"]}
              title="Theme"
            >
              {loading && (
                <Box
                  p="0"
                  pt="2px"
                  borderRadius={"10px"}
                  border={`1px solid ${data.universal.color}`}
                >
                  <Spinner />
                </Box>
              )}

              {isDark ? (
                <SunIcon
                  display={loading ? "none" : "block"}
                  ml={[1, 1, 1, 2]}
                  fontSize={["25px", "26px", "30px", "30px"]}
                  transition="all .2s ease-in-out"
                  _hover={{
                    transform: "scale(1.3)",
                  }}
                />
              ) : (
                <MoonIcon
                  display={loading ? "none" : "block"}
                  ml={[1, 1, 1, 2]}
                  fontSize={["25px", "26px", "30px", "30px"]}
                  transition="all .2s ease-in-out"
                  _hover={{
                    transform: "scale(1.3)",
                  }}
                />
              )}
            </Box>
          </SimpleGrid>
        </SimpleGrid>

        {/*======================== More Option Icon ======================= */}
        <Box
          position={"absolute"}
          right="0"
          top="0"
          mr={"15px"}
          mt={["15px", "15px", "20px", "20px"]}
          display={["block", "block", "none", "none"]}
          p={0}
          fontSize="28px"
          borderRadius={10}
          fontWeight={700}
          transition="all .4s ease-in-out"
          style={theme}
          _hover={{ transform: "scale(1.1)" }}
        >
          <Slide
            theme={theme}
            executeAbout={executeAbout}
            executeSkill={executeSkill}
            executeProject={executeProject}
            executeGithub={executeGithub}
            executeContact={executeContact}
          />
        </Box>
      </div>

      {/*======================== ( Components ) ======================= */}

      <Home />
      <About aboutScroll={aboutScroll} />
      <Projects projectScroll={projectScroll} />
      <GitHub GithubScroll={GithubScroll} />
      <Skills skillScroll={skillScroll} />
      <Contact contactScroll={contactScroll} />
    </div>
  );
};

export default Main;
