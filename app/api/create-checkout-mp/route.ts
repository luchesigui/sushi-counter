import { NextRequest, NextResponse } from "next/server";
import { Preference } from "mercadopago";
import mpClient from "@/app/lib/mercado-pago";

export async function POST(req: NextRequest) {
  // const { coupleId } = await req.json();

  try {
    const preference = new Preference(mpClient);

    const createdPreference = await preference.create({
      body: {
        metadata: {
          test: "123",
        },
        items: [
          {
            id: "pagina-loveyuu-19",
            description: "Surpreenda seu amor",
            title: "Página Loveyuu",
            picture_url: "https://www.loveyuu.com/favicon.ico",
            quantity: 1,
            unit_price: 19.99,
          },
        ],
        payment_methods: {
          // excluded_payment_methods: [
          //   {
          //     id: "bolbradesco",
          //   },
          //   {
          //     id: "pec",
          //   },
          // ],
          // excluded_payment_types: [
          //   {
          //     id: "debit_card",
          //   },
          // ],
          installments: 12,
        },
        auto_return: "approved",
        notification_url: `${req.headers.get("origin")}/api/webhook-mp`,
        back_urls: {
          success: `${req.headers.get("origin")}/obrigado`,
          failure: `${req.headers.get("origin")}/erro`,
          pending: `${req.headers.get("origin")}/pendente`,
        },
      },
    });

    // const preference: CreatePreferencePayload = {
    //   items: [
    //     {
    //       title: req.body.description,
    //       unit_price: Number(req.body.price),
    //       quantity: Number(req.body.quantity),
    //     },
    //   ],
    //   back_urls: {
    //     success: `${req.headers.origin}/api/feedback`,
    //     failure: `${req.headers.origin}/api/feedback`,
    //     pending: `${req.headers.origin}/api/feedback`,
    //   },
    //   auto_return: 'approved',
    // };
    // const response = await mercadopago.preferences.create(preference);
    // res.status(200).json({ id: response.body.id });

    // const responseId = response.body.id

    if (!createdPreference.id) {
      throw new Error("No preferenceID");
    }

    return NextResponse.json({ preferenceId: createdPreference.id });
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
