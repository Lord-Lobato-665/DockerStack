<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <nav class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center space-x-2">
            <svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span
                class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Nexus</span>
            </div>

            <!-- Botón Iniciar Sesión -->
            <RouterLink
            to="/login"
            class="text-sm font-medium text-blue-600 hover:text-indigo-600 transition px-4 py-2 border border-blue-600 rounded-full hover:bg-blue-50"
            >
            Iniciar Sesión
            </RouterLink>
        </div>
        </nav>

        <section class="relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 z-10">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        <span class="block">Transforma tu</span>
                        <span class="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Negocio Digital</span>
                    </h1>
                    <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-lg">
                        Soluciones tecnológicas a medida para impulsar tu empresa al siguiente nivel con inteligencia artificial y diseño de vanguardia.
                    </p>
                    <div class="mt-8 flex space-x-4">
                        <button class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-xl transition-all">
                            Comenzar Ahora
                        </button>
                    </div>
                </div>
                <div class="md:w-1/2 mt-16 md:mt-0 relative">
                    <div class="absolute -right-20 -top-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div class="absolute -left-20 bottom-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="rounded-2xl shadow-2xl border-8 border-white/10 transform rotate-1 hover:rotate-0 transition duration-500" alt="Hero Image">
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
            <div class="max-w-4xl mx-auto px-6 text-center">
                <h2 class="text-3xl font-bold text-white mb-4">¿Listo para transformar tu negocio?</h2>
                <p class="text-xl text-blue-100 mb-8">Únete a más de 5,000 empresas que ya usan nuestras soluciones</p>
                <button class="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
                    Comenzar ahora - 14 días gratis
                </button>
            </div>
        </section>
        <section class="bg-gray-50 py-12 border-t border-gray-200">
            <div class="max-w-7xl mx-auto px-6 text-center">
                <h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-8">
                    Confiado por empresas líderes
                </h3>
                <div class="flex gap-8 items-justify">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" alt="HP" class="h-6 mx-auto opacity-80 hover:opacity-100 transition">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" class="h-7 mx-auto opacity-80 hover:opacity-100 transition">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" alt="Notion" class="h-9 mx-auto opacity-80 hover:opacity-100 transition">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" class="h-8 mx-auto opacity-80 hover:opacity-100 transition">
                </div>
            </div>
        </section>
    </div>
    <section class="bg-gray-50 py-16">
        <div class="max-w-7xl mx-auto px-6">
            <h3 class="text-center text-3xl font-bold text-gray-900 mb-3">Resultados comprobados</h3>
            <p class="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Impacto real que hemos generado para nuestros clientes</p>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                    <p class="text-4xl font-bold text-blue-600 mb-2">5.8x</p>
                    <p class="text-sm font-medium text-gray-500 uppercase tracking-wider">ROI promedio</p>
                </div>
                <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                    <p class="text-4xl font-bold text-green-600 mb-2">-65%</p>
                    <p class="text-sm font-medium text-gray-500 uppercase tracking-wider">En tiempo operativo</p>
                </div>
                <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                    <p class="text-4xl font-bold text-purple-600 mb-2">240%</p>
                    <p class="text-sm font-medium text-gray-500 uppercase tracking-wider">Crecimiento en ventas</p>
                </div>
                <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                    <p class="text-4xl font-bold text-amber-500 mb-2">98%</p>
                    <p class="text-sm font-medium text-gray-500 uppercase tracking-wider">Satisfacción clientes</p>
                </div>
                <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                    <p class="text-4xl font-bold text-red-500 mb-2">4.7x</p>
                    <p class="text-sm font-medium text-gray-500 uppercase tracking-wider">Más eficiencia</p>
                </div>
                <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                    <p class="text-4xl font-bold text-indigo-600 mb-2">320%</p>
                    <p class="text-sm font-medium text-gray-500 uppercase tracking-wider">Aumento conversión</p>
                </div>
            </div>
        </div>
    </section>
    <section class="py-16 bg-white/80 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900">¿Listo para cambiar todo?</h2>
                <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Déjanos tus datos y te contactaremos en menos de 24 horas.
                </p>
            </div>
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
                <ContactForm />
            </div>
        </div>
    </section>
</template>

<script setup>
import ContactForm from '@/components/ContactFormView.vue'
</script>

<style>
@keyframes blob {
    0% {
        transform: translate(0px, 0px) scale(1);
    }

    33% {
        transform: translate(30px, -50px) scale(1.1);
    }

    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }

    100% {
        transform: translate(0px, 0px) scale(1);
    }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}
</style>