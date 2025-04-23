// Lấy tất cả các chữ cái trong tiêu đề
const title = document.querySelector('.content h1');
const text = title.textContent.trim();
title.textContent = '';  // Xóa văn bản ban đầu

// Chia văn bản thành các chữ cái và bọc chúng vào trong các <span>
text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    
    // Cài đặt thời gian delay cho từng chữ cái để hiệu ứng gợn sóng xảy ra lần lượt
    span.style.setProperty('--delay', `${index * 0.1}s`);
    
    // Gán màu ngẫu nhiên cho mỗi chữ cái
    span.style.color = getRandomColor();
    
    title.appendChild(span);
});

// Hàm để tạo màu ngẫu nhiên
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
