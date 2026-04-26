import { useState } from "react";
import { Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [, setLocation] = useLocation();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};

    // Validação
    if (!email) {
      newErrors.email = "Email é obrigatório";
    } else if (!validateEmail(email)) {
      newErrors.email = "Email inválido";
    }

    if (!password) {
      newErrors.password = "Senha é obrigatória";
    } else if (password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);
    setSuccessMessage("");

    // Simular login com delay
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Login realizado com sucesso! Redirecionando...");
      
      // Limpar formulário
      setEmail("");
      setPassword("");
      
      // Redirecionar após 1.5s
      setTimeout(() => {
        setLocation("/dashboard");
      }, 1500);
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage(`Login com ${provider} realizado com sucesso!`);
      setTimeout(() => {
        setLocation("/dashboard");
      }, 1500);
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
        <div className="relative z-10 animate-fade-in">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6 hover:scale-105 transition-transform duration-300">
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

          {/* Success Message */}
          {successMessage && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-slide-down">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-green-700 text-sm font-medium">{successMessage}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A] mb-2">
                Email
              </label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#8B2635]"
                  }`}
                />
                {errors.email && (
                  <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                )}
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: undefined });
                  }}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#8B2635]"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#8B2635] transition-colors duration-200"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.password}
                </p>
              )}
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-[#8B2635] focus:ring-[#8B2635] cursor-pointer transition-all duration-200"
                />
                <span className="text-gray-700 group-hover:text-[#8B2635] transition-colors duration-200">
                  Lembrar-me
                </span>
              </label>
              <a
                href="#"
                className="text-[#8B2635] hover:text-[#0F172A] font-semibold transition-colors duration-200 hover:underline"
              >
                Esqueceu a senha?
              </a>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0F172A] hover:bg-[#0A0F1F] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Entrando...
                </span>
              ) : (
                "Entrar"
              )}
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
              disabled={isLoading}
              onClick={() => handleSocialLogin("Google")}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#8B2635] transition-all duration-300 disabled:opacity-70"
            >
              Google
            </Button>
            <Button
              type="button"
              disabled={isLoading}
              onClick={() => handleSocialLogin("Microsoft")}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#8B2635] transition-all duration-300 disabled:opacity-70"
            >
              Microsoft
            </Button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 mt-8">
            Não tem uma conta?{" "}
            <a
              href="#"
              className="text-[#8B2635] hover:text-[#0F172A] font-semibold transition-colors duration-200 hover:underline"
            >
              Cadastre-se aqui
            </a>
          </p>

          {/* Footer Links */}
          <div className="flex justify-center gap-6 text-xs text-gray-500 mt-8 pt-8 border-t border-gray-200">
            <a
              href="#"
              className="hover:text-[#8B2635] transition-colors duration-200 hover:underline"
            >
              Termos de Serviço
            </a>
            <a
              href="#"
              className="hover:text-[#8B2635] transition-colors duration-200 hover:underline"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="hover:text-[#8B2635] transition-colors duration-200 hover:underline"
            >
              Suporte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
