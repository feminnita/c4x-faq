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
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Section - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0F172A] via-[#1a3a6b] to-[#0F172A] text-white flex-col justify-center items-center p-12 relative overflow-hidden">
        {/* Curved SVG Background - Clean design without circles */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8C99A" />
              <stop offset="100%" stopColor="#8B2635" />
            </linearGradient>
          </defs>
          <path
            d="M 0 100 Q 150 50 300 100 L 500 0 L 500 500 L 0 500 Z"
            fill="url(#grad1)"
            opacity="0.15"
          />
        </svg>

        <div className="relative z-10 text-center max-w-md">
          {/* Logo */}
          <div className="mb-12">
            <div className="text-6xl font-bold tracking-wider mb-2 flex items-center justify-center gap-2">
              <span className="text-[#E8C99A]">C4X</span>
              <span className="text-[#8B2635] text-5xl">|</span>
              <span className="text-[#E8C99A] text-4xl italic font-light">Soluções</span>
            </div>
            <div className="h-1 w-48 bg-[#8B2635] mx-auto mb-8"></div>
          </div>

          {/* Welcome Section */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight">BEM-VINDO</h2>
            <p className="text-lg font-light text-gray-200 leading-relaxed">
              Gerencie seus negócios com inteligência artificial. Módulos modulares de Gestão Operacional, Financeira, Marketing e Estoque — tudo em uma plataforma sofisticada.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 left-0 right-0 text-center text-gray-400 text-xs">
          <p>© 2026 C4X Soluções. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 bg-white rounded-3xl lg:rounded-none shadow-2xl lg:shadow-none">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-12 text-center">
            <div className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
              <span className="text-[#E8C99A]">C4X</span>
              <span className="text-[#8B2635] text-2xl">|</span>
              <span className="text-[#E8C99A] text-2xl italic font-light">Soluções</span>
            </div>
            <div className="h-1 w-24 bg-[#8B2635] mx-auto"></div>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B2635] focus:border-transparent pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#8B2635]"
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
                className="w-4 h-4 border-gray-300 rounded text-[#8B2635] focus:ring-[#8B2635]"
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
