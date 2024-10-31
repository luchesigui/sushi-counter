import imageCompression from "browser-image-compression";

export const compressImage = (file: File): Promise<File> =>
  new Promise((resolve, reject) => {
    const options = {
      maxSizeMB: 0.2, // Set max size in MB
      maxWidthOrHeight: 900, // Max width/height
      useWebWorker: true, // Use web worker for compression
      fileType: "image/jpeg", // Convert to jpeg format
    };

    imageCompression(file, options)
      .then((compressedFile: File) => {
        resolve(compressedFile);
      })
      .catch((error) => {
        console.log("Error compressing image", error);
        reject(error);
      });
  });

export const compressFiles = async (files: File[]): Promise<File[]> => {
  const compressPromises = files.map(async (file) => {
    try {
      return await compressImage(file);
    } catch (error) {
      console.error("Image compression error:", error);
      return null;
    }
  });

  return (await Promise.all(compressPromises)).filter(
    (file): file is File => file !== null
  );
};
