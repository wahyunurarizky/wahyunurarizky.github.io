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
} from '@material-ui/icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <a href="https://www.instagram.com/wahyunurarizky" target="blank">
          <Instagram /> @wahyunurarizky
        </a>
        <a href="mailto:wahyunurarizky18@gmail.com" target="blank">
          <Mail /> wahyunurarizky18@gmail.com
        </a>
        <a href="https://wa.me/62895320298734" target="blank">
          <WhatsApp /> +62 895 320298734
        </a>
        <a href="https://telegram.me/wahyunurarizky" target="blank">
          <Telegram /> wahyunurarizky
        </a>
        <a
          href="https://www.linkedin.com/in/wahyu-nur-arizky-a47275168/"
          target="blank"
        >
          <LinkedIn /> Wahyu Nur Arizky
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
