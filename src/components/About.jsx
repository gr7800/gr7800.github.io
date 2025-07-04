import React, { useContext, useEffect } from "react";
import {
  SimpleGrid,
  Heading,
  Image,
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "../data/data";
import Experience from "./Experience";
import { ThemeContext } from "../ThemeContext";

const About = (props) => {
  const { aboutScroll } = props;
  const { theme } = useContext(ThemeContext);

  // =================== Animation =====================>
  useEffect(() => {
    AOS.init(data?.aos);
  }, []);

  // Dynamic heading using profile name if available
  const aboutHeading = data.profile?.full_name
    ? `About ${data.profile.full_name}`
    : "About Me";

  return (
    <>
    <div ref={aboutScroll} className="mainDiv" style={{...theme, backgroundColor: theme?.navBgColor}}>
      <Heading fontSize={40} color={data.universal.color}>
        {aboutHeading}
      </Heading>
      {/*======================== Main Div ======================= */}
      <SimpleGrid pb={"10%"} m={"auto"} mt={"5%"} columns={[1, 1, 1, 2]}>
        {/*======================== Coding Gif ======================= */}
        <Image
          data-aos="zoom-in"
          m={"auto"}
          mt={["-10%"]}
          w={["83%", "83%", "83%", "80%"]}
          src={data.about_me.image}
          alt={aboutHeading}
        />
        {/*============ Content =========== */}
        <List
          data-aos="zoom-in"
          m={"auto"}
          w={["70%", "70%", "80%", "85%"]}
          fontSize={["14px", "15px", "20px", "19px"]}
          lineHeight="24px"
          mt={"5%"}
          textAlign={"left"}
          className="AboutList"
        >
          {data.about_me.contents &&
            data.about_me.contents.map((item, i) => (
              <ListItem key={i} mt={6}>
                <ListIcon as={CheckCircleIcon} color={data.universal.color} />
                {item.content}
              </ListItem>
            ))}
        </List>
      </SimpleGrid>
    </div>
    {/*======================== Experience Section =======================*/}
      <Experience />
    </>
  );
};
export default About;
