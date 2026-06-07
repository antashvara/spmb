"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setStatus({
        type: "error",
        message: error.message,
      });
    } else {
      setStatus({
        type: "success",
        message:
          "Link reset password berhasil dikirim. Silakan cek email Anda.",
      });
    }

    setLoading(false);
  };

  return (
    <>
      <style>{`
        *{
          box-sizing:border-box;
        }

        body{
          margin:0;
          font-family:Arial,sans-serif;
        }

        .page{
          min-height:100vh;
          display:flex;
          align-items:center;
          justify-content:center;
          position:relative;
          padding:24px;
          overflow:hidden;
        }

        .bg{
          position:fixed;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
          z-index:0;
        }

        .overlay{
          position:fixed;
          inset:0;
          background:rgba(0,0,0,.35);
          z-index:1;
        }

        .card{
          position:relative;
          z-index:2;
          width:100%;
          max-width:440px;

          background:rgba(255,255,255,.15);
          backdrop-filter:blur(16px);
          -webkit-backdrop-filter:blur(16px);

          border:1px solid rgba(255,255,255,.25);

          border-radius:24px;
          padding:40px;
        }

        .logo{
          width:80px;
          height:80px;
          object-fit:contain;
          display:block;
          margin:0 auto 18px;
        }

        h1{
          margin:0;
          text-align:center;
          color:#ffffff;
          font-size:30px;
        }

        .desc{
          text-align:center;
          color:rgba(255,255,255,.85);
          margin-top:10px;
          margin-bottom:28px;
          line-height:1.5;
        }

        label{
          display:block;
          margin-bottom:8px;
          color:#ffffff;
          font-weight:600;
        }

        input{
          width:100%;
          padding:13px 15px;
          border-radius:12px;
          border:1px solid rgba(255,255,255,.3);

          background:#ffffff;
          color:#111827;

          outline:none;
          font-size:14px;
        }

        input::placeholder{
          color:#6b7280;
          opacity:1;
        }

        input:focus{
          border-color:#1C5C38;
          box-shadow:0 0 0 3px rgba(28,92,56,.2);
        }

        button{
          width:100%;
          margin-top:20px;

          padding:14px;

          border:none;
          border-radius:12px;

          background:#1C5C38;

          color:white;

          font-size:15px;
          font-weight:700;

          cursor:pointer;

          transition:.2s;
        }

        button:hover:not(:disabled){
          background:#16492d;
        }

        button:disabled{
          opacity:.7;
          cursor:not-allowed;
        }

        .msg{
          margin-top:18px;

          padding:12px 14px;

          border-radius:10px;

          font-size:14px;
          font-weight:600;

          animation:fadeIn .25s ease;
        }

        .success{
          background:#dcfce7;
          color:#166534;
          border:1px solid #86efac;
        }

        .error{
          background:#fee2e2;
          color:#b91c1c;
          border:1px solid #fca5a5;
        }

        @keyframes fadeIn{
          from{
            opacity:0;
            transform:translateY(8px);
          }

          to{
            opacity:1;
            transform:translateY(0);
          }
        }
      `}</style>

      <main className="page">
        <img
          className="bg"
          src="/images/cn8.png"
          alt=""
        />

        <div className="overlay"></div>

        <div className="card">
          <img
            className="logo"
            src="/images/logo-cn.png"
            alt="Logo"
          />

          <h1>Lupa Kata Sandi?</h1>

          <p className="desc">
            Masukkan email yang terdaftar untuk menerima link reset
            kata sandi.
          </p>

          <form onSubmit={handleSubmit}>
            <label>Email</label>

            <input
              type="email"
              required
              placeholder="contoh@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button disabled={loading}>
              {loading
                ? "Mengirim..."
                : "Kirim Link Reset"}
            </button>
          </form>

          {status && (
            <div className={`msg ${status.type}`}>
              {status.message}
            </div>
          )}
        </div>
      </main>
    </>
  );
}