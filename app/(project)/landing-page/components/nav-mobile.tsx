"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="block md:hidden">
      <button onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex">
          <div
            className="w-[70%] bg-black bg-opacity-50"
            onClick={handleClose}
          />
          <div className="relative w-full bg-[#8251FF] bg-opacity-95">
            <nav>
              <ul className="flex flex-col items-center gap-6 p-4 mt-12">
                <div className="absolute top-2 right-2 flex justify-end">
                  <button onClick={handleClose}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <li onClick={handleClose}>
                  <a href="#vantagens">Vantagens</a>
                </li>
                <li onClick={handleClose}>
                  <a href="#recursos">Recursos</a>
                </li>
                <li onClick={handleClose}>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <Link href={"/"} passHref target="_blank">
                    <button className="flex gap-2 items-center">
                      <div className="relative w-5 h-5">
                        <Image
                          src="/landing-page/ic-login.svg"
                          fill
                          alt="Ícone de Login"
                          className="object-cover object-left"
                        />
                      </div>
                      <span>Entrar</span>
                    </button>
                  </Link>
                </li>
                <li className="w-full">
                  <Link href={"https://google.com"} passHref target="_blank">
                    <button className="w-full text-[#433763] font-medium bg-white rounded-full px-4 py-4">
                      Teste grátis
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
