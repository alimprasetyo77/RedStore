import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from ".././components/ui/dialog";

import { cn } from "./lib/utils";

interface Props {
  onSelect: (value: string) => void;
}
const DialogPayMethod = (props: Props) => {
  const { onSelect } = props;

  const handleSelect = (value: string) => {
    onSelect(value);
  };
  return (
    <Dialog>
      <DialogTrigger className={cn("rounded-lg p-3 font-medium hover:cursor-pointer bg-blue-400")}>
        Select Payment Method
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className=" items-center">
          <DialogTitle>Select Payment Method</DialogTitle>
        </DialogHeader>
        <DialogClose asChild>
          <div className="wrap mt-5 mx-6 flex flex-row justify-between items-center gap-6">
            <div
              onClick={() => handleSelect("bca")}
              className="flex cursor-pointer rounded-sm border border-black p-2 hover:bg-tyellow dark:border-white"
            >
              <img
                className="h-6 w-16"
                src="https://res.cloudinary.com/dypeyso0m/image/upload/v1703677027/bca_u8s8de.png"
              />
            </div>
            <div
              onClick={() => handleSelect("bni")}
              className="flex cursor-pointer rounded-sm border border-black p-2 hover:bg-tyellow dark:border-white"
            >
              <img
                className="h-6 w-16"
                src="https://res.cloudinary.com/dypeyso0m/image/upload/v1703677155/647bf1a6c87148864bbb4cd44130da36_bl9g38.png"
              />
            </div>
            <div
              onClick={() => handleSelect("bri")}
              className="flex cursor-pointer rounded-sm border border-black p-2 hover:bg-tyellow dark:border-white"
            >
              <img
                className="h-6 w-16"
                src="https://res.cloudinary.com/dypeyso0m/image/upload/v1703677142/bri_tjmr7e.png"
              />
            </div>
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DialogPayMethod;
