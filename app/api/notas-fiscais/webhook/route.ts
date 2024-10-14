// app/api/webhook/route.js
import { db } from "@/app/lib/firebase";
import { Timestamp } from "firebase-admin/firestore";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const authHeader = req.headers.get("Authorization");

  // Verifica se o token de autorização é válido
  if (authHeader !== process.env.FOCUS_NFE_AUTH_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();

    // Extrair os dados do webhook
    const {
      cnpj_prestador,
      ref,
      numero_rps,
      serie_rps,
      tipo_rps,
      status,
      numero,
      codigo_verificacao,
      data_emissao,
      url,
      caminho_xml_nota_fiscal,
      url_danfse,
    } = body;

    // Salvar os dados no Firestore
    const docRef = db.collection("notasFiscais").doc(ref);
    await docRef.set({
      cnpj_prestador,
      numero_rps,
      serie_rps,
      tipo_rps,
      status,
      numero,
      codigo_verificacao,
      data_emissao,
      url,
      caminho_xml_nota_fiscal,
      url_danfse,
      timestamp: Timestamp.now(),
    });

    return NextResponse.json(
      { message: "Evento recebido e processado com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar o webhook:", error);
    return NextResponse.json(
      { error: "Erro ao processar o webhook" },
      { status: 500 }
    );
  }
}
