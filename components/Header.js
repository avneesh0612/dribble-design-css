import Image from "next/image";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Header() {
  return (
    <div className="flex justify-between p-10 pt-6">
      <Image
        src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1622691568/image-removebg-preview_21_hnx02c.png"
        width={200}
        height={50}
        alt="logo"
      />
      <div className="flex">
        <InstagramIcon className="header__icon !text-4xl" />
        <YouTubeIcon className="header__icon !text-4xl" />
        <FacebookIcon className="header__icon !text-4xl" />
        <TwitterIcon className="header__icon !text-4xl" />
      </div>
    </div>
  );
}

export default Header;
