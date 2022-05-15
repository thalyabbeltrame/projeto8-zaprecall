import {
  BsFillXCircleFill,
  BsQuestionCircleFill,
  BsCheckCircleFill,
} from "react-icons/bs";

export default function IconAnswer({ buttonType }) {
  let iconAnswer = '';
  switch (buttonType) {
    case 'red':
      iconAnswer = (<BsFillXCircleFill className={`icon-${buttonType}`} />);
      break;
    case 'yellow':
      iconAnswer = (<BsQuestionCircleFill className={`icon-${buttonType}`} />);
      break;
    case 'green':
      iconAnswer = (<BsCheckCircleFill className={`icon-${buttonType}`} />);
      break;
    default:
      break;
  }
  return iconAnswer;
}