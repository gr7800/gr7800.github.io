import {
  SimpleGrid,
  Heading,
  Image,
  Box,
  Button,
  Input,
  Text,
  useToast,
  Flex,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BsGithub, BsPlusLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "../data/data";
import { MdEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { ThemeContext } from "../ThemeContext";

const Contact = (props) => {
  const { contactScroll } = props;
  const { theme } = useContext(ThemeContext);
  const [icon, setIcon] = useState(false);
  const toast = useToast();

  //-------- Email Send --------------
  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "9ef85adb-bab0-4af8-8ac6-b56dd364e6ed");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const dataRes = await response.json();

    if (dataRes.success) {
      toast({
        title: "Thanks for contacting me 🙂",
        description: "Form submitted successfully. I'll reply soon!",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      e.target.reset();
    } else {
      toast({
        title: "Something went wrong!",
        description: dataRes.message || "Please try again later.",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    }
  };


  // =========== Animation =============>

  useEffect(() => {
    AOS.init(data?.aos);
  }, []);

  return (
    <div ref={contactScroll} className="mainDiv" style={{ ...theme, backgroundColor: theme?.navBgColor }}>
      <Heading fontSize={40} color={data.universal.color}>
        {data.contact.contact_title} <span style={{ color: theme?.color }}>Me</span>
      </Heading>
      <SimpleGrid columns={[1, 1, 1, 2]} pb="70px">
        {/* ========== Email and boy image ========== */}
        <Image
          mr={["auto", "auto", "auto", "-100px"]}
          data-aos="zoom-in"
          mt={30}
          m="auto"
          h={["300px", "300px", "420px", "450px"]}
          src={data.profile.email_img}
          alt="emailimg"
        />

        <SimpleGrid data-aos="zoom-in" mt={50} bg={"transparent"}>
          {/* ========== Social media Buttons ========== */}
          <Flex
            direction={["column", "column", "row"]}
            width={"65%"}
            wrap="wrap"
            justify="space-between"
            align="center"
            textAlign="center"
            m={"auto"}
          >
            <Flex fontSize={18} color={data.universal.color} ml={[0, 0, 4]} align={"center"}>
              <BiPhoneCall style={{ display: "inline", marginRight: 6, fontSize: 20 }} />
              {data.profile.mobile}
            </Flex>
            <Flex fontSize={18} color={data.universal.color} align={"center"}>
              <MdEmail style={{ display: "inline", marginRight: 6, fontSize: 20 }} />
              {data.profile.email}
            </Flex>
          </Flex>
          {/* <Box display={"flex"} flexWrap="wrap" m="auto" gap={[2, 2, 7, 8]} justifyContent="center">
            {data.contact.social_buttons.map((btn, idx) => (
              <a
                href={btn.link}
                target="_blank"
                rel="noreferrer"
                key={btn.name}
                title={btn.title}
              >
                <Button
                  border={`2px solid ${btn.color}`}
                  fontSize={[14, 14, 14, 17]}
                  color="#ffff"
                  bg={btn.color}
                  p={"0"}
                  pl={[1, 1, 2, 3]}
                  pr={[2, 2, 3, 4]}
                  transition="all .4s ease-in-out"
                  _hover={{
                    transform: "scale(1.1)",
                    bg: "#ffff",
                    color: btn.color,
                  }}
                  data-aos="fade-up"
                >
                  {btn.icon === "linkedin" && <AiFillLinkedin style={{ marginRight: "4", fontSize: "20px" }} />}
                  {btn.icon === "github" && <AiFillGithub style={{ marginRight: "4", fontSize: "20px" }} />}
                  {btn.icon === "email" && <AiOutlineMail style={{ marginRight: "4", fontSize: "20px" }} />}
                  {btn.icon === "phone" && <FiPhoneCall style={{ marginRight: "4", fontSize: "20px" }} />}
                  {btn.name}
                </Button>
              </a>
            ))}
          </Box> */}

          {/* ========== Email Form ========== */}

          <Box m={"auto"} mt="15px" width="65%">
            <Heading
              data-aos="fade-up"
              fontSize={22}
              style={{ color: theme?.color }}
              textAlign="left"
              pb={2}
            >
              {data.contact.contact_subtitle.split(" ")[0]}{" "}{data?.contact.contact_subtitle.split(" ")[1]} <span style={{ color: data.universal.color }}>{data.contact.contact_subtitle.split(" ")[2]}</span>
            </Heading>
            <form onSubmit={sendEmail}>
              <input type="hidden" name="access_key" value="9ef85adb-bab0-4af8-8ac6-b56dd364e6ed" />
              {data.contact.form_fields.map((field, idx) =>
                field.type !== "textarea" ? (
                  <Input
                    key={field.name}
                    type={field.type}
                    style={theme}
                    mt={idx === 0 ? undefined : "16px"}
                    placeholder={field.placeholder}
                    borderBottom={"1px solid grey"}
                    size="md"
                    required={field.required}
                    name={field.name}
                    maxLength={field.maxLength}
                    minLength={field.minLength}
                  />
                ) : (
                  <textarea
                    key={field.name}
                    style={theme}
                    id="Message"
                    placeholder={field.placeholder}
                    name={field.name}
                    rows={field.rows}
                    required={field.required}
                  />
                )
              )}
              {/* ============= Reset button============ */}
              <Box display={"flex"} gap="3">
                <Input
                  type={"submit"}
                  border={`2px solid ${data.universal.color}`}
                  fontSize={18}
                  mt={1}
                  color="black"
                  bg={data.universal.color}
                  w="100%"
                  transition="all .4s ease-in-out"
                  _hover={{
                    bg: "#f04244",
                    color: "#ffff",
                    w: "95%",
                  }}
                />
                <Button
                  style={theme}
                  fontSize={17}
                  borderBottom="1px"
                  color="black"
                  w="30%"
                  mt={1}
                  textDecoration={"underline"}
                  pt={0}
                  pb={0}
                  transition="all .8s ease-in-out"
                  textAlign="left"
                  _hover={{
                    w: "33%",
                    color: "red",
                  }}
                  type="reset"
                  onClick={() =>
                    toast({
                      title: "Form has been Cleared !",
                      status: "success",
                      duration: 1000,
                      isClosable: true,
                    })
                  }
                >
                  Clear
                </Button>
              </Box>
            </form>
          </Box>
        </SimpleGrid>
      </SimpleGrid>

      {/* ========== Right side Icons ========== */}

      <Box
        position={"fixed"}
        zIndex={50}
        bottom="0"
        right="0"
        mr={[4, 4, 7, 4]}
        gap={3}
        pb={["80px", "80px", "160px", "80px"]}
        display={icon ? "grid" : "none"}
      >
        {data.profile.social_icons.map((icon, index) => (
          <a href={icon.link} key={index} title={icon.name} target="_blank" rel="noreferrer">
            <Button
              border={`2px solid ${icon.color}`}
              color="#ffff"
              bg={icon.color}
              fontSize={["16px", "17px", "25px", "20px"]}
              p={[0, 0, "20px", 0]}
              pt={["none", "none", "25px", "none"]}
              pb={["none", "none", "25px", "none"]}
              borderRadius="50%"
              transition="all .4s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
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

      {/*======================== Up arrow Icon =============== */}
      <Button
        data-aos="zoom-in"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        position={"fixed"}
        bottom="0"
        right="0"
        zIndex={10}
        mr={[4, 4, "30.6px", 4]}
        mb={["80px", "80px", "160px", "80px"]}
        border={`2px solid ${data.universal.color}`}
        color="#ffff"
        bg={data.universal.color}
        fontSize={["15px", "18px", "20px", "21px"]}
        p={[0, 0, "20px", 0]}
        pt={["15px", "none", "25px", "none"]}
        pb={["15px", "none", "25px", "none"]}
        borderRadius="50%"
        transition="all .4s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
          bg: "#ffff",
          color: data.universal.color,
        }}
      >
        <FaRegArrowAltCircleUp title="Go to Top" />
      </Button>

      {/* ========== Plus Button ========== */}
      <Button
        onClick={() => setIcon(!icon)}
        position={"fixed"}
        zIndex={100}
        bottom="0"
        right="0"
        mr={[4, 4, 7, 4]}
        mb={["8", "8", "95px", "8"]}
        border={`2px solid ${data.universal.color}`}
        color="#ffff"
        bg={data.universal.color}
        fontSize={["16px", "17px", "20px", "20px"]}
        p={[0, 0, "20px", 0]}
        pt={["none", "none", "25px", "none"]}
        pb={["none", "none", "25px", "none"]}
        borderRadius="50%"
        transition="all .4s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
          bg: "#ffff",
          color: data.universal.color,
        }}
      >
        {icon ? <ImCross /> : <BsPlusLg title="Social media" />}
      </Button>

      <Text pb={10} fontSize={14} w={"90%"} m="auto" textAlign={"center"}>
        Designed and build by ❤️{data.profile.full_name}, 2022 All right
        reserved.
      </Text>
    </div>
  );
};

export default Contact;
