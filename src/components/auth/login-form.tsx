"use client";

import { ChangeEvent, FormEvent, useState, useTransition } from "react";
import z from "zod";

import { useAuthStore } from "@/store/auth";
import Link from "next/link";

const schema = z.object({
  email: z.email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve conter ao menos 6 caracteres" }),
});

type ErrorStructure = {
  email?: string;
  password?: string;
  form?: string;
};

export function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<ErrorStructure>({});
  const [pending, startTransition] = useTransition();
  const authStore = useAuthStore((state) => state);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {}

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 p-8 rounded-sm"
    >
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <div className="mb-4">
        <label className="mb-1">E-mail</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-sm"
          disabled={pending}
          autoFocus
        />
        {errors.email && (
          <div className="text-red-500 text-sm mt-1">{errors.email}</div>
        )}
      </div>
      <div className="mb-4">
        <label className="mb-1">Senha</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-sm"
          disabled={pending}
          autoFocus
        />
        {errors.password && (
          <div className="text-red-500 text-sm mt-1">{errors.password}</div>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer hover:bg-blue-700"
        disabled={pending}
      >
        {pending ? "Entrando..." : "Entrar"}
      </button>
      {errors.form && (
        <div className="text-red-500 text-sm mt-1">{errors.form}</div>
      )}
      <div className="text-center mt-2">
        <Link href={"/register"} className="text-gray-500 text-sm">
          Ainda não tem conta? Cadastre-se
        </Link>
      </div>
    </form>
  );
}
