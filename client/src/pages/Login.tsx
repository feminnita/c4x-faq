import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
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
    <div className="min-h-screen flex bg-white overflow-hidden">
      {/* Left Section - Welcome with Decorative Elements */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#1e5a96] via-[#2a7ab8] to-[#1e5a96] text-white flex-col justify-center items-center p-12 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-blue-300 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-2xl"></div>

        {/* Curved Wave Shape */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>
          {/* Large circle on right */}
          <circle cx="450" cy="100" r="120" fill="rgba(255,255,255,0.08)" filter="url(#blur)" />
          {/* Large circle on bottom */}
          <circle cx="100" cy="450" r="150" fill="rgba(255,255,255,0.06)" filter="url(#blur)" />
        </svg>

        <div className="relative z-10 text-center max-w-md">
          {/* Welcome Text */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight">BEM-VINDO</h2>
            <p className="text-base font-light text-blue-100 leading-relaxed">
              Gerencie seus negócios com inteligência artificial. Módulos modulares de Gestão Operacional, Financeira, Marketing e Estoque — tudo em uma plataforma sofisticada e intuitiva.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-12">
            <img
              src="/manus-storage/WhatsAppImage2026-04-26at10.29.51_2869d1f2.jpeg"
              alt="C4X IA Soluções"
              className="h-20 object-contain mb-8"
            />
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Entrar</h1>
            <p className="text-gray-600 text-sm">
              Acesse sua conta C4X Soluções
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                Senha
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#0F172A]"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 border-gray-300 rounded text-[#0F172A] focus:ring-[#0F172A]"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Lembrar-me
              </label>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-[#0F172A] hover:bg-[#1a2847] text-white font-semibold py-3 rounded-lg transition-all duration-200"
            >
              Entrar
            </Button>

            {/* Sign in with other */}
            <Button
              type="button"
              variant="outline"
              className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50"
            >
              Entrar com outros
            </Button>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600">
              Não tem uma conta?{" "}
              <a href="#" className="text-[#8B2635] hover:text-[#6b1d2a] font-semibold">
                Cadastre-se
              </a>
            </p>
          </form>

          {/* Footer Links */}
          <div className="mt-8 pt-8 border-t border-gray-200 flex justify-center space-x-4 text-xs text-gray-600">
            <a href="#" className="hover:text-[#8B2635]">Termos</a>
            <span>•</span>
            <a href="#" className="hover:text-[#8B2635]">Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-[#8B2635]">Suporte</a>
          </div>
        </div>
      </div>
    </div>
  );
}
