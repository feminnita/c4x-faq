import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useLocation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular login (em produção, isso seria uma chamada à API)
    setTimeout(() => {
      setIsLoading(false);
      // Redirecionar para dashboard ou página principal
      setLocation("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Branding (Curved Design) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0F172A] via-[#1A3A6B] to-[#0F172A] flex-col justify-between p-12 text-white relative overflow-hidden">
        {/* Curved SVG Background */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(232, 201, 154, 0.1)" />
              <stop offset="100%" stopColor="rgba(139, 38, 53, 0.15)" />
            </linearGradient>
          </defs>
          <path
            d="M 0 100 Q 250 50 500 150 L 500 500 L 0 500 Z"
            fill="url(#grad1)"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl font-serif font-bold text-[#E8C99A]">
                C4X
              </div>
              <div className="w-1 h-16 bg-[#8B2635]"></div>
              <div className="text-3xl font-serif text-[#E8C99A]">Soluções</div>
            </div>
            <p className="text-[#E8C99A] text-lg font-light">
              Inteligência Virtual para sua Empresa
            </p>
          </div>

          <h2 className="text-5xl font-serif font-bold mb-6 leading-tight">
            Bem-vindo
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Gerencie seus negócios com inteligência artificial. Módulos modulares
            de Gestão Operacional, Financeira, Marketing e Estoque — tudo em uma
            plataforma sofisticada.
          </p>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-gray-400 text-sm">
          <p>© 2026 C4X Soluções. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 py-12 bg-white">
        {/* Mobile Logo */}
        <div className="lg:hidden mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-3xl font-serif font-bold text-[#E8C99A]">
              C4X
            </div>
            <div className="w-1 h-12 bg-[#8B2635]"></div>
            <div className="text-2xl font-serif text-[#E8C99A]">Soluções</div>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-[#0F172A] mb-2">
              Entrar
            </h1>
            <p className="text-gray-600">
              Acesse sua conta C4X Soluções
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A] mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-[#0F172A] mb-2">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#8B2635]"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-[#8B2635] focus:ring-[#8B2635]"
                />
                <span className="text-gray-700">Lembrar-me</span>
              </label>
              <a href="#" className="text-[#8B2635] hover:text-[#0F172A] font-semibold">
                Esqueceu a senha?
              </a>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0F172A] hover:bg-[#0A0F1F] text-white font-semibold py-3 rounded-lg transition-colors"
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Ou continue com</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Microsoft
            </Button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 mt-8">
            Não tem uma conta?{" "}
            <a href="#" className="text-[#8B2635] hover:text-[#0F172A] font-semibold">
              Cadastre-se aqui
            </a>
          </p>

          {/* Footer Links */}
          <div className="flex justify-center gap-6 text-xs text-gray-500 mt-8 pt-8 border-t border-gray-200">
            <a href="#" className="hover:text-[#8B2635]">
              Termos de Serviço
            </a>
            <a href="#" className="hover:text-[#8B2635]">
              Privacidade
            </a>
            <a href="#" className="hover:text-[#8B2635]">
              Suporte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
