import React, { useContext } from "react";
import {
  SimpleGrid,
  Box,
  Heading,
  Image,
  Button,
  useToast,
} from "@chakra-ui/react";
import { DownloadIcon, ViewIcon } from "@chakra-ui/icons";
import { AiFillLinkedin } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { data } from "../data/data";
import { ThemeContext } from "../ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const Toast = useToast();

  function downloadResume(event) {
    event.preventDefault();
    const link = data.profile.resume;
    window.open(link, "_blank");
    setTimeout(() => {
      const a = document.createElement("a");
      a.href = link;
      a.download = `${data.profile.first_name}-${data.profile.meddle_name}-${data.profile.last_name}-Resume.pdf`;
      a.click();
    }, 100);
  }

  return (
    <div>
      {/* ---------------- Main Div ------------------ */}
      <SimpleGrid
        pl={70}
        bg={theme.backgroundColor}
        textAlign={"left"}
        columns={[1, 1, 2, 2]}
        m="auto"
        alignItems={"center"}
        mt={[-6, -6, -6, -6]}
        pt={["70px", "65px", "141px", "145px"]}
        pb={["105px", "105px", "155px", "145px"]}
        className="HomeMain"
        style={theme}
      >
        {/*======================== Left side Div ======================= */}
        <SimpleGrid
          className="HomeBox1"
          m={["auto", "auto", "auto", "auto"]}
          w={["98%", "98%", "98%", "85%"]}
        >
          {/*======================== Hello heading ======================= */}
          <Heading
            fontSize={[20, 22, 25, 30]}
            color={theme.color}
            fontFamily={"'Times New Roman', Times, serif"}
            ml={[-10, 13, 0, 50]}
            alignItems="center"
            display="flex"
            style={theme}
          >
            {data.profile.hello_text || "Hello"}
            <span>
              <Image
                w={10}
                m={"auto"}
                ml={"0"}
                src={data.logo_img.hii_logo}
                alt={data.profile.first_name}
              />
            </span>
            , {data.profile.intro_text || "My name is"}
          </Heading>

          {/*======================== Name Heading ======================= */}
          <Heading
            mt={[0, 0, 0, 2]}
            ml={[-10, 13, 0, 50]}
            fontSize={[30, 30, 32, 50]}
          >
            {data.profile.full_name}
          </Heading>

          {/*======================== Animation Heading ======================= */}
          <div className="tagLine">
            <Heading
              mt={[-4, -4, 0, 0]}
              ml={[-10, 13, 0, 50]}
              fontSize={[23, 24, 23, 30]}
              id="madeByGuddu"
              borderRight={`3px solid ${data.universal.color}`}
            >
              {data.profile.tagline}
            </Heading>
          </div>

          {/*======================== Social Media Icons ======================= */}
          <Box
            bottom="0"
            right="0"
            display={"flex"}
            w={"60%"}
            ml={[-10, 13, 0, 50]}
            mt={3}
            gap={2}
            pb={["80px", "80px", "80px", "80px"]}
          >
            {data.profile.social_icons.map((icon, index) => (
              <a key={index} href={icon.link} target="_blank" rel="noreferrer">
                <Button
                  color="black"
                  border={"1px"}
                  bg={data.universal.color}
                  fontSize={["16px", "17px", "20px", "20px"]}
                  p={[0, 0, 2, 2]}
                  title={icon.name}
                  borderRadius="50%"
                  transition="all .3s ease-in-out"
                  _hover={{
                    border: `2px solid ${icon.color}`,
                    transform: "scale(1.2)",
                    bg: "#ffff",
                    color: icon.color,
                  }}
                >
                  {icon.type === "linkedin" && <AiFillLinkedin />}
                  {icon.type === "github" && <BsGithub />}
                  {icon.type === "email" && <MdEmail />}
                  {icon.type === "phone" && <BiPhoneCall />}
                </Button>
              </a>
            ))}
          </Box>

          {/*======================== Resume buttons ======================= */}
          <SimpleGrid display={"flex"} mt={["-16", "-16", "-65", "-65"]}>
            {/*======================== View Resume ======================= */}
            <a
              href={data.profile.resume_url}
              // onClick={downloadResume}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                border={`2px solid ${data.universal.color}`}
                ml={[-10, 13, 0, 50]}
                bg={data.universal.color}
                color="black"
                fontSize={["14px", "14px", "16x"]}
                w={["90px", "90px", "100px"]}
                mb={"40px"}
                transition="all .3s ease-in-out"
                _hover={{
                  color: data.universal.color,
                  bg: "white",
                  transform: "scale(1.15)",
                }}
              >
                {data.profile.resume_button_text || "Resume"}
                <ViewIcon ml={1} />
              </Button>
            </a>
            {/*======================== Download Resume ======================= */}
            <a
              href={data.profile.resume}
              download={`${data.profile.first_name}-${data.profile.meddle_name}-${data.profile.last_name}-Resume.pdf`}
            >
              <Button
                onClick={() =>
                  Toast({
                    title: data.profile.downloading_text || "Downloading...",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  })
                }
                border={`2px solid ${data.universal.color}`}
                ml={3}
                bg={data.universal.color}
                color="black"
                fontSize={["18px", "18px", "18px"]}
                w={["30px", "30px", "40px"]}
                fontWeight={600}
                title={data.profile.download_resume_title || "Download Resume"}
                transition="all .3s ease-in-out"
                _hover={{
                  color: data.universal.color,
                  bg: "white",
                  transform: "scale(1.15)",
                }}
              >
                <DownloadIcon />
              </Button>
            </a>
          </SimpleGrid>
        </SimpleGrid>
        {/*======================== My Image (Avatar) ======================= */}
        <Box className="HomeBox2" ml={["-25%", "-18%", "1%"]} mb="6">
          <Box
            className="HomeYellowBg"
            m={"auto"}
            w={["80%", "60%", "85%", "68%"]}
            transition="all 2s ease-in-out"
            transform="scale(1)"
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            <Image
              borderRadius={"50%"}
              mt="-3"
              m={"auto"}
              w={[290, 300, 290, 380]}
              transition="all 1s ease-in-out"
              _hover={{
                transform: "scale(1.2)",
              }}
              src={data.profile.profile_image}
              alt={data.profile.full_name}
            />
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Home;
