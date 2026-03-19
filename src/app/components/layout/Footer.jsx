import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200 mt-12 pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4">

                {/* 1. Phần Tiện ích / Cam kết (Hàng trên cùng) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 pb-8 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="text-red-600" size={32} />
                        <div>
                            <p className="font-bold text-sm">Bảo hành tận tâm</p>
                            <p className="text-xs text-gray-500">Chính sách bảo hành lên đến 24 tháng</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Truck className="text-red-600" size={32} />
                        <div>
                            <p className="font-bold text-sm">Giao hàng miễn phí</p>
                            <p className="text-xs text-gray-500">Cho đơn hàng từ 300.000đ</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <RefreshCw className="text-red-600" size={32} />
                        <div>
                            <p className="font-bold text-sm">Đổi trả dễ dàng</p>
                            <p className="text-xs text-gray-500">Lên đến 30 ngày dùng thử</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="text-red-600" size={32} />
                        <div>
                            <p className="font-bold text-sm">Hỗ trợ 24/7</p>
                            <p className="text-xs text-gray-500">Hotline: 1800.2097</p>
                        </div>
                    </div>
                </div>

                {/* 2. Các cột thông tin chính */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

                    {/* Cột 1: Tổng đài hỗ trợ */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4 uppercase text-sm">Tổng đài hỗ trợ miễn phí</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Gọi mua hàng: <span className="font-bold text-gray-800">1800.2097</span> (7h30 - 22h)</li>
                            <li>Khiếu nại, góp ý: <span className="font-bold text-gray-800">1800.2063</span> (8h - 21h30)</li>
                            <li>Bảo hành, sửa chữa: <span className="font-bold text-gray-800">1800.2064</span> (8h - 21h)</li>
                        </ul>
                        <div className="mt-6">
                            <h3 className="font-bold text-gray-800 mb-3 uppercase text-sm">Kết nối với webTech</h3>
                            <div className="flex gap-4">
                                <Facebook className="text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
                                <Youtube className="text-red-600 cursor-pointer hover:scale-110 transition-transform" />
                                <Instagram className="text-pink-600 cursor-pointer hover:scale-110 transition-transform" />
                            </div>
                        </div>
                    </div>

                    {/* Cột 2: Thông tin chính sách */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4 uppercase text-sm">Thông tin và chính sách</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="hover:text-red-600 cursor-pointer">Mua hàng và thanh toán Online</li>
                            <li className="hover:text-red-600 cursor-pointer">Chính sách giao hàng</li>
                            <li className="hover:text-red-600 cursor-pointer">Tra cứu thông tin bảo hành</li>
                            <li className="hover:text-red-600 cursor-pointer">Chính sách bảo mật</li>
                            <li className="hover:text-red-600 cursor-pointer">Xem bản đồ cửa hàng</li>
                        </ul>
                    </div>

                    {/* Cột 3: Dịch vụ và thông tin khác */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4 uppercase text-sm">Dịch vụ và ưu đãi</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="hover:text-red-600 cursor-pointer">Khách hàng doanh nghiệp (B2B)</li>
                            <li className="hover:text-red-600 cursor-pointer">Ưu đãi giáo dục</li>
                            <li className="hover:text-red-600 cursor-pointer">Quy chế hoạt động</li>
                            <li className="hover:text-red-600 cursor-pointer">Chính sách Thu cũ đổi mới</li>
                        </ul>
                    </div>

                    {/* Cột 4: Phương thức thanh toán */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4 uppercase text-sm">Hình thức thanh toán</h3>
                        <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div key={i} className="h-8 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-400">
                                    PAY {i}
                                </div>
                            ))}
                        </div>
                        <div className="mt-6">
                            <h1 className="text-red-600 text-xl font-black italic">webTech<span className="text-gray-400">S</span></h1>
                            <p className="text-[10px] text-gray-400 mt-2">© {currentYear} Công ty TNHH Thương mại webTech. <br /> GPDKKD: 0312345678 do Sở KH & ĐT TP.HCM cấp.</p>
                        </div>
                    </div>

                </div>

                {/* 3. Bản quyền (Hàng dưới cùng) */}
                <div className="bg-gray-50 -mx-4 px-4 py-4 text-center">
                    <p className="text-[11px] text-gray-500 leading-relaxed max-w-4xl mx-auto">
                        Thiết kế web bởi Pro - Hệ thống cửa hàng bán lẻ điện thoại, máy tính, phụ kiện chính hãng tại Việt Nam.
                        Mọi thông tin trên website chỉ mang tính chất tham khảo. Hình ảnh sản phẩm có thể khác biệt so với thực tế.
                    </p>
                </div>
            </div>
        </footer>
    );
}