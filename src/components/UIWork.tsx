import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import "../App.css";
import campuscash from "../images/campuscash.png";
import pinkcc from "../images/pinkcc.png";
import neutralcc from "../images/neutralcc.png";
import tealcc from "../images/tealcc.png";
import ocean from "../images/oceanom.png";
import summit from "../images/summit.png";
import me from "../images/me.png"

interface BlogCardProps {
  title: string;
  image: string;
  onOpen: () => void;
}
const BlogCard: React.FC<BlogCardProps> = ({ title, image, onOpen }) => (
  <Card
    className="cardHoverEffect"
    sx={{
      width: 345,
      borderRadius: "1rem",
      background:
        "linear-gradient(277deg, rgba(142,143,250,0.4682247899159664) 0%, rgba(234,144,108,0.5634628851540616) 42%)",
      margin: "1rem",
    }}
  >
    <CardActionArea onClick={onOpen}>
      <CardMedia component="img" height={"140"} image={image} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontFamily: "'Share Tech Mono', monospace",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

// BlogModal Component
interface BlogModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
  image: string;
}

// BlogModal Component
const BlogModal: React.FC<BlogModalProps> = ({
  open,
  onClose,
  title,
  content,
  image,
}) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "auto",
        maxHeight: "80vh",
        overflowY: "auto",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,

        borderRadius: "1rem",
      }}
    >
      <CardMedia component="img" height={"auto"} />
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <h3>{title}</h3>
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  </Modal>
);

// Blogs Component

interface BlogData {
  title: string;
  content: string;
  image: string;
}

function UIWork() {
  const [open, setOpen] = useState(false);
  const blurStyle = {
    filter: open ? "blur(5px)" : "none",
  };

  const [selectedBlog, setSelectedBlog] = useState<BlogData>({
    title: "",
    content: "",
    image: "",
  });

  const handleOpen = (blog: BlogData) => {
    setSelectedBlog(blog);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const blogs = [
    {
      title: "Color Study",
      content: `
      <p>
          I undertook the task of analyzing the color scheme of a specific UI: the Campus Cash app,
          designed to provide students with coupon offers.
          My initial step involved recreating the UI, preserving its original color palette to clearly
          highlight the functionality associated
          with each hue. My goal was to enhance the effectiveness of the design by consolidating more
          content within a singular screen size.
          Following this, I crafted three additional versions, each with a unique color scheme. The
          most demanding aspect of this exercise was
          striving for a balance between aesthetic appeal and clear distinction between interface
          elements. Concluding the project, I performed
          a detailed analysis of each proposed color arrangement. Below are the results of this
          exercise.
      </p>
      <h4>This is a page from the Campus Cash app, which is an app with coupons for students.</h4>
      <img src="${campuscash}" alt="Campus Cash Screen Shot" style="width: 20%; height: auto;">
      <p>The app’s theme is monochromatic. It uses different shades of green. The blend of green
          shades imparts a harmonious feel, as the hues complement one another
          and aid in distinguishing between different elements. Because of its monochromatic theme,
          the app might pose accessibility challenges.
          Monochromatic color schemes, while aesthetically appealing, can sometimes lead to
          insufficient contrast between different design elements.
          Users with visual impairments, especially those with color vision deficiencies, might find
          it difficult to distinguish between various parts of the interface.
          This can impact not only the readability of the text but also the user's ability to identify
          actionable items. I believe the designers were trying to make a
          simple app that is intuitive and straight forward for college students. The decision to use
          green might have multiple reasons behind it; green often symbolizes growth,
          and renewal. It can also be associated with financial wellness or eco-friendliness, which
          fits with the purpose of the app.
      </p>
      <img src="${pinkcc}" alt="Pink Color Scheme Campus Cash"  style="width: 20%; height: auto;">
      <p>
          This iteration of the UI employs a near split-complementary color scheme, featuring a
          red-purple hue (resulting in a pinkish tone), orange, and green.
          The UI boasts a calming pastel backdrop, setting a welcoming atmosphere. Dominating this is
          the orange app bar,
          infusing the design with enthusiasm. Orange's liveliness keeps users engaged amidst the
          soothing background.
          The dark pine green logo anchors the interface, conveying stability and depth. Its richness
          contrasts with the energetic orange,
          ensuring balance. Strategically, the logo foregrounds the brand's reliability. Together, the
          colors harmonize tranquility
          with dynamism, crafting a refreshing yet grounded design.
      </p>
      <img src="${neutralcc}" alt="Neutral Color Scheme Campus Cash" style="width: 20%; height: auto;">
      <p>
          Although the this redesigned UI does not fit into a harmonious combination, it features a
          serene pastel blue app bar,
          exuding calm and clarity. This shade fosters a user-friendly ambiance. Contrasting this is
          the dark tan, lending an earthy,
          stable foundation to the interface. Its neutrality anchors the design without overwhelming.
          The bright orange logo stands out,
          adding a splash of vitality and enthusiasm. Collectively,
          this palette melds soft sophistication with energetic vibrancy, crafting an inviting design.
      </p>
      <img src="${tealcc}" alt="Teal Color Scheme Campus Cash" style="width: 20%; height: auto;">
      <p>This iteration of the UI closely aligns with a split-complementary color scheme,
          incorporating shades of blue-green, blue-purple, and red-orange.
          The bright blue-green background offers a refreshing and invigorating base, capturing
          attention and evoking feelings of growth and creativity.
          This vibrancy likely resonates with the energetic nature of college students. The
          bluish-purple app bar contrasts beautifully, serving as a calming
          and sophisticated anchor amidst the brightness. Purple's mix of red and blue hints at both
          passion and serenity. The dark red-orange logo introduces
          warmth and enthusiasm to the design. Together, these colors breathe
          fresh life into the app, creating a modern and engaging interface.
      </p>
      <br>
      <p>I believe the first iteration is the most effective because it seamlessly integrates visual
          appeal with user-centric design.
          While its distinct color palette captures attention, it also ensures that navigating through
          the app remains intuitive.
          The design's emotional resonance, from the calming pastel to the invigorating orange,
          enhances user engagement.
          Moreover, the clearly defined elements, like the standout app bar and the anchoring logo,
          prioritize user comfort and fluid interaction.
          In essence, this iteration goes beyond mere aesthetics to offer an experience that's both
          delightful and functional for the intended audience.
          My definition of "effective" in the context of UI design hinges on two primary factors.
          First, there must be sufficient contrast between elements,
          ensuring that users can effortlessly distinguish and navigate the interface's various
          components.
          Such contrast not only promotes accessibility but also enhances user experience by
          minimizing confusion or potential missteps.
          Second, the design must possess aesthetic appeal, resonating with the target audience and
          fostering a positive emotional connection.
          An aesthetically pleasing design can significantly elevate user engagement and overall
          satisfaction.
      </p>`,
      image: campuscash,
    },
    {
      title: "Finding Inspiration",
      content: ` 
      <h4>Sand Spit</h4>
      <p>
          "Sand Spit" is a captivating oil on canvas painting created in 1957 by the renowned artist
          Milton Avery.
          Avery, recognized as America's leading colorist during his time, relocated to the New York
          City in 1925.
          In this artistic hub, he collaborated with and drew inspiration from notable painters such
          as Robert Henri, John Sloan, and Edward Hopper.
          In "Sand Spit," Avery's distinctive style is evident, with a focus on the relationships
          between forms and colors rather than detailed realism.
          Using a minimalist palette of about four colors, the painting portrays a tranquil seascape
          where a lush field converges with a prominent expanse
          of white spume. This piece reflects a phase in Avery's artistic journey when he gravitated
          towards landscapes and simplified interiors.
          Bridging European modernism and American Abstract Expressionism, "Sand Spit" encapsulates
          Avery's pioneering approach to art, where the
          essence of color overshadowed intricate detail.
          <br><br>
      <h4>Composition and Flow:</h4>
      <p>The composition of "Sand Spit" is structured in layers, each representing a different
          element of the coastal landscape. The transition from the sky to the pastures, then to the
          spume and sandy path, and finally to the water, creates a sense of depth and perspective.
          This layered approach guides the viewer's gaze through the painting, offering a journey from
          the expansive sky to the tranquil water below.</p>
      <h4>Color Balance</h4>
      <p>"Sand Spit" displays a harmonious blend of colors: the light blue of the sky, a lighter green
          pasture interspersed with patches of darker green, the dominant white of the spume, the
          sandy beige of the path, and the brighter shade of blue for the water.
          Avery's expertise as a colorist shines through in the way these colors come together to
          evoke the ambiance of a coastal landscape.</p>
      <h4>Texture and Detail:</h4>
      <p>The presence of darker green patches within the lighter green pasture adds a sense of texture
          and depth to the painting. While they may resemble bushes, their abstract nature leaves room
          for interpretation, allowing viewers to engage with the painting and form their own
          perceptions. These subtle variations in color and form enrich the landscape, inviting a
          deeper exploration and appreciation of Avery's artistic nuances.</p>
      </p>
      <h4>My inspired UI:</h4>
      <img src="${ocean}"  alt="Ocean Om Mockup" style="width: 100%; height: auto;">
      <p> The UI is a screen from the "Ocean Om" app, designed with a calming oceanic theme. The top
          of the screen features the "Ocean Om" logo in a soothing light blue, followed by a darker
          blue header labeled "Meditation Station". Beneath this header, there's a beige sandy-colored
          section titled "Choose Soundscape", where users can select their preferred oceanic sounds
          from a menu. Further down, there's a vibrant green button labeled "Start Meditation",
          inviting users to begin their meditative journey. The bottom of the screen has a blue app
          bar, and the entire background of the app is adorned with serene blue ocean waves,
          encapsulating the user in a tranquil maritime ambiance. The UI is intended for mobile
          devices, such as smartphones and tablets.</p>
      <br>
      <p>The inspiration for this UI sketch is drawn from the tranquil and layered visuals of the
          "Sand Spit" painting by Milton Avery. The color palette, with its gradation from light blue
          to sandy beige and then to vibrant green, mirrors the layered colors of the painting. The
          ocean waves background further immerses users in a calming coastal environment, reminiscent
          of the serene seascape depicted in "Sand Spit". The design aims to transport users to a
          peaceful oceanic realm, facilitating a deeper and more connected meditation experience.</p>`,
      image: ocean,
    },
    {
      title: "UI/UX Summit",
      content: `


      <p>The UIUN Summit was an event where teams representing different user populations discussed and proposed
          changes to improve the accessibility of a website. Each team explored how their user group experienced the
          world, identified their specific needs, and suggested strategies for interface designers to meet those
          needs. The summit encouraged collaboration and negotiation among teams with potentially overlapping or
          conflicting requirements for website design. Each team presented their findings and recommendations, and the
          goal was to enhance UI/UX accessibility for diverse user populations. <br><br>
          Baby Boomers, who experienced a world transitioning to digital technology, value face-to-face interactions
          but have adapted to basic tech. They require clear and simple interfaces, larger text, guided steps, and
          easily accessible help options. Interestingly, these needs align with various other user groups, including
          children under 13, individuals with dyslexia, non-native speakers, photosensitive users, people with
          intellectual disabilities, those from rural communities, people with anxiety, and individuals with
          trauma/PTSD, who also benefit from clear interfaces and larger text. Design strategies for these needs
          involve familiar icons, decluttered designs, and feedback mechanisms. For the mail-in ballot interface,
          concise instructions in plain language, clear calls to action, and legible text in recommended font sizes
          and common typefaces are vital for meeting these accessibility requirements. <br><br>
          During the UIUN Summit negotiations, my focus was on advocating for a user-friendly interface with visual
          guides, large fonts, and easily accessible activation areas for Baby Boomers. Surprisingly, I found common
          ground with other groups as their requirements often overlapped with mine, emphasizing clear and simple
          interfaces, larger text, and user-friendly elements. There were no unlikely allies, but convincing the
          color-blind group was the most challenging, mainly because their requirements aligned more closely with
          standard best practices, while I was advocating for additional, population-specific requirements.
          Ultimately, we reached a compromise recognizing the benefits of inclusive design for all users. Prioritizing
          certain needs felt balanced, as the prioritized requirements were comprehensive and beneficial for Baby
          Boomers and others, resulting in a collaborative effort to ensure a more inclusive user experience.
          My greatest takeaway from the Summit was the realization that inclusive design doesn't have to be a daunting
          task. Through open and collaborative discussions, we were able to identify common needs across different
          user populations and find ways to meet those needs effectively. The experience showed me that inclusivity is
          achievable when we prioritize understanding and accommodating diverse user requirements. <br><br>
          I plan to apply these insights to other topics, especially in my work as a software engineer for apps and
          websites. Before the Summit, I had some uncertainty about how to approach inclusive design. However, now I
          understand that it involves integrating standard UI design best practices while considering features that
          can benefit specific user groups. I've learned the importance of empathy and flexibility in design, ensuring
          that the end product caters to a wide range of users. This experience has equipped me with a valuable skill
          set that I will carry forward to create more accessible and user-friendly digital experiences in the future.
      </p>`,
      image: summit,
    },
    {
      title: "Making of My Portfolio",
      content: `<p>In creating my portfolio, I've emphasized my values of ambition and authenticity, and strengths in perseverance and adaptability. I've implemented clean, intuitive navigation with a consistent app bar on every page, ensuring easy accessibility for users. My choice of contrasting yet harmonious colors reflects my personal aesthetic and design philosophy. I've paid special attention to the harmony between affordances and signifiers, ensuring that interactive elements like buttons change color on hover, enhancing user engagement. A significant aspect of my portfolio is showcasing my evolution as a designer, transitioning from a basic template to a custom-built site using React TypeScript, a journey that underscores my growth and adaptability. Throughout, I've made sure to properly attribute others' work, underlining my commitment to integrity in design. This portfolio is a true representation of my professional identity, blending my skills, values, and personal design journey. </p>`,
      image: me,
    },
  ];
  return (
    <div style={blurStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            image={blog.image}
            onOpen={() => handleOpen(blog)}
          />
        ))}
        <BlogModal
          open={open}
          onClose={handleClose}
          image={selectedBlog.image}
          title={selectedBlog.title}
          content={selectedBlog.content}
        />
      </div>
    </div>
  );
}

export default UIWork;
