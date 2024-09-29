// app/api/mercadopago-webhook/route.js

import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    // Step 1: Extract the x-signature and x-request-id headers
    const xSignature = request.headers.get("x-signature");
    const xRequestId = request.headers.get("x-request-id");
    if (!xSignature || !xRequestId) {
      return NextResponse.json(
        { error: "Missing x-signature or x-request-id header" },
        { status: 400 }
      );
    }

    // Step 2: Extract ts and v1 from the x-signature header
    const signatureParts = xSignature.split(",");
    let ts = "";
    let v1 = "";
    signatureParts.forEach((part) => {
      const [key, value] = part.split("=");
      if (key.trim() === "ts") {
        ts = value.trim();
      } else if (key.trim() === "v1") {
        v1 = value.trim();
      }
    });

    // If ts or v1 is missing, return an error
    if (!ts || !v1) {
      return NextResponse.json(
        { error: "Invalid x-signature header format" },
        { status: 400 }
      );
    }

    // Step 3: Get data.id from query parameters
    const url = new URL(request.url);
    const dataId = url.searchParams.get("data.id");

    // Step 4: Build the manifest string
    // Template: id:[data.id_url];request-id:[x-request-id_header];ts:[ts_header];
    let manifest = "";
    if (dataId) {
      manifest += `id:${dataId};`;
    }
    if (xRequestId) {
      manifest += `request-id:${xRequestId};`;
    }
    manifest += `ts:${ts};`;

    // Step 5: Calculate HMAC SHA256 of the manifest using your secret key
    const secret = process.env.MERCADO_PAGO_WEBHOOK_SECRET as string; // Replace with your actual secret key
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(manifest);
    const generatedHash = hmac.digest("hex");

    // Log the generated hash and the v1 value for debugging
    console.log("Generated Hash:", generatedHash);
    console.log("Received v1:", v1);

    // Step 6: Compare the generated hash with v1 from x-signature
    if (generatedHash !== v1) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    // Step 7: Signature is valid, proceed to process the webhook
    const body = await request.json();
    console.log("Verified webhook received:", body);

    // Handle the webhook event
    const { type, data } = body;

    console.log({ type, data });

    switch (type) {
      case "payment":
        // Handle payment event
        console.log("PAYMENT_EVENT!!!");
        // Fetch payment details from Mercado Pago API if necessary
        break;
      case "subscription_preapproval":
        // Handle payment event
        console.log("SUBSCRIPTION_EVENT!!!");
        break;
      default:
        console.log("Unhandled event type:", type);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Error handling webhook:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
