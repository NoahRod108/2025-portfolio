import Github from "@/public/icons/Github";
import Mail from "@/public/icons/Mail";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col items-center text-center w-full my-8 xs:flex-row xs:justify-evenly"
    >
      <div className="flex gap-4 py-4">
        <a
          href="mailto:noaherodriguez18@gmail.com"
          className="inline-flex items-center"
        >
          <Mail />
        </a>
        <a href="#" className="inline-flex items-center">
          <Github />
        </a>
      </div>
      <div className="text-secondaryText">
        Created &amp; Designed by Noah Rodriguez
      </div>
    </footer>
  );
};

export default Footer;
