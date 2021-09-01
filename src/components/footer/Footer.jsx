import './footer.scss';
import {
  Favorite,
  Copyright,
  Instagram,
  FileCopy,
  Telegram,
  LinkedIn,
  WhatsApp,
  TouchApp,
  Mail,
  GitHub,
} from '@material-ui/icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <a href="https://www.instagram.com/wahyunurarizky" target="blank">
          <Instagram />
          <span>@wahyunurarizky</span>
        </a>
        <a href="mailto:wahyunurarizky18@gmail.com" target="blank">
          <Mail /> <span>wahyunurarizky18@gmail.com</span>
        </a>
        <a href="https://wa.me/62895320298734" target="blank">
          <WhatsApp /> <span>+62 895 320298734</span>
        </a>
        <a href="https://telegram.me/wahyunurarizky" target="blank">
          <Telegram /> <span>wahyunurarizky</span>
        </a>
        <a
          href="https://www.linkedin.com/in/wahyu-nur-arizky-a47275168/"
          target="blank"
        >
          <LinkedIn /> <span>Wahyu Nur Arizky</span>
        </a>
        <a href="https://www.github.com/wahyunurarizky" target="blank">
          <GitHub /> <span>Wahyu Nur Arizky</span>
        </a>
      </div>
      <h3>
        Here is my CV
        <a href="assets/summary.pdf">
          <TouchApp className="ta" />
          <FileCopy />
        </a>
      </h3>

      <p>
        create by
        <Favorite className="love" /> with reactjs
        <Copyright className="cp" /> 2021
      </p>
    </div>
  );
};

export default Footer;
