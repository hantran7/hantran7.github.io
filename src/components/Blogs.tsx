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
import experinceImage from "../images/experience.jpg";
import accomodateImage from "../images/accomodate.jpg";
import balance from "../images/balance.jpg";
import simple from "../images/simple.jpg";
import colors1 from "../images/colors1.jpeg";
import colorsworkshop from "../images/colorsworkshop.jpeg";
import team from "../images/team.jpg";
import typographyImage from "../images/typography.jpeg";
import lego from "../images/lego.jpg";
import home from "../images/home.jpg";
import feedback from "../images/feedback.jpg";
import info from "../images/info.jpg";
import violin from "../images/violin.jpg";
import prototype from "../images/prototype.jpg";
import blueprint from "../images/blueprint.jpg";
import testing from "../images/testing.png";
import efficient from "../images/efficiet.png";
import accessibility from "../images/accessibillity.png";
import constraints from "../images/constraints.png";
import interview from "../images/interview.png";
import myred from "../images/myred.png";
import alani1 from "../images/alaninu1.png";
import alani2 from "../images/alaninu2.png";
import alani3 from "../images/alaninu3.png";
import venn1 from "../images/venndiagram.png";
import venn2 from "../images/venndiagram2.png";
// BlogCard Component

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
      background: "linear-gradient(277deg, rgba(142,143,250,0.4682247899159664) 0%, rgba(234,144,108,0.5634628851540616) 42%)",
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
        maxHeight: "80vh", // Maximum height of the modal
        overflowY: "auto", // Allow vertical scrolling
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,

        borderRadius: "1rem",
      }}
    >
      <CardMedia component="img" height={"auto"} image={image} />
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
function Blogs() {
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
      title: "Affordances & Signifiers I",
      content: `
            <h3>#WordJournal </h3>
            <h4>Affordances & Signifiers I</h4>
            <p>
                The section I will be referring to is called "Fundamental Principles of Interaction" on page
                10. <br/>
                <strong>Experience</strong><br/>
                I chose the word "experience" to summarize this section because Don Norman, the author,
                highlights the significance of the user's experience. A user's experience impacts their
                satisfaction with the product, as well as their inclination to continue using and
                recommending it.
                This, in turn, plays a pivotal role in determining the overall success of the product. As a
                future software engineer,
                I recognize the importance of creating products and services that deliver a satisfying user
                experience.
                Hence, there are many steps that a software engineer can take to ensure user satisfaction.
                From the initial phase of requirements elicitation through the meticulous stages of user
                testing,
                meeting the expectations of the customer and providing a satisfying user experience will
                help lay the
                foundation for my journey towards becoming a successful software engineer.
                <br/><br/>
                Norman, Donald A. The Design of Everyday Things. 1988. Massachusetts, Mit Press, 2013, p.
                10.
            </p>`,
      image: experinceImage,
    },
    {
      title: "Affordances & Signifiers II",
      content: `<h3>#WordJournal </h3>
        <h4>Affordances & Signifiers II</h4>
        <p>
            The section I will be referring to is called "Falsely Blaming Yourself" from pages 65-68.
            <br>

            <strong>Accommodate</strong><br>

            I chose the word "accommodate" because this section brings to light the issue of humans
            adjusting to
            machines without receiving the same accommodation in return. Interacting with machines does
            not always proceed as seamlessly as one might anticipate.
            Therefore, it is essential to anticipate inappropriate actions by the user. As a future
            software engineer, it is important to
            acknowledge that users cannot be expected to achieve flawless mastery over a system or
            software, as they aren't the ones who designed it.
            By leveraging insights gained from user testing, software engineers can fine-tune their
            creations to align with user expectations,
            making use of techniques such as affordances, signifiers, effective mapping, and
            well-defined constraints. This iterative process not only
            enhances user satisfaction but also strengthens the bridge between human and machine
            interaction, fostering a more harmonious user experience.
            Having this awareness will help serve as a driving force for my growth as a software
            engineer.

            <br><br>
            Norman, Donald A. The Design of Everyday Things. 1988. Massachusetts, Mit Press, 2013, pp.
            65-68.
        </p>`,
      image: accomodateImage,
    },
    {
      title: "Design Rules",
      content: `<h3>#WordJournal </h3>
        <h4>Design Rules</h4>
        <p>
            The section I will be referring to is Chapter 5, Omit Needless Words: The Art of Not Writing
            for the Web. <br>

            <strong>Balance</strong><br>

            I chose the word "balance" because this section highlights the repercussions of excessive
            text on the page, while
            also delving into user-centric priorities. Numerous webpages are laden with an abundance of
            extraneous text that fails to
            pique the user's interest, merely occupying valuable space on the page without offering
            meaningful content.
            Within this particular segment, the author Steve Krug addresses the advantages of
            eliminating unnecessary words, including the reduction of noise on the page,
            the enhanced prominence of useful content, and the resulting shorter page length. This
            enables users to capture a more comprehensive
            view of each page without the need for excessive scrolling. As a future software engineer
            with an interest in UI design, this information is very valuable to me.
            By establishing a balance between essential and non-essential text on a page, the result is
            an enriched user experience, streamlined navigation,
            and optimized functionality of the software application. Attaining mastery in the "art of
            not writing for the web" will propel me
            towards becoming a proficient designer of software and applications.
            <br><br>
            Krug, Steve., and Roger Black. Don’t Make Me Think! : a Common Sense Approach to Web
            Usability. Que, 2000.`,
      image: balance,
    },
    {
      title: "Aesthetic Design",
      content: `
        <h3>#ApproximateAnalogy </h3>
        <h4>Aesthetic Design</h4>
        <p>

            <strong>Clear visuals are to presentations as intuitive interfaces are to UI: both guide and
                enhance the viewer's experience.</strong><br>

            Clear visuals in presentations, like the right blend of imagery and concise text, ensure the
            audience grasps key messages swiftly; similarly,
            intuitive interfaces in UI, marked by logical hierarchies and responsive feedback, ensure
            users navigate effortlessly without getting overwhelmed.
            <br><br>
            As a future software engineer, remembering this analogy reinforces the importance of
            user-centric design, emphasizing that both clarity of content and ease
            of interaction are paramount in creating applications that resonate with and retain users.
            <br><br>
            Reynolds, Garr. Presentation Zen Design Simple Ideas on Presentation Design and Delivery.
            New Riders, 2020.`,
      image: simple,
    },
    {
      title: "Colors I",
      content: `<h3>#ConceptMap </h3>
        <h4>Colors I</h4>
        <p>
            <img src="${venn1} alt="venn diagram" style="width: 100%; height: auto;">


            Colors don't just enhance aesthetics but evoke emotions and reinforce brand identity,
            influencing
            user perception and engagement. Coupled with effective UI design, they guide usability,
            information hierarchy,
            and user engagement. The overlap of these two domains, especially in ensuring accessibility,
            is
            crucial to cater to a diverse audience. As a future software engineer collaborating closely
            with designers and grasping these
            principles leads to more cohesive and user-centric products. Overall, the nuances of color
            and design in
            software development are vital for product success and user satisfaction.

            <br><br>
            Eiseman, Leatrice. The Complete Color Harmony: Pantone Edition ; Expert Color Information
            for Professional Color Results. Rockport, 2017.`,
      image: colors1,
    },
    {
      title: "Colors Workshop",
      content: `<a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
        <h3>#ApproximateAnalogy </h3>
        <h4>Colors Workshop</h4>
        <p>

            <strong>Emotion is to color as intuition is to UI design.</strong><br>

            While color speaks to our emotions and helps set the tone or mood, an intuitive UI design
            speaks to our
            innate understanding and ease of use. Both elements, when chosen and applied appropriately,
            contribute to a richer user experience.
            <br><br>
            As a future software engineer, I recognize that the analogy emphasizes the profound
            importance of user experience.
            Beyond merely crafting functional code, I must appreciate the intertwining of emotion and
            intuitive design to produce
            truly user-centric software. This understanding not only strengthens collaboration with
            design teams but also
            positions me to develop software that resonates deeply with its users.
            <br><br>
            Eiseman, Leatrice. The Complete Color Harmony: Pantone Edition ; Expert Color Information
            for Professional Color Results. Rockport, 2017.`,
      image: colorsworkshop,
    },
    {
      title: "Navigation & Values",
      content: `<h3>#ConceptMap </h3>
        <h4>Navigation & Values</h4>
        <p>
            <img src="${venn2}" alt="venn diagram" style="width: 100%; height: auto;">

            Both UI design and team dynamics in the workplace revolve around mutual understanding and
            creating seamless experiences.
            An intuitive UI ensures ease of use and diminishes user frustrations.
            Similarly, in a team setting, understanding individual values aids in minimizing conflicts
            and misunderstandings.
            This alignment in principles demonstrates the interconnected nature of design thinking and
            effective team
            collaboration. As a future software engineer, grasping the overlap between UI design
            principles and workplace values enhances an
            engineer's holistic approach to development, emphasizing user experience and team harmony.
            This understanding bridges technical expertise with interpersonal dynamics, fostering
            effective solutions
            and collaborative environments.

            <br><br>
            Krug, Steve., and Roger Black. Don’t Make Me Think! : a Common Sense Approach to Web
            Usability. Que, 2000. <br>
            https://blog.colinbreck.com/understanding-our-core-values-an-exercise-for-individuals-and-teams/`,
      image: team,
    },
    {
      title: "Design Systems",
      content: ` <h3>#DirectedAnalysis </h3>
        <h4>Design Systems</h4>
        <p>

            Typography is pivotal in design, often making up to 90% of a screen's content. When
            selecting typefaces,
            it's vital to balance brand identity, on-screen clarity, and performance, sometimes opting
            for system-native
            fonts for speed. The choice of font weights and styles should focus on clear hierarchies,
            minimizing variations
            for efficiency. Font sizes and line-heights, typically starting with a 1.5x ratio, are
            intertwined and play a
            role in the design's overall grid, needing adaptability across devices. It's essential to
            encode these typographic
            elements systematically for ease of maintenance and responsiveness.
        </p>
        <img src="${myred}  alt="MyRed Screenshot"" style="width: 100%; height: auto;">
        <p>
            MyRed's user interface (UI) is a good example of effective typography in web design.
            The platform establishes a clear typographical hierarchy, with each section introduced by
            well-proportioned headers.
            Notably, these headers utilize a readable typeface that contrasts with the content typeface,
            effectively distinguishing between headers and content for improved clarity and emphasis.
            The content itself employs another readable typeface, ensuring legibility. Furthermore,
            MyRed's typography
            is adaptable, showing consistent responsiveness across different device sizes. In essence,
            MyRed's
            design balances aesthetics with user-centric functionality through its thoughtful
            typographical choices.
        </p>
        <br><br>
        “Design Systems Typography Guide.” DesignSystems.Com, www.designsystems.com/typography-guides/.
        Accessed 19 Sept. 2023.`,
      image: typographyImage,
    },
    {
      title: "Design System Workshop",
      content: `<h3>#ApproximateAnalogy </h3>
        <h4>Design System Workshop</h4>
        <p>

            <strong>
                Creating a Design System is like building a Lego set, and designing software is like
                constructing a city with those Lego pieces.
            </strong><br>

            Creating a Design System is like building a Lego set, offering standardized pieces and
            blueprints for construction.
            These pieces, much like UI components in a design system, ensure consistency and efficiency.
            When designing software,
            these standardized components are assembled in various configurations, similar to
            constructing diverse structures in a
            Lego city. While each construction or software application can be unique, the underlying
            design system or Lego set
            provides a unified theme, allowing for scalability and collaborative efforts. In essence, a
            design system lays the
            foundation, and designing software is the creative assembly of those foundational elements.
            <br><br>
            As a future software engineer, grasping the interconnected relationship between design
            systems and designing
            software is crucial. A design system serves as a comprehensive guide, complete with reusable
            components, styles,
            and patterns, much like foundational building blocks. When I set out to design software,
            this system equips me with a
            toolbox that ensures consistency, efficiency, and a harmonized user experience.
            <br><br>
            https://www.youtube.com/watch?v=EK-pHkc5EL4&list=PLXDU_eVOJTx6ZQswH9nVKVMCsK83OzhoV`,
      image: lego,
    },
    {
      title: "Mockups",
      content: `<a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
        <h3>#FreeForm </h3>
        <h4>Mockups</h4>
        <p>

            After reading the segment in which Steve Krug, the author, dissects the home pages of two
            websites and offers
            his recommendations, I felt motivated to undertake a similar assessment of the Alani Nu
            website's homepage.


            <br><br>
        <h5>Screen shots of the home page with my own markups: </h5>

        <img src="${alani1}" alt="Alani Nu Website screen shot" style="width: 100%; height: auto;">
        <img src="${alani2}" alt="Alani Nu Website screen shot" style="width: 100%; height: auto;">
        <img src="${alani3}" alt="Alani Nu Website screen shot" style="width: 100%; height: auto;">
        <br><br>
        If I could redesign this homepage, I would first change the tagline. "Here for you and your
        taste buds" seems too broad.
        It leaves me asking, "in what way is this here for me?" I would change it to "Nourishing your
        wellness journey deliciously", which
        makes it clear that the website offers products related to health and wellness that are also
        tasty. I would also put the blurb about their
        mission below the tagline and remove the "Shop All" button as there is already one in the
        section below. The section below the hero section
        has a header labeled "What wellness should taste like" to the left of its content. At first, I
        thought there was a layout error with my
        browser, but I believe it is intentional. I would put the header above the content. I would also
        make the product "cards" smaller to eliminate
        the need to scroll horizontally, as there are only 5 "cards".
        <br>
        While the improvements made during this exercise will not be implemented on the website being
        analyzed, the process itself is a valuable
        learning experience that can enhance a software engineer's skill set, creativity, and
        understanding of user-centric design. It also
        contributes to a culture of continuous improvement and innovation within the field.
        <br><br>
        Krug, Steve., and Roger Black. Don’t Make Me Think! : a Common Sense Approach to Web Usability.
        Que, 2000. <br>
        https://www.alaninu.com/?keyword=alaninu&creative=652859403505&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBbsYEzn7mHCqr8XtMn3_ZWBK0t8GSGShOwotaVXjEWOqJ6z-nWQNPhoCQ4MQAvD_BwE
    `,
      image: home,
    },
    {
      title: "Feedback Workshop",
      content: `
        <h3>#WordJournal </h3>
        <h4>Feedback Workshop</h4>
        <p>

            <strong>Advice</strong><br>

            I chose the word "advice" because the article emphasizes the use of the word "advice" over
            "feedback"
            due to the negative connotations commonly associated with the latter. Most people tend to
            associate feedback
            with criticism, which can make both giving and receiving feedback uncomfortable. By asking
            for advice instead
            of feedback, it is perceived as an invitation, signaling that the advice giver has valuable
            expertise or knowledge,
            making the interaction more positive and constructive. This subtle shift in terminology can
            foster a more open and
            collaborative environment, where team members feel more comfortable sharing their insights
            and suggestions,
            ultimately contributing to the professional growth of individuals and the improvement of
            design outcomes.

            As a future software engineer, it is important to understand that feedback and advice are
            crucial in this field
            for fostering innovation and continuous improvement in this fast-paced field. They
            facilitate collaboration and
            knowledge exchange, which are essential for creating optimal solutions. Additionally, they
            are
            instrumental in aiding professional development and skill refinement, contributing to career
            advancement and
            organizational growth.
            <br><br>
            Kirkwood, Jes. "How to Give Designers Feedback They Can Actually Use." InVision, 4 Oct.
            2018, www.invisionapp.com/inside-design/give-designers-feedback/.
        </p>`,
      image: feedback,
    },
    {
      title: "Schneiderman & Info Org",
      content: `<h3>#WordJournal </h3>
        <h4>Schneiderman & Info Org</h4>
        <p>

            <strong>Information</strong><br>

            I chose the word "information" to describe this article because it represents the pivotal
            work by Ben Shneiderman
            in the field of Information Visualization. The core essence of the article is to amplify
            understanding,
            interpretation, and engagement with information—especially within the context of large and
            intricate
            datasets—by employing efficacious visualization techniques. As a future software engineer,
            it is important that
            I understand and implement the principles of Information Visualization as presented by Ben
            Shneiderman.
            These principles are crucial for developing intuitive and user-friendly interfaces, enabling
            enhanced
            comprehension and interaction with complex datasets, and fostering effective
            decision-making.
            The ability to visualize information efficiently not only increases productivity and fosters
            innovation
            but also improves communication of complex data insights to non-technical stakeholders,
            making it an
            indispensable skill in diverse domains of software development.

            <br><br>
            Shneiderman, Ben. "The Eyes Have It: A Task by Data Type Taxonomy for Information
            Visualizations." University of Maryland, 1996.`,
      image: info,
    },
    {
      title: "Prototyping",
      content: `<h3>#ApproximateAnalogy </h3>
        <h4>Prototyping</h4>
        <p>

            <strong>
                Storytelling is the soulful melody of a song, while UI design is the rhythm and
                instruments that bring it to life.
            </strong><br>
            Storytelling, likened to the soulful melody of a song, represents the core narrative or
            message that users connect with in a digital experience. On the other hand, UI design, akin
            to a song's rhythm and instruments, provides the structure and visual elements that enhance
            and guide user interaction. Just as a song is incomplete without its melody and
            accompaniment, a digital product needs both storytelling and UI design to create a
            harmonious and impactful user experience.
            <br><br>
            As a future software engineer, understanding the interplay between storytelling and UI
            design is crucial. Storytelling shapes the narrative and purpose of an application, ensuring
            it resonates with users, while UI design translates that narrative into a tangible and
            user-friendly interface. Together, they ensure that software is not only functional but also
            engaging and intuitive for its users.

            <br><br>
            Reynolds, Garr. Presentation Zen Design Simple Ideas on Presentation Design and Delivery.
            New Riders, 2020.`,
      image: violin,
    },
    {
      title: "Prototyping in Figma",
      content: ` <h3>#WordJournal </h3>
        <h4>Prototyping in Figma</h4>
        <p>

            <strong>Prototype</strong><br>
            I chose the word "prototype" to summarize this video because it provides a comprehensive
            walkthrough of Figma, emphasizing its robust prototyping capabilities. The video guides
            viewers through the process of transforming design ideas into interactive prototypes using
            Figma's user-friendly interface. By showcasing the tool's features and collaborative
            functionalities, it offers both beginners and experienced designers a hands-on approach to
            understanding and effectively utilizing Figma for their prototyping needs.
            As a future software engineer, grasping the concept of prototyping is vital. It enables
            early testing and visualization of solutions, leading to more user-centric products and
            reducing the risk of time-consuming revisions in later development stages.



            <br><br>
            https://www.youtube.com/watch?v=Saz6S1svYns&t=46s&ab_channel=CareerFoundry`,
      image: prototype,
    },
    {
      title: "Portfolio Check-In",
      content: `
        <h3>#ApproximateAnalogy </h3>
        <h4>Portfolio Check-In</h4>
        <p>

            <strong>
                UX case studies are to UX designers what architectural blueprints are to builders.
            </strong><br>
            Just as a blueprint outlines the structure, foundation, and layout of a building, a UX case
            study details the design process, decision-making, and methodologies employed in crafting a
            user experience. Both are foundational documents that guide the creation process, ensuring
            that the final product, whether it's a building or a digital interface, meets the intended
            purpose and serves its users effectively. They not only demonstrate the creator's expertise
            but also their foresight, adaptability, and commitment to delivering a well-thought-out end
            result.
            <br><br>
            As a future software engineer, grasping the essence of UX case studies is crucial. They
            highlight the importance of user-centric design, guiding engineers to develop software
            that's both functional and intuitive. This understanding fosters better collaboration with
            designers, leading to more effective and user-friendly applications.

            <br><br>
            https://blog.uxfol.io/ux-portfolio-examples/`,
      image: blueprint,
    },
    {
      title: "User Testing 101",
      content: `<h3>#WordJournal </h3>
        <h4>User Testing 101</h4>
        <p>
            The section I will be referring to is chapter 9 of Don't Make Me Think!<br>

            <strong>Testing</strong><br>

            I chose the word "testing" to summarize this section because it highlights Steve Krug's
            emphasis on practical user experience methods in web design. Testing underscores the need
            for real-world usability assessments, moving beyond theories to observing actual user
            interactions. It advocates for frequent, straightforward, and cost-effective approaches,
            proving that practical application trumps complex, costly setups. Essentially, testing
            signifies an ongoing, essential practice, pivotal in crafting user-friendly digital
            platforms. As a future software engineer, understanding the importance of testing is
            crucial because it ensures that the products I develop are user-centric, functional, and
            intuitive. It instills a habit of continual improvement, where regular feedback and
            iterative refinements become a standard part of the development process. This focus on
            testing ultimately leads to higher quality software, satisfied users, and successful
            products in the competitive market.

            <br><br>
            Krug, Steve., and Roger Black. Don’t Make Me Think! : a Common Sense Approach to Web
            Usability.
            Que, 2000.
        </p>`,
      image: testing,
    },
    {
      title: "Debriefing User Tests",
      content: `<h3>#WordJournal </h3>
        <h4>Debriefing User Tests</h4>
        <p>
            <strong>Efficiency</strong><br>

            I would summarize this section with the word "efficiency" because it emphasizes optimal use
            of resources, time, and effort in usability testing. It advocates for cost-effective
            methods, suggesting small-scale user tests to quickly identify major issues, thereby saving
            money and time. The approach also streamlines the feedback process, avoiding data overload
            and focusing on actionable insights, which leads to a more agile and effective development
            process. Overall, it's about achieving the best possible outcomes with the least amount of
            waste.
            As a future software engineer, embracing "efficiency" in usability testing is crucial. It
            enables quick, cost-effective user feedback, leading to better products without overusing
            resources. This focus ensures continual improvement while saving time and effort.
            <br><br>
            Krug, Steve., and Roger Black. Don’t Make Me Think! : a Common Sense Approach to Web
            Usability.
            Que, 2000.
        </p>`,
      image: efficient,
    },
    {
      title: "Inclusive Design I",
      content: `<h3>#WordJournal </h3>
        <h4>Inclusive Design I</h4>
        <p>
            <strong>Accessibility</strong><br>

            The word I would use to describe this section is "accessibility" because Steve Krug
            dedicates Chapter 12 to emphasizing the necessity of designing websites that are usable for
            everyone, regardless of any disabilities or limitations they might have. He challenges
            common misconceptions, illustrating that accessibility is neither prohibitively expensive
            nor complex, but rather a practice of mindful, user-oriented design. Krug champions the idea
            of considering accessibility from the outset, reinforcing its value in enhancing user
            experience universally, not just for those with specific needs.

            As a future software engineer, understanding and implementing accessibility is crucial
            because it ensures that the applications and websites I create are usable by the widest
            range of users, including those with disabilities. This practice not only expands the user
            base but also enhances the overall user experience, potentially leading to more positive
            engagement and broader adoption of the technology I develop.
            <br><br>
            Krug, Steve. Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability. 3rd
            ed., New Riders, 2014.
        </p>`,
      image: accessibility,
    },
    {
      title: "Inclusive Design II",
      content: ` <h3>#WordJournal </h3>
        <h4>Inclusive Design II</h4>
        <p>
            <strong>Constraints</strong><br>

            I chose the word "constraints" to summarize this section because Don Norman emphasizes
            the significance of four types of constraints – physical, cultural, semantic, and logical –
            in guiding human interactions with unfamiliar devices or situations. Norman underscores that
            understanding and leveraging these constraints in
            design is essential for creating user-friendly products. Moreover, he raises awareness about
            the challenges of outdated conventions and the potential for innovative solutions to address
            users' needs effectively.


            As a future software engineer, understanding the concept of constraints is crucial because
            it directly impacts user experience and the effectiveness of
            software design. Recognizing physical, cultural, semantic, and logical constraints enables
            engineers to create more intuitive and user-friendly software interfaces. By aligning
            software interactions with users' expectations and cultural norms, software engineers can
            reduce
            friction in user experiences, enhance usability, and ensure that their software is more
            accessible and efficient, ultimately leading to higher user satisfaction and adoption.
            <br><br>
            Norman, Donald A. The Design of Everyday Things. 1988. Massachusetts, Mit Press, 2013, pp.
            123-132.
        </p>`,
      image: constraints,
    },
    {
      title: "Design Interviews",
      content: `<h3>#WordJournal </h3>
        <h4>Design Interviews</h4>
        <p>
            <strong>Asset</strong><br>

            I would summarize this video with the word "asset" because it fundamentally revolves around
            the concept of presenting oneself as a valuable and contributory member to a potential
            employer in the field of UX design. The speaker, Dee, with extensive experience in UX
            design, emphasizes the importance of showcasing not just technical skills, but also the
            ability to think critically, make sound decisions, and align with a company's culture and
            values. Each question discussed in the video is framed in a way that encourages the
            interviewee to demonstrate how they can be an asset to the team. Whether it's articulating
            the reasons behind favoring a particular digital product, explaining the motivation to work
            for a company, walking through a portfolio project, or describing how a challenge was
            handled, the underlying theme is consistently about highlighting one's value and potential
            contribution. This approach shifts the focus from merely answering questions to
            strategically positioning oneself as an indispensable resource, thereby encapsulating the
            essence of being an 'asset' to a prospective employer.

            <br>
            As a future software engineer, understanding the concept of being an 'asset' to a team or
            organization is crucial. This mindset goes beyond technical proficiency; it encompasses the
            ability to innovate, collaborate effectively, and contribute to the broader goals of the
            company. By demonstrating not only coding skills but also problem-solving capabilities,
            adaptability, and a strong team ethic, a software engineer can significantly enhance the
            value they bring to their role, making them an indispensable part of any project or team.

            <br><br>
            https://youtu.be/vu3xcQm7cEo?si=QnCqjPwBOYPHbtXz
        </p>`,
      image: interview,
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
          onClose={handleClose} // Ensure this is the only onClose attribute
          image={selectedBlog.image}
          title={selectedBlog.title}
          content={selectedBlog.content}
        />
      </div>
    </div>
  );
}

export default Blogs;
