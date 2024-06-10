import { CONTACT } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get In Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b" target="_blank" rel="noopener noreferrer">
          {CONTACT.email}
        </a>
        <p>Copyright {currentYear}</p>
      </div>
    </div>
  
  );
};

export default Footer;


