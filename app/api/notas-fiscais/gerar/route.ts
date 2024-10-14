import { NextRequest, NextResponse } from "next/server";

const apiKey = process.env.FOCUS_NFE_API_KEY;

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("Authorization");

  // Verifica se o token de autorização é válido
  if (authHeader !== process.env.FOCUS_NFE_AUTH_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Generate nota fiscal
    const notaFiscalData = {
      data_emissao: new Date(Date.now() - 3 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0], // Ajuste para o horário de Brasília (-3 horas)
      data_competencia: "2023-10-10", // Data que a venda foi realizada
      prestador: {
        cnpj: "00000000000102",
        inscricao_municipal: "00000000",
        codigo_municipio: "0000000",
      },
      tomador: {
        cpf: "00000000000",
        razao_social: "Fulano de Tal",
        email: "fulano@tal.com",
      },
      servico: {
        aliquota: 2, // Ajuste conforme necessário
        discriminacao:
          "Desenvolvimento de programas de computador sob encomenda.", // Ajuste conforme necessário
        iss_retido: false, // Ajuste conforme necessário
        item_lista_servico: "01.01", // Ajuste conforme necessário
        codigo_tributario_municipio: "620150101", // Ajuste conforme necessário
        valor_servicos: 0, // Ajuste conforme necessário
      },
    };
    const idDaVenda = "123";
    const response = await fetch(
      `https://api.focusnfe.com.br/v2/nfse?ref=${idDaVenda}`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString(
            "base64"
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notaFiscalData),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response}`);
    }
    const data = await response.json();
    console.log({ data });
    return NextResponse.json({
      message: "Notas fiscais geradas com sucesso",
    });
  } catch (error) {
    console.error("Erro ao gerar as Notas Fiscais:", error);
    return NextResponse.json(
      { error: "Erro ao gerar as notas fiscais" },
      { status: 500 }
    );
  }
}
