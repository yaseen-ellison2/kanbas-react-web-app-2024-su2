import { FaCheckCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";


type GreenCheckmarkProps = {
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
};

export default function GreenCheckmark({ onClick }: GreenCheckmarkProps) {
  return (
    <span className="me-1 position-relative" onClick={onClick}>
      <FaCheckCircle style={{ top: "2px" }}
        className="text-success me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
}
