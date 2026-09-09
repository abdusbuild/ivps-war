import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.ENQUIRY_TO_EMAIL || "ivps786@gmail.com";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").trim();
  const email = String(body.email || "").trim();
  const town = String(body.town || "").trim();
  const studentClass = String(body.class || "").trim();
  const message = String(body.message || "").trim();

  if (name.length < 2 || !/^[0-9+\-\s()]{10,15}$/.test(phone) || town.length < 2 || !studentClass) {
    return NextResponse.json({ error: "Missing or invalid required fields." }, { status: 400 });
  }
  if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    const { error: sendError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Indo Valley Public School <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email || undefined,
      subject: `Admission enquiry — ${name} (${studentClass})`,
      html: `
        <h2>New admission enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "—")}</p>
        <p><strong>Village / town:</strong> ${escapeHtml(town)}</p>
        <p><strong>Class applying for:</strong> ${escapeHtml(studentClass)}</p>
        <p><strong>Message:</strong><br />${escapeHtml(message || "—").replace(/\n/g, "<br />")}</p>
      `,
    });
    if (sendError) {
      console.error("Resend API error:", sendError);
      return NextResponse.json({ error: "Could not send enquiry. Please try again later." }, { status: 502 });
    }
  } catch (err) {
    console.error("Resend send failed:", err);
    return NextResponse.json({ error: "Could not send enquiry. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
