import React from 'react'
import Link from 'next/link';

const Sidebar = () => {
    const navItems = [
        { href: '/', label: '📋 Wszystkie Oferty' }, 
        { href: '/dashboard', label: '🏠 Dashboard' },
        { href: '/profile', label: '👤 Mój profil' },
        { href: '/bookings', label: '🗓️ Rezerwacje' },
        { href: '/payments', label: '💳 Płatności' }
    ];

    const analyticsItems = [
        { href: '/analytics/sales', label: '📈 Sprzedaż' },
        { href: '/analytics/traffic', label: '📊 Ruch' },
        { href: '/analytics/reports', label: '📑 Raporty' }
    ];

    return (
        <nav className="w-64 bg-gray-800 text-white p-4 flex flex-col h-full">
            <div className="text-2xl font-bold mb-8 text-center">OfferLogo</div>
            
            <div className="space-y-6">
                {/* Main Navigation */}
                <div className="space-y-4">
                    {navItems.map((item) => (
                        <Link 
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div>
                    <h3 className="px-4 py-2 text-sm font-semibold text-gray-400 uppercase mb-2">
                        Analityka
                    </h3>
                    <div className="space-y-4">
                        {analyticsItems.map((item) => (
                            <Link 
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar