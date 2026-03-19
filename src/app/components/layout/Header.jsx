import Link from 'next/link'; // 1. Import Link để điều hướng
import {
    Phone,
    LayoutGrid,
    MapPin,
    ChevronDown,
    Search,
    ShoppingCart,
    User
} from 'lucide-react';

export default function Header() {
    return (
        <header className="w-full sticky top-0 z-50 shadow-md"> {/* Thêm sticky để cuộn trang Header vẫn đứng yên */}

            {/* 1. Thanh Topbar */}
            <div className="bg-[#100607] text-white py-1 hidden lg:block">
                <div className="max-w-7xl mx-auto px-4 flex justify-between text-[11px] font-medium">
                    <div className="flex gap-4">
                        <span>Miễn phí giao hàng cho đơn 300k</span>
                        <span className="text-gray-600">|</span>
                        <span className="flex items-center gap-1 font-bold text-red-400 underline italic cursor-pointer">
                            Thu cũ giá ngon - Lên đời tiết kiệm
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <span className="hover:text-red-400 cursor-pointer">Cửa hàng gần bạn</span>
                        <span className="hover:text-red-400 cursor-pointer">Tra cứu đơn hàng</span>
                        <span className="flex items-center gap-1 font-bold">
                            <Phone size={12} fill="currentColor" /> 1800 2097
                        </span>
                    </div>
                </div>
            </div>

            {/* 2. Thanh Main Navbar */}
            <div className="bg-gradient-to-r from-[#ac2943] to-[#b91919] py-3">
                <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">

                    {/* Logo webTech - Bọc trong Link để về trang chủ */}
                    <Link href="/" className="flex-shrink-0 cursor-pointer active:scale-95 transition-transform">
                        <h1 className="text-white text-2xl font-black tracking-tighter italic">
                            webTech<span className="text-white bg-white/20 rounded px-1 ml-1 shadow-sm">S</span>
                        </h1>
                    </Link>

                    {/* Nút Danh mục */}
                    <button className="hidden md:flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-xl transition-all border border-white/10 text-sm font-semibold active:scale-95">
                        <LayoutGrid size={20} />
                        Danh mục
                    </button>

                    {/* Nút Vị trí */}
                    <button className="hidden lg:flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-xl transition-all border border-white/10 text-[12px] leading-tight text-left min-w-[120px] active:scale-95">
                        <MapPin size={18} />
                        <div>
                            <p className="opacity-80">Xem giá tại</p>
                            <p className="font-bold flex items-center">Hồ Chí Minh <ChevronDown size={14} /></p>
                        </div>
                    </button>

                    {/* Thanh Search chính */}
                    <form className="flex-grow relative group">
                        <input
                            type="text"
                            placeholder="Bạn muốn mua gì hôm nay?"
                            className="w-full py-2.5 pl-10 pr-4 rounded-xl bg-white focus:outline-none text-sm shadow-inner focus:ring-2 focus:ring-red-400 transition-all"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={18} />
                    </form>

                    {/* Giỏ hàng */}
                    <Link href="/cart" className="flex items-center gap-2 text-white hover:bg-white/10 p-2 rounded-xl transition-all active:scale-95">
                        <div className="relative">
                            <ShoppingCart size={24} />
                            {/* Số lượng giỏ hàng - Sau này Pro dùng Context API để đổi số này nhé */}
                            <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-red-700 text-[10px] font-black px-1.5 py-0.5 rounded-full border-2 border-[#ac2943]">
                                2
                            </span>
                        </div>
                        <span className="hidden xl:block text-[11px] font-black leading-none uppercase">Giỏ hàng</span>
                    </Link>

                    {/* Đăng nhập */}
                    <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-xl transition-all border border-white/10 active:scale-95">
                        <User size={24} />
                        <span className="hidden xl:block text-[11px] font-black uppercase">Đăng nhập</span>
                    </button>

                </div>
            </div>
        </header>
    );
}