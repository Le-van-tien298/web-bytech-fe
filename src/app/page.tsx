import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import { getProducts } from "@/services/product.service";
import { IProduct } from "@/types/product";
import HomeSlider from "./components/home/HomeSlider";
import { Search, ShoppingCart, User, MapPin, LayoutGrid, ChevronDown, Phone } from 'lucide-react';
import { UserCircle, Gift, GraduationCap, RefreshCw, Briefcase, ChevronRight } from 'lucide-react';
export default async function Home() {
  const products = await getProducts();
  return (
    <main className="max-w-7xl mx-auto px-4 py-4 font-sans text-gray-800">



      {/* SECTION 1: HERO AREA (Menu + Slider + Right Banners) */}
      <section className="grid grid-cols-12 gap-3 h-[380px] mt-4">

        {/* 1. Menu Danh mục bên trái (Ẩn trên mobile, hiện từ md trở lên) */}
        <div className="hidden h-[300px] md:h-[400px]  lg:col-span-3 lg:block bg-white rounded-xl shadow-sm border border-gray-100 p-1">
          <ul className="space-y-1">
            {['Điện thoại, Tablet', 'Laptop', 'Âm thanh', 'Đồng hồ', 'Phụ kiện', 'PC, Màn hình', 'Tivi', 'Thu cũ đổi mới'].map((item, index) => (
              <li key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group">
                <span className="text-sm font-medium">{item}</span>
                <span className="text-gray-400 group-hover:translate-x-1 transition-transform">›</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 2. Banner Slider ở giữa */}
        <div className="col-span-12 lg:col-span-6 h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-md relative">
          <HomeSlider products={products} /> {/* 7. Truyền data cho nó chạy nà Pro */}
        </div>
        <div className="hidden h-[300px] md:h-[400px]  lg:col-span-3 lg:flex flex-col gap-3 h-full">

          {/* A. KHUNG CHÀO MỪNG SMEMBER */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-1 rounded-full">
                <UserCircle size={32} className="text-red-600" />
              </div>
              <div>
                <p className="text-[13px] font-bold leading-tight">Chào mừng bạn đến với webTechS</p>
              </div>
            </div>
            <p className="text-[11px] text-gray-500">Nhập hội thành viên webMember để không bỏ lỡ các ưu đãi hấp dẫn.</p>
            <div className="flex gap-2 mt-1">
              <button className="flex-1 bg-red-600 text-white text-[11px] font-bold py-1.5 rounded-lg hover:bg-red-700 transition-colors">Đăng nhập</button>
              <button className="flex-1 border border-red-600 text-red-600 text-[11px] font-bold py-1.5 rounded-lg hover:bg-red-50 transition-colors">Đăng ký</button>
            </div>
            <button className="flex items-center justify-between w-full mt-1 bg-gray-50 p-2 rounded-lg group">
              <div className="flex items-center gap-2">
                <Gift size={16} className="text-red-600" />
                <span className="text-[11px] font-medium">Xem ưu đãi webMember</span>
              </div>
              <ChevronRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* B. KHUNG DANH SÁCH ƯU ĐÃI (SCROLLABLE) */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="overflow-y-auto p-3 flex flex-col gap-4 scrollbar-hide">

              {/* 1. Nhóm Giáo dục */}
              <div className="flex flex-col gap-2">
                <h4 className="bg-gray-100 text-[11px] font-bold p-1.5 rounded-md text-center uppercase tracking-wider">Ưu đãi cho giáo dục</h4>
                <div className="flex flex-col gap-2 px-1">
                  <div className="flex items-center gap-2 text-[12px]">
                    <GraduationCap size={16} className="text-red-600" />
                    <span>Đăng ký <span className="font-bold">nhận ưu đãi</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px]">
                    <Gift size={16} className="text-red-600" />
                    <span>Deal hot <span className="font-bold">học sinh sinh viên</span></span>
                  </div>
                </div>
              </div>

              {/* 2. Nhóm Thu cũ */}
              <div className="flex flex-col gap-2">
                <h4 className="bg-gray-100 text-[11px] font-bold p-1.5 rounded-md text-center uppercase tracking-wider">Thu cũ lên đời giá hời</h4>
                <div className="flex flex-col gap-2 px-1">
                  <div className="flex items-center gap-2 text-[12px]">
                    <RefreshCw size={16} className="text-red-600" />
                    <span>iPhone trợ giá <span className="font-bold">đến 3 triệu</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px]">
                    <RefreshCw size={16} className="text-red-600" />
                    <span>Samsung trợ giá <span className="font-bold">đến 4 triệu</span></span>
                  </div>
                </div>
              </div>

              {/* 3. Nhóm Doanh nghiệp */}
              <div className="flex flex-col gap-2">
                <h4 className="bg-gray-100 text-[11px] font-bold p-1.5 rounded-md text-center uppercase tracking-wider">Khách hàng doanh nghiệp (B2B)</h4>
                <div className="flex flex-col gap-2 px-1">
                  <div className="flex items-center gap-2 text-[12px]">
                    <Briefcase size={16} className="text-gray-600" />
                    <span>Đăng ký <span className="font-bold">S-Business</span></span>
                  </div>
                </div>
              </div>

            </div>

            {/* Banner quảng cáo nhỏ dưới cùng */}
            <div className="p-2 border-t border-gray-50">
              <img
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-right-banner-v2.jpg"
                className="rounded-lg object-cover w-full h-[60px]"
              />
            </div>
          </div>
        </div>

      </section>

      {/* SECTION 2: HOT DEALS (Flash Sale) */}
      <section className="mt-8 bg-red-600 rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-2xl font-black italic uppercase italic">SĂN SALE GIÁ SỐC</h2>
          <div className="text-white font-bold bg-black/20 px-4 py-1 rounded-lg">Kết thúc trong: 02 : 15 : 45</div>
        </div>

        {/* Danh sách sản phẩm Sale */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {/* Pro có thể map 10 dữ liệu nãy ở đây */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
              <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png" className="w-full aspect-square object-contain" />
              <h3 className="text-sm font-semibold line-clamp-2 mt-2">iPhone 15 Pro Max 256GB | Chính hãng VN/A</h3>
              <div className="mt-2">
                <span className="text-red-600 font-bold">29.490.000đ</span>
                <span className="text-xs text-gray-400 line-through ml-2">34.990.000đ</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-red-600 rounded-2xl p-4 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-black uppercase italic tracking-widest">
            🔥 SĂN SALE GIÁ SỐC
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product: IProduct) => (

            <Link href={`/products/${product.slug}`} key={product.id}>
              <div className="bg-white rounded-xl p-3 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-1 group cursor-pointer h-full">

                {/* Ảnh sản phẩm */}
                <div className="relative aspect-square overflow-hidden mb-3">
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.discountPercent > 0 && (
                    <span className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-br-lg">
                      Giảm {product.discountPercent}%
                    </span>
                  )}
                </div>

                {/* Tên sản phẩm */}
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 h-10 mb-2">
                  {product.name}
                </h3>

                {/* Giá tiền */}
                <div className="flex flex-col">
                  <span className="text-red-600 font-extrabold text-lg">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                  </span>
                  {product.discountPercent > 0 && (
                    <span className="text-xs text-gray-400 line-through">
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price * 1.1)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>


    </main>
  );
}
