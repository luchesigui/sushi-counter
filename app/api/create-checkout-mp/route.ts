import { NextRequest, NextResponse } from "next/server";
import { Preference } from "mercadopago";
import mpClient from "@/app/lib/mercado-pago";

export async function POST(req: NextRequest) {
  try {
    const preference = new Preference(mpClient);

    const createdPreference = await preference.create({
      body: {
        metadata: {
          test: "123",
        },
        payer: {
          name: "André",
          surname: "Elias",
          email: "dedekpo@gmail.com",
          phone: {
            area_code: "31",
            number: "983399692",
          },
          identification: {
            type: "CPF",
            number: "13761278659",
          },
          address: {
            street_name: "Rua Cristália",
            street_number: "148",
            zip_code: "32684036",
          },
        },
        items: [
          {
            id: "pagina-loveyuu-19",
            description: "Surpreenda seu amor",
            title: "Página Loveyuu",
            quantity: 1,
            unit_price: 2.99,
            category_id: "digital_goods",
            currency_id: "BRL",
          },
        ],
        payment_methods: {
          installments: 12,
        },
        auto_return: "approved",
        notification_url: `${req.headers.get("origin")}/api/webhook-mp`,
        back_urls: {
          success: `${req.headers.get("origin")}/obrigado`,
          failure: `${req.headers.get("origin")}/`,
          pending: `${req.headers.get("origin")}/pendente`,
        },
      },
    });

    if (!createdPreference.id) {
      throw new Error("No preferenceID");
    }

    return NextResponse.json({
      preferenceId: createdPreference.id,
      initPoint: createdPreference.init_point,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
