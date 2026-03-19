export const getProducts = async () => {
    try {
        const res = await fetch('http://localhost:3001/products', {
            cache: 'no-store', // Để luôn lấy dữ liệu mới nhất từ database
        });

        if (!res.ok) throw new Error('Thất bại khi lấy dữ liệu');

        return await res.json();
    } catch (error) {
        console.error("Lỗi fetch API:", error);
        return [];
    }
};

export const getProductDetail = async (slug) => {
    const res = await fetch(`http://localhost:3001/products/${slug}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
};