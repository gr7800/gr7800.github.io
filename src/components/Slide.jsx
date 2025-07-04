import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRef } from "react";
import { data } from "../data/data";
const Slide = (props) => {
  const {
    executeSkill,
    executeAbout,
    executeContact,
    executeProject,
    executeGithub,
    theme,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  // ------------------ Click to Hide Slide ------------------
  const homefunc = () => {
    onClose();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const aboutfunc = () => {
    onClose();
    executeAbout();
  };
  const projectfunc = () => {
    onClose();
    executeProject();
  };

  const githubfunc = () => {
    onClose();
    executeGithub();
  };

  const skillfunc = () => {
    onClose();
    executeSkill();
  };

  const contactfunc = () => {
    onClose();
    executeContact();
  };
  return (
    <>
      <Box bg={"transparent"} fontSize="25" ref={btnRef} onClick={onOpen}>
        <AiOutlineMenu />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent style={theme}>
          <DrawerCloseButton />
          {/* <DrawerHeader>NavBar</DrawerHeader> */}

          <DrawerBody>
            <Box w="35%" m="auto" mt={30} fontWeight="bold">
              <Box display={"grid"} gap="10px" textAlign={"center"}>
                <Text
                  p="1"
                  fontSize={15}
                  borderRadius={5}
                  _hover={{ bg: data.universal.color, color: "#ffff" }}
                  onClick={homefunc}
                >
                  HOME
                </Text>
                <Text
                  p="1"
                  fontSize={15}
                  borderRadius={5}
                  _hover={{ bg: data.universal.color, color: "#ffff" }}
                  onClick={aboutfunc}
                >
                  ABOUT
                </Text>
                <Text
                  p="1"
                  fontSize={15}
                  borderRadius={5}
                  _hover={{ bg: data.universal.color, color: "#ffff" }}
                  onClick={projectfunc}
                >
                  PROJECTS
                </Text>
                <Text
                  p="1"
                  fontSize={15}
                  borderRadius={5}
                  _hover={{ bg: data.universal.color, color: "#ffff" }}
                  onClick={githubfunc}
                >
                  GITHUB
                </Text>
                <Text
                  p="1"
                  fontSize={15}
                  borderRadius={5}
                  _hover={{ bg: data.universal.color, color: "#ffff" }}
                  onClick={skillfunc}
                >
                  SKILLS
                </Text>
                <Text
                  p="1"
                  fontSize={15}
                  borderRadius={5}
                  _hover={{ bg: data.universal.color, color: "#ffff" }}
                  onClick={contactfunc}
                >
                  CONTACT
                </Text>
                <a
                  href="https://drive.google.com/file/d/11cBo69VOoq3wcwtPFDMv0t6R7MeHgrB8/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text
                    p="1"
                    color={"#ffff"}
                    bg={"#565e59"}
                    fontSize={15}
                    borderRadius={5}
                    _hover={{ bg: data.universal.color, color: "#ffff" }}
                  >
                    RESUME
                  </Text>
                </a>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Slide;
