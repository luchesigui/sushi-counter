import "server-only";

import { db, getDownloadURLFromPath } from "../lib/firebase";

type SavedImagesType = {
  id: string;
  uploadPaths: string[];
  name: string;
};

export async function getDocumentsData() {
  const docs = db.collection("saved-images");

  const docsSnapshot = await docs.get();

  if (docsSnapshot.empty) {
    // Changed from exists to empty
    return undefined;
  }

  const allData = await Promise.all(
    docsSnapshot.docs.map(async (doc) => {
      // Collecting data for all documents
      const data = doc.data() as SavedImagesType;
      const uploadUrls = await Promise.all(
        data.uploadPaths.map(async (path) => {
          // Transforma o path em url que pode ser lida pelo browser
          const url = await getDownloadURLFromPath(path);
          return url;
        })
      );
      return { ...data, uploadUrls }; // Returning data with URLs for each document
    })
  );

  return allData; // Returning an array of all documents' data
}
