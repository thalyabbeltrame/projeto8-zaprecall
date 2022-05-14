import {
  BsFillXCircleFill,
  BsQuestionCircleFill,
  BsCheckCircleFill,
} from "react-icons/bs";

export default function IconAnswer({ buttonType }) {
  let icon = '';
  switch (buttonType) {
    case 'red':
      icon = (<BsFillXCircleFill className={`icon-${buttonType}`} />);
      break;
    case 'yellow':
      icon = (<BsQuestionCircleFill className={`icon-${buttonType}`} />);
      break;
    case 'green':
      icon = (<BsCheckCircleFill className={`icon-${buttonType}`} />);
      break;
    default:
      break;
  }
  return icon;
}