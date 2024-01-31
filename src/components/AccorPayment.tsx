import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

interface Props {
  onSelect: (value: string) => void;
}
const AccorPayment = (props: Props) => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const { onSelect } = props;

  const handleSelect = (value: string) => {
    onSelect(value);
    setSelectedMethod(`Bank ${value.toUpperCase()}`);
  };
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="lg:text-lg rounded-lg rounded-b-none border border-b-0 pb-4 px-4 text-gray-800">
          Payment Method: {selectedMethod}
        </AccordionTrigger>
        <AccordionContent className="border-x">
          <div
            onClick={() => handleSelect("bca")}
            className="flex cursor-pointer rounded-sm hover:bg-slate-100 gap-4 px-9 py-4 items-center hover:rounded-md"
          >
            <img
              className="h-5 w-14"
              src="https://res.cloudinary.com/dypeyso0m/image/upload/v1703677027/bca_u8s8de.png"
            />
            <p className="text-base font-semibold">Bank BCA</p>
          </div>
        </AccordionContent>
        <AccordionContent className="border-x">
          <div
            onClick={() => handleSelect("bri")}
            className="flex cursor-pointer rounded-sm hover:bg-slate-100 gap-4 px-9 py-4 items-center hover:rounded-md"
          >
            <img
              className="h-4 w-14"
              src="https://res.cloudinary.com/dypeyso0m/image/upload/v1703677142/bri_tjmr7e.png"
            />
            <p className="text-base font-semibold">Bank BRI</p>
          </div>
        </AccordionContent>
        <AccordionContent className="border-x pb-0">
          <div
            onClick={() => handleSelect("bni")}
            className="flex cursor-pointer rounded-sm hover:bg-slate-100 gap-4 px-9 py-4 items-center hover:rounded-md"
          >
            <img
              className="h-4 w-14"
              src="https://res.cloudinary.com/dypeyso0m/image/upload/v1703677155/647bf1a6c87148864bbb4cd44130da36_bl9g38.png"
            />
            <p className="text-base font-semibold">Bank BNI</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccorPayment;
