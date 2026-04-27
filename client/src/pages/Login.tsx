import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Section - Branding with Dark Background */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0F172A] text-white flex-col justify-between items-start p-12 relative overflow-hidden rounded-3xl m-6">
        {/* Decorative Wave at Bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32 opacity-30"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 Q250,50 500,100 T1000,100 L1000,200 L0,200 Z"
            fill="#E8C99A"
            opacity="0.1"
          />
        </svg>

        <div className="relative z-10">
          {/* Logo */}
          <div className="mb-12">
            <img
              src={`${import.meta.env.BASE_URL}c4x_logo.png`}
              alt="C4X IA Soluções"
              className="h-40 object-contain"
            />
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold italic text-[#E8C99A] leading-tight">
              Inteligência Virtual para sua Empresa
            </h2>
            <p className="text-base text-gray-300 leading-relaxed max-w-md">
              A C4X Soluções integra tecnologia e estratégia para transformar a gestão da sua empresa em resultados reais.
            </p>
          </div>
        </div>

        {/* Module Icons */}
        <div className="relative z-10 grid grid-cols-4 gap-8 w-full">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <svg className="w-12 h-12 text-[#E8C99A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-300">Gestão<br />Operacional</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <svg className="w-12 h-12 text-[#E8C99A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-300">Gestão<br />Financeira</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <svg className="w-12 h-12 text-[#E8C99A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-300">Gestão<br />Marketing</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <svg className="w-12 h-12 text-[#E8C99A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-300">Gestão<br />Estoque</p>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-12">
            <img
              src={`${import.meta.env.BASE_URL}c4x_logo.png`}
              alt="C4X IA Soluções"
              className="h-32 object-contain"
            />
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-[#0F172A] mb-2">
              Bem-vindo de volta!
            </h1>
            <p className="text-gray-600 text-sm">
              Faça login para acessar sua conta
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-[#0F172A]"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 border-gray-300 rounded text-[#0F172A] focus:ring-[#0F172A]"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                  Lembrar de mim
                </label>
              </div>
              <a href="#" className="text-sm text-[#8B2635] hover:text-[#6b1d2a] font-semibold">
                Esqueceu sua senha?
              </a>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-[#8B2635] hover:bg-[#6b1d2a] text-white font-semibold py-3 rounded-lg transition-all duration-200"
            >
              Entrar
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">ou continue com</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <Button
              type="button"
              variant="outline"
              className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Entrar com Google
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="9" height="9" fill="#F25022"/>
                <rect x="11" y="1" width="9" height="9" fill="#7FBA00"/>
                <rect x="1" y="11" width="9" height="9" fill="#00A4EF"/>
                <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
              </svg>
              Entrar com Microsoft
            </Button>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600">
              Ainda não tem uma conta?{" "}
              <a href="#" className="text-[#8B2635] hover:text-[#6b1d2a] font-semibold">
                Cadastre-se
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
