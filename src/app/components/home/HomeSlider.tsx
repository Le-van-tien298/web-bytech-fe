'use client'; // 1. RẤT QUAN TRỌNG: Phải có cái này để dùng useState, useEffect

import { useState, useEffect } from 'react';
import { IProduct } from '@/types/product';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Pro nhớ install lucide-react nhé

interface HomeSliderProps {
    products: IProduct[]; // Nhận dữ liệu từ Server Component truyền xuống
}

export default function HomeSlider({ products }: HomeSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 2. Chỉ lấy 3 sản phẩm nổi bật nhất để làm Banner (cho đỡ rối)
    const featuredProducts = products.slice(0, 3);
    const totalSlides = featuredProducts.length;

    // 3. Hàm xử lý khi bấm nút "❮" (Qua trái)
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
    };

    // 4. Hàm xử lý khi bấm nút "❯" (Qua phải)
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    };

    // 5. AUTO PLAY: Thiết lập tự động chạy sau mỗi 4 giây
    useEffect(() => {
        if (totalSlides <= 1) return; // Nếu chỉ có 1 ảnh thì khỏi chạy

        const timer = setInterval(() => {
            handleNext();
        }, 4000); // 4000ms = 4 giây

        // Cleanup function: Xóa timer khi component bị destroy (tránh lỗi memory leak)
        return () => clearInterval(timer);
    }, [currentIndex, totalSlides]); // Timer sẽ reset khi currentIndex thay đổi

    // Nếu không có sản phẩm nào thì hiện cái khung trống
    if (totalSlides === 0) return <div className="h-full bg-gray-100 rounded-xl flex items-center justify-center">webTechS</div>;

    return (
        <div className="h-full relative group overflow-hidden rounded-xl shadow-md border border-gray-100">
            {/* A. PHẦN HIỂN THỊ ẢNH BANNER */}
            <div className="w-full h-full flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }} // 6. Dùng CSS để dịch chuyển ảnh mượt mà
            >
                {featuredProducts.map((product) => (
                    <div key={product.id} className="w-full h-full flex-shrink-0 cursor-pointer">
                        <img
                            src={product.thumbnail}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            alt={product.name}
                        />
                    </div>
                ))}
            </div>

            {/* B. NÚT ĐIỀU HƯỚNG (❮, ❯) - Bây giờ đã có thể bấm được! */}
            <div className="absolute inset-0 flex items-center justify-between px-3">
                <button
                    onClick={handlePrev} // Gắn hàm xử lý qua trái
                    className="bg-black/30 hover:bg-black/50 p-2.5 rounded-full text-white/80 hover:text-white transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={handleNext} // Gắn hàm xử lý qua phải
                    className="bg-black/30 hover:bg-black/50 p-2.5 rounded-full text-white/80 hover:text-white transition-colors"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* C. NÚT "DẤM CHẤM" (Dots) - Cho biết đang ở ảnh nào */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 p-1 bg-black/10 rounded-full">
                {featuredProducts.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)} // Bấm vào chấm nào nhảy tới ảnh đó
                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-red-600 w-4' : 'bg-white/70 hover:bg-white'}`}
                    />
                ))}
            </div>
        </div>
    );
}