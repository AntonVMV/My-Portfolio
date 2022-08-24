import { useState } from "react";
import { ToolSelector, Hand, Container, Dialog, Content, Tool } from "./style";

interface ToolProps {
  data: {
    text: string;
    icon: React.FC;
  }[];
}

export const Tools: React.FC<ToolProps> = ({ data }) => {
  const [activeEl, setActiveEl] = useState(0);
  const length = data.length;
  const radius = 80;
  const arc = Math.PI / 2 / length;

  return (
    <Container>
      <Content>
        <Dialog>{data[activeEl].text}</Dialog>
        <img src="./img/skills_img.png" alt="" />
      </Content>

      <ToolSelector>
        <Hand angle={(90 / length) * activeEl} index={length - activeEl}>
          <img src="./img/hand.png" alt="" />
        </Hand>
        {data.map((item, index) => {
          const angle = index * arc;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <Tool
              x={x}
              y={y}
              index={index}
              key={index}
              onClick={() => setActiveEl(index)}
            >
              <item.icon />
            </Tool>
          );
        })}
      </ToolSelector>
    </Container>
  );
};
