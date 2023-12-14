function selectMenuItem(selectedElement) {
    // Loại bỏ lớp 'selected' từ tất cả các mục menu
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function(item) {
        item.classList.remove('selected');
    });

    // Thêm lớp 'selected' vào mục menu được nhấp
    selectedElement.classList.add('selected');

    // Hiển thị nội dung tương ứng dựa trên mục menu được chọn
    var contentId = selectedElement.getAttribute('data-content');
    showContent(contentId);
}

function showContent(contentId) {
    // Bạn có thể triển khai logic để hiển thị/ẩn nội dung dựa trên contentId
    var contentElements = document.querySelectorAll('.content-section');
    contentElements.forEach(function(content) {
        content.style.display = 'none';
    });

    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}