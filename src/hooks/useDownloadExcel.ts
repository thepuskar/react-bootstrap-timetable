import { useEffect, useMemo, useState } from "react";
import { excel } from "../lib/htmlToExcel";
import { UseExcel } from "../interface";

export function useDownloadExcel({
  currentTableRef,
  filename,
  sheet,
}: UseExcel) {
  const [payload, setPayload] = useState({} as UseExcel);

  useEffect(() => {
    setPayload({
      currentTableRef,
      filename,
      sheet,
    });
  }, [currentTableRef, filename, sheet]);

  return useMemo(() => excel(payload), [payload]);
}
