'use client';

import Link from "next/link";

import { useState } from 'react';
import { FiPhone, FiLock } from 'react-icons/fi';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // logique de soumission ici
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-100 pt-14" dir="rtl">
      <div className="bg-white text-black rounded-2xl shadow-lg p-8 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6">تسجيل الدخول إلى حسابك</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Téléphone */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              الهاتف <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <FiPhone className="text-gray-600 ml-2" />
              <input
                required
                type="tel"
                className="bg-transparent flex-1 focus:outline-none text-right text-black placeholder-gray-400"
                placeholder="مثال: 0555 55 55 55"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              كلمة المرور <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <FiLock className="text-gray-600 ml-2" />
              <input
                required
                type="password"
                className="bg-transparent flex-1 focus:outline-none text-right text-black placeholder-gray-400"
                placeholder="أدخل كلمة المرور الخاصة بك"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-right mt-1 text-sm text-gray-500 hover:underline cursor-pointer">
              نسيت كلمة المرور؟
            </div>
          </div>

          {/* Bouton Connexion */}
          <button
            type="submit"
            className="w-full bg-[#ec4261] hover:bg-[#d93955] transition rounded-lg py-2 text-white font-semibold"
          >
            تسجيل الدخول
          </button>
        </form>

        {/* Lien Inscription */}
        <div className="text-center mt-6 text-sm">
          متبرع جديد؟{' '}
          <Link href="/Signin" className="text-[#ec4261] font-semibold hover:underline">
            <span className="inline-block text-lg">➕</span> التسجيل
          </Link>
        </div>
      </div>
    </div>
  );
}
