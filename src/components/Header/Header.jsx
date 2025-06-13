import classes from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={classes["header"]}>
      
      <div className={classes["top-header"]}>
        <div className={classes["top-item"]}>
          <Image width={24} height={24} className={classes.image} src="/icon.svg" alt="Element" />
          <div className={classes["top-text"]}>Lorem ipsum dolor</div>
        </div>
        <div className={classes["top-item"]}>
          <Image width={24} height={24} className={classes.image} src="/icon.svg" alt="Element" />
          <div className={classes["top-text"]}>Lorem ipsum dolor</div>
        </div>
        <div className={classes["top-item"]}>
          <Image width={24} height={24} className={classes.image} src="/icon.svg" alt="Element" />
          <div className={classes["top-text"]}>Lorem ipsum dolor</div>
        </div>
      </div>

      
      <div className={classes["middle-header"]}>
      
        <div className={classes["middle-left"]}>
          <Image width={24} height={24} src="/logo.svg" alt="Logo" className={classes["logo-img"]} />
        </div>

        <div className={classes["middle-center"]}>
          <div className={classes["logo-text"]}>LOGO</div>
        </div>

       
        <div className={classes["middle-right"]}>
          <Image width={24} height={24} src="/search-normal.png" alt="Search" className={classes.icon} />
          <Image width={24} height={24} src="/heart.svg" alt="Heart" className={classes.icon} />
          <Image width={24} height={24} src="/shopping-bag.svg" alt="Bag" className={classes.icon} />
          <Image width={24} height={24} src="/profile.svg" alt="User" className={classes.icon} />
          <div className={classes["lang-selector"]}>
            <span className={classes["lang-text"]}>ENG</span>
            <Image width={24} height={24} src="/arrow-down.svg" alt="Arrow" className={classes["arrow-icon"]} />
          </div>
        </div>
      </div>

    
      <nav className={classes["bottom-nav"]}>
        <ul className={classes["nav-list"]}>
          <li className={classes["nav-item"]}><a href="#shop">SHOP</a></li>
          <li className={classes["nav-item"]}><a href="#skills">SKILLS</a></li>
          <li className={classes["nav-item"]}><a href="#stories">STORIES</a></li>
          <li className={classes["nav-item"]}><a href="#about">ABOUT</a></li>
          <li className={classes["nav-item"]}><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>

      <div className={classes["gallery-content"]}>
        <div className={classes["gallery-header"]}>
          <h2>DISCOVER OUR PRODUCTS</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus</p>
          <p>scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor</p>
          <div className={classes["gray-line"]}></div>
        </div>
      </div>

    </header>
  );
};

export default Header;
