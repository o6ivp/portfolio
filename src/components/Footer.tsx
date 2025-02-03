const Footer = () => {
  return (
    <footer className="border-t bg-background">
      {/* Added responsive padding and text size */}
      <div className="container py-4 sm:py-6">
        <p className="text-center text-sm sm:text-base text-muted-foreground">
          © {new Date().getFullYear()} Daigo Yamashita. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
