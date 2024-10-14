"use client";

import { saveImagesOnFirebase } from "@/app/actions/save-images-firebase";
import { Header } from "@/app/components/header";
import { CameraIcon } from "@/app/components/icons";
import { compressFiles } from "@/app/lib/utils";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function UploadArquivos() {
  const [images, setImages] = useState<string[]>([]);
  const [savingImages, setSavingImages] = useState(false);
  const [name, setName] = useState<string>("");

  function triggerImageInput() {
    document.getElementById("imagesInput")?.click();
  }

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  async function handleUploadImages() {
    setSavingImages(true);
    const imagesInput = document.getElementById(
      "imagesInput"
    ) as HTMLInputElement;

    if (!imagesInput || !imagesInput.files || imagesInput.files.length === 0) {
      setSavingImages(false);
      return;
    }

    const compressedFiles = await compressFiles(Array.from(imagesInput.files));
    const formData = createFormData(compressedFiles);

    const documentId = await saveImagesOnFirebase(formData);
    handleUploadResponse(documentId);
    setSavingImages(false);
  }

  const createFormData = (compressedFiles: File[]): FormData => {
    const formData = new FormData();
    compressedFiles.forEach((file, index) => {
      formData.append(`file-${index}`, file);
    });
    formData.append("name", name); // Mandando o nome do usuário
    return formData;
  };

  const handleUploadResponse = (documentId: string | null) => {
    if (documentId) {
      toast.success(`Documento criado com sucesso!`);
    } else {
      toast.error("Erro ao criar o documento");
    }
  };

  return (
    <div className="max-w-7xl mx-auto h-screen flex flex-col">
      <Header />
      <div className="w-[500px] mx-auto h-full flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl font-bold">
          Banco de Dados + Upload de Imagens
        </h1>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
          className="mt-1 w-full rounded-md px-4 py-1 border"
        />
        <button
          onClick={triggerImageInput}
          className="border px-4 py-1 flex items-center gap-2 bg-black text-white font-bold rounded-md"
        >
          <span>Selecionar imagens</span>
          <CameraIcon />
        </button>
        <input
          id="imagesInput"
          type="file"
          accept="image/*"
          onChange={handleImageInput}
          className="hidden"
          multiple
        />
        <div className="w-full h-48 border border-black border-dashed rounded-md flex items-center justify-center overflow-hidden gap-2">
          {images.length === 0 ? (
            <p className="text-sm text-gray-500">
              As imagens serão exibidas aqui
            </p>
          ) : (
            images.map((image) => (
              <img
                key={image}
                src={image}
                alt="image"
                className="w-28 object-cover"
              />
            ))
          )}
        </div>
        {images.length > 0 && (
          <button
            disabled={savingImages}
            onClick={handleUploadImages}
            className="bg-black text-white px-4 py-1 rounded-md font-bold text-sm disabled:opacity-50"
          >
            Salvar no Firebase
          </button>
        )}
        <Link href="/imagens-salvas">
          <span className="text-xs underline">Confira os documentos aqui</span>
        </Link>
      </div>
    </div>
  );
}
