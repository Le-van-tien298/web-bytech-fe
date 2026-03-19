import { getProductDetail } from "@/services/product.service";
import { Star, ShoppingCart, ShieldCheck, Truck, RefreshCw, Gift } from "lucide-react";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
    const product = await getProductDetail(params.slug);

    if (!product) return notFound(); // Nếu không thấy slug này thì báo 404

    const formatVND = (price: number) =>
        new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

    return (
        <main className="max-w-7xl mx-auto px-4 py-6 bg-white">
            {/* Tiêu đề sản phẩm */}
            <h1 className="text-2xl font-bold border-b pb-4 mb-6">{product.name}</h1>

            <div className="grid grid-cols-12 gap-8">

                {/* Cột trái: Hình ảnh (Chiếm 5 cột) */}
                <div className="col-span-12 lg:col-span-5 border rounded-2xl p-6 flex justify-center items-center shadow-sm">
                    <img
                        src={product.thumbnail}
                        alt={product.name}
                        className="w-full max-h-[400px] object-contain hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Cột phải: Giá và Mua hàng (Chiếm 7 cột) */}
                <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-extrabold text-red-600">{formatVND(product.price)}</span>
                        <span className="text-gray-400 line-through text-lg">{formatVND(product.price * 1.1)}</span>
                        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg">-{product.discountPercent}%</span>
                    </div>

                    {/* Khung ưu đãi / Bảo hành */}
                    <div className="border border-red-200 rounded-xl overflow-hidden mt-4">
                        <div className="bg-red-50 p-2 border-b border-red-100 flex items-center gap-2">
                            <Gift size={20} className="text-red-600" />
                            <span className="font-bold text-red-700 text-sm italic uppercase">Thông tin sản phẩm</span>
                        </div>
                        <div className="p-4 flex flex-col gap-3 text-sm text-gray-700">
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={18} className="text-green-600" />
                                <span>Bảo hành chính hãng 12 tháng tại trung tâm bảo hành của webTechS.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Truck size={18} className="text-blue-600" />
                                <span>Miễn phí giao hàng cho tất cả các đơn hàng nội thành.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <RefreshCw size={18} className="text-orange-600" />
                                <span>1 đổi 1 trong 30 ngày nếu có lỗi phần cứng từ nhà sản xuất.</span>
                            </div>
                        </div>
                    </div>

                    {/* Mô tả ngắn */}
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                        {product.shortDescription || "Đang cập nhật mô tả chi tiết cho siêu phẩm này..."}
                    </p>

                    {/* Nút Mua hàng */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <button className="bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl flex flex-col items-center justify-center transition-all shadow-lg active:scale-95">
                            <span className="font-bold text-lg">MUA NGAY</span>
                            <span className="text-[11px]">(Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng)</span>
                        </button>
                        <button className="border-2 border-red-600 text-red-600 hover:bg-red-50 py-4 rounded-xl flex flex-col items-center justify-center transition-all active:scale-95">
                            <ShoppingCart size={24} />
                            <span className="text-[11px] font-bold">THÊM VÀO GIỎ HÀNG</span>
                        </button>
                    </div>
                </div>

            </div>

            {/* Thông số kỹ thuật (Hàng dưới) */}
            <div className="mt-12 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Thông số kỹ thuật</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {/* Pro có thể map thêm bảng Specs ở đây */}
                    <div className="flex justify-between border-b py-2"><span className="text-gray-500">Màn hình</span><span className="font-medium text-gray-800 italic">6.7 inch</span></div>
                    <div className="flex justify-between border-b py-2"><span className="text-gray-500">Chipset</span><span className="font-medium text-gray-800 italic">A17 Pro</span></div>
                    <div className="flex justify-between border-b py-2"><span className="text-gray-500">RAM</span><span className="font-medium text-gray-800 italic">8GB</span></div>
                    <div className="flex justify-between border-b py-2"><span className="text-gray-500">Pin</span><span className="font-medium text-gray-800 italic">4441 mAh</span></div>
                </div>
            </div>
        </main>
    );
}