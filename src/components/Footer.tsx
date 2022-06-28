import GitHubIcon from "./Icons/GitHubIcon";
import TwitterIcon from "./Icons/TwitterIcon";

const Footer = () => {
  return (
    <footer className="absolute flex w-full justify-center bottom-0 h-12">
      <a
        href="https://github.com/flashblaze/url-expander"
        target="_blank"
        class="mr-3"
      >
        <GitHubIcon size="24" customClass="text-white" />
      </a>
      <a href="https://twitter.com/neeraj_artx" target="_blank" class="ml-3">
        <TwitterIcon size="24" customClass="text-sky-500" />
      </a>
    </footer>
  );
};

export default Footer;
