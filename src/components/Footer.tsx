const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-6">
        <p className="text-center text-muted-foreground">
          © {new Date().getFullYear()} Daigo Yamashita. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
