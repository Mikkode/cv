import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(request: Request) {
  // Récupérer le paramètre 'locale' de l'URL
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "fr";

  // Déterminer le nom du fichier en fonction de la langue
  const filename =
    locale === "en" ? "cv-mickael-warin-en.pdf" : "cv-mickael-warin-fr.pdf";

  // Construire le chemin du fichier
  const filePath = path.resolve("public", filename);

  try {
    // Lire le fichier
    const fileBuffer = await fs.readFile(filePath);

    // Retourner le fichier avec les en-têtes appropriés
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    // En cas d'erreur (fichier non trouvé, etc.)
    return new NextResponse(`File not found ${error}`, { status: 404 });
  }
}
