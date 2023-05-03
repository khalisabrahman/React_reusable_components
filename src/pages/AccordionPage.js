import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: '123',
      label: "Can I use React",
      content: "React",
    },
    {
      id: '456',
      label: "Can I use Javascript",
      content: "Javascript",
    },
    {
      id: '789',
      label: "Can I use Typescript",
      content: "Typescript",
    },
  ];

  return <Accordion items={items} />
}

export default AccordionPage;
