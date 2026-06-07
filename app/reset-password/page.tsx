"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const supabase = createClient();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus(null);

    if (password !== confirmPassword) {
      setStatus({
        type: "error",
        message: "Konfirmasi kata sandi tidak cocok.",
      });
      return;
    }

    if (password.length < 6) {
      setStatus({
        type: "error",
        message: "Kata sandi minimal 6 karakter.",
      });
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
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
          "Kata sandi berhasil diubah. Mengalihkan ke halaman login...",
      });

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }

    setLoading(false);
  };

  return (
    <main
      className="flex min-h-screen items-center justify-center px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/cn8.png')",
      }}
    >
      <div className="w-full max-w-md rounded-3xl border border-white/30 bg-white/15 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 flex flex-col items-center">
          <img
            src="/images/logo-cn.png"
            alt="Logo SMK Citra Negara"
            className="mb-4 h-20 w-20 object-contain"
          />

          <h1 className="text-center text-3xl font-bold text-white">
            Reset Kata Sandi
          </h1>

          <p className="mt-2 text-center text-sm text-white/80">
            Masukkan kata sandi baru untuk akun Anda.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Kata Sandi Baru
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/40 bg-white/90 px-4 py-3 text-black outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Konfirmasi Kata Sandi
            </label>

            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-white/40 bg-white/90 px-4 py-3 text-black outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800 disabled:opacity-50"
          >
            {loading ? "Menyimpan..." : "Simpan Kata Sandi Baru"}
          </button>
        </form>

        {status && (
          <div
            className={`mt-5 rounded-xl p-3 text-sm ${
              status.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}
      </div>
    </main>
  );
}