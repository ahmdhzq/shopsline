// app/layout.tsx
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'
import ClientProviders from '@/components/shared/client-providers'

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <ClientProviders>{children}</ClientProviders>
            </main>
            <Footer />
        </div>
    )
}
