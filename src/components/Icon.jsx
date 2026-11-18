import {
  IoChevronDown, IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline,
  IoLocationOutline, IoLogoGithub, IoLogoLinkedin, IoGlobeOutline,
  IoBriefcaseOutline, IoBookOutline, IoEyeOutline, IoPaperPlane,
} from "react-icons/io5";

const ICONS = {
  "chevron-down": IoChevronDown,
  mail: IoMailOutline,
  phone: IoPhonePortraitOutline,
  calendar: IoCalendarOutline,
  location: IoLocationOutline,
  github: IoLogoGithub,
  linkedin: IoLogoLinkedin,
  globe: IoGlobeOutline,
  briefcase: IoBriefcaseOutline,
  book: IoBookOutline,
  eye: IoEyeOutline,
  "paper-plane": IoPaperPlane,
};

// Wraps an Ionicon in a span with the "ion-icon" class the stylesheet targets.
export default function Icon({ name }) {
  const Svg = ICONS[name];
  return (
    <span className="ion-icon" aria-hidden="true">
      <Svg />
    </span>
  );
}
