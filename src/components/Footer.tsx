function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <div className="footer gradient-top ">
      <p className="flex justify-center items-start h-[200px] text-center p-8 w-full dark:text-secondary">
        {getYear} &copy; Design by Tom Charon. All rights reserved
      </p>
    </div>
  );
}
export default Footer;
