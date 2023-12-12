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
import mockup from "../images/snsmockups.png";
import stocked from "../images/stocked.png";
import prototype from "../images/snsprototype.png";
import prototype2 from "../images/prototype2.png";
import designsystem from "../images/designsystem.png";
import earlymockup1 from '../images/earlymockup1.png'
import earlymockup2 from '../images/earlymockup2.png'
import earlymockup3 from '../images/earlymockup3.png'
interface BlogCardProps {
  title: string;
  image: string;
  onOpen: () => void;
}
const BlogCard: React.FC<BlogCardProps> = ({ title, image, onOpen }) => (
  <Card
    sx={{
      width: 345,
      borderRadius: "1rem",
      backgroundColor: "#FF9E9B",
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

        borderRadius: "1rem",
        boxShadow: 24,
        p: 4,
      }}
    >
      <CardMedia component="img" height={"auto"} />
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <h3> {title}</h3>
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

function StockednStacked() {
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

  // Your blogs data
  const blogs = [
    {
      title: "Design System",
      content: `
      <h1 style="text-align: center;">Stocked & Stacked</h1>
      <p>
          "Stocked & Stacked" is an innovative mobile app designed to transform kitchen inventory management and meal planning. 
          Users can effortlessly input and monitor grocery items via manual input or barcode scanning, facilitating accurate real-time 
          inventory tracking. This real-time data empowers users to optimize meal planning, determine the number of possible meals with 
          available ingredients, and monitor the nutritional content of their recipes and meals. "Stocked & Stacked" fills a market void 
          by amalgamating inventory management, meal planning, and nutritional tracking. This comprehensive approach not only promotes 
          efficient grocery utilization and healthier eating but also significantly reduces food wastage, offering both economic and environmental 
          advantages. 
          <br>
          The process I will be describing is the meal plan creation feature. UUsers can craft a meal plan and, within it, design meals 
          by specifying ingredients and the desired number of servings. As users set the servings, 
          the app intuitively adjusts the ingredient quantities to match the chosen meal count.
      </p>

      <h2>Design System</h2>
      <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FANN3ehYS0TyPrKPEegSPd1%2FStocked-N-Stacked%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DlvuIqCfqXidPrT16-1" allowfullscreen></iframe>        <h2>Process Steps</h2>
      <ol>
          <li>
              <h3>Step 1: Project Initiation</h3>
              <p>
                  The project's inception was rooted in a school assignment. While I was inclined towards the 
                  fitness and wellness domain, I recognized the saturation of apps that either focus on nutrition 
                  tracking or gym progress monitoring. To differentiate and delve deeper into the wellness sphere, 
                  I decided to enhance the nutrition tracking concept. Instead of merely tracking the nutrition 
                  of individual ingredients, I envisioned an app that could plan and track entire meals. My aim was 
                  to offer a seamless user experience, which led to the integration of an ingredient input feature that 
                  simultaneously manages inventory. Recognizing the utility of a grocery list, I incorporated it, 
                  ensuring that users could effortlessly transition from grocery shopping to inventory management 
                  and meal preparation, all within a single platform.
              </p>
          </li>
          <li>
              <h3>Step 2: Requirement Gathering</h3>
              <p>
                  To gather the project requirements, I prioritized user customization. I envisioned a platform where 
                  users could craft meal plans with personalized names and have the flexibility to modify them later 
                  through an edit feature. Given the app's focus on wellness and nutrition, it was imperative to incorporate 
                  detailed nutritional information. I also wanted to empower users with the ability to set their desired servings. 
                  This choice would not only adjust the ingredient inventory, reflecting how much of each item they have left, 
                  but also modify the nutritional facts accordingly. By integrating these features, the app ensures users can 
                  optimize their ingredients, determining the maximum servings they can produce for a meal.
              </p>
          </li>
          <li>
              <h3>Step 3: Design and Planning</h3>
              <p>In the design and planning phase, I aimed for a streamlined and uncluttered user interface. I settled on a 
                  structure that includes a home page, grocery list page, inventory page, meal prep page, and a profile page, 
                  all easily navigable through a dedicated navbar. The meal prep page was designed to be hierarchical: users 
                  can create overarching meal plans, and within these plans, they can add, edit, or view individual meals. 
                  Delving deeper into the meal screen, users have the capability to incorporate ingredients and specify servings. 
                  To design the app's components, I leveraged Figma and utilized design kits from the community, notably the 
                  Material UI kit and an iOS kit.</p>
          </li>
          <!-- Add more steps as needed -->
      </ol>

      <h2>Challenges and Solutions</h2>
      <ul>
          <li>
              <h3>Challenge 1:</h3>
              <p>One significant challenge I encountered during the project was establishing the right aesthetics, 
                  particularly in terms of color scheme and typography. I grappled with selecting colors that resonated 
                  with the app's purpose and ethos, and while I've made choices, I remain open to revisions. 
                  Typography presented a similar dilemma; I aimed for a modern look without compromising readability. 
                  Customizing components from the Figma design kits added another layer of complexity, given the initial 
                  learning curve associated with Figma. To navigate these challenges, I adopted a trial-and-error approach. 
                  I experimented with various colors and typefaces within my components until I achieved a satisfactory look. As I
                   spent more time developing my design system, my proficiency with Figma grew, enabling me to tailor the components 
                   more closely to my vision.</p>
          </li>
          <li>
              <h3>Challenge 2:</h3>
              <p>Another challenge arose when I began assembling my components to visualize the overall page layouts. 
                  It was during this phase that I identified gaps in the user experience, notably the omission of a mechanism 
                  to input meal information, such as ingredients. This oversight was a remnant from an earlier stage where I had 
                  sketched initial mockups. My initial vision was for meals to have an expandable drawer-like interface that would 
                  display ingredients. However, this design didn't provide a clear pathway for users to actually input the ingredients. 
                  To address this, I revisited my mockups, rethinking the user journey for adding a meal. After several iterations and 
                  redesigns, I crafted the necessary components and assembled pages to ensure a seamless and intuitive process for users.</p>
          </li>
          <!-- Add more challenges and solutions as needed -->
      </ul>

      <h2>Conclusion</h2>
      <p>
          The "Stocked & Stacked" app was initiated as part of a 
          school project to enhance the wellness sector's offerings. Recognizing the saturation of 
          traditional nutrition trackers, the meal prep feature was designed to allow users to plan and monitor entire meals. 
          With a user-centric design, the interface facilitates the creation and customization of meal plans, 
          ensuring an intuitive experience. Challenges, such as component layout and user input mechanisms, 
          were addressed through iterative design. The outcome is a specialized meal prep tool that stands out, 
          offering users a unique way to optimize and track their meals.     
          
          <br>
          One of the most valuable insights I gained from this project was the importance of iterative design. 
          The process taught me that initial concepts, while foundational, often require refinement and adaptation 
          as challenges arise and new perspectives are considered. Looking ahead, I envision enhancing the app's visual appeal. 
          My aim is to evolve its design to be sleeker, ensuring that the user experience is not just functional but 
          also aesthetically pleasing. This will involve a deeper dive into design principles and possibly integrating 
          feedback from users to achieve a more refined and satisfying aesthetic.
       </p>`,
      image: designsystem,
    },
    {
      title: "Mockups",
      content: `<h1 style="text-align: center;">Stocked & Stacked</h1>
  

      <h2>Mockups</h2>
      <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FANN3ehYS0TyPrKPEegSPd1%2FStocked-%2526-Stacked%3Ftype%3Ddesign%26node-id%3D30%253A955%26mode%3Ddesign%26t%3Dp3Vw4CuHqokjP2Eu-1" allowfullscreen></iframe>        
       `,
      image: mockup,
    },
    {
      title: "Prototype",
      content: ` <h1 style="text-align: center;">Stocked & Stacked</h1>
  

      <h2>Prototype</h2>
      <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FANN3ehYS0TyPrKPEegSPd1%2FStocked-%2526-Stacked%3Ftype%3Ddesign%26node-id%3D30%253A955%26mode%3Ddesign%26t%3DZGRhRpuHRvcjfHpm-1" allowfullscreen></iframe>        
  `,
      image: prototype,
    },
    {
      title: "Revised Prototype",
      content: `<h1 style="text-align: center;">Stocked & Stacked</h1>


      <h2>Prototype</h2>
      <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FANN3ehYS0TyPrKPEegSPd1%2FStocked-%2526-Stacked%3Ftype%3Ddesign%26node-id%3D209%253A7160%26mode%3Ddesign%26t%3DQWxIxQhKH8gSZBrD-1"
          allowfullscreen></iframe>`,
      image: prototype2,
    },
    {
      title: "Design Evolution Narrative Draft",
      content: `
      <h1 style="text-align: center;">Design Evolution Narrative Draft</h1>

      <p>As I reflect on the journey of developing my unique UI project, I'm reminded of the singular path I embarked
          on. This project was a solo endeavor, a testament to my dedication and vision. It was born out of a personal
          need, an urge to blend the realms of fitness and technology in a seamless, intuitive way. The result? An
          all-in-one grocery list, inventory tracker, and meal planning app, with a special focus on the meal planning
          aspect for this project. <br><br>

          The heart of this project lies in its ability to cater to the needs of gym enthusiasts and meal preppers
          like myself. My days spent juggling macro calculations and grocery lists highlighted a gap in the market - a
          gap I was uniquely positioned to fill. Why me? Because I live the life of my target audience, understanding
          intimately the nuances and specifics of what they need in such an app. <br><br>

          I envisioned a UI that epitomized efficiency. Designed for the fast-paced lifestyle of its users, the app
          not only tracks inventory but also assists in meal planning, all while calculating necessary nutritional
          information. The user can simply increase the servings, and the app adeptly recalculates the macros - a
          feature that's a true game-changer.<br><br>

          Choosing the mobile platform for this app was a no-brainer. The nature of the app demanded accessibility at
          the fingertips, catering to users who need to make quick, informed decisions about their meals and nutrition
          on the go.<br><br>

          The narrative that inspired this UI was deeply personal yet universally relatable - a story of
          transformation. It centered around a college boy, driven by a heartbreak, who decides to take control of his
          life through fitness and nutrition. This narrative shaped the UI, culminating in a design that's not just
          functional but motivational. <br>
          <br>Here are a few of my early sketches and an early Figma mockup: <br>
          <img src="${earlymockup1}" style="width: 20%; height: auto;">
          <img src="${earlymockup2}" style="width: 50%; height: auto;">
          <img  src="${earlymockup3}" style="width: 80%; height: auto;">
          <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FANN3ehYS0TyPrKPEegSPd1%2FStocked-%2526-Stacked%3Ftype%3Ddesign%26node-id%3D105%253A3328%26mode%3Ddesign%26t%3DEO0FO2c3h1IWuOx1-1"
              allowfullscreen></iframe>
          <br>
          In designing the system, I took pride in selecting modern, sleek fonts that are both attractive and easy to
          read. The color palette was another area where I poured my creativity, choosing shades of blue for trust and
          coolness, and vibrant orange to inject energy and positivity.
          <br>This is my prototype before user tests: <br>
          <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FANN3ehYS0TyPrKPEegSPd1%2FStocked-%2526-Stacked%3Ftype%3Ddesign%26node-id%3D30%253A955%26mode%3Ddesign%26t%3D4RHr4dZqElNjCotj-1"
              allowfullscreen></iframe>

          <br>
          In my prototype, the journey for users starts at the "Existing Plans" page. This isn't the central hub of
          the application but rather the focal point for the task I was designing. Faced with uncertainty about the
          extent of my project's scope, I ventured into designing for every possible user interaction. This included
          features allowing users to create new meal plans, edit existing ones, add new ingredients to a meal, and
          formulate individual meals within an existing plan.

          This approach, while comprehensive, led to a significant challenge. Attempting to cover the full spectrum of
          user interactions resulted in the creation of numerous screens, a process that became both monotonous and
          complex. The ambition to capture every interaction inadvertently led to incomplete workflows and a dilution
          of the project's focus. It was a learning curve in understanding the balance between comprehensive
          functionality and maintaining a clear, manageable scope in design. <br><br>

          User testing was an eye-opener. I specifically chose gym-goers and meal preppers, including those
          experienced in macro tracking apps. Their feedback led to several significant changes:
          <br><br>
          Visual Confusion: The initial design made it difficult for users to distinguish between the meal plan page
          and the meal page, as they appeared too similar. This confusion could lead to a frustrating user experience,
          as users might find themselves on the wrong page without realizing it. By introducing different background
          images for these pages, I created a distinct visual identity for each, making it immediately clear to users
          where they were in the app. This not only improved the user experience but also reduced the cognitive load,
          as users no longer had to second-guess their navigation choices.
          <br><br>
          Ambiguous Page Names: Initially, the page names in the app were generic, which often left users puzzled
          about their content and purpose. Clear and descriptive names are crucial in any interface as they guide
          users and set the right expectations about the page content. By making the page names more descriptive, I
          enhanced the clarity and ease of navigation. Users could now navigate more intuitively, understanding at a
          glance the purpose of each page.
          <br><br>
          User Guidance: A lack of clear guidance on each page can lead to users feeling lost or overwhelmed,
          especially if they are new to the app. Adding concise descriptions to each page provided users with
          immediate context, helping them understand the functionality and purpose of the page they were on. This
          straightforward guidance significantly improved user comprehension and confidence in using the app.
          <br><br>
          Navigation Difficulties: If button functionalities are not clear, users can become frustrated, leading to a
          poor experience and potentially causing them to abandon the app. Clear indications of what each button does
          simplified the navigation, making the app more user-friendly. This clarity in navigation is crucial in
          maintaining the flow and ensuring that users can easily accomplish their tasks without confusion or
          frustration.
          <br><br>
          Inconsistent Element Alignment: Inconsistent design elements can disrupt the visual flow and make the app
          appear unprofessional. By standardizing the alignment of elements across all screens, I created a cohesive
          and aesthetically pleasing interface. This consistency not only improved the app’s visual appeal but also
          contributed to a more seamless user experience, as users could easily predict where to find information
          based on their experience on other screens.
          <br><br>
          Inadequate Visual Hierarchy: A well-structured visual hierarchy is key to helping users navigate and
          understand the layout of an application. Initially, the lack of a clear visual hierarchy made it difficult
          for users to track their location within the app and understand the relationship between different pages.
          Introducing breadcrumbs was a strategic decision to enhance navigational efficiency and orientation.
          Breadcrumbs provide a clear path of navigation, allowing users to easily track their journey within the app
          and navigate back if needed, thus improving the overall user experience.
          <br><br>
          Here is my prototype after the changes prompted by my user tests were implemented:
          <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FANN3ehYS0TyPrKPEegSPd1%2FStocked-%2526-Stacked%3Ftype%3Ddesign%26node-id%3D209%253A7160%26mode%3Ddesign%26t%3DEO0FO2c3h1IWuOx1-1"
              allowfullscreen></iframe>
          <br>
          My design values of ambition and confidence shone through every aspect of the UI. The color choices and the
          consistent, straightforward layout were not just about aesthetics but also about empowering users to take
          control of their fitness and dietary journey with confidence and ease.

          In essence, this project was a labor of love, a manifestation of my personal journey, and a tribute to those
          on a similar path. It was a journey of learning, adapting, and ultimately, creating something that not only
          served a purpose but also inspired and motivated.
      </p>`,
      image: stocked,
    },
    {
      title: "Design Evolution Narrative",
      content: `
      <h1 style="text-align: center;">Design Evolution Narrative Draft</h1>

      <p>As I reflect on the journey of developing my unique UI project, I'm reminded of the singular path I embarked
          on. This project was a solo endeavor, a testament to my dedication and vision. It was born out of a personal
          need, an urge to blend the realms of fitness and technology in a seamless, intuitive way. The result? An
          all-in-one grocery list, inventory tracker, and meal planning app, with a special focus on the meal planning
          aspect for this project. <br><br>

          The heart of this project lies in its ability to cater to the needs of gym enthusiasts and meal preppers
          like myself. My days spent juggling macro calculations and grocery lists highlighted a gap in the market - a
          gap I was uniquely positioned to fill. Why me? Because I live the life of my target audience, understanding
          intimately the nuances and specifics of what they need in such an app. <br><br>

          I envisioned a UI that epitomized efficiency. Designed for the fast-paced lifestyle of its users, the app
          not only tracks inventory but also assists in meal planning, all while calculating necessary nutritional
          information. The user can simply increase the servings, and the app adeptly recalculates the macros - a
          feature that's a true game-changer.<br><br>

          Choosing the mobile platform for this app was a no-brainer. The nature of the app demanded accessibility at
          the fingertips, catering to users who need to make quick, informed decisions about their meals and nutrition
          on the go.<br><br>

          The narrative that inspired this UI was deeply personal yet universally relatable - a story of
          transformation. It centered around a college boy, driven by a heartbreak, who decides to take control of his
          life through fitness and nutrition. This narrative shaped the UI, culminating in a design that's not just
          functional but motivational. <br>
          <br>Here are a few of my early sketches and an early Figma mockup: <br>
          <img src="${earlymockup1}" style="width: 20%; height: auto;">
          <img src="${earlymockup2}" style="width: 50%; height: auto;">
          <img  src="${earlymockup3}" style="width: 80%; height: auto;">
          <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FANN3ehYS0TyPrKPEegSPd1%2FStocked-%2526-Stacked%3Ftype%3Ddesign%26node-id%3D105%253A3328%26mode%3Ddesign%26t%3DEO0FO2c3h1IWuOx1-1"
              allowfullscreen></iframe>
          <br>
          In designing the system, I took pride in selecting modern, sleek fonts that are both attractive and easy to
          read. The color palette was another area where I poured my creativity, choosing shades of blue for trust and
          coolness, and vibrant orange to inject energy and positivity.
          <br>This is my prototype before user tests: <br>
          <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FANN3ehYS0TyPrKPEegSPd1%2FStocked-%2526-Stacked%3Ftype%3Ddesign%26node-id%3D30%253A955%26mode%3Ddesign%26t%3D4RHr4dZqElNjCotj-1"
              allowfullscreen></iframe>

          <br>
          In my prototype, the journey for users starts at the "Existing Plans" page. This isn't the central hub of
          the application but rather the focal point for the task I was designing. Faced with uncertainty about the
          extent of my project's scope, I ventured into designing for every possible user interaction. This included
          features allowing users to create new meal plans, edit existing ones, add new ingredients to a meal, and
          formulate individual meals within an existing plan.

          This approach, while comprehensive, led to a significant challenge. Attempting to cover the full spectrum of
          user interactions resulted in the creation of numerous screens, a process that became both monotonous and
          complex. The ambition to capture every interaction inadvertently led to incomplete workflows and a dilution
          of the project's focus. It was a learning curve in understanding the balance between comprehensive
          functionality and maintaining a clear, manageable scope in design. <br><br>

          User testing was an eye-opener. I specifically chose gym-goers and meal preppers, including those
          experienced in macro tracking apps. Their feedback led to several significant changes:
          <br><br>
          Visual Confusion: The initial design made it difficult for users to distinguish between the meal plan page
          and the meal page, as they appeared too similar. This confusion could lead to a frustrating user experience,
          as users might find themselves on the wrong page without realizing it. By introducing different background
          images for these pages, I created a distinct visual identity for each, making it immediately clear to users
          where they were in the app. This not only improved the user experience but also reduced the cognitive load,
          as users no longer had to second-guess their navigation choices.
          <br><br>
          Ambiguous Page Names: Initially, the page names in the app were generic, which often left users puzzled
          about their content and purpose. Clear and descriptive names are crucial in any interface as they guide
          users and set the right expectations about the page content. By making the page names more descriptive, I
          enhanced the clarity and ease of navigation. Users could now navigate more intuitively, understanding at a
          glance the purpose of each page.
          <br><br>
          User Guidance: A lack of clear guidance on each page can lead to users feeling lost or overwhelmed,
          especially if they are new to the app. Adding concise descriptions to each page provided users with
          immediate context, helping them understand the functionality and purpose of the page they were on. This
          straightforward guidance significantly improved user comprehension and confidence in using the app.
          <br><br>
          Navigation Difficulties: If button functionalities are not clear, users can become frustrated, leading to a
          poor experience and potentially causing them to abandon the app. Clear indications of what each button does
          simplified the navigation, making the app more user-friendly. This clarity in navigation is crucial in
          maintaining the flow and ensuring that users can easily accomplish their tasks without confusion or
          frustration.
          <br><br>
          Inconsistent Element Alignment: Inconsistent design elements can disrupt the visual flow and make the app
          appear unprofessional. By standardizing the alignment of elements across all screens, I created a cohesive
          and aesthetically pleasing interface. This consistency not only improved the app’s visual appeal but also
          contributed to a more seamless user experience, as users could easily predict where to find information
          based on their experience on other screens.
          <br><br>
          Inadequate Visual Hierarchy: A well-structured visual hierarchy is key to helping users navigate and
          understand the layout of an application. Initially, the lack of a clear visual hierarchy made it difficult
          for users to track their location within the app and understand the relationship between different pages.
          Introducing breadcrumbs was a strategic decision to enhance navigational efficiency and orientation.
          Breadcrumbs provide a clear path of navigation, allowing users to easily track their journey within the app
          and navigate back if needed, thus improving the overall user experience.
          <br><br>
          Here is my prototype after the changes prompted by my user tests were implemented:
          <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FANN3ehYS0TyPrKPEegSPd1%2FStocked-%2526-Stacked%3Ftype%3Ddesign%26node-id%3D209%253A7160%26mode%3Ddesign%26t%3DEO0FO2c3h1IWuOx1-1"
              allowfullscreen></iframe>
          <br>
          My design values of ambition and confidence shone through every aspect of the UI. The color choices and the
          consistent, straightforward layout were not just about aesthetics but also about empowering users to take
          control of their fitness and dietary journey with confidence and ease.

          In essence, this project was a labor of love, a manifestation of my personal journey, and a tribute to those
          on a similar path. It was a journey of learning, adapting, and ultimately, creating something that not only
          served a purpose but also inspired and motivated.
      </p>`,
      image: stocked,
    },
  ];
  return (
    <div style={{ ...blurStyle, marginTop: "4rem" }}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        User Interface
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "4rem",
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

export default StockednStacked;
