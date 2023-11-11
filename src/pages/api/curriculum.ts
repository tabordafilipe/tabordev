import type { NextApiRequest, NextApiResponse } from "next";

import CurriculumPDF from "@/modules/Curriculum/CurriculumPDF";
import { renderToStream } from "@react-pdf/renderer";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<NodeJS.ReadableStream>
) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const pdfStream = await renderToStream(CurriculumPDF());
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-disposition",
    `attachment;filename="curriculum_filipe_taborda_${currentMonth}-${currentYear}.pdf"`
  );
  res.send(pdfStream);
}
