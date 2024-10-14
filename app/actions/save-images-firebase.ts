"use server";

import { Buffer } from "buffer"; // Import Buffer to handle ArrayBuffer
import { v4 as uuidv4 } from "uuid";

// Import your Firebase Admin SDK initialized in another module
import { db, storage } from "../lib/firebase";

export async function saveImagesOnFirebase(formData: FormData) {
  try {
    let files: File[] = [];

    formData.forEach((value, key) => {
      if (key.startsWith("file-")) {
        const file = value as File;
        files.push(file);
      }
    });
    const name = formData.get("name") as string;

    const generatedId = uuidv4();

    const uploadPromises = files.map(async (file, index) => {
      const storageRef = storage.file(`saved-images/${generatedId}/${index}`);
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer); // Convert ArrayBuffer to Buffer
      await storageRef.save(buffer);
      return storageRef.name; // Return the file path for storage
    });

    const uploadPaths = await Promise.all(uploadPromises);

    const documentToSave = {
      id: generatedId,
      uploadPaths,
      name,
    };

    const docRef = db.collection("saved-images").doc(documentToSave.id); // Use collection and doc in Admin SDK
    await docRef.set(documentToSave);

    return documentToSave.id;
  } catch (error) {
    console.error("Error saving images:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}
