import { FaUserAstronaut } from "react-icons/fa";
import { LiaHippoSolid } from "react-icons/lia";
import { GiTurtle } from "react-icons/gi";
import { GiPirateCoat } from "react-icons/gi";
import { ImLeaf } from "react-icons/im";
import { GiPalmTree } from "react-icons/gi";

const Footer = () => {
  return (
    <>
      {" "}
      <aside className="grid-flow-col items-center text-primary">
        <LiaHippoSolid size={50} />
        <p className="text-xl">MooDengGang</p>
        <p className="text-xs">All right reserved - Copyright © </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-primary">
        <a
          href="https://www.linkedin.com/in/danny-greenan/"
          className="hover:text-accent">
          <FaUserAstronaut size={30} />
          Danny
        </a>
        <a
          href="https://www.linkedin.com/in/jazz-barlow/"
          className="hover:text-accent">
          <GiPirateCoat size={30} />
          Jazz
        </a>
        <a
          href="https://www.linkedin.com/in/jen-warman-38198a172/"
          className="hover:text-accent">
          <ImLeaf size={30} />
          Jen
        </a>
        <a
          href="https://www.linkedin.com/in/elizabeth-hughes-347633171/"
          className="hover:text-accent">
          <GiTurtle size={30} /> Lizzie
        </a>
        <a
          href="https://www.linkedin.com/in/fernandostcampos/"
          className="hover:text-accent">
          <GiPalmTree size={30} /> Fernando
        </a>
      </nav>
    </>
  );
};

export default Footer;
