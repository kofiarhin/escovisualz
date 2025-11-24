import "./footer.styles.scss";
const Footer = () => {
  return (
    <footer id="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Escovisualz · Based in London/Uk
      </p>
    </footer>
  );
};

export default Footer;
