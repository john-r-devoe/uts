import Description from "@/Components/Home/Descriptions/Description";
import Pam from "@/Components/Home/Descriptions/Pam";
import DBlock from "@/Components/Home/Blocks/DBlock";
import Further from "@/Components/Home/Further/Further";



export default function Home() {
  return (
    <div>
      <Description title="What is Unique Therapy Services?" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi">
      </Description>
      <Pam title="Hey, I'm Pam!" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi">
      </Pam>

      <DBlock title={["Unique.", "Therapy.", "Services."]} description={["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi praesentium voluptatum deleniti atque"
        , "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi praesentium voluptatum deleniti atque"
        , "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi praesentium voluptatum deleniti atque"]}>

      </DBlock>
      <Further text1="Questions?" text2="Curious?" button1={["Contact Us!", "/"]} button2={["Meet the Team!", "/"]} />
    </div>
  );
}