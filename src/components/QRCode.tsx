import { Card } from "@/components/ui/card";
import { Share2 } from "lucide-react";

const QRCode = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-md mx-auto p-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Share2 className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold text-center">
              Portfolio QR Code
            </h1>
          </div>
          <div className="flex justify-center mb-4">
            <svg
              viewBox="0 0 29 29"
              className="w-64 h-64"
              shapeRendering="crispEdges"
            >
              <path fill="#FFFFFF" d="M0,0 h29v29H0z" />
              <path
                fill="#000000"
                d="M4 4h7v1H4zM12 4h1v1H12zM14 4h2v1H14zM18 4h7v1H18zM4 5h1v1H4zM10 5h1v1H10zM12 5h3v1H12zM18 5h1v1H18zM24 5h1v1H24zM4 6h1v1H4zM6 6h3v1H6zM10 6h1v1H10zM12 6h4v1H12zM18 6h1v1H18zM20 6h3v1H20zM24 6h1v1H24zM4 7h1v1H4zM6 7h3v1H6zM10 7h1v1H10zM13 7h2v1H13zM18 7h1v1H18zM20 7h3v1H20zM24 7h1v1H24zM4 8h1v1H4zM6 8h3v1H6zM10 8h1v1H10zM12 8h1v1H12zM14 8h1v1H14zM18 8h1v1H18zM20 8h3v1H20zM24 8h1v1H24zM4 9h1v1H4zM10 9h1v1H10zM12 9h1v1H12zM14 9h2v1H14zM18 9h1v1H18zM24 9h1v1H24zM4 10h7v1H4zM12 10h1v1H12zM14 10h2v1H14zM18 10h7v1H18zM13 11h3v1H13zM4 12h1v1H4zM5 12h1v1H5zM6 12h1v1H6zM7 12h1v1H7zM8 12h1v1H8zM10 12h1v1H10zM11 12h1v1H11zM13 12h1v1H13zM16 12h1v1H16zM18 12h1v1H18zM19 12h1v1H19zM21 12h1v1H21zM23 12h1v1H23zM24 12h1v1H24zM5 13h1v1H5zM7 13h1v1H7zM8 13h1v1H8zM9 13h1v1H9zM11 13h1v1H11zM14 13h2v1H14zM17 13h1v1H17zM19 13h1v1H19zM20 13h1v1H20zM21 13h1v1H21zM22 13h1v1H22zM23 13h1v1H23zM4 14h1v1H4zM5 14h1v1H5zM7 14h1v1H7zM10 14h1v1H10zM12 14h5v1H12zM19 14h1v1H19zM21 14h1v1H21zM23 14h1v1H23zM24 14h1v1H24zM4 15h2v1H4zM7 15h4v1H7zM12 15h1v1H12zM14 15h1v1H14zM16 15h1v1H16zM18 15h2v1H18zM21 15h1v1H21zM24 15h1v1H24zM6 16h2v1H6zM9 16h2v1H9zM12 16h2v1H12zM15 16h1v1H15zM17 16h1v1H17zM19 16h1v1H19zM21 16h3v1H21zM13 17h3v1H13zM17 17h2v1H17zM20 17h1v1H20zM22 17h1v1H22zM24 17h1v1H24zM4 18h7v1H4zM12 18h2v1H12zM15 18h1v1H15zM17 18h1v1H17zM19 18h2v1H19zM22 18h1v1H22zM4 19h1v1H4zM10 19h1v1H10zM12 19h1v1H12zM14 19h1v1H14zM17 19h2v1H17zM20 19h1v1H20zM22 19h1v1H22zM24 19h1v1H24zM4 20h1v1H4zM6 20h3v1H6zM10 20h1v1H10zM12 20h1v1H12zM14 20h1v1H14zM16 20h3v1H16zM20 20h1v1H20zM22 20h1v1H22zM24 20h1v1H24zM4 21h1v1H4zM6 21h3v1H6zM10 21h1v1H10zM13 21h4v1H13zM18 21h2v1H18zM21 21h1v1H21zM23 21h1v1H23zM4 22h1v1H4zM6 22h3v1H6zM10 22h1v1H10zM12 22h1v1H12zM14 22h2v1H14zM17 22h1v1H17zM19 22h1v1H19zM21 22h1v1H21zM23 22h1v1H23zM4 23h1v1H4zM10 23h1v1H10zM12 23h2v1H12zM15 23h1v1H15zM17 23h1v1H17zM19 23h1v1H19zM21 23h1v1H21zM4 24h7v1H4zM12 24h2v1H12zM15 24h2v1H15zM18 24h1v1H18zM20 24h1v1H20zM22 24h1v1H22z"
              />
            </svg>
          </div>
          <p className="text-center text-muted-foreground">
            Scan to visit{" "}
            <a
              href="https://squiffer9.github.io/portfolio/"
              className="text-primary hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://squiffer9.github.io/portfolio/
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default QRCode;
