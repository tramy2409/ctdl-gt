function showContent(contentId) {
    const contentItems = document.querySelectorAll('.content-item');
    //contentItems.forEach(item => item.style.display = 'none');
    contentItems.forEach(item => {
        item.style.display = 'none';
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        }
    });

    if (contentId === 'baihoc') {
        document.getElementById('baitap').style.display = 'none';
        document.getElementById('baihoc').style.display = 'block';
        document.getElementById('baihoc').classList.add('active');

    } else if (contentId === 'baitap') {
        document.getElementById('baihoc').style.display = 'none';
        document.getElementById('baitap').style.display = 'block';
        document.getElementById('baitap').classList.add('active');

    }

    if (contentId === 'baitap') {
        document.getElementById('illustration').style.display = 'none';
        document.getElementById('baitap').style.display = 'block';
        document.getElementById('baitap').classList.add('active');
    } else if (contentId === 'illustration') {
        document.getElementById('baitap').style.display = 'none';
        document.getElementById('illustration').style.display = 'block';
        document.getElementById('illustration').classList.add('active');
    }

}
    
    // if (contentId === 'phuongphap') {
    //     document.getElementById('baitap').style.display = 'none';
    //     document.getElementById('phuongphap').style.display = 'block';
    //     document.getElementById('phuongphap').classList.add('active');
    // } else if (contentId === 'baitap') {
    //     document.getElementById('phuongphap').style.display = 'none';
    //     document.getElementById('baitap').style.display = 'block';
    //     document.getElementById('baitap').classList.add('active');
    // }

    // if (contentId === 'baitap') {
    //     document.getElementById('illustration').style.display = 'none';
    //     document.getElementById('baitap').style.display = 'block';
    //     document.getElementById('baitap').classList.add('active');
    // } else if (contentId === 'illustration') {
    //     document.getElementById('baitap').style.display = 'none';
    //     document.getElementById('illustration').style.display = 'block';
    //     document.getElementById('illustration').classList.add('active');
    // }

    //document.getElementById(contentId).style.display = 'block';


//-------------------------------------------------------------------------------//

function updateLessonContent(contentId, lessonTitle, lessonContent) {
    const contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach(item => item.style.display = 'none');

    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';

    // Cập nhật nội dung cho bài học được chọn
    document.getElementById('nd').innerHTML = `<p>${lessonContent}</p>`;
}



document.addEventListener('DOMContentLoaded', function () {
    const lessonContents = [
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    // Thêm nội dung tương ứng cho các bài học khác ở đây
    ];

    const ndContent = document.getElementById('nd');
    const baiHocItems = document.querySelectorAll('.baihoc-item');

    baiHocItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baihoc');
        selectedContent.style.display = 'block';

      // Kiểm tra nếu bài học được chọn là bài học đầu tiên, thì hiển thị nội dung trống
        if (index === 0) {
            ndContent.innerHTML = '';
        } else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

  // Hiển thị nội dung ban đầu khi trang được tải
  //ndContent.innerHTML = '';
});

//  ///////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', function () {
//   const lessonContents = [
//     " ",
//     "<div class='mean-content'> I. Khái niệm sắp xếp \
//     <br> II. Bubble Sort \
//     <br> III. Insert Sort </div>\
//     <div class ='mean-content-2'> I. Khái niệm </div> \
//     <div class='mean-content'> II. tính chất sắp xếp",
//     // Thêm nội dung tương ứng cho các bài học khác ở đây
//   ];

//   const ndContent = document.getElementById('nd');
//   const baiHocItems = document.querySelectorAll('.baihoc-item');

//   // Ẩn tất cả nội dung trước khi bắt đầu
//   ndContent.innerHTML = '';
//   const lessonIContents6 = document.querySelectorAll('.mean-content');
//   lessonIContents6.forEach(content => {
//     content.style.display = 'none';
//   });

//   const lessonIContents7 = document.querySelectorAll('.mean-content-2');
//   lessonIContents7.forEach(content => {
//     content.style.display = 'block';
//   });

//   baiHocItems.forEach((item, index) => {
//     item.addEventListener('click', function () {
//       const selectedContent = document.getElementById('baihoc');
//       selectedContent.style.display = 'none';

//       // Kiểm tra nếu bài học được chọn là bài học đầu tiên, thì hiển thị nội dung trống
//       if (index === 0) {
//         ndContent.innerHTML = '';
//       } else {
//         ndContent.innerHTML = lessonContents[index];
//       }
//     });
//   });

//   // Hiển thị nội dung ban đầu khi trang được tải
//   //ndContent.innerHTML = '';
// });

// Thêm một số thay đổi để ẩn/hiện nội dung theo yêu cầu của bạn
// document.getElementById('khai-niem-checkbox').addEventListener('change', function() {
//     // Rest of your existing code...
// });


// -------------------------------------------------------------------------------------------- //

document.addEventListener('DOMContentLoaded', function () {
    const lessonContents = [
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    // Thêm nội dung tương ứng cho các bài học khác ở đây
    ];


    const ndContent = document.getElementById('ndbaitap');
    const baiHocItems = document.querySelectorAll('.baitap-item');

    baiHocItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baitap');
        selectedContent.style.display = 'block';

      //Kiểm tra nếu bài học được chọn là bài học đầu tiên, thì hiển thị nội dung trống
        if (index === 0) {
            ndContent.innerHTML = '';
        } else {
            ndContent.innerHTML = lessonContents[index];
        }

        });
    });

  // Hiển thị nội dung ban đầu khi trang được tải
  //ndContent.innerHTML = '';
});


// ----------------------------------------------------------------------------------------- //

document.addEventListener('DOMContentLoaded', function () {
    const lessonContents = [
    // "Nội dung của Tổng quan",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Ý tưởng thuật toán: </div></b>\
    <div class ='lesson'>Xuất phát từ phần tử cuối danh sách ta tiến hành so sánh với phần tử bên trái của nó. \
    Nếu phần tử đang xét có khóa nhỏ hơn phần tử bên trái của nó ta tiến đưa nó về bên trái của dãy bằng cách hoán vị với phần tử bên trái của nó. \
    Tiếp tục thực hiện như thế đối với bài toán có n phần tử thì sau n - 1 bước ta thu được danh sách tăng dần. </div>\
    <b><div class ='lesson-content'>II. Giải thuật</div></b> \
    <div class ='lesson'>Bước 1: i=0; //Phần tử đầu tiên \
    <br>Bước 2:Lần lượt so sánh và đổi chổ (nếu cần) từ phải sang trái đối với các phần từ từ a[n] đến a[i]. với biến gán j=n-i. và lặp lại khi j>i. \
    <br>Bước 3: i=i+1; \
    <br>Bước 4: \
    <br>Nếu i < n, quay lại Bước 2. \
    <br>Ngược lại, dừng, dãy đã cho đã sắp xếp đúng vị trí. </div>\
    <b><div class ='lesson-content'>III. Thuật toán tham khảo</div></b> \
    <br><div id='container'> \
        <div id='menucode'> \
        <span class='menucode-item' onclick=\"showCode('cpp')\">C++</span> \
        <span class='menucode-item' onclick=\"showCode('java')\">Java</span> \
        <span class='menucode-item' onclick=\"showCode('php')\">PHP</span> \
        </div> \
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code id='cppCode'> \
                    <br>void BubbleSort(int a[], int n){ \
                        <br>    int temp; // biến tạm temp \
                        <br>for (int i = 0; i < n; i++){ \
                        <br>for (int j = i + 1; j < n; j++){ \
                        <br>     if (a[j] > a[j+1]){ \
                        <br>          temp = a[j]; \
                        <br>          a[j] = a[j+1]; \
                        <br>          a[j+1] = temp; \
                        <br>        } \
                        <br>     } \
                        <br> } \
                        <br>} \
                </code> \
                <code id='javaCode' style='display: none;'> \
                    <br>private static void bubbleSort(int[] unsortedArray, int length) { \
                    <br>int temp, counter, index; \
                    <br>for(counter=0; counter<length-1; counter++) { \
                    <br>   for(index=0; index<length-1-counter; index++) { \
                    <br>      if(unsortedArray[index] > unsortedArray[index+1]) { \
                    <br>             temp = unsortedArray[index]; \
                    <br>             unsortedArray[index] = unsortedArray[index+1]; \
                    <br>             unsortedArray[index+1] = temp; \
                    <br>      } \
                    <br>    } \
                    <br> } \
                    <br> } \
                </code> \
                <code id='phpCode' style='display: none;'> \
                    <br>$arr = [...]; \
                    <br>$arr_count = count($arr); \
                    <br>for ($i = 0; $i < $arr_count; $i++) \
                    <br>{ \
                    <br>  for ($j = 1; $j < $arr_count - $i; $j++) \
                    <br>  { \
                    <br>     if ($arr[$j-1] > $arr[$j]) \
                    <br>     { \
                    <br>        $tmp = $arr[$j-1]; \
                    <br>        $arr[$j-1] = $arr[$j]; \
                    <br>        $arr[$j] = $tmp; \
                    <br>     } \
                    <br>   } \
                    <br>} \
                    <br>for($i=0;$i<$arr_count;$i++){ \
                    <br>     echo $arr[$i].; \
                    <br>} \
                </code> \
            </div> \
            </pre> \
        </div> \
    </div> \
    </div>",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Giải thuật</div></b> \
    <div class ='lesson'>Để sắp xếp một mảng có kích thước n theo thứ tự tăng dần: \
    <br>Bước 1: Lặp lại từ arr [1] đến arr [n] trên mảng. \
    <br>Bước 2: So sánh phần tử hiện tại với phần tử trước của nó. \
    <br>Bước 3: Nếu phần tử chính nhỏ hơn phần tử trước của nó, hãy so sánh nó với các phần tử trước đó. Di chuyển các phần tử lớn hơn lên một vị trí để tạo khoảng trống cho phần tử được hoán đổi. </div> \
    <br><center><img src='img/sx1.png' alt='Bubble Sort Image'></center> \
    <b><div class ='lesson-content'>II. Thuật toán tham khảo</div></b> \
    <br><div id='container'> \
        <div id='menucode'> \
        <span class='menucode-item' onclick=\"showCode('cpp')\">C++</span> \
        <span class='menucode-item' onclick=\"showCode('java')\">Java</span> \
        <span class='menucode-item' onclick=\"showCode('php')\">PHP</span> \
        </div> \
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code id='cppCode'> \
                        <br> void insertionSort(int arr[], int n) { \
                        <br>    int i, key, j; \
                        <br>    for (i = 1; i < n; i++) \
                        <br>    { \
                        <br>        key = arr[i]; \
                        <br>        j = i - 1;  \
                        <br>        while (j >= 0 && arr[j] > key) \
                        <br>        { \
                        <br>           arr[j + 1] = arr[j]; \
                        <br>           j = j - 1; \
                        <br>        } \
                        <br>        arr[j + 1] = key; \
                        <br>    } \
                        <br> } \
                </code> \
                <code id='javaCode' style='display: none;'> \
                    <br> void sort(int arr[])  \
                    <br> { \
                    <br>     int n = arr.length; \
                    <br>     for (int i = 1; i < n; ++i) { \
                    <br>          int key = arr[i];  \
                    <br>          int j = i - 1; \
                    <br>  \
                    <br>          while (j >= 0 && arr[j] > key) { \
                    <br>                arr[j + 1] = arr[j]; \
                    <br>                j = j - 1;  \
                    <br>          } \
                    <br>          arr[j + 1] = key;  \
                    <br> } \
                    <br> } \
                </code> \
                <code id='phpCode' style='display: none;'> \
                    <br> function insertionSort(&$arr, $n) { \
                    <br>     for ($i = 1; $i < $n; $i++)  { \
                    <br>         $key = $arr[$i];  \
                    <br>         $j = $i-1;  \
                    <br>  \
                    <br>         while ($j >= 0 && $arr[$j] > $key) { \
                    <br>              $arr[$j + 1] = $arr[$j]; \
                    <br>              $j = $j - 1;  \
                    <br>        } \
                    <br>        $arr[$j + 1] = $key; \
                    <br>   } \
                    <br>} \
                </code> \
            </div> \
            </pre> \
        </div> \
    </div> \
    </div>",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Giải thuật</div></b> \
    <div class ='lesson'>Để bạn dần hiểu rõ hơn về thuật toán Selection Sort, hãy xem giải thuật của nó: \
    <br> Bước 1: Chọn phần tử có khóa nhỏ nhất trong n phần tử từ a[0] đến a[n-1] và hoán vị nó với phần tử a[0]. \
    <br> Bước 2: Chọn phần tử có khóa nhỏ nhất trong n – 1 phần tử từ a[1] đến a[n-1] và hoán vị nó với a[1]. \
    <br> Bước 3: Tổng quát ở bước thứ i chọn phần tử có khóa nhỏ nhất trong n – i phần tử từ a[i] đến a[n-1] và hoán vị nó với a[i]. \
    <br> Sau n – 1 bước thì mảng đã được sắp xếp. </div> \
    <b><div class ='lesson-content'>II. Phương pháp chọn khóa hoặc phần tử đầu tiên</div></b> \
    <div class ='lesson'> Phương pháp chọn key hoặc phần tử đầu tiên: \
    <br> Bước 1: Đầu tiên ta đặt khóa nhỏ nhất là khóa của a[i] (lowkey = a[i]key) và chỉ số của phần tử có khóa nhỏ nhất là là i (lowindex = i). \
    <br> Bước 2: Xét các phần tử a[j] với j từ i + 1 đến n -1, nếu khóa của a[j] nhỏ hơn khóa nhỏ nhất (a[j].key < lowkey) thì đặt lại khóa nhỏ nhất là là khóa của a[j] (lowkey = a[j].key). Và phần tử có khóa nhỏ nhất là j (lowendex = j). \
    <br> Bước 3: Khi đã xét hết các phần tử a[j] với j > n- 1 thì phần tử có khóa nhỏ nhất là a[lowindex] </div> \
    <b><div class ='lesson-content'>III. Thuật toán tham khảo</div></b> \
    <br><div id='container'> \
        <div id='menucode'> \
        <span class='menucode-item' onclick=\"showCode('cpp')\">C++</span> \
        <span class='menucode-item' onclick=\"showCode('java')\">Java</span> \
        <span class='menucode-item' onclick=\"showCode('php')\">PHP</span> \
        </div> \
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code id='cppCode'> \
                        <br> void selectionSort(int arr[], int n) { \
                        <br>    int i, j, min_idx; \
                        <br>    for (i = 0; i < n - 1; i++) { \
                        <br>    { \
                        <br>        min_idx = i; \
                        <br>        for (j = i + 1; j < n; j++) { \
                        <br>            if (arr[j] < arr[min_idx])  \
                        <br>            min_idx = j; \
                        <br>        }  \
                        <br>        if (min_idx != i) \
                        <br>           swap(arr[min_idx], arr[i]); \
                        <br>    } \
                        <br> } \
                </code> \
                <code id='javaCode' style='display: none;'> \
                    <br> void sort(int arr[])  \
                    <br> { \
                    <br>     int n = arr.length; \
                    <br>     for (int i = 0; i < n-1; i++) { \
                    <br>          int min_idx = i;  \
                    <br>          for (int j = i+1; j < n; j++) \
                    <br>               if (arr[j] < arr[min_idx])  \
                    <br>                   min_idx = j; \
                    <br>           int temp = arr[min_idx]; \
                    <br>           arr[min_idx] = arr[i];  \
                    <br>           arr[i] = temp;  \
                    <br>      } \
                    <br> } \
                </code> \
                <code id='phpCode' style='display: none;'> \
                    <br> function selection_sort(&$arr, $n) { \
                    <br>     for ($i = 1; $i < $n; $i++)  { \
                    <br>         $low = $i;  \
                    <br>         for($j = $i + 1; $j < $n ; $j++) { \
                    <br>             if ($arr[$j] < $arr[$low]) { \
                    <br>                 $low = $j;  \
                    <br>             } \
                    <br>      }  \
                    <br>      if ($arr[$i] > $arr[$low]) { \
                    <br>         $tmp = $arr[$i]; \
                    <br>         $arr[$i] = $arr[$low]; \
                    <br>         $arr[$low] = $tmp; \
                    <br>      } \
                    <br>   } \
                    <br>} \
                </code> \
            </div> \
            </pre> \
        </div> \
    </div> \
    </div>",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Ý tưởng </div></b> \
    <div class ='lesson'>Ý tưởng để áp dụng cho một Merge Sort được mô tả ngắn gọn như trong code giả bên dưới: \
    <br> // mergeSort(arr[], l,  r) \
    <br> // if r > l  \
    <br> //      1. Tìm chỉ số nằm giữa mảng để chia mảng thành 2 nửa: \
    <br> //              middle m = (l+r)/2 \
    <br> //      2. Gọi đệ quy hàm mergeSort cho nửa đầu tiên: \
    <br> //              mergeSort(arr, l, m) \
    <br> //      3. Gọi đệ quy hàm mergeSort cho nửa thứ hai: \
    <br> //              mergeSort(arr, m+1, r) \
    <br> //      4. Gộp 2 nửa mảng đã sắp xếp ở (2) và (3): \
    <br> //              merge(arr, 1, m, r) </div> \
    <br><center><img src='img/sx2.jpg' alt='Bubble Sort Image', weight = '800', height = '500'></center> \
    <b><div class ='lesson-content'>II. Thuật toán tham khảo</div></b> \
    <br><div id='container'> \
        <div id='menucode'> \
        <span class='menucode-item' onclick=\"showCode('cpp')\">C++</span> \
        <span class='menucode-item' onclick=\"showCode('java')\">Java</span> \
        <span class='menucode-item' onclick=\"showCode('php')\">PHP</span> \
        </div> \
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code id='cppCode'> \
                    <br> void merge(int array[], int const left, int const mid, int const right) { \
                    <br>      int const subArrayOne = mid - left + 1; \
                    <br>      int const subArrayTwo = right - mid;  \
                    <br> \
                    <br>      // Create temp arrays \
                    <br>      auto *leftArray = new int[subArrayOne], *rightArray = new int[subArrayTwo]; \
                    <br> \
                    <br>      // Copy data to temp arrays leftArray[] and rightArray[] \
                    <br>      for (auto i = 0; i < subArrayOne; i++) \
                    <br>           leftArray[i] = array[left + i]; \
                    <br>      for (auto j = 0; j < subArrayTwo; j++) \
                    <br>           rightArray[j] = array[mid + 1 + j];  \
                    <br> \
                    <br>      auto indexOfSubArrayOne = 0, indexOfSubArrayTwo = 0; \
                    <br>      int indexOfMergedArray = left; \
                    <br> \
                    <br>      // Merge the temp arrays back into array[left..right] \
                    <br>      while (indexOfSubArrayOne < subArrayOne && indexOfSubArrayTwo < subArrayTwo) { \
                    <br>            if (leftArray[indexOfSubArrayOne] <= rightArray[indexOfSubArrayTwo]) { \
                    <br>                array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];  \
                    <br>                indexOfSubArrayOne++;  \
                    <br>            } \
                    <br>            else { \
                    <br>                 array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo]; \
                    <br>                 indexOfSubArrayTwo++; \
                    <br>            } \
                    <br>            indexOfMergedArray++; \
                    <br>      } \
                    <br> \
                    <br>      // Copy the remaining elements of \
                    <br>      // left[], if there are any \
                    <br>      while (indexOfSubArrayOne < subArrayOne) { \
                    <br>            array[indexOfMergedArray] = leftArray[indexOfSubArrayOne]; \
                    <br>            indexOfSubArrayOne++; \
                    <br>            indexOfMergedArray++; \
                    <br>      } \
                    <br> \
                    <br>      // Copy the remaining elements of \
                    <br>      // right[], if there are any \
                    <br>      while (indexOfSubArrayTwo < subArrayTwo) { \
                    <br>            array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo]; \
                    <br>            indexOfSubArrayTwo++; \
                    <br>            indexOfMergedArray++; \
                    <br>     } \
                    <br>     delete[] leftArray; \
                    <br>     delete[] rightArray; \
                    <br> } \
                </code> \
                <code id='javaCode' style='display: none;'> \
                    <br> void merge(int arr[], int l, int m, int r) \
                    <br> { \
                    <br>     // Find sizes of two subarrays to be merged \
                    <br>        int n1 = m - l + 1; \
                    <br>        int n2 = r - m; \
                    <br> \
                    <br>        // Create temp arrays \
                    <br>        int L[] = new int[n1]; \
                    <br>        int R[] = new int[n2]; \
                    <br> \
                    <br>        // Copy data to temp arrays \
                    <br>        for (int i = 0; i < n1; ++i) \
                    <br>             L[i] = arr[l + i]; \
                    <br>        for (int j = 0; j < n2; ++j) \
                    <br>             R[j] = arr[m + 1 + j]; \
                    <br> \
                    <br>        // Merge the temp arrays \
                    <br> \
                    <br>        // Initial indices of first and second subarrays \
                    <br>        int i = 0, j = 0; \
                    <br> \
                    <br>        // Initial index of merged subarray array \
                    <br>        int k = l; \
                    <br>        while (i < n1 && j < n2) { \
                    <br>              if (L[i] <= R[j]) { \
                    <br>                  arr[k] = L[i]; \
                    <br>                  i++; \
                    <br>              }  \
                    <br>              else {  \
                    <br>                  arr[k] = R[j]; \
                    <br>                  j++; \
                    <br>             } \
                    <br>             k++; \
                    <br>        } \
                    <br> \
                    <br>        // Copy remaining elements of L[] if any \
                    <br>        while (i < n1) { \
                    <br>              arr[k] = L[i]; \
                    <br>              i++; \
                    <br>              k++; \
                    <br>        } \
                    <br> \
                    <br>        // Copy remaining elements of R[] if any \
                    <br>       while (j < n2) { \
                    <br>             arr[k] = R[j]; \
                    <br>             j++; \
                    <br>             k++; \
                    <br>        } \
                    <br> } \
                </code> \
                <code id='phpCode' style='display: none;'> \
                    <br> function merge(&$arr, $l, $m, $r) \
<br> { \
<br>     $n1 = $m - $l + 1; \
<br>     $n2 = $r - $m;  \
<br> \
<br>     // Create temp arrays \
<br>     $L = array(); \
<br>     $R = array(); \
<br> \
<br>     // Copy data to temp arrays L[] and R[] \
<br>     for ($i = 0; $i < $n1; $i++) \
<br>         $L[$i] = $arr[$l + $i]; \
<br>     for ($j = 0; $j < $n2; $j++) \
<br>         $R[$j] = $arr[$m + 1 + $j]; \
<br> \
<br>     // Merge the temp arrays back into arr[l..r] \
<br>     $i = 0; \
<br>     $j = 0; \
<br>     $k = $l; \
<br>     while ($i < $n1 && $j < $n2) {  \
<br>          if ($L[$i] <= $R[$j]) {  \
<br>              $arr[$k] = $L[$i]; \
<br>              $i++; \
<br>          } \
<br>          else { \
<br>             $arr[$k] = $R[$j]; \
<br>             $j++;  \
<br>          }  \
<br>         $k++;  \
<br>    } \
<br> \
<br>    // Copy the remaining elements of L[],  \
<br>    // if there are any \
<br>    while ($i < $n1) { \
<br>        $arr[$k] = $L[$i]; \
<br>        $i++; \
<br>        $k++; \
<br>    } \
<br> \
<br>    // Copy the remaining elements of R[],  \
<br>    // if there are any \
<br>    while ($j < $n2) { \
<br>        $arr[$k] = $R[$j]; \
<br>        $j++; \
<br>        $k++; \
<br>    } \
<br> } \
                </code> \
            </div> \
            </pre> \
        </div> \
    </div> \
    </div>",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Ý tưởng</div></b> \
    <div class ='lesson'>Đầu tiên, ta sẽ tiến hành chọn một pivot. Về cách chọn pivot, có rất nhiều cách để dùng trong nhiều trường hợp khác nhau. Tuy nhiên phổ biến nhất là chọn pivot đầu, pivot cuối và pivot giữa. \
    <br> Sau khi đã chọn được phần tử người dùng sẽ cần khai báo 2 biến của 2 con trỏ để duyệt 2 phía của phần tử pivot. \
    Lần lượt, ta sẽ trỏ biến bên trái đến mỗi phần tử nằm bên trái của phần tử pivot. \
    Ngược lại, ta cũng sẽ trỏ biến bên phải đến mỗi phần tử nằm bên phải của phần tử pivot. \
    <br> Với mỗi lần trỏ như vậy, ta tiến hành phân loại các phần tử. Tại bên trái, nếu biến trỏ nhỏ hơn phần tử thì chuyển giá trị sang phải. \
    Còn tại bên phải, nếu biến trỏ nhỏ hơn phần tử thì chuyển giá trị sang trái. Nếu biến trỏ bằng phần tử thì tráo đổi giá trị 2 bên phải và trái. \
    Cuối cùng, khi tất cả phần tử trái lớn hơn phần tử phải thì đây chính là giá trị chốt mới. </div> \
    <br><center><img src='img/sx3.jpg' alt='Bubble Sort Image', weight = '800', height = '500'></center> \
    <b><div class ='lesson-content'>II. Thuật toán tham khảo</div></b> \
    <br><div id='container'> \
        <div id='menucode'> \
        <span class='menucode-item' onclick=\"showCode('cpp')\">C++</span> \
        <span class='menucode-item' onclick=\"showCode('java')\">Java</span> \
        <span class='menucode-item' onclick=\"showCode('php')\">PHP</span> \
        </div> \
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code id='cppCode'> \
                    <br> void quickSort(int a[], int l, int r){ \
<br>	int p = a[(l+r)/2]; \
<br>	int i = l, j = r; \
<br>	while (i < j){ \
<br>		while (a[i] < p){ \
<br>			i++; \
<br>		} \
<br>		while (a[j] > p){ \
<br>			j--; \
<br>		} \
<br>		if (i <= j){ \
<br>			int temp = a[i]; \
<br>			a[i] = a[j]; \
<br>			a[j] = temp; \
<br>			i++; \
<br>			j--; \
<br>		} \
<br>	} \
<br>	if (i < r){ \
<br>		quickSort(a, i, r); \
<br>	} \
<br>	if (l < j){ \
<br>		quickSort(a, l, j); \
<br>	} \
<br> } \
                </code> \
                <code id='javaCode' style='display: none;'> \
                    <br> int partition(int arr[], int low, int high) { \
<br>    int pivot = arr[high]; \
<br>    int i = (low - 1); // index of smaller element \
<br>    for (int j = low; j < high; j++) { \
<br> \
<br>        // Nếu phần tử hiện tại nhỏ hơn chốt \
<br>        if (arr[j] < pivot) { \
<br>            i++; \
<br> \
<br>            // swap arr[i] và arr[j] \
<br>           int temp = arr[i]; \
<br>            arr[i] = arr[j]; \
<br>            arr[j] = temp; \
<br>        } \
<br>    } \
<br> \
<br>    // swap arr[i+1] và arr[high] (hoặc pivot) \
<br>    int temp = arr[i + 1]; \
<br>    arr[i + 1] = arr[high]; \
<br>    arr[high] = temp; \
<br> \
<br>    return i + 1; \
<br> } \
<br> \
<br> void sort(int arr[], int low, int high) { \
<br>    if (low < high) { \
<br> \
<br>        // pi là chỉ mục của chốt, arr[pi] vị trí của chốt \
<br>        int pi = partition(arr, low, high); \
<br> \
<br>        // Sắp xếp đệ quy các phần tử \
<br>        // trướcphân vùng và sau phân vùng \
<br>        sort(arr, low, pi - 1); \
<br>        sort(arr, pi + 1, high); \
<br>    } \
<br> } \
</code> \
                <code id='phpCode' style='display: none;'> \
                    <br> function simple_quick_sort($arr) \
<br> { \
<br>    if(count($arr) <= 1){ \
<br>        return $arr; \
<br>    } \
<br>    else{ \
<br>        $pivot = $arr[0]; \
<br>        $left = array(); \
<br>        $right = array(); \
<br>        for($i = 1; $i < count($arr); $i++) \
<br>        { \
<br>            if($arr[$i] < $pivot){ \
<br>                $left[] = $arr[$i]; \
<br>            } \
<br>            else{ \
<br>                $right[] = $arr[$i]; \
<br>            } \
<br>        } \
<br>        return ( \
<br>            array_merge(simple_quick_sort($left), \
<br>            array($pivot), simple_quick_sort($right)) \
<br>        ); \
<br>    } \
<br> } \
                </code> \
            </div> \
            </pre> \
        </div> \
    </div> \
    </div>",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Cách hoạt động của thuật toán Shell Sort</div></b> \
    <div class ='lesson'>Thuật toán Shell Sort hoạt động theo các bước sau: \
    <br> 1. Chọn một khoảng cách ban đầu (gap) dựa trên một chuỗi số nguyên tăng dần, thường được gọi là chuỗi khoảng cách Shell.  \
    Chuỗi này có thể là một chuỗi cố định hoặc được tính toán dựa trên kích thước của dữ liệu đầu vào. \
    <br> 2. Sử dụng khoảng cách này để chia mảng thành các nhóm con. Mỗi nhóm con chứa các phần tử cách nhau gap đơn vị.  \
    Các phần tử trong cùng một nhóm con được sắp xếp bằng cách sử dụng thuật toán Insertion Sort hoặc một thuật toán sắp xếp khác. \
    <br> 3. Lặp lại quá trình trên cho đến khi khoảng cách gap giảm xuống 1. Trong mỗi lần lặp, thuật toán sẽ giảm khoảng cách gap theo chuỗi khoảng cách Shell. \
    <br> 4. Cuối cùng, sử dụng thuật toán Insertion Sort để hoàn thiện việc sắp xếp cuối cùng với khoảng cách gap bằng 1. Thuật toán Insertion Sort sẽ di chuyển các phần tử gần đúng vị trí của chúng để đảm bảo mảng được sắp xếp đúng thứ tự. </div> \
    <b><div class ='lesson-content'>II. Thuật toán tham khảo</div></b> \
    <br><div id='container'> \
        <div id='menucode'> \
        <span class='menucode-item' onclick=\"showCode('cpp')\">C++</span> \
        <span class='menucode-item' onclick=\"showCode('java')\">Java</span> \
        <span class='menucode-item' onclick=\"showCode('php')\">PHP</span> \
        </div> \
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code id='cppCode'> \
                    <br> int shellSort(int arr[], int n) \
<br> { \
<br>    // Start with a big gap, then reduce the gap \
<br>    for (int gap = n/2; gap > 0; gap /= 2) \
<br>    { \
<br>        // Do a gapped insertion sort for this gap size. \
<br>        // The first gap elements a[0..gap-1] are already in gapped order \
<br>        // keep adding one more element until the entire array is \
<br>        // gap sorted  \
<br>        for (int i = gap; i < n; i += 1)  \
<br>        { \
<br>            // add a[i] to the elements that have been gap sorted \
<br>            // save a[i] in temp and make a hole at position i \
<br>            int temp = arr[i]; \
<br> \
<br>            // shift earlier gap-sorted elements up until the correct  \
<br>            // location for a[i] is found \
<br>            int j;             \
<br>            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) \
<br>                arr[j] = arr[j - gap]; \
<br>              \
<br>            //  put temp (the original a[i]) in its correct location \
<br>            arr[j] = temp; \
<br>        } \
<br>    } \
<br>    return 0; \
<br> } \
                </code> \
                <code id='javaCode' style='display: none;'> \
                    <br> int sort(int arr[]) \
<br> { \
<br>    int n = arr.length; \
<br> \
<br>    // Start with a big gap, then reduce the gap \
<br>    for (int gap = n/2; gap > 0; gap /= 2) \
<br>    { \
<br>        // Do a gapped insertion sort for this gap size. \
<br>        // The first gap elements a[0..gap-1] are already \
<br>        // in gapped order keep adding one more element \
<br>        // until the entire array is gap sorted \
<br>        for (int i = gap; i < n; i += 1) \
<br>        { \
<br>            // add a[i] to the elements that have been gap \
<br>            // sorted save a[i] in temp and make a hole at \
<br>            // position i \
<br>            int temp = arr[i]; \
<br> \
<br>            // shift earlier gap-sorted elements up until \
<br>            // the correct location for a[i] is found \
<br>            int j; \
<br>            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) \
<br>                arr[j] = arr[j - gap]; \
<br>  \
<br>            // put temp (the original a[i]) in its correct \
<br>            // location \
<br>            arr[j] = temp; \
<br>        } \
<br>    } \
<br>    return 0; \
<br>}  \
</code> \
                <code id='phpCode' style='display: none;'> \
                </code> \
            </div> \
            </pre> \
        </div> \
    </div> \
    </div>",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Ý tưởng thuật toán: </div></b>\
    <div class ='lesson'>Lần lượt duyệt qua từng phần tử và kiểm tra, nếu gặp X thì thoát và trả về giá trị vị trí. </div> \
    <b><div class ='lesson-content'>II. Thuật toán tham khảo</div></b> \
    <br><div id='container'> \
        <div id='menucode'> \
        <span class='menucode-item' onclick=\"showCode('cpp')\">C++</span> \
        <span class='menucode-item' onclick=\"showCode('java')\">Java</span> \
        <span class='menucode-item' onclick=\"showCode('php')\">PHP</span> \
        </div> \
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code id='cppCode'> \
                        <br> int linearSearch(int *arr, int X) { \
                        <br>    for (int i=0; i<sz; i++){ \
                        <br>        if (X == arr[i]) return i; \
                        <br>    } \
                        <br>    return -1; \
                        <br> } \
                </code> \
                <code id='javaCode' style='display: none;'> \
                </code> \
                <code id='phpCode' style='display: none;'> \
                </code> \
            </div> \
            </pre> \
        </div> \
    </div> \
    </div>",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Ý tưởng thuật toán: </div></b>\
    <div class ='lesson'>Bước 1: Cho 1 mảng arr[] số nguyên đã được sắp xếp và x là giá trị cần tìm \
    <br> Bước 2: Thực hiện tách mảng ra làm 2 và tìm phần tử ở giữa mảng và gọi nó là mid, công thức tính (Mid = (left + right)/2) \
    <br> Bước 3: \
    <br> - Nếu arr[mid] == x thì sẽ return ra mid \
    <br> - Ngược lại nếu arr[mid] > x thì right = mid - 1 vì giá trị cần tìm chắc chắn ko nằm trên right nên ta sẽ loại bỏ nó! và thực hiện tìm kiếm \
    <br> - Ngược lại nếu arr[mid] < x thì left = mid + 1 vì giá trị cần tìm chắc chắn ko nằm trên left nên ta sẽ loại bỏ nó! và thực hiện tìm kiếm </div> \
    <b><div class ='lesson-content'>II. Thuật toán tham khảo</div></b> \
    <br><div id='container'> \
        <div id='menucode'> \
        <span class='menucode-item' onclick=\"showCode('cpp')\">C++</span> \
        <span class='menucode-item' onclick=\"showCode('java')\">Java</span> \
        <span class='menucode-item' onclick=\"showCode('php')\">PHP</span> \
        </div> \
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code id='cppCode'> \
                        <br> int binarySearch(int arr[], int l, int r, int x) { \
                        <br>     while (l <= r) { \
                        <br>        int m = l + (r - l) / 2; \
                        <br>     \
                        <br>        if (arr[m] == x) \
                        <br>           return m; \
                        <br>        if (arr[m] < x) \
                        <br>           l = m + 1; \
                        <br>        else \
                        <br>           r = m - 1; \
                        <br>    } \
                        <br>    return -1; \
                        <br> } \
                </code> \
                <code id='javaCode' style='display: none;'> \
                </code> \
                <code id='phpCode' style='display: none;'> \
                </code> \
            </div> \
            </pre> \
        </div> \
    </div> \
    </div>",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Ý tưởng thuật toán: </div></b>\
    <div class ='lesson'>Bước 1: Trong một vòng lặp, hãy tính giá trị của “pos” bằng công thức vị trí đầu dò. \
    <br> Bước 2: Nếu nó trùng khớp, hãy trả về chỉ mục của mục và thoát. \
    <br> Bước 3: Bước 3: Nếu mục nhỏ hơn arr [pos], hãy tính toán vị trí thăm dò của mảng con bên trái. Nếu không thì tính toán tương tự trong mảng con bên phải.\
    <br> Bước 4: Lặp lại cho đến khi tìm thấy kết quả phù hợp hoặc mảng con giảm xuống 0. </div> \
    <b><div class ='lesson-content'>II. Thuật toán tham khảo</div></b> \
    <br><div id='container'> \
        <div id='menucode'> \
        <span class='menucode-item' onclick=\"showCode('cpp')\">C++</span> \
        <span class='menucode-item' onclick=\"showCode('java')\">Java</span> \
        <span class='menucode-item' onclick=\"showCode('php')\">PHP</span> \
        </div> \
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code id='cppCode'> \
                        <br> int interpolationSearch(int arr[], int n, int x) { \
                        <br>     int lo = 0, hi = (n - 1);  \
                        <br>     while (lo <= hi && x >= arr[lo] && x <= arr[hi]) { \
                        <br>     \
                        <br>         if (lo == hi) { \
                        <br>             if (arr[lo] == x) return lo; \
                        <br>             return -1; \
                        <br>         } \
                        <br>         int pos = lo + (((double)(hi - lo) / \
                        <br>             (arr[hi] - arr[lo])) * (x - arr[lo])); \
                        <br>         if (arr[pos] == x) \
                        <br>             return pos; \
                        <br>         if(arr[pos] < x) \
                        <br>             lo = pos + 1; \
                        <br>         else \
                        <br>             hi = pos - 1; \
                        <br>    } \
                        <br>    return -1; \
                        <br> } \
                </code> \
                <code id='javaCode' style='display: none;'> \
                </code> \
                <code id='phpCode' style='display: none;'> \
                </code> \
            </div> \
            </pre> \
        </div> \
    </div> \
    </div>",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Xây dựng danh sách liên kết đơn: </div></b>\
    <div class ='lesson'> Khởi tạo Linked list </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> struct LinkedList { \
                <br>    int data; \
                <br>    struct LinkedList *next; \
                <br> }; \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Tạo mới 1 Node </div>\
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> typedef struct LinkedList *node; \
                <br> node CreateNode(int value) { \
                <br>     node temp; \
                <br>     temp = (node)malloc(sizeof(struct LinkedList)); \
                <br>     temp->next = NULL; \
                <br>     temp->data = value; \
                <br>     return temp; \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Thêm Node vào danh sách liên kết </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> node AddHead(node head, int value){ \
                <br>     node temp = CreateNode(value); \
                <br>     if(head == NULL){ \
                <br>         head = temp; \
                <br>     } else { \
                <br>         temp->next = head; \
                <br>         head = temp; \
                <br>     } \
                <br>     return head; \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Thêm vào cuối </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> node AddTail(node head, int value){ \
                <br>     node temp,p; \
                <br>     temp = CreateNode(value); \
                <br>     if(head == NULL){ \
                <br>         head = temp; \
                <br>     } \
                <br>     else { \
                <br>         p  = head; \
                <br>         while(p->next != NULL) { \
                <br>              p = p->next; \
                <br>         } \
                <br>         p->next = temp; \
                <br>     } \
                <br>     return head; \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Thêm vào vị trí bất kỳ </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> node AddAt(node head, int value, int position){ \
                <br>     if(position == 0 || head == NULL){ \
                <br>         head = AddHead(head, value); \
                <br>     } else { \
                <br>         int k = 1; \
                <br>         node p = head; \
                <br>         while(p != NULL && k != position){ \
                <br>               p = p->next; \
                <br>               ++k; \
                <br>         } \
                <br>         if(k != position){ \
                <br>              head = AddTail(head, value); \
                <br>         } else { \
                <br>              node temp = CreateNode(value); \
                <br>              temp->next = p->next; \
                <br>              p->next = temp; \
                <br>         } \
                <br>     } \
                <br>     return head; \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Xóa đầu </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> node DelHead(node head){ \
                <br>     if(head == NULL){ \
                <br>         printf('\nCha co gi de xoa het!'); \
                <br>     } else { \
                <br>         head = head->next; \
                <br>     } \
                <br>     return head; \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Xóa cuối </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> node DelTail(node head){ \
                <br>     if (head == NULL || head->next == NULL){ \
                <br>         return DelHead(head); \
                <br>     } \
                <br>     node p = head; \
                <br>     while(p->next->next != NULL) { \
                <br>           p = p->next; \
                <br>     } \
                <br>     p->next = p->next->next; \
                <br>     return head; \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Xây dựng danh sách liên kết đôi: </div></b>\
    <div class ='lesson'> Khởi tạo class Node </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> class Node { \
                <br>    constructor(value, prev, next) { \
                <br>         this.value = value; \
                <br>         this.prev = prev; \
                <br>         this.next = next; \
                <br>    } \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Và khởi tạo thêm một class DoublyLinkedList: </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> class DoublyLinkedList { \
                <br>     constructor() { \
                <br>          this.head = null; \
                <br>          this.length = 0; \
                <br>     } \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Khởi tạo một method, có tác dụng lấy node ở vị trí bất kỳ trong danh sách: </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> getNodeAtIndex(index) { \
                <br>     if (index < 0 || index >= this.length) { \
                <br>         return null; \
                <br>     } \
                <br>     if (index == 0) { \
                <br>         return this.head; \
                <br>     } \
                <br>     let currentNode = this.head; \
                <br>     for (let i = 1; i <= index; i++) { \
                <br>         if (currentNode) { \
                <br>             currentNode = currentNode.next; \
                <br>         } \
                <br>     } \
                <br>     return currentNode; \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Chèn vào vị trí đầu của danh sách </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> insertAtHead(data) { \
                <br>     const node = new Node(data, null, this.head); \
                <br>     if (this.head) { \
                <br>         this.head.prev = node; \
                <br>     } \
                <br>     this.head = node; \
                <br>     this.length ++; \
                <br>     return; \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Chèn vào vị trí cuối của danh sách </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> insertAtTail(data) { \
                <br>     if (!this.head) { \
                <br>         return this.insertAtHead(data); \
                <br>     }  \
                <br>     const prevNode = this.getNodeAtIndex(this.length - 1);; \
                <br>     const node = new Node(data, prevNode, null); \
                <br>     prevNode.next = node; \
                <br>     this.length ++; \
                <br>     return; \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Chèn vào vị trí bất kỳ trong danh sách </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> insertAtIndex(data, index) { \
                <br>     if (index === 0) { \
                <br>         return this.insertAtHead(data); \
                <br>     } \
                <br>     if (index === this.length) { \
                <br>         return this.insertAtTail(data); \
                <br>     } \
                <br>     const prevNode = this.getNodeAtIndex(index - 1); \
                <br>     const node = new Node(data, prevNode, prevNode.next); \
                <br>     prevNode.next.prev = node; \
                <br>     prevNode.next = node; \
                <br>     this.length ++; \
                <br>     return; \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Xóa ở vị trí đầu của danh sách </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> deleteAtHead() { \
                <br>     if (this.length === 1) { \
                <br>         this.head = null; \
                <br>         this.length = 0; \
                <br>         return; \
                <br>     } \
                <br>     const nextNode = this.head.next; \
                <br>     nextNode.prev = null; \
                <br>     this.head = nextNode; \
                <br>     this.length --; \
                <br>     return; \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Xóa ở vị trí cuối của danh sách </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> deleteAtTail() { \
                <br>     if (this.length === 1) { \
                <br>         return this.deleteAtHead(); \
                <br>     } \
                <br>     const prevNode = this.getNodeAtIndex(this.length - 2); \
                <br>     prevNode.next = null; \
                <br>     this.length --; \
                <br>     return; \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Xóa ở vị trí bất kỳ trong danh sách </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> deleteAtIndex(index) { \
                <br>     if (index < 0 || index >= this.length) { \
                <br>         return null; \
                <br>     } \
                <br>     if (index === 0) { \
                <br>        return this.deleteAtHead(); \
                <br>     } \
                <br>     if (index === this.length - 1) { \
                <br>        return this.deleteAtTail(); \
                <br>     } \
                <br>     const nodeToBeDeleted = this.getNodeAtIndex(index); \
                <br>     nodeToBeDeleted.prev.next = nodeToBeDeleted.next; \
                <br>     nodeToBeDeleted.next.prev = nodeToBeDeleted.prev;  \
                <br>     this.length --; \
                <br>     return; \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Xây dựng danh sách liên kết vòng: </div></b>\
    <div class ='lesson'> Hoạt động chèn trong Danh sách liên kết vòng </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> void insertFirst(int key, int data) { \
                <br>    struct node *link = (struct node*) malloc(sizeof(struct node)); \
                <br>    link->key = key; \
                <br>    link->data= data; \
                <br>    if (isEmpty()) { \
                <br>        head = link; \
                <br>        head->next = head; \
                <br>    } else { \
                <br>        link->next = head; \
                <br>        head = link; \
                <br>    } \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Hoạt động xóa trong Danh sách liên kết vòng </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> struct node * deleteFirst() { \
                <br>    struct node *tempLink = head; \
                <br>    if(head->next == head){ \
                <br>       head = NULL; \
                <br>       return tempLink; \
                <br>    } \
                <br>    head->next = head; \
                <br>    return tempLink; \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Hiển thị Danh sách liên kết vòng </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> void printList() { \
                <br>    struct node *ptr = head; \
                <br>    printf('[ '); \
                <br>    if(head != NULL) { \
                <br>       while(ptr->next != ptr) { \
                <br>            printf('(%d,%d) ',ptr->key,ptr->data); \
                <br>            ptr = ptr->next; \
                <br>       } \
                <br>    } \
                <br>    printf(' ]'); \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Xây dựng Stack: </div></b>\
    <div class ='lesson'>Đầu tiên mình sẽ thực hiện khởi tạo stack với các thông tin: vị trí top(đỉnh ngăn xếp), kích thước ngăn xếp </div> \
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br>// định nghĩa kích thước của ngăn xếp \
                    <br>int size = 100; \
                    <br>// tạo 1 biến để xác định vị trí đầu ngăn xếp \
                    <br>int top = 0; \
        </code> </div> </pre> </span> </div> \
    <div class ='lesson'><b> isEmpty </b>: kiểm tra ngăn xếp có rỗng không </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br>bool isEmpty() { \
                <br>   return top == 0 ? true : false; \
                <br>} \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'><b> isFull </b>: kiểm tra xem ngăn xếp đã đầy chưa </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br>bool isFull() { \
                <br>   return top == size ? true : false; \
                <br>} \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'><b> push </b>: đưa 1 phần tử vào đầu ngăn xếp </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br>void push(int item) { \
                <br>   if (isFull()) { \
                <br>       cout << 'Ngăn xếp đầy rùi má ơi, không push được nữa đâu!'' << endl; \
                <br>       return; \
                <br>   } \
                <br>   top++; \
                <br>   stack[top] = item; \
                <br>} \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'><b> pop </b>: xóa 1 phần tử khỏi đầu ngăn xếp </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br>void pop() { \
                <br>   if (isEmpty()) { \
                <br>       cout << 'Uầy, ngăn xếp rỗng má ơi, có gì đâu mà pop!' \
                <br>       return; \
                <br>   } \
                <br>   stack[top] = 0; \
                <br>   top--; \
                <br>} \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'><b> peek </b>: lấy 1 phần tử đầu ngăn xếp mà không xóa nó </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br>int peek() { \
                <br>   return stack[top]; \
                <br>} \
    </code> </div> </pre> </span> </div> \
    </div>",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Xây dựng Queue: </div></b>\
    <div class ='lesson'>Đầu tiên mình sẽ thực hiện khởi tạo queue với các thông tin: vị trí top(đỉnh ngăn xếp), kích thước ngăn xếp </div> \
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br>// định nghĩa kích thước của ngăn xếp \
                    <br>int size = 10; \
                    <br>// đánh dấu vị trí đầu hàng đợi \
                    <br>int front = 0; \
                    <br>// đánh dấu vị trí cuối hàng đợi \
                    <br>int rear = -1; \
                    <br>// khai báo 1 mảng để tạo hàng đợi \
                    <br>int queue[10]; \
        </code> </div> </pre> </span> </div> \
    <div class ='lesson'><b> isEmpty </b>: kiểm tra ngăn xếp có rỗng không </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br>bool isEmpty() { \
                <br>   return (front < 0 || front > rear) ? true : false; \
                <br>} \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'><b> isFull </b>: kiểm tra xem ngăn xếp đã đầy chưa </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br>bool isFull() { \
                <br>   return rear == size - 1 ? true : false; \
                <br>} \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'><b> enqueue </b>: thêm 1 phần tử vào hàng đợi </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br>void enqueue(int item) { \
                <br>   if (isFull()) { \
                <br>       cout << 'Hàng đợi đầy rùi má ơi, không enqueue được nữa đâu!'' << endl; \
                <br>       return; \
                <br>   } \
                <br>   rear++; \
                <br>   queue[rear] = item; \
                <br>} \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'><b> dequeue() </b>: xóa 1 phần tử khỏi hàng đợi. </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br>void dequeue() { \
                <br>   if (isEmpty()) { \
                <br>       cout << 'Uầy, hàng đợi rỗng má ơi, có gì đâu mà dequeue!' << endl; \
                <br>       return; \
                <br>   } \
                <br>   queue[front] = 0; \
                <br>   front++; \
                <br>} \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'><b> peek </b>: lấy 1 phần tử đầu hàng đợi mà không xóa nó </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br>int peek() { \
                <br>   return queue[front]; \
                <br>} \
    </code> </div> </pre> </span> </div> \
    </div>",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Duyệt tiền tự: </div></b>\
    <div class ='lesson'>Duyệt tiền tự (NLR): duyệt nút gốc, duyệt tiền tự cây con trái, duyệt tiền tự cây con phải. </div> \
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> void NLR(Tree root) { \
                    <br>     if (root) { \
                    <br>         // Xử lý nút gốc (root) \
                    <br>         NLR(root->left); \
                    <br>         NLR(root->right); \
                    <br>     } \
                    <br> } \
        </code> </div> </pre> </span> </div> \
    <b><div class ='lesson-content'>II. Duyệt trung tự: </div></b>\
    <div class ='lesson'>Duyệt trung tự (LNR): duyệt trung tự cây con trái, duyệt nút gốc, duyệt trung tự cây con phải. </div> \
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> void LNR(Tree root) { \
                    <br>     if (root) { \
                    <br>         LNR(root->left); \
                    <br>         // Xử lý nút gốc (root) \
                    <br>         LNR(root->right); \
                    <br>     } \
                    <br> } \
        </code> </div> </pre> </span> </div> \
    <b><div class ='lesson-content'>III. Duyệt hậu tự: </div></b>\
    <div class ='lesson'>Duyệt hậu tự (LRN): duyệt hậu tự cây con trái, duyệt hậu tự cây con phải, duyệt nút gốc. </div> \
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> void LRN(Tree root) { \
                    <br>     if (root) { \
                    <br>         LRN(root->left); \
                    <br>         LRN(root->right); \
                    <br>         // Xử lý nút gốc (root) \
                    <br>     } \
                    <br> } \
        </code> </div> </pre> </span> </div> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Xây dựng cây nhị phân tìm kiếm </div></b>\
    <div class ='lesson'> Đầu tiên, cần định nghĩa một nút trong cấu trúc dữ liệu dạng cây. </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> struct tNode{ \
                    <br>     int data; \
                    <br>     tNode *pLeft, *pRight; \
                    <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Để lưu trữ cây, chúng ta chỉ cần xác định nút gốc của cây. </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> tNode *root; \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Tạo một cây rỗng </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> void CreateEmptyTree(){ \
                    <br>     root = NULL; \
                    <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Tạo một nút lưu giá trị x </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> tNode *newNode(int data){ \
                    <br>     tNode *node = new tNode; \
                    <br>     if(node==NULL) { \
                    <br>        exit(1); \
                    <br>     } else { \
                    <br>         node->data = data; \
                    <br>         node->pLeft = NULL; \
                    <br>         node->pRight = NULL; \
                    <br>     } \
                    <br>     return node; \
                    <br> } \
    </code> </div> </pre> </span> </div> \
    <b><div class ='lesson-content'>II. Các thao tác cơ bản trên cây nhị phân tìm kiếm </div></b>\
    <div class ='lesson'> Tìm một nút trong cây </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> tNode *searchNodeByRecursion(tNode *root, int x){ \
                    <br>     if(root != NULL ) { \
                    <br>        if(root->data == x) {  \
                    <br>           return root; \
                    <br>        } \
                    <br>        if(root->data > x){ \
                    <br>           return searchNodeByRecursion(root->pLeft,x); \
                    <br>        } else { \
                    <br>           return searchNodeByRecursion(root->pRight,x); \
                    <br>        } \
                    <br>      } \
                    <br>      return NULL; \
                    <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Thêm một nút vào cây </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> tNode *insertNode(tNode *node, int value){ \
                    <br>     if(node!=NULL){ \
                    <br>        if(node->data == value) {  \
                    <br>           return node; \
                    <br>        } \
                    <br>        else if(node->data > value) { \
                    <br>           node->pLeft = insertNode(node->pLeft, value); \
                    <br>        } else { \
                    <br>           node->pRight = insertNode(node->pRight, value); \
                    <br>        } \
                    <br>     } \
                    <br>     else { \
                    <br>        node = newNode(value); \
                    <br>     } \
                    <br>      return node; \
                    <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Hủy một nút lưu giá trị x trong cây \
    <br> Có 3 trường hợp khi hủy 1 nút trên cây: \
    <br><b> Trường hợp 1 </b>: x là nút lá. Hủy nút lá mà không ảnh hưởng đến các nút khác trên cây. \
    <br><b> Trường hợp 2 </b>: x chỉ có 1 cây con (cây con trái hoặc cây con phải). Trước khi hủy x, ta liên kết nút cha của x với con duy nhất của x. \
    <br><b> Trường hợp 3 </b>: x có đầy đủ 2 cây con. Thực hiện các bước sau để hủy x: \
    <br><b> Bước 1 </b>: Tìm nút y thế mạng cho nút x, có 2 cách tìm: \
    <br> Cách 1: y là phần tử nhỏ nhất (trái nhất) trên cây con phải. \
    <br> Cách 2: y là phần tử lớn nhất (phải nhất) trên cây con trái. \
    <br><b> Bước 2 </b>: Lưu thông tin của y vào x. \
    <br><b> Bước 3 </b>: Hủy y (giống như hủy nút lá). </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> tNode *minValueNode(tNode *node) { \
                    <br>     tNode *current = node; \
                    <br>     while(current && current->pLeft != NULL){  \
                    <br>           current = current->pLeft; \
                    <br>     } \
                    <br>     return current; \
                    <br> } \
                    <br> tNode *deleteNode(tNode *root, int x) {\
                    <br>      if(root == NULL) { \
                    <br>         return root; \
                    <br>      } \
                    <br>      if(root->data > x) { \
                    <br>         root->pLeft = deleteNode(root->pLeft, x); \
                    <br>      } else if(root->data < x) { \
                    <br>         root->pRight = deleteNode(root->pRight, x); \
                    <br>      } else { \
                    <br>         tNode *p = root; \
                    <br>         if(root->pLeft == NULL){ \
                    <br>            root=root->pRight; \
                    <br>            delete p; \
                    <br>         } else if(root->pRight== NULL) { \
                    <br>            root=root->pLeft; \
                    <br>            delete p; \
                    <br>         } else { \
                    <br>             tNode *temp = minValueNode(root->pRight); \
                    <br>             root->data = temp->data; \
                    <br>             root->pRight = deleteNode(root->pRight, temp->data); \
                    <br>         } \
                    <br>      } \
                    <br>      return root; \
                    <br> } \
    </code> </div> </pre> </span> </div> \
    <br> \
    <br> \
    <br> \
    </div> ",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Xây dựng cây AVL </div></b>\
    <div class ='lesson'> Đầu tiên, cần định nghĩa Cấu trúc của một node cây AVL </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> struct NODE { \
                    <br>     int key; \
                    <br>     NODE* p_left; \
                    <br>     NODE* p_right; \
                    <br>     int height; \
                    <br> }; \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> <b>1. Code của hàm findMaxHeight: </b> </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> int findMaxHeight(NODE* pLeft, NODE* pRight) { \
                    <br>     if (pLeft == nullptr) return pRight->height; \
                    <br>     else if (pRight == nullptr) return pLeft->height; \
                    <br>     return pLeft->height > pRight->height ? pLeft->height : pRight->height; \
                    <br> }; \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> <b>2. Code hàm rotateLeftLeft: </b> </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> void rotateLeftLeft(NODE* &pRoot) { \
                    <br>     NODE* temp = pRoot->p_left; \
                    <br>     pRoot->p_left = pRoot->p_left->p_right; \
                    <br>     temp->p_right = pRoot; \
                    <br>     pRoot = temp; \
                    <br> \
                    <br>     NODE* pNow = pRoot->p_right; \
                    <br>     pNow->height = findMaxHeight(pNow->p_left, pNow->p_right) + 1; \
                    <br>     pRoot->height = findMaxHeight(pRoot->p_left, pRoot->p_right) + 1; \
                    <br> }; \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> <b>3. Code hàm rotateLeftRight: </b> </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> void rotateLeftRight(NODE*& pRoot) { \
                    <br>     NODE* pCur = pRoot->p_left; \
                    <br>     pRoot->p_left = pCur->p_right; \
                    <br>     pCur->p_right = nullptr; \
                    <br>     pRoot->p_left->p_left = pCur; \
                    <br> \
                    <br>     NODE* pNow = pRoot->p_left; \
                    <br>     NODE* pNow1 = pNow->p_left; \
                    <br>     pNow1->height = findMaxHeight(pNow1->p_left, pNow1->p_right) + 1; \
                    <br>     pNow->height = findMaxHeight(pNow->p_left, pNow->p_right) + 1; \
                    <br>  \
                    <br>     rotateLeftLeft(pRoot); \
                    <br> }; \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> <b>4. Code hàm isBalanceTree: </b> </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> int isBalanceTree(NODE* pRoot) { \
                    <br>     if (pRoot == nullptr || pRoot->p_left == nullptr && pRoot->p_right == nullptr) { \
                    <br>         return 0; \
                    <br>     } \
                    <br>     else if (pRoot->p_left == nullptr ) { \
                    <br>          if (pRoot->p_right->height > 1) \
                    <br>              return 1; \
                    <br>          else \
                    <br>              return 0; \
                    <br>     } \
                    <br>     else if (pRoot->p_right == nullptr) {  \
                    <br>          if (pRoot->p_left->height > 1) \
                    <br>              return -1; \
                    <br>          else \
                    <br>              return 0; \
                    <br>          } \
                    <br>          int check = pRoot->p_right->height - pRoot->p_left->height; \
                    <br>          if (check >= 2) { \
                    <br>              return 1;  \
                    <br>          } \
                    <br>          else if (check <= -2) { \
                    <br>              return -1; \
                    <br>          } \
                    <br>          else \
                    <br>              return 0; \
                    <br> }; \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> <b>5. Code hàm BalanceTree: </b> </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> bool BalanceTree(NODE* &pRoot) { \
                    <br>     if (pRoot == nullptr) { \
                    <br>         return 0; \
                    <br>     } \
                    <br>     BalanceTree(pRoot->p_left); \
                    <br>     BalanceTree(pRoot->p_right); \
                    <br>      \
                    <br>     if (isBalanceTree(pRoot) == -1) {  \
                    <br>           NODE* p1 = pRoot->p_left; \
                    <br>           int index = p1->p_right->height - p1->p_left->height; \
                    <br>           if (index <= 0) {  \
                    <br>               rotateLeftLeft(pRoot); \
                    <br>           } \
                    <br>          else \
                    <br>               rotateLeftRight(pRoot); \
                    <br>          } \
                    <br>      } \
                    <br>      else if ( isBalanceTree(pRoot) == 1 ) { \
                    <br>           NODE* p1 = pRoot->p_right; \
                    <br>           int index = p1->p_right->height - p1->p_left->height;   \
                    <br>           if (index >= 0) { \
                    <br>               rotateRightRight(pRoot); \
                    <br>          } \
                    <br>          else \
                    <br>               rotateRightLeft(pRoot); \
                    <br>          } \
                    <br>      } \
                    <br> }; \
    </code> </div> </pre> </span> </div> \
    <br> \
    <br> \
    <br> \
    </div> ",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Các thuật toán tìm cây khung nhỏ nhất </div></b>\
    <div class ='lesson'> 1. Thuật toán Kruskal \
    <br> <b>Ý tưởng thuật toán </b>: Ban đầu mỗi đỉnh là một cây riêng biệt, ta tìm cây khung nhỏ nhất bằng cách duyệt các cạnh theo trọng số từ nhỏ đến lớn, rồi hợp nhất các cây lại với nhau. \
    <br> Giả sử ta cần tìm cây khung nhỏ nhất của đồ thị G. Thuật toán bao gồm các bước sau: \
    <br> - Khởi tạo rừng F (tập hợp các cây), trong đó mỗi đỉnh của G tạo thành một cây riêng biệt. \
    <br> - Khởi tạo tập S chứa tất cả các cạnh của G. \
    <br> - Chừng nào S còn khác rỗng và F gồm hơn một cây \
    <br>   + Xóa cạnh nhỏ nhất trong S \
    <br>   + Nếu cạnh đó nối hai cây khác nhau trong F, thì thêm nó vào F và hợp hai cây kề với nó làm một \
    <br>   + Nếu không thì loại bỏ cạnh đó. \
    <br> Ví dụ các bước giải bài toán tìm cây khung nhỏ nhất với thuật toán Kruskal : <div>\
    <br><center><img src='img/tr4.gif' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> <b> Cài đặt thuật toán </b> </div>\
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> struct Edge { \
                    <br>     int u, v, c; \
                    <br>     Edge(int _u, int _v, int _c): u(_u), v(_v), c(_c) {}; \
                    <br> }; \
                    <br> struct Dsu { \
                    <br>     vector<int> par; \
                    <br>     void init(int n) {  \
                    <br>         par.resize(n + 5, 0);  \
                    <br>         for (int i = 1; i <= n; i++) par[i] = i; \
                    <br>     } \
                    <br>     int find(int u) {  \
                    <br>         if (par[u] == u) return u; \
                    <br>         return par[u] = find(par[u]); \
                    <br>     } \
                    <br>     bool join(int u, int v) { \
                    <br>          u = find(u); v = find(v); \
                    <br>          if (u == v) return false; \
                    <br>          par[v] = u; \
                    <br>          return true; \
                    <br>    } \
                    <br> } \
                    <br>     int n, m, totalWeight = 0; \
                    <br>     vector < Edge > edges; \
                    <br>     \
                    <br> int main() { \
                    <br>      ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);; \
                    <br>      cin >> n >> m; \
                    <br>      for (int i = 1; i <= m; i++) { \
                    <br>         int u, v, c; \
                    <br>         cin >> u >> v >> c; \
                    <br>         edges.push_back({u, v, c}); \
                    <br>      } \
                    <br>      dsu.init(n); \
                    <br>      sort(edges.begin(), edges.end(), [](Edge & x, Edge & y) { \
                    <br>           return x.c < y.c; \
                    <br>      }); \
                    <br>      for (auto e : edges) { \
                    <br>           if (!dsu.join(e.u, e.v)) continue; \
                    <br>           totalWeight += e.c; \
                    <br>      } \
                    <br>      cout << totalWeight; \
                    <br> }; \
    </code> </div> </pre> </span> </div> \
    <br><div class ='lesson'>2. Thuật toán Prim \
    <br><b>Ý tưởng thuật toán </b>: Ý tưởng của thuật toán Prim rất giống với ý tưởng của thuật toán Dijkstra (tìm đường đi ngắn nhất trên đồ thị).  \
    Nếu như thuật toán Kruskal xây dựng cây khung nhỏ nhất bằng cách kết nạp từng cạnh vào đồ thị thì thuật toán Prim lại kết nạp từng đỉnh vào đồ thị theo tiêu chí:  \
    đỉnh được nạp vào tiếp theo phải chưa được nạp và gần nhất với các đỉnh đã được nạp vào đồ thị. \
    <br> Thuật toán bao gồm các bước sau: \
    <br> - Khởi tạo tập S là cây khung hiện tại, ban đầu S chưa có đỉnh nào. \
    <br> - Khởi tạo mảng D trong đó D<sup> i </sup> là khoảng cách ngắn nhất từ đỉnh i đến 1 đỉnh đã được kết nạp vào tập S, ban đầu D[i] = +∞ \
    <br> - Lặp lại các thao tác sau n lần (n là số cạnh của đồ thị) \
    <br>   + Tìm đỉnh u không thuộc S có D <sup> u </sup> nhỏ nhất, thêm u vào tập S. \
    <br>   + Xét tất cả các đỉnh v kề u, cập nhật D <sup> v </sup> = min(D <sup>v</sup>,w<sup>u,v</sup>) với w<sup>u,v</sup> là trọng số cạnh u−v. Nếu D<sup>v</sup> được cập nhật theo w<sup>u,v</sup> thì đánh dấu trace<sup>v</sup>=u. \
    <br>   + Thêm cạnh u−trace[u] vào tập cạnh thuộc cây khung nhỏ nhất. \
    <br> Ví dụ các bước giải bài toán tìm cây khung nhỏ nhất với thuật toán Kruskal : <div>\
    <br><center><img src='pic/tr5.gif' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> <b> Cài đặt thuật toán </b> </div>\
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> const int N = 1e5 + 5; \
                    <br> const int INF = 1e9; \
                    <br> int n, m; \
                    <br> vector <pair<int, int>> g[N]; \
                    <br> int dis[N]; \
                    <br>  \
                    <br> int prim(int s) {  \
                    <br>     int ret = 0;  \
                    <br>     priority_queue<pair<int, int>, vector<pair<int,int>>, greater<pair<int,int>>> q; \
                    <br>     for (int i = 1; i <= n; i++) dis[i] = INF; \
                    <br>     dis[s] = 0;  \
                    <br>     q.push({0, s}); \
                    <br>     while (!q.empty()) { \
                    <br>          auto top = q.top(); q.pop(); \
                    <br>          int curDis = top.fi; int u = top.se; \
                    <br>          if (curDis != dis[u]) continue; \
                    <br>          ret += dis[u]; dis[u] = -INF;; \
                    <br>          for (auto &e : g[u]) { \
                    <br>               int v = e.fi; int c = e.se; \
                    <br>               if (dis[v] > c) { \
                    <br>                   dis[v] = c; \
                    <br>                   q.push({ dis[v], v}); \
                    <br>               } \
                    <br>          } \
                    <br>     } \
                    <br>     return ret; \
                    <br> } \
                    <br>     \
                    <br> int main() { \
                    <br>      ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);; \
                    <br>      cin >> n >> m; \
                    <br>      for (int i = 1; i <= m; i++) { \
                    <br>         int u, v, c; \
                    <br>         cin >> u >> v >> c; \
                    <br>         g[u].push_back({v, c}); \
                    <br>         g[v].push_back({u, c}); \
                    <br>      } \
                    <br>      cout << prim(1); \
                    <br> }; \
    </code> </div> </pre> </span> </div> \
    <br> \
    <br> \
    <br> \
    </div> ",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Cấu trúc bảng băm và hàm khởi tạoL </div></b>\
    <div class ='lesson'> <b>1. Cấu trúc một nút trong bảng băm </b> </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> struct Node \
                    <br>     int key; \
                    <br>     Node* next; \
                    <br> }; \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> <b>2. Khởi tạo bảng băm </b> </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> void InitHashTable(HashTable &HT) { \
                    <br>     for (int i = 0; i < M; i++) \
                    <br>     HT[i] = NULL; \
                    <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> <b>3. Hàm băm </b> </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> int Hash(int k) { \
                    <br>     return k % M; \
                    <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> <b>4. Thêm một nút vào bảng băm </b> </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> void InsertNode(HashTable &HT, int k) { \
                    <br>     int i = Hash(k); \
                    <br>     AddTail(HT[i], k); \
                    <br> } \
                    <br> \
                    <br> void AddTail(Node *&l, int k) { \
                    <br>    Node *newNode = new Node{k, NULL}; \
                    <br>    if (l == NULL) { \
                    <br>        l = newNode; \
                    <br>    } \
                    <br>    else { \
                    <br>        Node* p = l; \
                    <br>        while (p != NULL && p->next != NULL) \
                    <br>             p = p->next; \
                    <br>        p->next = newNode; \
                    <br>    } \
                    <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> <b>5. Tìm kiếm một khóa trong bảng băm </b> </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> Node *SearchNode(HashTable HT, int k) { \
                    <br>     int i = Hash(k); \
                    <br>     Node *p = HT[i]; \
                    <br>     while (p != NULL && p->key != k) \
                    <br>          p = p->next; \
                    <br>     if (p == NULL) \
                    <br>          return NULL; \
                    <br>     return p; \
                    <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> <b>6. Xóa một nút ra khỏi bảng băm </b> </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> void DeleteNode(HashTable &HT, int k) { \
                    <br>     int i = Hash(k); \
                    <br>     Node *p = HT[i]; \
                    <br>     Node *q = p; \
                    <br>     while (p != NULL && p->key != k) { \
                    <br>           q = p; \
                    <br>           p = p->next; \
                    <br>     } \
                    <br>     if (p == NULL) \
                    <br>        cout << k << ' not found!' << endl; \
                    <br>     else if (p == HT[i]) \
                    <br>        DeleteHead(HT[i]); \
                    <br>    else { \
                    <br>        DeleteAfter(q); \
                    <br>  } \
                    <br>  void DeleteHead(Node *&l) { \
                    <br>       if (l != NULL) { \
                    <br>          Node *p = l; \
                    <br>          l = l->next; \
                    <br>          delete p; \
                    <br>       } \
                    <br>  } \
                    <br>  void DeleteAfter(Node *&q) { \
                    <br>       Node *p = q->next; \
                    <br>       if (p != NULL) { \
                    <br>          q->next = p->next; \
                    <br>          delete p; \
                    <br>       } \
                    <br>  } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> <b>7. Duyệt qua bảng băm </b> </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> void Traverse(Node *p) { \
                    <br>     while (p != NULL) { \
                    <br>          cout << p->key << ' '; \
                    <br>          p = p->next; \
                    <br>     } \
                    <br>     cout << endl; \
                    <br> } \
                    <br>      \
                    <br> void TraverseHashTable(HashTable HT) { \
                    <br>      for (int i = 0; i < M; i++) { \
                    <br>           cout << 'Bucket ' << i <<'': '; \
                    <br>           Traverse(HT[i]); \
                    <br>       } \
                    <br>  } \
    </code> </div> </pre> </span> </div> \
    <br> \
    <br> \
    <br> \
    </div> ",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Ý tưởng thuật toán: </div></b>\
    <div class ='lesson'>Thuật toán tìm kiếm theo chiều rộng BFS là thuật toán tìm kiếm trong đồ thị bằng cách tìm kiếm dựa trên 2 thao tác chính là: cho trước một đỉnh của đồ thị và thêm các đỉnh kề với nó vào danh sách chờ duyệt.  \
        Phương pháp cài đặt này là “lập lịch” để duyệt các đỉnh theo thứ tự duyệt ưu tiên trên chiều rộng (đỉnh nào gần với đỉnh gốc sẽ được duyệt trước) \
    <br> Vì nguyên tắc trên (đỉnh nào gần gốc sẽ được duyệt trước) nên thuật toán tìm kiếm theo chiều rộng BFS thường được dùng để tìm đường đi ngắn nhất giữa các đỉnh. </div> \
    <b><div class ='lesson-content'>II. Thuật toán tham khảo </b> </div>\
    <br><div class ='lesson'> 1. Mô hình giải thuật BFS </div> \
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code id='cppCode'> \
                        <br> Free[u]=true; \
                        <br> Queue ban đầu rỗng. \
                        <br> Push(s); \
                        <br> Free[s]=false; \
                        <br> while (not empty()) { \
                        <br>     u = pop(); \
                        <br>     for (v=1; v<=n; v++) \
                        <br>         if ((tồn tại cạnh u,v) và Free[v]==true) { \
                        <br>             Free[v]=false; \
                        <br>              Push(v); \
                        <br>         } \
                        <br> } \
        </code> </div> </pre> </span> </div> \
    <br><div class ='lesson'> 2. Thuật toán tham khảo </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code id='cppCode'> \
                        <br> int a[101][101];  \
                        <br> queue <int> q \
                        <br> int n, m, Free[101], u, v, s; \
                        <br> void BFS(int s) { \
                        <br>    q.push(s); \
                        <br>    Free[s]=0; \
                        <br>    while (!q.empty()) { \
                        <br>        int u = q.front(); \
                        <br>        q.pop(); \
                        <br>        cout << u << endl; \
                        <br>        for (int v=1; v<=n; v++) \
                        <br>            if (Free[v] && a[u][v]==1) { \
                        <br>               Free[v] = 0; \
                        <br>               q.push(v); \
                        <br>            } \
                        <br>        } \
                        <br> } \
                        <br> int main() { \
                        <br>    cin >> n >> m >> s; \
                        <br>    for (int i = 1; i <= n; i++) \
                        <br>        for (int j = 1; j <= n; j++) \
                        <br>            a[i][j] = 0; \
                        <br>    for (int i = 1; i <= m; i++) { \
                        <br>         cin >> u >> v; \
                        <br>         a[u][v] = 1; \
                        <br>         a[v][u] = 1; \
                        <br>    } \
                        <br>    for (int i = 1; i <= n; i++)  \
                        <br>         Free[i] = 1; \
                        <br>    BFS(S); \
                        <br>    return 0; \
                        <br> } \
        </code> </div> </pre> </span> </div> \
    <br> \
    <br> \
    <br> \
    </div> ",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Ý tưởng thuật toán: </div></b>\
    <div class ='lesson'>Từ một đỉnh S ban đầu ta sẽ có các đỉnh kề là x, từ đỉnh x ta sẽ có các đỉnh kề là y, và nó cũng thuộc nhánh s-x-y…  \
        Chúng ta thăm các nhánh đó theo chiều sâu (thăm đến khi không còn đỉnh kề chưa duyệt). Điều đó gợi cho chúng ta viết \
        một thủ tục đệ quy DFS(u) để mô tả việc duyệt từ đỉnh u sang đỉnh kề v chưa được thăm. </div> \
    <b><div class ='lesson-content'>II. Thuật toán tham khảo </b> </div> \
    <br><div class ='lesson'> 1. Mô hình giải thuật DFS </div>\
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code id='cppCode'> \
                        <br> void dfs(int u) { \
                        <br>    free[u]=false; \
                        <br>    for (int v=1; v<=n; v++) \
                        <br>        if ((tồn tại cạnh u, v) và (free[u][v]==true)) \
                        <br>           dfs(v); \
                        <br> } \
        </code> </div> </pre> </span> </div> \
    <br><div class ='lesson'> 2. Thuật toán tham khảo </div> \
    <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code id='cppCode'> \
                        <br> int a[101][101];  \
                        <br> int n, m, Free[101], u, v, s; \
                        <br> void DFS(int u) { \
                        <br>    cout << u << endl; \
                        <br>    Free[u] = false; \
                        <br>    for (int v = 1; v <= n; v++) \
                        <br>        if (a[u][v] == 1 && Free[v]) \
                        <br>            DFS(v); \
                        <br> } \
                        <br> int main() { \
                        <br>    cin >> n >> m >> s; \
                        <br>    for (int i = 1; i <= n; i++) \
                        <br>        for (int j = 1; j <= n; j++) \
                        <br>            a[i][j] = 0; \
                        <br>    for (int i = 1; i <= m; i++) { \
                        <br>         cin >> u >> v; \
                        <br>         a[u][v] = 1; \
                        <br>         a[v][u] = 1; \
                        <br>    } \
                        <br>    for (int i = 1; i <= n; i++)  \
                        <br>         Free[i] = 1; \
                        <br>    DFS(v); \
                        <br>    return 0; \
                        <br> } \
        </code> </div> </pre> </span> </div> \
    <br> \
    <br> \
    <br> \
    </div> ",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Các hàm thông dụng của mạng </div></b>\
    <div class ='lesson'> Thông thường đối với 1 mảng sẽ có các hàm thông dụng: \
    <br> element (p): Trả về phần tử tại vị trí p \
    <br> insert(p,x): chèn phần tử x vào vị trí p, các phần tử sau p sẽ lùi về sau 1 vị trí \
    <br> delete(p) Xóa phần tử tại vị trí p, các phần tử sau p sẽ dịch lên 1 vị trí </div> \
    <br><div class ='lesson'><b> 1. Khai báo mảng trong C++ </b></div>\
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code id='cppCode'> \
                        <br> int arr[100]; \
        </code> </div> </pre> </span> </div> \
    <br><div class ='lesson'><b> 2. Nhập dữ liệu vào mảng </b></div>\
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code id='cppCode'> \
                    <br> void input() { \
                    <br>     cout << 'Nhap so phan tu cua mang' <<endl; \
                    <br>     for (int i = 0; i < n; i++) { \
                    <br>          cin >> arr[i];  \
                    <br>     } \
                    <br> } \
    </code> </div> </pre> </span> </div> \
    <br><div class ='lesson'> <b>3. Truyền hàm là 1 tham số của hàm </b> </div>\
        <div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code id='cppCode'> \
                        <br> void printArray(int arr[]) { \
                        <br> } \
        </code> </div> </pre> </span> </div> \
    <br><div class ='lesson'><b> 4. Chèn 1 phần từ vào trong mảng </b>/div>\
    <div class ='lesson'> <b> Bước 1. </b> Lấy giá trị vị trí positon, giá trị value của phần tử cần truyền từ bàn phím. \
    <br><b>Bước 2. </b> Kiểm tra vị trí chèn có phù hợp. Nếu < 0 thì thông báo không hợp lệ, Nếu > n thì thêm vào sau vị trí cuối cùng của mảng. \
    <br><b>Bước 3. </b> Dịch chuyển toàn bộ các phần tử trong mảng về sau 1 đơn vị \
    <br><b>Bước 4. </b> Gán giá trị value vào vị trí position. \
    <br><b>Bước 5. </b> Tăng thêm n 1 đơn vị (biến lưu kích thước của mảng) </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code id='cppCode'> \
                    <br> void insert(int* arr, int position,int value) { \
                    <br>      if (position < 0) { \
                    <br>          cout << 'Vi tri nhap vao khong hop le!'; \
                    <br>      } \
                    <br>      if (position >= n) { \
                    <br>          cout << 'Vi tri nhap vao lon hon kich thuoc mang, them vao cuoi mang!'; \
                    <br>          arr[n] = value; \
                    <br>          n++; \
                    <br>          return; \
                    <br>      } \
                    <br>      for (int i = n; i > position ; i--) { \
                    <br>          arr[i] = arr[i-1]; \
                    <br>      } \
                    <br>      arr[position] = value; \
                    <br>      n++; \
                    <br> } \
    </code> </div> </pre> </span> </div> \
    <br><div class ='lesson'><b> 5. Xóa 1 phần từ vào trong mảng </b></div>\
    <div class ='lesson'> <b> Bước 1. </b> Kiểm tra tính hợp lệ của vị trí position truyền vào \
    <br><b>Bước 2. </b> Dịch mảng về phái trước 1 đơn vị \
    <br><b>Bước 3. </b> Giảm giá trị n (biến lưu kích thước mảng) đi 1 đơn vị </div> \
    <div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code id='cppCode'> \
                    <br> void remove(int* arr, int position) { \
                    <br>      if (position < 0 || position >= n) { \
                    <br>          cout << 'Vi tri nhap vao khong hop le!'<<endl; \
                    <br>          return; \
                    <br>      } \
                    <br>      for (int i = position; i < n; i++) { \
                    <br>          arr[i] = arr[i + 1]; \
                    <br>      } \
                    <br>      n--; \
                    <br> } \
    </code> </div> </pre> </span> </div> \
    <br> \
    <br> \
    <br> \
    </div> ",
    "<div id='nd-content-container'> \
    <b><div class ='lesson-content'>I. Cú pháp </div></b>\
    <div class ='lesson'> Đệ quy trong C++ là quá trình trong đó một phương thức gọi lại chính nó một cách liên tiếp. \
        Một hàm trong C++ gọi lại chính nó được gọi là phương thức đệ quy. \
        Trong một hàm đệ quy sẽ gồm có điều kiện dừng và lời gọi hàm đệ quy, cú pháp cụ thể như sau: </div> \
    <div id='codeContainer'> \
    <span id='copyIcon' onclick='copyCode()'>📋</span> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code id='cppCode'> \
                <br> Kiểu_trả_về   Tên_hàm (Các_tham_số) { \
                <br>      Điều_kiện_dừng; \
                <br>      return Tên_hàm (Các_tham_số_mới) ; \
                <br>      // hoặc một biểu thức có chứa lời gọi hàm. \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <b><div class ='lesson-content'>II. Ví dụ </div></b>\
    <div class ='lesson'><b> 1. Tính giai thừa của một số tự nhiên </b></div> \
    <div id='codeContainer'> \
    <span id='copyIcon' onclick='copyCode()'>📋</span> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code id='cppCode'> \
                <br> long long Giaithua(int n) { \
                <br>      if (n==0 || n==1) \
                <br>         return 1; \
                <br>      else \
                <br>         return Giaithua(n-1) * n; \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Giải thích thuật toán: Ở đây, điều kiện dừng chính là n=0 hoặc là n=1 thì sẽ trả về giá trị là 1 ( Do 0!=1!=1). \
        Ngược lại, nếu n>1, hàm sẽ trả về n*Giaithua(n-1). Chẳng hạn ta cho n nhận giá trị là 3, chương trình sẽ thực thi như sau: </div> \
    <div id='codeContainer'> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code id='cppCode'> \
                <br> GiaiThua(3) \
                <br> GiaiThua(2)  \
                <br> GiaiThua(1) \
                <br> return 1  \
                <br> return 2*1 = 2 \
                <br> return 3*2 = 6 \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'><b> 2. Tìm số Fibonacci bằng đệ quy </b></div> \
    <div id='codeContainer'> \
    <span id='copyIcon' onclick='copyCode()'>📋</span> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code id='cppCode'> \
                <br> int fibonacci(int n) { \
                <br>      if (n < 0) { \
                <br>         return -1; \
                <br>      } \
                <br>      else if (n == 0 || n == 1) { \
                <br>         return n; \
                <br>      } \
                <br>      else { \
                <br>         return fibonacci(n - 1) + fibonacci(n - 2); \
                <br>      } \
                <br> } \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> <b>3. Tìm ước chung lớn nhất và bội chung nhỏ nhất </b> \
    <br> Ước chung lớn nhất và bội chung nhỏ nhất của 2 số là các khái niệm khá phổ biến trong toán học: \
    <br><b> Ước chung lớn nhất của 2 số </b>: Là số lớn nhất mà 2 số đó cũng chia hết \
    <br><b> Bội chung nhỏ nhất của 2 số </b>: Là số nhỏ nhất cùng chia hết cho 2 số đó </div> \
    <div id='codeContainer'> \
    <span id='copyIcon' onclick='copyCode()'>📋</span> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code id='cppCode'> \
                <br> int UCLN(int a, int b) { \
                <br>      if (b == 0) \
                <br>         return a; \
                <br>      return UCLN(b, a % b); \
                <br>  } \
                <br>  \
                <br>  int BCNN(int a, int b) { \
                <br>      return (a * b) / USCLN(a, b); \
                <br>  } \
    </code> </div> </pre> </span> </div> \
    <br> \
    <br> \
    <br> \
    </div> ",
    // Thêm nội dung tương ứng cho các mục khác ở đây
    ];

    const ndContent = document.getElementById('ndbaitap');
    const baiTapItems = document.querySelectorAll('.baitap2-item');
//   const ndlqItems = document.querySelectorAll('.ndlq-item');

    baiTapItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baitap');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Bubble') {
            ndContent.innerHTML = lessonContents[1];
        } else if (item.textContent.trim() === 'Insert') {
            ndContent.innerHTML = lessonContents[2];
        }
        else if(item.textContent.trim() === 'Selection') {
            ndContent.innerHTML = lessonContents[3];
        }
        else if(item.textContent.trim() === 'Merge') {
            ndContent.innerHTML = lessonContents[4];
        }
        else if(item.textContent.trim() === 'Quick') {
            ndContent.innerHTML = lessonContents[5];
        }
        else if(item.textContent.trim() === 'Shell') {
            ndContent.innerHTML = lessonContents[6];
        }

        else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

    baiTapItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baitap');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Linear') {
            ndContent.innerHTML = lessonContents[7];
        } else if (item.textContent.trim() === 'Binary') {
            ndContent.innerHTML = lessonContents[8];
        } else if (item.textContent.trim() === 'Inter') {
            ndContent.innerHTML = lessonContents[9];
        } else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

    baiTapItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baitap');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Linked') {
            ndContent.innerHTML = lessonContents[10];
        } else if (item.textContent.trim() === 'Doubly') {
            ndContent.innerHTML = lessonContents[11];
        } else if (item.textContent.trim() === 'Circular') {
            ndContent.innerHTML = lessonContents[12];
        } else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

    baiTapItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baitap');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Stack') {
            ndContent.innerHTML = lessonContents[13];
        } else if (item.textContent.trim() === 'Queue') {
            ndContent.innerHTML = lessonContents[14];
        } else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

    baiTapItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baitap');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Tree') {
            ndContent.innerHTML = lessonContents[15];
        } else if (item.textContent.trim() === 'Binary') {
            ndContent.innerHTML = lessonContents[16];
        } else if (item.textContent.trim() === 'AVL') {
            ndContent.innerHTML = lessonContents[17];
        } else if (item.textContent.trim() === 'Spanning') {
            ndContent.innerHTML = lessonContents[18];
        } else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

    baiTapItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baitap');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Hash') {
            ndContent.innerHTML = lessonContents[19];
        } else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

    baiTapItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baitap');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Dept') {
            ndContent.innerHTML = lessonContents[20];
        } else if (item.textContent.trim() === 'Breadth') {
            ndContent.innerHTML = lessonContents[21];
        } else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

    baiTapItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baitap');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Array') {
            ndContent.innerHTML = lessonContents[22];
        } else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

    baiTapItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baitap');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Đệ') {
            ndContent.innerHTML = lessonContents[23];
        } else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

});

// ------------------------------------------------------------------------------------------- //

function toggleExerciseContent() {
    var exerciseSection = document.getElementById("exercise-section");
    if (exerciseSection.style.display === "none") {
        exerciseSection.style.display = "block"; // Show the exercise content
    } else {
        exerciseSection.style.display = "none"; // Hide the exercise content
    }
}

// function searchContent() {
// const searchInput = document.getElementById('search-input').value.toLowerCase(); // Lấy giá trị tìm kiếm và chuyển thành chữ thường

// const baihocItems = document.querySelectorAll('.baihoc-item');

// baihocItems.forEach(item => {
// //const baitapTitle = item.querySelector('.baitap-title').textContent.toLowerCase(); // Lấy nội dung tiêu đề bài học và chuyển thành chữ thường
// const baitapTitle = item.textContent.toLowerCase();

// if (baitapTitle.includes(searchInput)) {
// item.style.display = 'flex'; // Hiển thị bài học nếu tiêu đề chứa nội dung tìm kiếm
// } else {
// item.style.display = 'none'; // Ẩn bài học nếu không khớp
// }
// });

// }

// freshesh

// function searchContent() {
//     const searchInput = document.getElementById('search-input').value.toLowerCase();

//     const baihocItems = document.querySelectorAll('.baihoc-item');

//     baihocItems.forEach(item => {
//         const baitapTitle = item.textContent.toLowerCase();
//         const subItemsContainer = item.nextElementSibling;

//         // Check if the main item's title matches the search input
//         if (baitapTitle.includes(searchInput)) {
//             item.style.display = 'flex';
//         } else {
//             item.style.display = 'none';
//         }

//         // Check if the subitems contain any matches
//         const subItems = subItemsContainer.querySelectorAll('.baihoc2-item, .baihoc3-item, .baihoc4-item');
//         let hasMatchingSubItem = false;

//         subItems.forEach(subItem => {
//             const subItemTitle = subItem.textContent.toLowerCase();
//             if (subItemTitle.includes(searchInput) && subItem.classList.contains('baihoc2-item')) {
//                 subItem.style.display = 'flex';
//                 // Set the flag to true if at least one matching baihoc2-item is found
//                 hasMatchingSubItem = true;
//             } else {
//                 subItem.style.display = 'none';
//             }
//         });


//         // Display the main item only if it has at least one matching baihoc2-item subitem
//         if (hasMatchingSubItem) {
//             item.style.display = 'flex';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }


// function searchContent() {
//     const searchInput = document.getElementById('search-input').value.toLowerCase();
//     const khaiNiemCheckbox = document.getElementById('khai-niem-checkbox');

//     const baihocItems = document.querySelectorAll('.baihoc-item');

//     // Hide all baihoc3-item when the checkbox is checked
//     const baihoc3Items = document.querySelectorAll('.baihoc3-item');
//     baihoc3Items.forEach(baihoc3Item => {
//         if (khaiNiemCheckbox.checked) {
//             baihoc3Item.style.display = 'none';
//         } else {
//             baihoc3Item.style.display = 'flex'; // Show when checkbox is unchecked
//         }
//     });

//     baihocItems.forEach(item => {
//         const baitapTitle = item.textContent.toLowerCase();
//         const subItemsContainer = item.nextElementSibling;

//         // Check if the main item's title matches the search input
//         if (baitapTitle.includes(searchInput)) {
//             item.style.display = 'flex';
//         } else {
//             item.style.display = 'none';
//         }

//         // Check if the subitems contain any matches
//         const subItems = subItemsContainer.querySelectorAll('.baihoc2-item, .baihoc3-item, .baihoc4-item');
//         let hasMatchingSubItem = false;

//         subItems.forEach(subItem => {
//             const subItemTitle = subItem.textContent.toLowerCase();

//             // Show baihoc3-item when the checkbox is unchecked
//             if (!khaiNiemCheckbox.checked && subItem.classList.contains('baihoc3-item')) {
//                 subItem.style.display = 'flex';
//             }

//             // Check if the subItem is a baihoc2-item or baihoc3-item
//             if ((!khaiNiemCheckbox.checked && subItem.classList.contains('baihoc2-item')) ||
//                 (khaiNiemCheckbox.checked && subItem.classList.contains('baihoc3-item'))) {
//                 if (subItemTitle.includes(searchInput)) {
//                     subItem.style.display = 'flex';
//                     hasMatchingSubItem = true;
//                 } else {
//                     subItem.style.display = 'none';
//                 }
//             } else {
//                 subItem.style.display = 'none';
//             }
//         });

//         // Display the main item only if it has at least one matching baihoc2-item or baihoc3-item subitem
//         if (hasMatchingSubItem) {
//             item.style.display = 'flex';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }


// ------------------------------------------------------------------------------------------ //

// function searchContent() {
//     const searchInput = document.getElementById('search-input').value.toLowerCase();
//     const khaiNiemCheckbox = document.getElementById('khai-niem-checkbox');
//     const tinhChatCheckbox = document.getElementById('tinh-chat-checkbox');

//     const baihocItems = document.querySelectorAll('.baihoc-item');

//     baihocItems.forEach(item => {
//         const baitapTitle = item.textContent.toLowerCase();
//         const subItemsContainer = item.nextElementSibling;

//         // Check if the main item's title matches the search input
//         const isMainItemMatch = baitapTitle.includes(searchInput);

//         // Check if there are matching subitems for baihoc2-item, baihoc3-item, or baihoc4-item
//         const matchingSubItems = Array.from(subItemsContainer.children).filter(subItem => {
//             const subItemTitle = subItem.textContent.toLowerCase();
//             const isBaiHoc2 = subItem.classList.contains('baihoc2-item');
//             const isBaiHoc3 = subItem.classList.contains('baihoc3-item');
//             const isBaiHoc4 = subItem.classList.contains('baihoc4-item');

//             return ((!khaiNiemCheckbox.checked && isBaiHoc2) ||
//                     (khaiNiemCheckbox.checked && isBaiHoc3) ||
//                     (tinhChatCheckbox.checked && isBaiHoc4)) &&
//                     subItemTitle.includes(searchInput);
//         });

//         // Display the main item only if it has a direct match or has matching subitems
//         if (isMainItemMatch || matchingSubItems.length > 0) {
//             item.style.display = 'flex';
//         } else {
//             item.style.display = 'none';
//         }

//         // Display matching subitems
//         Array.from(subItemsContainer.children).forEach(subItem => {
//             const isBaiHoc2 = subItem.classList.contains('baihoc2-item');
//             const isBaiHoc3 = subItem.classList.contains('baihoc3-item');
//             const isBaiHoc4 = subItem.classList.contains('baihoc4-item');

//             if ((!khaiNiemCheckbox.checked && isBaiHoc2) ||
//                 (khaiNiemCheckbox.checked && isBaiHoc3) ||
//                 (tinhChatCheckbox.checked && isBaiHoc4)) {
//                 subItem.style.display = matchingSubItems.includes(subItem) ? 'flex' : 'none';
//             } else {
//                 subItem.style.display = 'none';
//             }
//         });
//     });
// }



// ---------------------------------------------------------

// function searchContent() {
//     const searchInput = document.getElementById('search-input').value.toLowerCase();
//     const tinhChatCheckbox = document.getElementById('tinh-chat-checkbox');
//     const khaiNiemCheckbox = document.getElementById('khai-niem-checkbox');

//     const baihocItems = document.querySelectorAll('.baihoc-item');

//     baihocItems.forEach(item => {
//         const baitapTitle = item.textContent.toLowerCase();
//         const subItemsContainer = item.nextElementSibling;

//         // Check if the main item's title matches the search input
//         const isMainItemMatch = baitapTitle.includes(searchInput);

//         // Check if there are matching subitems for baihoc2-item, baihoc3-item, or baihoc4-item
//         const matchingSubItems = Array.from(subItemsContainer.children).filter(subItem => {
//             const subItemTitle = subItem.textContent.toLowerCase();
//             const isBaiHoc2 = subItem.classList.contains('baihoc2-item');
//             const isBaiHoc4 = subItem.classList.contains('baihoc4-item');

//             return ((!tinhChatCheckbox.checked && isBaiHoc2) ||
//                     (tinhChatCheckbox.checked && isBaiHoc4)) &&
//                     subItemTitle.includes(searchInput);
//         });

//         // Display the main item only if it has a direct match or has matching subitems
//         if (isMainItemMatch || matchingSubItems2.length > 0) {
//             item.style.display = 'flex';
//         } else {
//             item.style.display = 'none';
//         }

//         // Display matching subitems
//         Array.from(subItemsContainer.children).forEach(subItem => {
//             const isBaiHoc2 = subItem.classList.contains('baihoc2-item');
//             const isBaiHoc4 = subItem.classList.contains('baihoc4-item');

//             if ((!tinhChatCheckbox.checked && isBaiHoc2) ||
//                 (tinhChatCheckbox.checked && isBaiHoc4)) {
//                 subItem.style.display = matchingSubItems.includes(subItem) ? 'flex' : 'none';
//             } else {
//                 subItem.style.display = 'none';
//             }
//         });

//     });
// }



// ----------------------------------------------------
function searchContent() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const khaiNiemCheckbox = document.getElementById('khai-niem-checkbox');
    const tinhChatCheckbox = document.getElementById('tinh-chat-checkbox');

    const baihocItems = document.querySelectorAll('.baihoc-item');

    baihocItems.forEach(item => {
        const baitapTitle = item.textContent.toLowerCase();
        const subItemsContainer = item.nextElementSibling;

        // Check if the main item's title matches the search input
        const isMainItemMatch = baitapTitle.includes(searchInput);

        // Check if there are matching subitems for baihoc2-item, baihoc3-item, or baihoc4-item
        const matchingSubItems = Array.from(subItemsContainer.children).filter(subItem => {
    const subItemTitle = subItem.textContent.toLowerCase();
    const isBaiHoc2 = subItem.classList.contains('baihoc2-item');
    const isBaiHoc3 = subItem.classList.contains('baihoc3-item');
    const isBaiHoc4 = subItem.classList.contains('baihoc4-item');
    const isBaiHoc5 = subItem.classList.contains('baihoc5-item');

    return ((!khaiNiemCheckbox.checked && !tinhChatCheckbox.checked && isBaiHoc2) ||
        (khaiNiemCheckbox.checked && !tinhChatCheckbox.checked && isBaiHoc3) ||
        (!khaiNiemCheckbox.checked && tinhChatCheckbox.checked && isBaiHoc4) ||
        (khaiNiemCheckbox.checked && tinhChatCheckbox.checked && isBaiHoc5)) &&
        subItemTitle.includes(searchInput);
});




        if (isMainItemMatch || matchingSubItems.length > 0) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }

        // Display matching subitems
        Array.from(subItemsContainer.children).forEach(subItem => {
    const isBaiHoc2 = subItem.classList.contains('baihoc2-item');
    const isBaiHoc3 = subItem.classList.contains('baihoc3-item');
    const isBaiHoc4 = subItem.classList.contains('baihoc4-item');
    const isBaiHoc5 = subItem.classList.contains('baihoc5-item');

    if ((khaiNiemCheckbox.checked && isBaiHoc5) ||
        (!khaiNiemCheckbox.checked && isBaiHoc2) ||
        (khaiNiemCheckbox.checked && !tinhChatCheckbox.checked && isBaiHoc3) ||
        (tinhChatCheckbox.checked && !khaiNiemCheckbox.checked && isBaiHoc4)) {
        subItem.style.display = matchingSubItems.includes(subItem) ? 'flex' : 'none';
    } else {
        subItem.style.display = 'none';
    }
});
    });
}






// ------------------------------------------- //

// function refreshPage() {
//       // Sử dụng location.reload() để làm mới lại trang
//       location.reload();
//     }

// ---------------------------------- 
function fresheshContent() {
    // Reset all items to their default state
    const baihocItems = document.querySelectorAll('.baihoc-item');
    baihocItems.forEach(item => {
        item.style.display = 'flex';
        const subItemsContainer = item.nextElementSibling;
        if (subItemsContainer) {
            const subItems = subItemsContainer.querySelectorAll('.baihoc2-item, .baihoc3-item, .baihoc4-item, .baihoc5-item');
            subItems.forEach(subItem => {
                if (subItem.classList.contains('baihoc2-item')) {
                    const defaultVisibility = subItem.dataset.defaultVisibility;
                    subItem.style.display = defaultVisibility === 'true' ? 'flex' : 'none';
                } else {
                    subItem.style.display = 'none';
                }
            });
        }
    });

    // Clear the search input
    document.getElementById('search-input').value = '';
    document.getElementById('nd').value = '';

    // Uncheck the checkboxes
    document.getElementById('tinh-chat-checkbox').checked = false;
    document.getElementById('khai-niem-checkbox').checked = false;
}



// document.addEventListener('DOMContentLoaded', function () {
//     // Lưu trạng thái ban đầu của các phần tử
//     const initialStates = {};

//     // Lấy danh sách tất cả các phần tử baihoc2-item
//     const subItems = document.querySelectorAll('.baihoc2-item');
//     subItems.forEach(subItem => {
//         initialStates[subItem.id] = {
//             display: window.getComputedStyle(subItem).getPropertyValue('display'),
//         };
//     });

//     // Gọi hàm khi nút làm mới được nhấn
//     document.getElementById('refresh-button').addEventListener('click', function () {
//         // Reset trang về trạng thái ban đầu
//         subItems.forEach(subItem => {
//             const initialState = initialStates[subItem.id];
//             if (initialState) {
//                 subItem.style.display = initialState.display;
//             }
//         });
//     });
// });






document.addEventListener('DOMContentLoaded', function () {
    const lessonContents = [
    "<div id='nd-content-container'> \
    <div class='lesson-content'><b>I. Cấu trúc dữ liệu (Data Structure) là gì? </div></b>\
    <div class ='lesson'>Cấu trúc dữ liệu là cách lưu trữ, tổ chức dữ liệu có thứ tự, có hệ thống để dữ liệu có thể được sử dụng một cách hiệu quả. </div>\
    <div class='lesson-content'><b>II. Đặc điểm của Cấu trúc dữ liệu </b></div> \
    <div class ='lesson'><b>Chính xác:</b> Sự triển khai của Cấu trúc dữ liệu nên triển khai Interface của nó một cách chính xác. \
    <br><b>Độ phức tạp về thời gian (Time Complexity):</b> Thời gian chạy hoặc thời gian thực thi của các phép tính của cấu trúc dữ liệu phải là nhỏ nhất có thể. \
    <br><b>Độ phức tạp về bộ nhớ (Space Complexity): </b> Sự sử dụng bộ nhớ của mỗi phép tính của cấu trúc dữ liệu nên là nhỏ nhất có thể. </div> \
    <div class='lesson-content'><b>III. Tại sao cấu trúc dữ liệu là cần thiết? </b></div> \
    <div class ='lesson'>Ngày nay, các ứng dụng ngày càng phức tạp và lượng dữ liệu ngày càng lớn với nhiều kiểu đa dạng. Việc này làm xuất hiện 3 vấn đề lớn mà mỗi lập trình viên phải đối mặt: \
    <br><b>Tìm kiếm dữ liệu:</b> Giả sử có 1 triệu hàng hóa được lưu giữ vào trong kho hàng hóa. Và giả sử có một ứng dụng cần để tìm kiếm một hàng hóa. \
    Thì mỗi khi thực hiện tìm kiếm, ứng dụng này sẽ phải tìm kiếm 1 hàng hóa trong 1 triệu hàng hóa. \
    Khi dữ liệu tăng lên thì việc tìm kiếm sẽ càng trở lên chậm và tốn kém hơn. \
    <br><b>Tốc độ bộ vi xử lý:</b> Mặc dù bộ vi xử lý có tốc độ rất cao, tuy nhiên nó cũng có giới hạn và khi lượng dữ liệu lên tới hàng tỉ bản ghi thì tốc độ xử lý cũng sẽ không còn được nhanh nữa. \
    <br><b>Đa yêu cầu:</b> Khi hàng nghìn người dùng cùng thực hiện một phép tính tìm kiếm trên một Web Server thì cho dù Web Server đó \
    có nhanh đến mấy thì việc phải xử lý hàng nghìn phép tính cùng một lúc là thực sự rất khó. \
    <br>Để xử lý các vấn đề trên, các cấu trúc dữ liệu là một giải pháp tuyệt vời. Dữ liệu có thể được tổ chức trong cấu trúc dữ liệu theo một cách \
    để khi thực hiện tìm kiếm một phần tử nào đó thì dữ liệu yêu cầu sẽ được tìm thấy ngay lập tức. </div> \
    <div class='lesson-content'><b>IV. Độ phức tạp thời gian thực thi trong cấu trúc dữ liệu và giải thuật </b></div>\
    <div class ='lesson'>Có 3 trường hợp thường được sử dụng để so sánh thời gian thực thi của các cấu trúc dữ liệu khác nhau: \
    <br><b>Trường hợp xấu nhất (Worst Case): </b> là tình huống mà một phép tính của cấu trúc dữ liệu nào đó tốn thời gian tối đa (thời gian dài nhất). \
    Ví dụ với ba số 1, 2, 3 thì nếu sắp xếp theo thứ tự giảm dần thì thời gian thực thi sẽ là dài nhất (và đây là trường hợp xấu nhất); còn nếu sắp xếp theo thứ tự tăng dần \
    thì thời gian thực thi sẽ là ngắn nhất (và đây là trường hợp tốt nhất). \
    <br><b>Trường hợp trung bình (Average Case): </b> miêu tả thời gian thực thi trung bình một phép tính của một cấu trúc dữ liệu. \
    <br><b>Trường hợp tốt nhất (Best Case): </b> là tình huống mà thời gian thực thi một phép tính của một cấu trúc dữ liệu là ít nhất. </div> \
    <div class='lesson-content'><b>V. Thuật ngữ cơ bản trong Cấu trúc dữ liệu </b></div> \
    <div class ='lesson'><b>Dữ liệu: </b> Dữ liệu là các giá trị hoặc là tập hợp các giá trị. \
    <br><b>Phần tử dữ liệu: </b> Phần tử dữ liệu là một đơn vị đơn lẻ của giá trị. \
    <br><b>Các phần tử nhóm: </b> Phần tử dữ liệu mà được chia thành các phần tử con thì được gọi là các phần tử nhóm. \
    <br><b>Các phần tử cơ bản: </b> Phần tử dữ liệu mà không thể bị chia nhỏ thành các phần tử con thì gọi là các phần tử cơ bản. \
    <br><b>Thuộc tính và Thực thể: </b> Một thực thể là cái mà chứa một vài thuộc tính nào đó, và các thuộc tính này có thể được gán các giá trị. \
    <br><b>Tập hợp thực thể: </b> Các thực thể mà có các thuộc tính tương tự nhau thì cấu thành một tập hợp thực thể. \
    <br><b>Trường: </b> Trường là một đơn vị thông tin cơ bản biểu diễn một thuộc tính của một thực thể. \
    <br><b>Bản ghi: </b> Bản ghi là một tập hợp các giá trị trường của một thực thể đã cho. \
    <br><b>File: </b> Là một tập hợp các bản ghi của các thực thể trong một tập hợp thực thể đã cho.\
    <br> \
    <br> \
    <br> </div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Sắp xếp nổi bọt (Bubble Sort) là gì ? </b></div>\
    <div class ='lesson'>Sắp xếp nổi bọt là một giải thuật sắp xếp đơn giản. \
    Giải thuật sắp xếp này được tiến hành dựa trên việc so sánh cặp phần tử liền kề nhau và tráo đổi thứ tự nếu chúng không theo thứ tự.\
    <br>Giải thuật này không thích hợp sử dụng với các tập dữ liệu lớn khi mà độ phức tạp trường hợp xấu nhất và trường hợp trung bình là O(n<sup>2</sup>) với n là số phần tử. \
    <br>Giải thuật sắp xếp nổi bọt là giải thuật chậm nhất trong số các giải thuật sắp xếp cơ bản. \
    Giải thuật này còn chậm hơn giải thuật đổi chỗ trực tiếp mặc dù số lần so sánh bằng nhau, nhưng do đổi chỗ hai phần tử kề nhau nên số lần đổi chỗ nhiều hơn.</div>\
    <div class='lesson-content'><b> II. Cách giải thuật sắp xếp nổi bọt làm việc?</b></div> \
    <div class ='lesson'>Giả sử chúng ta có một mảng không có thứ tự gồm các phần tử như dưới đây. Bây giờ chúng ta sử dụng giải thuật sắp xếp nổi bọt để sắp xếp mảng này.</div> \
    <br><center><img src='img/p1.jpg' alt='Bubble Sort Image'></center>  \
    <br><div class ='lesson'>Giải thuật sắp xếp nổi bọt bắt đầu với hai phần tử đầu tiên, so sánh chúng để kiểm tra xem phần tử nào lớn hơn.</div>\
    <br><center><img src='img/p2.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Trong trường hợp này, 33 lớn hơn 14, do đó hai phần tử này đã theo thứ tự. Tiếp đó chúng ta so sánh 33 và 27.</div> \
    <br><center><img src='img/p3.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Chúng ta thấy rằng 33 lớn hơn 27, do đó hai giá trị này cần được tráo đổi thứ tự.</div> \
    <br><center><img src='img/p4.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Mảng mới thu được sẽ như sau: </div>\
    <br><center><img src='img/p5.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Tiếp đó chúng ta so sánh 33 và 35. Hai giá trị này đã theo thứ tự. </div>\
    <br><center><img src='img/p6.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Sau đó chúng ta so sánh hai giá trị kế tiếp là 35 và 10. </div>\
    <br><center><img src='img/p7.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Vì 10 nhỏ hơn 35 nên hai giá trị này chưa theo thứ tự.</div>\
    <br><center><img src='img/p8.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Tráo đổi thứ tự hai giá trị. Chúng ta đã tiến tới cuối mảng. Vậy là sau một vòng lặp, mảng sẽ trông như sau: </div>\
    <br><center><img src='img/p9.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Để đơn giản, tiếp theo mình sẽ hiển thị hình ảnh của mảng sau từng vòng lặp. Sau lần lặp thứ hai, mảng sẽ trông giống như: </div>\
    <br><center><img src='img/p10.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Sau mỗi vòng lặp, ít nhất một giá trị sẽ di chuyển tới vị trí cuối. Sau vòng lặp thứ 3, mảng sẽ trông giống như: </div>\
    <br><center><img src='img/p11.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Và khi không cần tráo đổi thứ tự phần tử nào nữa, giải thuật sắp xếp nổi bọt thấy rằng mảng đã được sắp xếp xong. </div>\
    <br><center><img src='img/p12.jpg' alt='Bubble Sort Image'></center> </div> \
    <div class='lesson-content'><b>III. Những điều lưu ý của thuật toán </b> </div> \
    <b><div class ='lesson'> 1. Ưu điểm </b> \
    <br> - Là thuật toán cơ bản, dễ hiểu, phù hợp cho người bắt đầu học về sắp xếp. \
    <br> - Đoạn code ngắn gọn, dễ nhớ. \
    <br><b> 2. Nhược điểm </b> \
    <br> - Hiệu suất chậm nhất trong các thuật toán sắp xếp. \
    <br> - Không hiệu quả với những dữ liệu lớn. \
    <br><b> 3. Thời gian tính và độ phức tạp </b> \
    <br>Với mỗi i = 1,2,...,n - 1 ta cần n - i phép so sánh. Do đó số nhiều nhất các lần so sánh và đổi chỗ trong giải thuật là \
    (n - 1) + (n - 2) + ... + 2 + 1 = (n-1)n/2. Do đó ta có độ phức tạp là O(n<sup>2</sup>). </div>\
    <br> \
    <br> \
    <br> \
    </div> ",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Sắp xếp chèn (Insertion Sort) là gì ? </b></div> \
    <div class ='lesson'>Sắp xếp chèn là một giải thuật sắp xếp dựa trên so sánh in-place. \
    Ở đây, một danh sách con luôn luôn được duy trì dưới dạng đã qua sắp xếp. \
    Sắp xếp chèn là chèn thêm một phần tử vào danh sách con đã qua sắp xếp. \
    Phần tử được chèn vào vị trí thích hợp sao cho vẫn đảm bảo rằng danh sách con đó vẫn sắp theo thứ tự. \
    <br>Với cấu trúc dữ liệu mảng, chúng ta tưởng tượng là: mảng gồm hai phần: một danh sách con đã được sắp xếp và phần khác là các phần tử không có thứ tự. \
    Giải thuật sắp xếp chèn sẽ thực hiện việc tìm kiếm liên tiếp qua mảng đó, \
    và các phần tử không có thứ tự sẽ được di chuyển và được chèn vào vị trí thích hợp trong danh sách con (của cùng mảng đó). \
    <br>Giải thuật này không thích hợp sử dụng với các tập dữ liệu lớn khi độ phức tạp trường hợp xấu nhất và trường hợp trung bình là Ο(n<sup>2</sup>) với n là số phần tử. </div> \
    <div class='lesson-content'><b>II. Cách giải thuật sắp xếp chèn thực hiện? </b></div> \
    <div class ='lesson'>Chúng ta có một mảng gồm các phần tử không có thứ tự: </div>\
    <br><center><img src='img/chen1.jpg' alt='Bubble Sort Image'></center>  \
    <br><div class ='lesson'>Giải thuật sắp xếp chèn so sánh hai phần tử đầu tiên: </div> \
    <br><center><img src='img/chen2.jpg' alt='Bubble Sort Image'></center>  \
    <br><div class ='lesson'>Giải thuật tìm ra rằng cả 14 và 33 đều đã trong thứ tự tăng dần. Bây giờ, 14 là trong danh sách con đã qua sắp xếp. </div> \
    <br><center><img src='img/chen3.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Giải thuật sắp xếp chèn tiếp tục di chuyển tới phần tử kế tiếp và so sánh 33 và 27. </div> \
    <br><center><img src='img/chen4.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Và thấy rằng 33 không nằm ở vị trí đúng. </div> \
    <br><center><img src='img/chen5.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Giải thuật sắp xếp chèn tráo đổi vị trí của 33 và 27. Đồng thời cũng kiểm tra tất cả phần tử trong danh sách con đã sắp xếp. \
        Tại đây, chúng ta thấy rằng trong danh sách con này chỉ có một phần tử 14 và 27 là lớn hơn 14. Do vậy danh sách con vẫn giữ nguyên sau khi đã tráo đổi. </div> \
    <br><center><img src='img/chen6.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Bây giờ trong danh sách con chúng ta có hai giá trị 14 và 27. Tiếp tục so sánh 33 với 10. </div> \
    <br><center><img src='img/chen7.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Hai giá trị này không theo thứ tự. </div> \
    <br><center><img src='img/chen8.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Vì thế chúng ta tráo đổi chúng. </div> \
    <br><center><img src='img/chen9.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Việc tráo đổi dẫn đến 27 và 10 không theo thứ tự. </div> \
    <br><center><img src='img/chen10.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Vì thế chúng ta cũng tráo đổi chúng. </div> \
    <br><center><img src='img/chen11.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Chúng ta lại thấy rằng 14 và 10 không theo thứ tự. </div> \
    <br><center><img src='img/chen12.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Và chúng ta tiếp tục tráo đổi hai số này. Cuối cùng, sau vòng lặp thứ 3 chúng ta có 4 phần tử. </div> \
    <br><center><img src='img/chen13.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Tiến trình trên sẽ tiếp tục diễn ra cho tới khi tất cả giá trị chưa được sắp xếp được sắp xếp hết vào trong danh sách con đã qua sắp xếp. </div> \
    <div class='lesson-content'><b>III. Đánh giá </b></div> \
    <div class ='lesson'>Độ phức tạp thuật toán: \
        <br> Trường hợp tốt: O(n) \
        <br> Trung bình: Ο(n<sup>2</sup>) \
        <br> Trường hợp xấu: Ο(n<sup>2</sup>) \
    <br> \
    <br> \
    <br> \</div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Giải thuật sắp xếp chọn (Selection Sort) là gì ? </b></div> \
    <div class ='lesson'> Giải thuật sắp xếp chọn (Selection Sort) là một giải thuật đơn giản. Giải thuật sắp xếp này là một giải thuật dựa trên việc so sánh in-place, \
        trong đó danh sách được chia thành hai phần, phần được sắp xếp (sorted list) ở bên trái và phần chưa được sắp xếp (unsorted list) ở bên phải. \
        Ban đầu, phần được sắp xếp là trống và phần chưa được sắp xếp là toàn bộ danh sách ban đầu. \
    <br>Phần tử nhỏ nhất được lựa chọn từ mảng chưa được sắp xếp và được tráo đổi với phần bên trái nhất và phần tử đó trở thành phần tử của mảng được sắp xếp. \
        Tiến trình này tiếp tục cho tới khi toàn bộ từng phần tử trong mảng chưa được sắp xếp đều được di chuyển sang mảng đã được sắp xếp. \
    <br>Giải thuật này không phù hợp với tập dữ liệu lớn khi mà độ phức tạp trường hợp xấu nhất và trường hợp trung bình là O(n2) với n là số phần tử. </div>\
    <div class='lesson-content'><b>II. Cách giải thuật sắp xếp chọn (Selection Sort) làm việc </b></div> \
    <div class ='lesson'>Giả sử chúng ta có một mảng như sau: </div> \
    <br><center><img src='img/se1.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Từ vị trí đầu tiên trong danh sách đã được sắp xếp, toàn bộ danh sách được duyệt một cách liên tục. Vị trí đầu tiên có giá trị 14, chúng ta tìm toàn bộ danh sách và thấy rằng 10 là giá trị nhỏ nhất. </div> \
    <br><center><img src='img/se2.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Do đó, chúng ta thay thế 14 với 10. Sau một vòng lặp, giá trị 10 thay thế cho giá trị 14 tại vị trí đầu tiên trong danh sách đã được sắp xếp. Chúng ta tráo đổi hai giá trị này. </div> \
    <br><center><img src='img/se3.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Tại vị trí thứ hai, giá trị 33, chúng ta tiếp tục quét phần còn lại của danh sách theo thứ tự từng phần tử. </div> \
    <br><center><img src='img/se4.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Chúng ta thấy rằng 14 là giá trị nhỏ nhất thứ hai trong danh sách và nó nên xuất hiện ở vị trí thứ hai. Chúng ta tráo đổi hai giá trị này. </div> \
    <br><center><img src='img/se5.jpg' alt='Bubble Sort Image'></center> \
    <br><div class ='lesson'>Sau hai vòng lặp, hai giá trị nhỏ nhất đã được đặt tại phần đầu của danh sách đã được sắp xếp. </div> \
    <br><center><img src='img/se6.jpg' alt='Bubble Sort Image'></center> \
    <div class='lesson'>Tiến trình tương tự sẽ được áp dụng cho phần còn lại của danh sách. Các hình dưới minh họa cho các tiến trình này.</div> \
    <br><center><img src='img/se7.jpg' alt='Bubble Sort Image'></center> \
    <div class='lesson-content'><b>III. Tính chất và độ phức tạp thuật toán </b></div> \
    <div class ='lesson'>Giải thuật sắp xếp này là một giải thuật dựa trên việc so sánh in-place, \
        trong đó danh sách được chia thành hai phần, phần được sắp xếp (sorted list) ở bên trái và phần chưa được sắp xếp (unsorted list) ở bên phải. \
         Ban đầu, phần được sắp xếp là trống và phần chưa được sắp xếp là toàn bộ danh sách ban đầu. \
    <br>Phần tử nhỏ nhất được lựa chọn từ mảng chưa được sắp xếp và được tráo đổi với phần bên trái nhất và phần tử đó trở thành phần tử của mảng được sắp xếp. \
        Tiến trình này tiếp tục cho tới khi toàn bộ từng phần tử trong mảng chưa được sắp xếp đều được di chuyển sang mảng đã được sắp xếp. \
    <br>Giải thuật này không phù hợp với tập dữ liệu lớn khi mà độ phức tạp trường hợp xấu nhất và trường hợp trung bình là O(n2) với n là số phần tử. </div>  \
    <br> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Giải thuật sắp xếp trộn (Merge Sort) là gì ? </b></div> \
    <div class ='lesson'> Sắp xếp trộn (Merge Sort) là một giải thuật sắp xếp dựa trên giải thuật <b>Chia để trị (Divide and Conquer)</b>. Với độ phức tạp thời gian trường hợp xấu nhất là Ο(n log n) thì đây là một trong các giải thuật đáng được quan tâm nhất. \
        <br>Đầu tiên, giải thuật sắp xếp trộn chia mảng thành hai nửa và sau đó kết hợp chúng lại với nhau thành một mảng đã được sắp xếp. </div> \
    <div class='lesson-content'><b>II. Cách giải thuật sắp xếp trộn (Merge Sort) làm việc </b></div> \
    <div class ='lesson'> Giả sử chúng ta có mảng sau: </div> \
    <br><center><img src='img/me1.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Đầu tiên, giải thuật sắp xếp trộn chia toàn bộ mảng thành hai nửa. Tiến trình chia này tiếp tục diễn ra cho đến khi không còn chia được nữa \
                        và chúng ta thu được các giá trị tương ứng biểu diễn các phần tử trong mảng. Trong hình dưới, đầu tiên chúng ta chia mảng kích cỡ 8 thành hai mảng kích cỡ 4. </div> \
    <br><center><img src='img/me2.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Tiến trình chia này không làm thay đổi thứ tự các phần tử trong mảng ban đầu. Bây giờ chúng ta tiếp tục chia các mảng này thành 2 nửa. </div> \
    <br><center><img src='img/me3.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Tiến hành chia tiếp cho tới khi không còn chia được nữa. </div> \
    <br><center><img src='img/me4.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Bây giờ chúng ta tổ hợp chúng theo như đúng cách thức mà chúng được chia ra. </div> \
    <br> \
    <div class ='lesson'> Đầu tiên chúng ta so sánh hai phần tử trong mỗi list và sau đó tổ hợp chúng vào trong một list khác theo cách thức đã được sắp xếp. \
    <br> Ví dụ, 14 và 33 là trong các vị trí đã được sắp xếp. \
        Chúng ta so sánh 27 và 10 và trong list khác chúng ta đặt 10 ở đầu và sau đó là 27. Tương tự, chúng ta thay đổi vị trí của 19 và 35. 42 và 44 được đặt tương ứng. </div> \
    <br><center><img src='img/me5.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Vòng lặp tiếp theo là để kết hợp từng cặp list một ở trên. Chúng ta so sánh các giá trị và sau đó hợp nhất chúng lại vào trong một list chứa 4 giá trị, và 4 giá trị này đều đã được sắp thứ tự. </div> \
    <br><center><img src='img/me6.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Sau bước kết hợp cuối cùng, danh sách sẽ trông giống như sau: </div> \
    <br><center><img src='img/me7.jpg' alt='Bubble Sort Image'></center> \
    <div class='lesson-content'><b>III. Tính chất và độ phức tạp thuật toán? </b></div> \
    <div class ='lesson'> Với độ phức tạp thời gian trường hợp xấu nhất là Ο(n log n) thì đây là một trong các giải thuật đáng được quan tâm nhất. \
    <br>Đầu tiên, giải thuật sắp xếp trộn chia mảng thành hai nửa và sau đó kết hợp chúng lại với nhau thành một mảng đã được sắp xếp. </div> \
    <br> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Sắp xếp nhanh (Quick Sort) là gì ? </b></div> \
    <div class ='lesson'> Giải thuật sắp xếp nhanh (Quick Sort) là một giải thuật hiệu quả cao và dựa trên việc chia mảng dữa liệu thành các mảng nhỏ hơn. \
        Giải thuật sắp xếp nhanh chia mảng thành hai phần bằng cách so sánh từng phần tử của mảng với một phần tử được chọn gọi là <b> phần tử chốt (Pivot) </b> : \
        một mảng bao gồm các phần tử nhỏ hơn hoặc bằng phần tử chốt và mảng còn lại bao gồm các phần tử lớn hơn hoặc bằng phần tử chốt. \
    <br> Tiến trình chia này diễn ra tiếp tục cho tới khi độ dài của các mảng con đều bằng 1. Giải thuật sắp xếp nhanh tỏ ra khá hiệu quả \
    với các tập dữ liệu lớn khi mà độ phức tạp trường hợp trung bình và trường hợp xấu nhất là O(nlogn) với n là số phần tử. </div> \
    <div class='lesson-content'><b>II. Kỹ thuật chọn phần tử chốt trong giải thuật sắp xếp nhanh (Quick Sort) </b></div> \
    <div class ='lesson'> Kỹ thuật chọn phần tử chốt ảnh hưởng khá nhiều đến khả năng rơi vào các vòng lặp vô hạn đối với các trường hợp đặc biệt. \
        Tốt nhất là chọn phần tử chốt (pivot) nằm ở trung vị của danh sách. Khi đó, sau log<sup>2</sup>(n) lần chia chúng ta sẽ đạt tới kích thước các mảng con bằng 1. \
    <br> Dưới đây là các cách chọn phần tử chốt: \
    <br> - Chọn phần tử đứng đầu hoặc đứng cuối làm phần tử chốt. \
    <br> - Chọn phần tử đứng giữa danh sách làm phần tử chốt. \
    <br> - Chọn phần tử trung vị trong ba phần tử đứng đầu, đứng giữa và đứng cuối làm phần tử chốt. \
    <br> - Chọn phần tử ngẫu nhiên làm phần tử chốt. Tuy nhiên cách này rất dễ dẫn đến khả năng rơi vào các trường hợp đặc biệt. </div> \
    <div class='lesson-content'><b>III. Minh họa cách chia trong giải thuật sắp xếp nhanh (Quick Sort) </b></div> \
    <div class ='lesson'> Hình minh họa dưới đây minh họa cách tìm phần tử chốt trong mảng. </div> \
    <br><center><img src='img/qu1.png' alt='Bubble Sort Image'></center> \
    <div class='lesson-content'><b>IV. Tính chất và độ phức tạp thuật toán? </b></div> \
    <div class ='lesson'>Giải thuật sắp xếp nhanh chia mảng thành hai phần bằng cách so sánh từng phần tử của mảng với một phần tử được chọn gọi là <b> phần tử chốt (Pivot) </b> : \
        một mảng bao gồm các phần tử nhỏ hơn hoặc bằng phần tử chốt và mảng còn lại bao gồm các phần tử lớn hơn hoặc bằng phần tử chốt. \
    <br> Tiến trình chia này diễn ra tiếp tục cho tới khi độ dài của các mảng con đều bằng 1. Giải thuật sắp xếp nhanh tỏ ra khá hiệu quả \
    với các tập dữ liệu lớn khi mà độ phức tạp trường hợp trung bình và trường hợp xấu nhất là O(nlogn) với n là số phần tử. </div>  \
    <br> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Sắp xếp Shell Sort là gì ? </b></div> \
    <div class ='lesson'> Shell Sort là một giải thuật sắp xếp mang lại hiệu quả cao dựa trên giải thuật sắp xếp chèn (Insertion Sort). \
        Giải thuật này tránh các trường hợp phải tráo đổi vị trí của hai phần tử xa nhau trong giải thuật sắp xếp chọn (nếu như phần tử nhỏ hơn ở vị trí bên phải khá xa so với phần tử lớn hơn bên trái). \
    <br> Đầu tiên, giải thuật này sử dụng giải thuật sắp xếp chọn trên các phần tử có khoảng cách xa nhau, sau đó sắp xếp các phần tử có khoảng cách hẹp hơn.\
    Khoảng cách này còn được gọi là <b>khoảng (interval) </b> – là số vị trí từ phần tử này tới phần tử khác. Khoảng này được tính dựa vào công thức Knuth như sau: \
    <center><b> h = h*3 + 1 </b><i>trong đó: h là Khoảng (interval) với giá trị ban đâu là 1 </i></center> \
    Giải thuật này khá hiệu quả với các tập dữ liệu có kích cỡ trung bình khi mà độ phức tạp trường hợp xấu nhất và trường hợp trung bình là O(n), với n là số phần tử. </div>\
    <div class='lesson-content'><b>II. Cách Shell Sort làm việc </b></div> \
    <div class ='lesson'> Chúng ta sử dụng một mảng gồm các giá trị như dưới đây. Giả sử ban đầu giá trị Khoảng (interval) là 4. Ví dụ, với phần tử 35 thì với khoảng là 4 thì phần tử còn lại sẽ là 14. Do đó ta sẽ có các cặp giá trị {35, 14}, {33, 19}, {42, 27}, và {10, 14}. </div> \
    <br><center><img src='img/sl1.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> So sánh các giá trị này với nhau trong các danh sách con và tráo đổi chúng (nếu cần) trong mảng ban đầu. Sau bước này, mảng mới sẽ trống như sau: </div> \
    <br><center><img src='img/sl2.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Sau đó, lấy giá trị Khoảng (interval) là 2 và với khoảng cách này sẽ cho hai danh sách con: {14, 27, 35, 42}, {19, 10, 33, 44}. </div> \
    <br><center><img src='img/sl3.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Cuối cùng, chúng ta sắp xếp phần mảng còn lại này với Khoảng (interval) bằng 1. Shell Sort sử dụng giải thuật sắp xếp chèn để sắp xếp mảng. Dưới đây là hình minh họa cho từng bước. </div> \
    <br><center><img src='img/sl4.jpg' alt='Bubble Sort Image'></center> \
    <div class= 'lesson-content'><b>III. Tính chất và độ phức tạp thuật toán? </b></div> \
    <div class ='lesson'> - Shell Sort là một thuật toán sắp xếp không ổn định, nghĩa là nó có thể thay đổi vị trí của các phần tử có giá trị bằng nhau. \
        Ý tưởng chính của Shell Sort là sắp xếp các phần tử cách xa nhau, sau đó giảm dần khoảng cách giữa các phần tử để thực hiện sắp xếp địa phương (local sorting). \
    <br> - Shell Sort thường hiệu quả hơn Insertion Sort khi xử lý dãy dữ liệu lớn, đặc biệt là khi dãy dữ liệu gần sắp xếp. \
    <br> - Shell Sort không đòi hỏi bộ nhớ phụ (auxiliary memory) ngoài việc lưu trữ dãy dữ liệu cần sắp xếp. \
    <br> - <b>Độ phức tạp thời gian</b> của Shell Sort không dễ đánh giá chính xác do nó phụ thuộc vào khoảng cách giữa các phần tử khi sắp xếp.  </div>  \
    <br> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Ngăn xếp (Stack) là gì ? </b></div> \
    <div class ='lesson'> Một ngăn xếp là một cấu trúc dữ liệu trừu tượng (Abstract Data Type – viết tắt là ADT), hầu như được sử dụng trong hầu hết mọi ngôn ngữ lập trình. Đặt tên là ngăn xếp bởi vì nó hoạt động như một ngăn xếp trong đời sống thực, ví dụ như một cỗ bài hay một chồng đĩa,… </div> \
    <br><center><img src='img/sta1.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Trong đời sống thực, ngăn xếp chỉ cho phép các hoạt động tại vị trí trên cùng của ngăn xếp. \
        Ví dụ, chúng ta chỉ có thể đặt hoặc thêm một lá bài hay một cái đĩa vào trên cùng của ngăn xếp. \
        Do đó, cấu trúc dữ liệu trừu tượng ngăn xếp chỉ cho phép các thao tác dữ liệu tại vị trí trên cùng. Tại bất cứ thời điểm nào, chúng ta chỉ có thể truy cập phần tử trên cùng của ngăn xếp. \
    <br> Đặc điểm này làm cho ngăn xếp trở thành cấu trúc dữ liệu dạng <b>LIFO</b>. <b>LIFO</b> là viết tắt của <b>Last-In-First-Out</b>. \
    Ở đây, phần tử được đặt vào (được chèn, được thêm vào) cuối cùng sẽ được truy cập đầu tiên. \
    Trong thuật ngữ ngăn xếp, hoạt động chèn được gọi là hoạt động <b>PUSH</b> và hoạt động xóa được gọi là hoạt động <b>POP</b>. </div>\
    <div class='lesson-content'><b>II. Biểu diễn cấu trúc dữ liệu ngăn xếp (Stack) </b></div> \
    <div class ='lesson'> Dưới đây là sơ đồ minh họa một ngăn xếp và các hoạt động diễn ra trên ngăn xếp. </div> \
    <br><center><img src='img/sta2.jpg' alt='Bubble Sort Image'></center> \
    <div class='lesson'> Một ngăn xếp có thể được triển khai theo phương thức của Mảng (Array), Cấu trúc (Struct), Con trỏ (Pointer) và Danh sách liên kết (Linked List). Ngăn xếp có thể là ở dạng kích cỡ cố định hoặc ngăn xếp có thể thay đổi kích cỡ. Phần dưới chúng ta sẽ triển khai ngăn xếp bởi sử dụng các mảng với việc triển khai các ngăn xếp cố định. </div> \
    <div class='lesson-content'><b>III. Các hoạt động cơ bản trên cấu trúc dữ liệu ngăn xếp </b></div> \
    <div class='lesson'> Các hoạt động cơ bản trên ngăn xếp có thể liên quan tới việc khởi tạo ngăn xếp, sử dụng nó và sau đó xóa nó. Ngoài các hoạt động cơ bản này, một ngăn xếp có hai hoạt động nguyên sơ liên quan tới khái niệm, đó là: \
    <br><b>Hoạt động push()</b>: lưu giữ một phần tử trên ngăn xếp. \
    <br><b>Hoạt động pop() </b>: xóa một phần tử từ ngăn xếp. \
    <br>Khi dữ liệu đã được <b>PUSH</b> lên trên ngăn xếp: \
    <br> Để sử dụng ngăn xếp một cách hiệu quả, chúng ta cũng cần kiểm tra trạng thái của ngăn xếp. Để phục vụ cho mục đích này, dưới đây là một số tính năng hỗ trợ khác của ngăn xếp: \
    <br><b>Hoạt động peek() </b>: lấy phần tử dữ liệu ở trên cùng của ngăn xếp, mà không xóa phần tử này. \
    <br><b>Hoạt động isFull() </b>: kiểm tra xem ngăn xếp đã đầy hay chưa. \
    <br><b>Hoạt động isEmpty() </b>: kiểm tra xem ngăn xếp là trống hay không. \
    <br> Tại mọi thời điểm, chúng ta duy trì một con trỏ tới phần tử dữ liệu vừa được PUSH cuối cùng vào trên ngăn xếp. \
    Vì con trỏ này luôn biểu diễn vị trí trên cùng của ngăn xếp vì thế được đặt tên là <b>top</b>. <b>Con trỏ top</b> cung cấp cho chúng ta giá trị của phần tử trên cùng của ngăn xếp mà không cần phải thực hiện hoạt động xóa ở trên (hoạt động pop). </div>\
    <div class='lesson-content'><b>IV. Tính chất </b></div> \
    <div class ='lesson'> - LIFO (Last In, First Out): Phần tử cuối cùng được thêm vào Stack là phần tử đầu tiên được lấy ra khỏi Stack. Điều này tạo ra một cấu trúc dữ liệu theo thứ tự ngược lại so với thứ tự thêm vào. \
    <br> - Các thao tác cơ bản trên Stack bao gồm <b>push</b> để thêm một phần tử vào đỉnh của Stack và <b>pop</b> để loại bỏ phần tử ở đỉnh của Stack. \
    <br> - <b>Đỉnh Stack </b>: Là phần tử cuối cùng được thêm vào Stack, cũng là phần tử đầu tiên được lấy ra khi thực hiện thao tác pop. \
    <br> - Stack có thể được triển khai dưới dạng mảng động hoặc danh sách liên kết, và nó không giới hạn kích thước, tùy thuộc vào bộ nhớ hệ thống. \
    <br> - Stack thường được sử dụng trong nhiều ứng dụng, bao gồm quản lý ngăn xếp cuộc gọi hàm trong ngôn ngữ lập trình, duyệt cây (traversal), và các vấn đề liên quan đến lưu trữ tạm thời và quản lý trạng thái. </div> \
    <br> \
    <br> \
    <br> \
    </div> ",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Cấu trúc dữ liệu hàng đợi (Queue) là gì ? </b></div> \
    <div class ='lesson'> Hàng đợi (Queue) là một cấu trúc dữ liệu trừu tượng, là một cái gì đó tương tự như hàng đợi trong đời sống hàng ngày (xếp hàng). </div> \
    <br><center><img src='img/que1.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Khác với ngăn xếp, hàng đợi là mở ở cả hai đầu. Một đầu luôn luôn được sử dụng để chèn dữ liệu vào (hay còn gọi là sắp vào hàng) và đầu kia được sử dụng để xóa dữ liệu (rời hàng). \
        Cấu trúc dữ liệu hàng đợi tuân theo phương pháp First-In-First-Out, tức là dữ liệu được nhập vào đầu tiên sẽ được truy cập đầu tiên. \
    <br> Trong đời sống thực chúng ta có rất nhiều ví dụ về hàng đợi, chẳng hạn như hàng xe ô tô trên đường một chiều (đặc biệt là khi tắc xe), trong đó xe nào vào đầu tiên sẽ thoát ra đầu tiên. Một vài ví dụ khác là xếp hàng học sinh, xếp hàng mua vé,… </div> \
    <div class='lesson-content'><b>II. Biểu diễn cấu trúc dữ liệu hàng đợi (Queue) </b></div> \
    <div class ='lesson'> Giờ thì có lẽ bạn đã tưởng tượng ra hàng đợi là gì rồi. Chúng ta có thể truy cập cả hai đầu của hàng đợi. Dưới đây là biểu diễn hàng đợi dưới dạng cấu trúc dữ liệu: </div>\
    <br><center><img src='img/que2.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Tương tự như cấu trúc dữ liệu ngăn xếp, thì cấu trúc dữ liệu hàng đợi cũng có thể được triển khai bởi sử dụng Mảng (Array), \
        Danh sách liên kết (Linked List), Con trỏ (Pointer) và Cấu trúc (Struct). Để đơn giản, phần tiếp theo chúng ta sẽ tìm hiểu tiếp về hàng đợi được triển khai bởi sử dụng mảng một chiều. </div> \
    <div class='lesson-content'><b>III. Các hoạt động cơ bản trên cấu trúc dữ liệu hàng đợi </b></div> \
    <div class ='lesson'> Các hoạt động trên cấu trúc dữ liệu hàng đợi có thể liên quan tới việc khởi tạo hàng đợi, sử dụng dữ liệu trên hàng đợi và sau đó là xóa dữ liệu khỏi bộ nhớ. \
        Danh sách dưới đây là một số hoạt động cơ bản có thể thực hiện trên cấu trúc dữ liệu hàng đợi: \
    <br><b>Hoạt động enqueue() </b>: thêm (hay lưu trữ) một phần tử vào trong hàng đợi. \
    <br><b>Hoạt động dequeue() </b>: xóa một phần tử từ hàng đợi. \
    <br> Để sử dụng hàng đợi một cách hiệu quả, chúng ta cũng cần kiểm tra trạng thái của hàng đợi. \
        Để phục vụ cho mục đích này, dưới đây là một số tính năng hỗ trợ khác của hàng đợi: \
    <br><b> Phương thức peek() </b>: lấy phần tử ở đầu hàng đợi, mà không xóa phần tử này. \
    <br><b> Phương thức isFull() </b>: kiểm tra xem hàng đợi là đầy hay không. \
    <br><b> Phương thức isEmpty() </b>: kiểm tra xem hàng đợi là trống hay hay không. \
    <br> Trong cấu trúc dữ liệu hàng đợi, chúng ta luôn luôn: (1) dequeue (xóa) dữ liệu được trỏ bởi con trỏ <b>front</b> và (2) enqueue (nhập) dữ liệu vào trong hàng đợi bởi sự giúp đỡ của con trỏ <b>rear</b>. </div> \
    <div class='lesson-content'><b>IV. Tính chất </b></div> \
    <div class ='lesson'> - FIFO (First In, First Out): Phần tử đầu tiên được thêm vào Queue là phần tử đầu tiên được lấy ra khỏi Queue. Điều này tạo ra một cấu trúc dữ liệu theo thứ tự giống như hàng đợi thực tế. \
    <br> - Các thao tác cơ bản trên Queue bao gồm <b>enqueue</b> để thêm một phần tử vào cuối Queue và <b>dequeue</b> để loại bỏ phần tử ở đầu Queue. \
    <br> - Đầu Queue là nơi thực hiện thao tác <b>dequeue</b>, còn Đuôi Queue là nơi thực hiện thao tác <b>enqueue</b>. Phần tử nào đến trước sẽ ở Đầu Queue và phần tử nào đến sau sẽ ở Đuôi Queue. \
    <br> - Queue có thể được triển khai dưới dạng mảng động hoặc danh sách liên kết và không có giới hạn về kích thước. \
    <br> - Queue thường được sử dụng trong nhiều ứng dụng, bao gồm quản lý các công việc được thực hiện theo thứ tự đầu vào đầu ra, xử lý các yêu cầu theo thứ tự đến, và giải quyết các vấn đề liên quan đến quản lý dữ liệu theo nguyên tắc FIFO. </div> \
    <br> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Danh sách liên kết (Linked List) là gì ? </b></div> \
    <div class ='lesson'> Một Danh sách liên kết (Linked List) là một dãy các cấu trúc dữ liệu được kết nối với nhau thông qua các liên kết (link). \
        Hiểu một cách đơn giản thì Danh sách liên kết là một cấu trúc dữ liệu bao gồm một nhóm các nút (node) tạo thành một chuỗi. Mỗi nút gồm dữ liệu ở nút đó và tham chiếu đến nút kế tiếp trong chuỗi. \
    <br> Danh sách liên kết là cấu trúc dữ liệu được sử dụng phổ biến thứ hai sau mảng. Dưới đây là các khái niệm cơ bản liên quan tới Danh sách liên kết: \
    <br><b> Link (liên kết) </b>: mỗi link của một Danh sách liên kết có thể lưu giữ một dữ liệu được gọi là một phần tử. \
    <br><b> Next </b>: Mỗi liên kết của một Danh sách liên kết chứa một link tới next link được gọi là Next. \
    <br><b> First </b>: một Danh sách liên kết bao gồm các link kết nối tới first link được gọi là First. </div> \
    <div class='lesson-content'><b>II. Biểu diễn Danh sách liên kết (Linked List) </b></div> \
    <div class ='lesson'> Danh sách liên kết có thể được biểu diễn như là một chuỗi các nút (node). Mỗi nút sẽ trỏ tới nút kế tiếp. </div> \
    <br><center><img src='img/l1.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Dưới đây là một số điểm cần nhớ về Danh sách liên kết: \
    <br> - Danh sách liên kết chứa một phần tử link thì được gọi là First. \
    <br> - Mỗi link mang một trường dữ liệu và một trường link được gọi là Next. \
    <br> - Mỗi link được liên kết với link kế tiếp bởi sử dụng link kế tiếp của nó. \
    <br> - Link cuối cùng mang một link là null để đánh dấu điểm cuối của danh sách. </div> \
    <div class='lesson-content'><b>III. Các loại Danh sách liên kết (Linked List) </b></div> \
    <div class ='lesson'> <b>Danh sách liên kết đơn (Simple Linked List) </b>: chỉ duyệt các phần tử theo chiều về trước. \
    <br><b> Danh sách liên kết đôi (Doubly Linked List) </b>: các phần tử có thể được duyệt theo chiều về trước hoặc về sau. \
    <br><b> Danh sách liên kết vòng (Circular Linked List) </b> : phần tử cuối cùng chứa link của phần tử đầu tiên như là next và phần tử đầu tiên có link tới phần tử cuối cùng như là prev. </div> \
    <div class='lesson-content'><b>VI. Các hoạt động cơ bản trên Danh sách liên kết </b></div> \
    <div class ='lesson'> <b>Hoạt động chèn </b>: thêm một phần tử vào đầu danh sách liên kết. \
    <br><b> Hoạt động xóa (phần tử đầu) </b>: xóa một phần tử tại đầu danh sách liên kết. \
    <br><b> Hiển thị </b>: hiển thị toàn bộ danh sách. \
    <br><b> Hoạt động tìm kiếm </b>: tìm kiếm phần tử bởi sử dụng khóa (key) đã cung cấp. \
    <br><b> Hoạt động xóa (bởi sử dụng khóa) </b>: xóa một phần tử bởi sử dụng khóa (key) đã cung cấp. </div> \
    <div class='lesson-content'><b>V. Hoạt động chèn trong Danh sách liên kết </b></div> \
    <div class ='lesson'> Việc thêm một nút mới vào trong danh sách liên kết không chỉ là một hoạt động thêm đơn giản như trong các cấu trúc dữ liệu khác (bởi vì chúng ta có dữ liệu và có link). \
        Chúng ta sẽ tìm hiểu thông qua sơ đồ dưới đây. Đầu tiên, tạo một nút bởi sử dụng cùng cấu trúc và tìm vị trí để chèn nút này. </div> \
    <br><center><img src='img/l2.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Giả sử chúng ta cần chèn một nút B vào giữa nút A (nút trái) và C (nút phải). Do đó: B.next trỏ tới C. </div> \
    <br><center><i>NewNode.next −> RightNode; </i></center> \
    <br><center><img src='img/l3.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'>Bây giờ, next của nút bên trái sẽ trở tới nút mới. </div> \
    <br><center><i>LeftNode.next −> NewNode; </i></center> \
    <br><center><img src='img/l4.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Quá trình trên sẽ đặt nút mới vào giữa hai nút. Khi đó danh sách mới sẽ trông như sau: </div> \
    <br><center><img src='img/l5.jpg' alt='Bubble Sort Image'></center> \
    <div class='lesson-content'><b>VI. Hoạt động xóa trong Danh sách liên kết </b></div> \
    <div class ='lesson'> Hoạt động xóa trong Danh sách liên kết cũng phức tạp hơn trong cấu trúc dữ liệu khác. Đầu tiên chúng ta cần định vị nút cần xóa bởi sử dụng các giải thuật tìm kiếm. </div> \
    <br><center><img src='img/l6.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Bây giờ, nút bên trái (prev) của nút cần xóa nên trỏ tới nút kế tiếp (next) của nút cần xóa. </div> \
    <br><center><i>LeftNode.next −> TargetNode.next; </i></center> \
    <br><center><img src='img/l7.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Quá trình này sẽ xóa link trỏ tới nút cần xóa. Bây giờ chúng ta sẽ xóa những gì mà nút cần xóa đang trỏ tới. </div> \
    <br><center><i>TargetNode.next −> NULL; </i></center> \
    <br><center><img src='img/l8.jpg' alt='Bubble Sort Image'></center> \
    <div class='lesson-content'><b>VII. Hoạt động đảo ngược Danh sách liên kết </b></div> \
    <div class ='lesson'> Với hoạt động này, bạn cần phải cẩn thận. Chúng ta cần làm cho nút đầu (head) trỏ tới nút cuối cùng và đảo ngược toàn bộ danh sách liên kết. </div> \
    <br><center><img src='img/l9.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Đầu tiên, chúng ta duyệt tới phần cuối của danh sách. Nút này sẽ trỏ tới NULL. Bây giờ điều cần làm là làm cho nút cuối này trỏ tới nút phía trước của nó. </div> \
    <br><center><img src='img/l10.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Chúng ta phải đảm bảo rằng nút cuối cùng này sẽ không bị thất lạc, do đó chúng ta sẽ sử dụng một số nút tạm (temp node – giống như các biến tạm trung gian để lưu giữ giá trị). \
                        Tiếp theo, chúng ta sẽ làm cho từng nút bên trái sẽ trỏ tới nút trái của chúng. </div> \
    <br><center><img src='img/l11.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Sau đó, nút đầu tiên sau nút head sẽ trỏ tới NULL. </div> \
    <br><center><img src='img/l12.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Chúng ta sẽ làm cho nút head trỏ tới nút đầu tiên mới bởi sử dụng các nút tạm. </div> \
    <br><center><img src='img/l13.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Bây giờ Danh sách liên kết đã bị đảo ngược. </div> \
    <div class='lesson-content'><b>VIII. Tính chất </b></div> \
    <div class ='lesson'> - Danh sách liên kết đơn (Singly Linked List) Là một cấu trúc dữ liệu tạo thành từ các <b>nút</b> liên kết với nhau theo chiều một chiều, trong đó mỗi nút chứa dữ liệu và một con trỏ (thường được gọi là con trỏ <b>>next</b>) trỏ tới nút tiếp theo trong danh sách. \
    <br> -  Mỗi nút của danh sách liên kết có thể nằm ở một vị trí bất kỳ trong bộ nhớ, không cần phải là liên tục nhau như mảng. \
    <br> - Thao tác chèn và xóa phần tử giữa danh sách liên kết thường nhanh và dễ dàng hơn so với mảng, do chỉ cần điều chỉnh con trỏ liên kết. \
    <br> - Kích thước của danh sách liên kết có thể thay đổi linh hoạt, không như mảng có kích thước cố định. \
    <br> - Linked List được sử dụng trong nhiều bài toán và ứng dụng như quản lý bộ nhớ động, triển khai danh sách liên kết xếp hạng, và là một phần của các cấu trúc dữ liệu phức tạp hơn như cây. </div> \
    <br> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Danh sách liên kết đôi (Doubly Linked List) là gì ? </b></div> \
    <div class ='lesson'> Danh sách liên kết đôi (Doubly Linked List) là một biến thể của Danh sách liên kết (Linked List), trong đó hoạt động duyệt qua các nút có thể được thực hiện theo hai chiều: \
        về trước và về sau một cách dễ dàng khi so sánh với Danh sách liên kết đơn. Dưới đây là một số khái niệm quan trọng cần ghi nhớ về Danh sách liên kết đôi. \
    <br> <b>Link </b>: mỗi link của một Danh sách liên kết có thể lưu giữ một dữ liệu và được gọi là một phần tử. \
    <br> <b>Next </b>: mỗi link của một Danh sách liên kết có thể chứa một link tới next link và được gọi là Next. \
    <br> <b>Prev </b>: mỗi link của một Danh sách liên kết có thể chứa một link tới previous link và được gọi là Prev. \
    <br> <b>First và Last </b>: một Danh sách liên kết chứa link kết nối tới first link được gọi là First và tới last link được gọi là Last. </div> \
    <div class='lesson-content'><b>II. Biểu diễn Danh sách liên kết đôi </b></div> \
    <br><center><img src='img/d1.jpg' alt='Bubble Sort Image'></center> \
    <div class='lesson'> Danh sách liên kết đôi chứa một phần tử link và được gọi là First và Last. \
    <br> Mỗi link mang một trường dữ liệu và một trường link được gọi là Next. \
    <br> Mỗi link được liên kết với phần tử kế tiếp bởi sử dụng Next Link. \
    <br> Mỗi link được liên kết với phần tử phía trước bởi sử dụng Prev Link. \
    <br> Last Link mang một link trỏ tới NULL để đánh dầu phần cuối của Danh sách liên kết. </div> \
    <div class='lesson-content'><b>III. Các hoạt động cơ bản trên Danh sách liên kết đôi </b></div> \
    <div class ='lesson'> <b>Hoạt động chèn </b>: thêm một phần tử vào vị trí đầu của Danh sách liên kết. \
    <br><b> Hoạt động xóa </b>: xóa một phần tử tại vị trí đầu của Danh sách liên kết. \
    <br><b> Hoạt động chèn vào cuối </b>: thêm một phần tử vào vị trí cuối của Danh sách liên kết. \
    <br><b> Hoạt động xóa phần tử cuối </b>: xóa một phần tử tại vị trí cuối của Danh sách liên kết. \
    <br><b> Hoạt động chèn vào sau </b>: thêm một phần tử vào sau một phần tử của Danh sách liên kết. \
    <br><b> Hoạt động xóa (bởi key) </b>: xóa một phần tử từ Danh sách liên kết bởi sử dụng khóa đã cung cấp. \
    <br><b> Hiển thị danh sách về phía trước </b>: hiển thị toàn bộ Danh sách liên kết theo chiều về phía trước. \
    <br><b> Hiển thị danh sách về phía sau </b>: hiển thị toàn bộ Danh sách liên kết theo chiều về phía sau. </div> \
    <div class='lesson-content'><b>IV. Hoạt động chèn trong Danh sách liên kết đôi </b></div> \
    <div class ='lesson'> Phần dưới đây là giải thuật minh họa cho hoạt động chèn tại vị trí đầu của một Danh sách liên kết đôi. </div> \
        <br><div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br>//Chèn link tại vị trí đầu tiên \
                    <br>void insertFirst(int key, int data) { \
                    <br>//tạo một link \
                    <br>     struct node *link = (struct node*) malloc(sizeof(struct node)); \
                    <br>     link->key = key; \
                    <br>     link->data = data; \
                    <br>     if(isEmpty()) { \
                        <br>        //Biến nó thành last link \
                        <br>        last = link; \
                    <br>     }else { \
                        <br>        //Cập nhật prev link đầu tiên \
                        <br>        head->prev = link; \
                    <br>     } \
                    <br>     //Trỏ nó tới first link cũ \
                    <br>     link->next = head; \
	                <br>     //Trỏ first tới first link mới \
                    <br>     head = link; \
                <br> } \
            </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>V. Hoạt động xóa trong Danh sách liên kết đôi </b></div> \
    <div class ='lesson'> Phần dưới đây là giải thuật minh họa cho hoạt động xóa phần tử tại vị trí đầu của một Danh sách liên kết đôi. </div> \
    <br><div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br>//xóa phần tử đầu tiên \
                    <br>struct node* deleteFirst() { \
                    <br>     //Lưu tham chiếu tới first link \
                    <br>     struct node *tempLink = head; \
                    <br>     //Nếu chỉ có link \
                    <br>     if(head->next == NULL) { \
                    <br>           last = NULL; \
                    <br>     }else { \
                    <br>           head->next->prev = NULL; \
                    <br>     } \
                    <br>     head = head->next; \
                    <br>     //Trả về link đã bị xóa \
                    <br>     return tempLink; \
                <br> } \
            </code> </div> </pre> </span> </div> \
            <div class='lesson-content'><b>VI. Hoạt động chèn tại vị trí cuối trong Danh sách liên kết đôi </b></div> \
    <div class ='lesson'> Phần dưới đây là giải thuật minh họa cho hoạt động chèn tại vị trí cuối của một Danh sách liên kết đôi. </div> \
    <br><div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br>//Chèn link vào vị trí cuối cùng \
                    <br>void insertLast(int key, int data) { \
                    <br>     //tạo một link \
                    <br>     struct node *link = (struct node*) malloc(sizeof(struct node)); \
                    <br>     link->key = key; \
                    <br>     link->data = data; \
                    <br>     if(isEmpty()) { \
                    <br>           //biến nó thành last link \
                    <br>           last = link; \
                    <br>     } else { \
                    <br>           //làm cho link trở thành last link mới \
                    <br>           last->next = link;  \
                    <br>           //Đánh dấu last node là prev của new link \
                    <br>           link->prev = last; \
                    <br>     } \
                    <br>     //Trỏ last tới new last node \
                    <br>     last = link; \
                    <br> } \
                <br> } \
            </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>VII. Tính chất </b></div> \
    <div class ='lesson'> - Mỗi nút trong danh sách liên kết đôi chứa hai con trỏ, một con trỏ trỏ tới nút phía trước (prev) và một con trỏ trỏ tới nút phía sau (next). \
    <br> -  Do có con trỏ prev và next, việc di chuyển lùi (backward) và tiến (forward) trong danh sách liên kết đôi là dễ dàng và hiệu quả. \
    <br> - So với danh sách liên kết đơn, việc chèn và xóa phần tử giữa danh sách liên kết đôi thường nhanh chóng hơn, vì không cần phải điều chỉnh con trỏ prev của nút kế trước phần tử cần chèn hoặc xóa. \
    <br> - Danh sách liên kết đôi tăng cường tính linh hoạt của cấu trúc dữ liệu, cho phép truy cập ngược (backward traversal) và thực hiện các thao tác chèn và xóa một cách hiệu quả. </div> \
        <br> \
        <br> \
        <br> \
        </div>",

    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Danh sách liên kết vòng (Circular Linked List) là gì ? </b></div> \
    <div class ='lesson'> Danh sách liên kết vòng (Circular Linked List) là một biến thể của Danh sách liên kết (Linked List), trong đó phần tử đầu tiên \
        trỏ tới phần tử cuối cùng và phần tử cuối cùng trỏ tới phần tử đầu tiên. \
    <br> Cả hai loại Danh sách liên kết đơn (Singly Linked List) và Danh sách liên kết đôi (Doubly Linked List) đều có thể được tạo thành dạng Danh sách liên kết vòng. \
    Phần dưới chúng ta sẽ tìm hiểu từng cách tạo một. </div>\
    <div class='lesson-content'><b>II. Tạo Danh sách liên kết vòng từ Danh sách liên kết đơn </b></div> \
    <div class ='lesson'> Trong Danh sách liên kết đơn, điểm trỏ tới kế tiếp của nút cuối sẽ trỏ tới nút đầu tiên, thay vì sẽ trỏ tới NULL. </div> \
    <br><center><img src='img/v1.jpg' alt='Bubble Sort Image'></center> \
    <div class='lesson-content'><b>III. Tạo Danh sách liên kết vòng từ Danh sách liên kết đôi </b></div> \
    <div class ='lesson'> Trong Danh sách liên kết đôi, điểm trỏ tới kế tiếp của nút cuối trỏ tới nút đầu tiên và điểm trỏ tới phía trước của nút trước sẽ trỏ tới nút cuối cùng. \
        Quá trình này sẽ tạo thành vòng ở cả hai hướng. </div> \
    <br><center><img src='img/v2.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Nhìn vào hai hình minh họa trên, bạn cần ghi nhớ: \
    <br> Next của Last Link trỏ tới First Link trong cả hai trường hợp với Danh sách liên kết đơn cũng như Danh sách liên kết đôi. \
    <br> Prev của First Link trỏ tới phần tử cuối của Danh sách liên kết với trường hợp Danh sách liên kết đôi. </div> \
    <div class='lesson-content'><b>IV. Các hoạt động cơ bản trên Danh sách liên kết vòng </b></div> \
    <div class ='lesson'> <b>Hoạt động chèn </b>: chèn một phần tử vào vị trí bắt đầu của Danh sách liên kết vòng. \
    <br><b>Hoạt động xóa </b>: xóa một phần tử của Danh sách liên kết vòng. \
    <br><b>Hiển thị </b>: hiển thị toàn bộ Danh sách liên kết vòng. </div>\
    <div class='lesson-content'><b>V. Hoạt động chèn trong Danh sách liên kết vòng </b></div> \
    <div class ='lesson'> Dưới đây là giải thuật minh họa hoạt động chèn trong Danh sách liên kết vòng dựa trên Danh sách liên kết đơn. </div> \
    <br><div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br>//Chèn link tại vị trí đầu tiên \
                <br>void insertFirst(int key, int data) { \
                <br>     //tạo một link \
                <br>     struct node *link = (struct node*) malloc(sizeof(struct node)); \
                <br>     link->key = key; \
                <br>     link->data= data; \
                <br>     if(isEmpty()) { \
                <br>           head = link; \
                <br>           head->next = head; \
                <br>     } else { \
                <br>           //trỏ nó tới first node cũ \
                <br>           link->next = head;  \
                <br>           //trỏ first tới first node mới \
                <br>           head = link; \
                <br>     } \
                <br> } \
            <br> } \
        </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>VI. Tính chất </b></div> \
    <div class ='lesson'> - Trong danh sách liên kết vòng, nút cuối cùng của danh sách sẽ trỏ lại đến nút đầu tiên, tạo thành một vòng đóng. \
    <br> - Tương tự như danh sách liên kết đôi, với danh sách liên kết vòng, việc di chuyển lùi (backward) và tiến (forward) là dễ dàng và hiệu quả. \
    <br> - Do tính chất vòng của danh sách, thao tác chèn và xóa phần tử giữa danh sách cũng thường nhanh chóng và dễ dàng hơn so với danh sách liên kết đơn. \
    <br> - Danh sách liên kết vòng không có nút kết thúc (tail) truyền thống như trong danh sách liên kết đơn. \
    <br> - Tăng tính linh hoạt của cấu trúc dữ liệu, cho phép truy cập ngược và một số thao tác chèn và xóa hiệu quả. </div> \
    <br> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Cấu trúc dữ liệu mảng là gì ? </b></div> \
    <div class ='lesson'> Mảng (Array) là một trong các cấu trúc dữ liệu cũ và quan trọng nhất. Mảng có thể lưu giữ một số phần tử cố định và các phần tử \
        này nền có cùng kiểu. Hầu hết các cấu trúc dữ liệu đều sử dụng mảng để triển khai giải thuật. \
    <br> <b> Phần tử </b>: Mỗi mục được lưu giữ trong một mảng được gọi là một phần tử. \
    <br> <b> Chỉ mục (Index) </b>: Mỗi vị trí của một phần tử trong một mảng có một chỉ mục số được sử dụng để nhận diện phần tử. \
    <br> <b> Mảng </b> gồm các bản ghi có kiểu giống nhau, có kích thước cố định, mỗi phần tử được xác định bởi chỉ số \
    <br> <b> Mảng </b> là cấu trúc dữ liệu được cấp phát lien tục cơ bản \
    <br> <b> Ưu điểm </b> : \
    <br> - Truy cập phàn tử với thời gian hằng số O(1) \
    <br> - Sử dụng bộ nhớ hiệu quả \
    <br> - Tính cục bộ về bộ nhớ \
    <br> <b> Nhược điểm </b> : \
    <br> - Không thể thay đổi kích thước của mảng khi chương trình dang thực hiện. </div> \
    <div class='lesson-content'><b>II. Mảng động </b></div> \
    <div class ='lesson'> <b>Mảng động (dynamic aray) </b>: cấp phát bộ nhớ cho mảng một cách động trong quá trình chạy chương trình trong C là malloc và calloc, trong C++ là new. \
    <br> Sử dụng mảng động ta bắt đầu với mảng có 1 phàn tử, khi số lượng phàn tử vượt qua khả năng của ảng thì ta gấp đôi \
    kích thước mảng cuc và copy phàn tử mảng cũ vào nửa đầu của mảng mới. \
    <br> <b> Ưu điểm </b> : \
    <br> - Tránh lãng phí bộ nhớ khi phải khai báo mảng có kích thước lớn ngay từ đầu. \
    <br> <<b> Nhược điểm </b> : \
    <br> - Phải thực hiện them thao tác copy phần tử mỗi khi thay đổi kích thước. \
    <br> - Một số thời gian thực hiện thao tác không còn là hằng số nữa. </div> \
    <div class='lesson-content'><b>III. Biểu diễn Cấu trúc dữ liệu mảng </b></div> \
    <div class ='lesson'> Mảng có thể được khai báo theo nhiều cách đa dạng trong các ngôn ngữ lập trình. Để minh họa, chúng ta sử dụng phép khai báo mảng trong ngôn ngữ C: </div> \
    <br><center><img src='img/m1.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Hình minh họa phần tử và chỉ mục: </div> \
    <br><center><img src='img/m2.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Dưới đây là một số điểm cần ghi nhớ về cấu trúc dữ liệu mảng: \
    <br> - Chỉ mục bắt đầu với 0. \
    <br> - Độ dài mảng là 10, nghĩa là mảng có thể lưu giữ 10 phần tử. \
    <br> - Mỗi phần tử đều có thể được truy cập thông qua chỉ mục của phần tử đó. </div> \
    <div class='lesson-content'><b>IV. Phép toán cơ bản được hỗ trợ bởi mảng </b></div> \
    <div class ='lesson'> <b> Duyệt </b>: In tất cả các phần tử mảng theo cách in từng phần tử một. \
    <br> <b> Chèn </b>: Thêm một phần tử vào mảng tại chỉ mục đã cho. \
    <br> <b> Xóa </b>: Xóa một phần tử từ mảng tại chỉ mục đã cho. \
    <br> <b> Tìm kiếm </b>: Tìm kiếm một phần tử bởi sử dụng chỉ mục hay bởi giá trị.\
    <br> <b> Cập nhật </b>: Cập nhật giá trị một phần tử tại chỉ mục nào đó. \
    <br><table border= '1'> \
        <tr> \
            <th>Kiểu dữ liệu</th> \
            <th>Giá trị mặc định</th> \
        </tr> \
        <tr> \
            <td>bool</td> \
            <td>false</td> \
        </tr> \
        <tr> \
            <td>char</td> \
            <td>0</td> \
        </tr> \
        <tr> \
            <td>int</td> \
            <td>0</td> \
        </tr> \
        <tr> \
            <td>float</td> \
            <td>0.0</td> \
        </tr> \
        <tr> \
            <td>double</td> \
            <td>0.0f</td> \
        </tr> \
        <tr> \
            <td>void</td> \
            <td> </td> \
        </tr> \
        <tr> \
            <td>wchar_t</td> \
            <td>0</td> \
        </tr> \
    </table> \
    </div>  \
    <div class='lesson-content'><b>V. Hoạt động chèn phần tử vào mảng </b></div> \
    <div class ='lesson'> Hoạt động chèn là để chèn một hoặc nhiều phần tử dữ liệu vào trong một mảng. \
        Tùy theo yêu cầu, phần tử mới có thể được chèn vào vị trí đầu, vị trí cuối hoặc bất kỳ vị trí chỉ mục đã cho nào của mảng. \
    <br> Ví dụ: Giả sử LA là một mảng tuyến tính không có thứ tự có N phần tử và K là một số nguyên dương thỏa mãn K <= N. Dưới đây là giải thuật chèn phần tử A vào vị trí thứ K của mảng LA. \
    <br><b>Giải thuật </b> \
    <br><div id='codeContainer'> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> 1. Bắt đầu \
                <br> 2. Gán J=N \
                <br> 3. Gán N = N+1 \
                <br> 4. Lặp lại bước 5 và 6 khi J >= K \
                <br> 5. Gán LA[J+1] = LA[J] \
                <br> 6. Gán J = J-1 \
                <br> 7. Gán LA[K] = ITEM \
                <br>  8. Kết thúc \
        </code> </div> </pre> </span> </div> \
    <br><b> Sau đây là code đầy đủ của giải thuật trên trong ngôn ngữ C </b> : </div>\
    <br><div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> #include <stdio.h> \
                <br> main() { \
                <br>     int LA[] = {1,3,5,7,8}; \
                <br>     int item = 10, k = 3, n = 5; \
                <br>     int i = 0, j = n; \
                <br>      \
                <br>     printf('Danh sach phan tu trong mang ban dau:'); \
                <br>     for(i = 0; i < n; i++) { \
                <br>         printf('LA[%d] = %d',i,LA[i]); \
                <br>     }  \
                <br>     n = n + 1;\
                <br>     while( j >= k){  \
                <br>           LA[j+1] = LA[j]; \
                <br>           j = j - 1; \
                <br>     } \
                <br>     LA[k] = item; \
                <br>     printf('Danh sach phan tu cua mang sau hoat dong chen:'); \
                <br>     for(i = 0; i < n; i++) { \
                <br>         printf('LA[%d] = %d',i,LA[i]); \
                <br>     } \
                <br> } \
            <br> } \
        </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Biên dịch và chạy chương trình C trên sẽ cho kết quả: </div> \
    <br><center><img src='img/m4.png' alt='Bubble Sort Image'></center> \
    <div class='lesson-content'><b>VI. Hoạt động xóa phần tử từ mảng </b></div> \
    <div class ='lesson'> Hoạt động xóa là xóa một phần tử đang tồn tại từ một mảng và tổ chức lại các phần tử còn lại trong mảng đó. \
    <br> Ví dụ: Giả sử LA là một mảng tuyến tính có N phần tử và K là số nguyên dương thỏa mãn K <= N. Dưới đây là thuật toán để xóa một phần tử có trong mảng LA tại vị trí K. \
    <br><b>Giải thuật </b> \
    <br><div id='codeContainer'> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> 1. Bắt đầu \
                <br> 2. Gán J=K \
                <br> 3. Lặp lại bước 4 và 5 trong khi J < N \
                <br> 4. Gán LA[J-1] = LA[J] \
                <br> 5. Gán J = J+1 \
                <br> 6. Gán N = N-1 \
                <br> 7. Kết thúc \
        </code> </div> </pre> </span> </div> \
    <br><b> Sau đây là code đầy đủ của giải thuật trên trong ngôn ngữ C </b> : </div>\
    <br><div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> #include <stdio.h> \
                <br> main() { \
                <br>     int LA[] = {1,3,5,7,8}; \
                <br>     int k = 3, n = 5; \
                <br>     int i, j ; \
                <br>      \
                <br>     printf('Danh sach phan tu trong mang ban dau:'); \
                <br>     for(i = 0; i < n; i++) { \
                <br>         printf('LA[%d] = %d',i,LA[i]); \
                <br>     }  \
                <br>     j = k;\
                <br>     while( j < n) {  \
                <br>           LA[j-1] = LA[j]; \
                <br>           j = j + 1; \
                <br>     } \
                <br>     n = n - 1; \
                <br>     printf('Danh sach phan tu cua mang sau hoat dong xoa:'); \
                <br>     for(i = 0; i < n; i++) { \
                <br>         printf('LA[%d] = %d',i,LA[i]); \
                <br>     } \
                <br> } \
            <br> } \
        </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Biên dịch và chạy chương trình C trên sẽ cho kết quả: </div> \
    <br><center><img src='img/m5.png' alt='Bubble Sort Image'></center> \
    <div class='lesson-content'><b>VII. Hoạt động tìm kiếm </b></div> \
    <div class ='lesson'> Bạn có thể thực hiện hoạt động tìm kiếm phần tử trong mảng dựa vào giá trị hay chỉ mục của phần tử đó. \
    <br> Ví dụ: Giả sử LA là một mảng tuyến tính có N phần tử và K là số nguyên dương thỏa mãn K <= N. Dưới đây là giải thuật để tìm một phần tử ITEM bởi sử dụng phương pháp tìm kiếm tuần tự (hay tìm kiếm tuyến tính). \
    <br><b>Giải thuật </b> \
    <br><div id='codeContainer'> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> 1. Bắt đầu \
                <br> 2. Gán J=0 \
                <br> 3. Lặp lại bước 4 và 5 trong khi J < N \
                <br> 4. Nếu LA[J] là bằng ITEM THÌ TỚI BƯỚC 6 \
                <br> 5. Gán J = J+1 \
                <br> 6. In giá trị J, ITEM \
                <br> 7. Kết thúc \
        </code> </div> </pre> </span> </div> \
    <br><b> Sau đây là code đầy đủ của giải thuật trên trong ngôn ngữ C </b> : </div>\
    <br><div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> #include <stdio.h> \
                <br> main() { \
                <br>     int LA[] = {1,3,5,7,8}; \
                <br>     int item = 5, n = 5; \
                <br>     int i = 0, j = 0; \
                <br>      \
                <br>     printf('Danh sach phan tu trong mang ban dau:'); \
                <br>     for(i = 0; i < n; i++) { \
                <br>         printf('LA[%d] = %d',i,LA[i]); \
                <br>     }  \
                <br>     j = k;\
                <br>     while( j < n) {  \
                <br>           if( LA[j] == item ){ \
                <br>           break; \
                <br>           } \
                <br>           j = j + 1; \
                <br>     } \
                <br>     printf('Tim thay phan tu %d tai vi tri %d', item, j+1); \
                <br> } \
            <br> } \
        </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Biên dịch và chạy chương trình C trên sẽ cho kết quả: </div> \
    <br><center><img src='img/m6.png' alt='Bubble Sort Image'></center> \
    <div class='lesson-content'><b>VIII. Hoạt động cập nhật (Hoạt động update) </b></div> \
    <div class ='lesson'> Hoạt động cập nhật là update giá trị của phần tử đang tồn tại trong mảng tại chỉ mục đã cho. \
    <br> Ví dụ: Giả sử LA là một mảng tuyến tính có N phần tử và K là số nguyên dương thỏa mãn K <= N. Dưới đây là giải thuật để update giá trị phần tử tại vị trí K của mảng LA. \
    <br><b>Giải thuật </b> \
    <br><div id='codeContainer'> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> 1. Bắt đầu \
                <br> 2. Thiết lập LA[K-1] = ITEM \
                <br> 3. Kết thúc \
        </code> </div> </pre> </span> </div> \
    <br><b> Sau đây là code đầy đủ của giải thuật trên trong ngôn ngữ C </b> : </div>\
    <br><div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> #include <stdio.h> \
                <br> main() { \
                <br>     int LA[] = {1,3,5,7,8}; \
                <br>     int k = 3, n = 5, item = 10; \
                <br>     int i, j; \
                <br>      \
                <br>     printf('Danh sach phan tu trong mang ban dau:'); \
                <br>     for(i = 0; i < n; i++) { \
                <br>         printf('LA[%d] = %d',i,LA[i]); \
                <br>     }  \
                <br>     LA[k-1] = item; \
                <br>     printf('Danh sach phan tu trong mang sau hoat dong update: ');  \
                <br>     for(i = 0; i<n; i++) { \
                <br>           printf('LA[%d] = %d', i, LA[i]); \
                <br>     } \
                <br> } \
            <br> } \
        </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Biên dịch và chạy chương trình C trên sẽ cho kết quả: </div> \
    <br><center><img src='img/m7.png' alt='Bubble Sort Image'></center> \
    <div class='lesson-content'><b>IX. Tính chất </b></div> \
    <div class ='lesson'> - Các phần tử trong mảng được lưu trữ liên tục trong bộ nhớ, giúp quá trình truy cập và xử lý dữ liệu nhanh chóng. \
    <br> - Bạn có thể truy cập bất kỳ phần tử nào trong mảng bằng cách sử dụng chỉ số (index), cho phép truy cập ngẫu nhiên. \
    <br> - Mảng có kích thước cố định khi được khởi tạo, và không thể thay đổi kích thước của mảng một cách linh hoạt. \
    <br> - Mỗi phần tử trong mảng có cùng một kiểu dữ liệu, điều này giúp cải thiện hiệu suất và quản lý dữ liệu. \
    <br> - Sắp xếp mảng làm việc hiệu quả và dễ dàng, đặc biệt là khi sử dụng các thuật toán sắp xếp phổ biến như QuickSort hoặc MergeSort. </div> \
    <br> \
    <br> \
    <br> \
    </div>", 
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Tìm kiếm tuyến tính (Linear Search) là gì ? </b></div> \
    <div class ='lesson'> Linear Search là một giải thuật tìm kiếm rất cơ bản. Trong kiểu tìm kiếm này, một hoạt động tìm kiếm \
    liên tiếp được diễn ra qua tất cả từng phần tử. Mỗi phần tử đều được kiểm tra và nếu tìm thấy bất kỳ kết nối nào thì phần tử cụ thể đó được trả về; \
    nếu không tìm thấy thì quá trình tìm kiếm tiếp tục diễn ra cho tới khi tìm kiếm hết dữ liệu. </div> \
    <br><center><img src='img/li.gif' alt='Bubble Sort Image'></center> \
    <br><b>Giải thuật tìm kiếm tuyến tính</b> \
    <br><div id='codeContainer'> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> Giải thuật tìm kiếm tuyến tính ( Mảng A, Giá trị x) \
                <br> Bước 1: Thiết lập i thành 1 \
                <br> Bước 2: Nếu i > n thì chuyển tới bước 7 \
                <br> Bước 3: Nếu A[i] = x thì chuyển tới bước 6 \
                <br> Bước 4: Thiết lập i thành i + 1 \
                <br> Bước 5: Tới bước 2 \
                <br> Bước 6: In phần tử x được tìm thấy tại chỉ mục i và tới bước 8 \
                <br> Bước 7: In phần tử không được tìm thấy \
                <br> Bước 8: Thoát \
        </code> </div> </pre> </span> </div> \
    <br><b>Giải thuật mẫu cho tìm kiếm tuyến tính</b> \
    <br><div id='codeContainer'> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code> \
            <br> Bắt đầu hàm linear_search (list, value) \
            <br>    for mỗi phần tử trong danh sách \
            <br>       if match item == value \
            <br>          return vị trí của phần tử \
            <br>       kết thúc if \
            <br>    kết thúc for \
            <br> kết thúc hàm \
    </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>II. Tính chất </b></div> \
    <div class ='lesson'> -  Linear Search duyệt qua từng phần tử của dãy dữ liệu một cách tuần tự từ đầu đến cuối cho đến khi tìm thấy phần tử cần tìm hoặc duyệt qua toàn bộ dãy. \
    <br> - Linear Search là thuật toán đơn giản và dễ cài đặt. Nó không đòi hỏi dãy dữ liệu được sắp xếp và phù hợp cho các tình huống khi không có thông tin nào về thứ tự của dãy. \
    <br> - Linear Search không cần thêm bộ nhớ phụ ngoài việc lưu trữ biến tạm thời. \
    <br><b> Độ phức tạp thời gian </b> của Linear Search là <b>O(n)</b>, trong đó n là số lượng phần tử trong dãy dữ liệu. Bởi vì trong trường hợp xấu nhất, phải duyệt qua toàn bộ dãy để tìm kiếm phần tử cần. </div> \
    <br> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Giải thuật tìm kiếm nhị phân (Binary Search) là gì ? </b></div> \
    <div class ='lesson'> Binany Search (Tìm kiếm nhị phân) là một giải thuật tìm kiếm nhanh với độ phức tạp thời gian chạy là Ο(log n). \
        Giải thuật tìm kiếm nhị phân làm việc dựa trên nguyên tắc chia để trị (Divide and Conquer). \
        Để giải thuật này có thể làm việc một cách chính xác thì tập dữ liệu nên ở trong dạng đã được sắp xếp. \
    <br> Binary Search tìm kiếm một phần tử cụ thể bằng cách so sánh phần tử tại vị trí giữa nhất của tập dữ liệu. \
    Nếu tìm thấy kết nối thì chỉ mục của phần tử được trả về. Nếu phần tử cần tìm là lớn hơn giá trị phần tử giữa thì phần tử cần tìm được tìm trong mảng con \
    nằm ở bên phải phần tử giữa; nếu không thì sẽ tìm ở trong mảng con nằm ở bên trái phần tử giữa. \
    Tiến trình sẽ tiếp tục như vậy trên mảng con cho tới khi tìm hết mọi phần tử trên mảng con này. </div> \
    <div class='lesson-content'><b>II. Cách Binary Search làm việc </b></div> \
    <div class ='lesson'> Để Binary Search làm việc thì mảng phải cần được sắp xếp. Để tiện cho việc theo dõi, mình sẽ cung cấp thêm các hình minh họa tương ứng với mỗi bước. \
    <br> Giả sử chúng ta cần tìm vị trí của giá trị 31 trong một mảng bao gồm các giá trị như hình dưới đây bởi sử dụng Binary Search: </div> \
    <br><center><img src='img/b1.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Đầu tiên, chúng ta chia mảng thành hai nửa theo phép toán sau: \
    <br><center><i> chỉ-mục-giữa = ban-đầu + (cuối + ban-đầu)/ 2 </i></center> \
    <br> Với ví dụ trên là 0 + (9 – 0)/ 2 = 4 (giá trị là 4.5). Do đó 4 là chỉ mục giữa của mảng. </div> \
    <br><center><img src='img/b2.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Bây giờ chúng ta so sánh giá trị phần tử giữa với phần tử cần tìm. Giá trị phần tử giữa là 27 và phần tử cần tìm là 31, \
        do đó là không kết nối. Bởi vì giá trị cần tìm là lớn hơn nên phần tử cần tìm sẽ nằm ở mảng con bên phải phần tử giữa. </div> \
    <br><center><img src='img/b3.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Chúng ta thay đổi giá trị ban-đầu thành chỉ-mục-giữa + 1 và lại tiếp tục tìm kiếm giá trị chỉ-mục-giữa. </div>\
    <br><center><i> ban-đầu = chỉ-mục-giữa + 1 \
    <br> chỉ-mục-giữa = ban-đầu + (cuối + ban-đầu)/ 2 </i></center> \
    <div class ='lesson'> Bây giờ chỉ mục giữa của chúng ta là 7. Chúng ta so sánh giá trị tại chỉ mục này với giá trị cần tìm. </div> \
    <br><center><img src='img/b4.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Giá trị tại chỉ mục 7 là không kết nối, và ngoài ra giá trị cần tìm là nhỏ hơn giá trị tại chỉ mục 7 do đó chúng ta cần tìm trong mảng con bên trái của chỉ mục giữa này. </div> \
    <br><center><img src='img/b5.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Tiếp tục tìm chỉ-mục-giữa lần nữa. Lần này nó có giá trị là 5. </div> \
    <br><center><img src='img/b6.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> So sánh giá trị tại chỉ mục 5 với giá trị cần tìm và thấy rằng nó kết nối. </div> \
    <br><center><img src='img/b7.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Do đó chúng ta kết luận rằng giá trị cần tìm 31 được lưu giữ tại vị trí chỉ mục 5. \
    <br> Binary Search chia đôi lượng phần tử cần tìm và do đó giảm số lượng phép so sánh cần thực hiện nên giải thuật tìm kiếm này được thực hiện khá nhanh. </div> \
    <div class='lesson-content'><b>III. Giải thuật mẫu cho Binary Search </b></div> \
    <div class ='lesson'> Dưới đây là code mẫu cho giải thuật tìm kiếm nhị phân: </div> \
    <br><div id='codeContainer'> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code> \
            <br> Giải thuật tìm kiếm nhị phân (Binary Search) \
            <br>    A ← một mảng đã được sắp xếp \
            <br>    n ← kích cỡ mảng \
            <br>    x ← giá trị để tìm kiếm trong mảng \
            <br> \
            <br>    gán lowerBound = 1 \
            <br>    gán upperBound = n  \
            <br> \
            <br>    while x not found \
            <br>         if upperBound < lowerBound \
            <br>              EXIT: x không tồn tại. \
            <br>         gán midPoint = lowerBound + ( upperBound - lowerBound ) / 2 \
            <br>         if A[midPoint] < x \
            <br>              gán lowerBound = midPoint + 1 \
            <br>         if A[midPoint] > x \
            <br>              gán upperBound = midPoint - 1  \
            <br>         if A[midPoint] = x  \
            <br>              EXIT: x được tìm thấy tại midPoint \
            <br>    kết thúc while \
            <br> kết thúc giải thuật \
    </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>IV. Tính chất </b></div> \
    <div class ='lesson'> - Binary Search yêu cầu dãy dữ liệu đã được sắp xếp (thường là sắp xếp tăng dần hoặc giảm dần). Điều này là quan trọng để có thể áp dụng thuật toán chia để trị. \
    <br> - Binary Search sử dụng phương pháp chia để trị để giảm bớt phạm vi tìm kiếm, tìm kiếm ở giữa dãy và quyết định tiếp tục tìm kiếm ở nửa phía trước hoặc nửa phía sau của dãy dữ liệu. \
    <br> - Đối với dãy dữ liệu lớn và đã sắp xếp, Binary Search có hiệu suất cao hơn so với Linear Search. Độ phức tạp thời gian của Binary Search là O(log n), trong đó n là số lượng phần tử trong dãy. \
    <br> - Mỗi bước của Binary Search loại trừ một nửa dãy dữ liệu, giảm đáng kể thời gian tìm kiếm so với Linear Search. \
    <br><b> Độ phức tạp thời gian </b> của Binary Search là <b>O(log n)</b>, trong đó n là số lượng phần tử trong dãy. Điều này là do mỗi lần thực hiện, phạm vi tìm kiếm giảm đi một nửa. </div> \
    <br> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Giải thuật Tìm kiếm nội suy (Interpolation Search) là gì ? </b></div> \
    <div class ='lesson'> Tìm kiếm nội suy (Interpolation Search) là biến thể cải tiến của Tìm kiếm nhị phân (Binary Search). \
        Để giải thuật tìm kiếm này làm việc chính xác thì tập dữ liệu phải được sắp xếp. \
    <br> Binary Search có lợi thế lớn về độ phức tạp thời gian khi so sánh với Linear Search. \
    Linear Search có độ phức tạp trường hợp xấu nhất là Ο(n) trong khi Binary Search là Ο(log n). </div> \
    <div class='lesson-content'><b>II. Xác định vị trí trong Binary Search </b></div> \
    <div class ='lesson'> Trong Binary Search, nếu dữ liệu cần tìm không được tìm thấy thì phần còn lại của danh sách được phân chia thành hai phần: \
        phần bên trái (chứa giá trị nhỏ hơn) và phần bên phải (chứa giá trị lớn hơn). Sau đó tiến trình tìm kiếm được thực hiện trên một trong hai phần này. </div> \
    <br><center><img src='img/in1.jpg' alt='Bubble Sort Image'></center> \
    <div class='lesson-content'><b>III. Dò vị trí trong Tìm kiếm nội suy (Interpolation Search) </b></div> \
    <div class ='lesson'> Tìm kiếm nội suy tìm kiếm một phần tử cụ thể bằng việc tính toán vị trí dò (Probe Position). Ban đầu thì vị trí dò là vị trí của phần tử nằm ở giữa nhất của tập dữ liệu. </div> \
    <br><center><img src='img/in2.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Nếu tìm thấy kết nối thì chỉ mục của phần tử được trả về. Để chia danh sách thành hai phần, chúng ta sử dụng phương thức sau: </div>\
    <br><div id='codeContainer'> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code> \
            <br> mid = Lo + ((Hi - Lo) / (A[Hi] - A[Lo])) * (X - A[Lo]) \
            <br>    Trong đó: \
            <br>    A    = danh sách \
            <br>    Lo   = chỉ mục thấp nhất của danh sách \
            <br>    Hi   = chỉ mục cao nhất của danh sách \
            <br>    A[n] = giá trị được lưu giữ tại chỉ mục n trong danh sách \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Nếu phần tử cần tìm có giá trị lớn hơn phần tử ở giữa thì phần tử cần tìm sẽ ở mảng con bên phải phần tử ở giữa và chúng ta lại tiếp tục tính vị trí dò; \
        nếu không phần tử cần tìm sẽ ở mảng con bên trái phần tử ở giữa. \
        Tiến trình này tiến tụp diễn ra trên các mảng con cho tới khi kích cỡ của mảng con giảm về 0. \
    <br> Độ phức tạp thời gian chạy của Interpolation Search là <b>Ο(log (log n)) </b>, trong khi của Binary Search là <b>Ο(log n) </b>. </div> \
    <div class='lesson-content'><b>IV. Giải thuật Tìm kiếm nội suy </b></div> \
    <div class ='lesson'> Bởi vì đây là sự cải tiến của giải thuật Binary Search nên chúng ta sẽ chỉ đề cập tới các bước để tìm kiếm chỉ mục của giá trị cần tìm bởi sử dụng vị trí dò. </div> \
    <br><div id='codeContainer'> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code> \
            <br> Bước 1 : Bắt đầu tìm kiếm dữ liệu từ phần giữa của danh sách \
            <br> Bước 2: Nếu đây là một so khớp (một kết nối), thì trả về chỉ mục của phần tử, và thoát. \
            <br> Bước 3 : Nếu không phải là một so khớp, thì là vị trí dò. \
            <br> Bước 4 : Chia danh sách bởi sử dụng phép tính tìm vị trí dò và tìm vị trí giữa mới. \
            <br> Bước 5 : Nếu dữ liệu cần tìm lớn hơn giá trị tại vị trí giữa, thì tìm kiếm trong mảng con bên phải. \
            <br> Bước 6 : Nếu dữ liệu cần tìm nhỏ hơn giá trị tại vị trí giữa, thì tìm kiếm trong mảng con bên trái \
            <br> Bước 7 : Lặp lại cho tới khi tìm thấy so khớp \
    </code> </div> </pre> </span> </div> \
    <br><b>Code mẫu cho giải thuật Tìm kiếm nội suy</b> \
    <br><div id='codeContainer'> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code> \
            <br> A → Mảng \
            <br> N → Kích cỡ của A \
            <br> X → Giá trị cần tìm \
            <br>  \
            <br> hàm tìm kiếm nội suy Interpolation_Search() \
            <br>     Gán Lo  →  0 \
            <br>     Gán Mid → -1 \
            <br>     Gán Hi  →  N-1 \
            <br> \
            <br>     While X không so khớp \
            <br>          if Lo bằng Hi OR A[Lo] bằng A[Hi]  \
            <br>              EXIT: Thất bại, không tìm thấy X \
            <br>          kết thúc if \
            <br> \
            <br>          Gán Mid = Lo + ((Hi - Lo) / (A[Hi] - A[Lo])) * (X - A[Lo]) \
            <br> \
            <br>          if A[Mid] = X \
            <br>              EXIT: Thành công, tìm thấy tại Mid \
            <br>          else \
            <br>              if A[Mid] < X \
            <br>                  Thiết lập Lo thành Mid+1 \
            <br>              else if A[Mid] > X \
            <br>                   Thiết lập Hi thành Mid-1 \
            <br>              kết thúc if \
            <br>          kết thúc if \
            <br>     Kết thúc While \
            <br> Kết thúc hàm \
    </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>V. Tính chất </b></div> \
    <div class ='lesson'> - Tương tự như Binary Search, Interpolation Search yêu cầu dãy dữ liệu đã được sắp xếp. Điều này là để có thể áp dụng phương pháp tìm kiếm nội suy. \
    <br> - Interpolation Search sử dụng phương pháp nội suy để ước lượng vị trí gần đúng của phần tử cần tìm dựa trên giá trị của nó và giá trị ở hai đầu của dãy. \
    <br> - Nếu dãy dữ liệu được phân bố đều, Interpolation Search có thể hiệu quả hơn so với Binary Search. Tuy nhiên, đối với dãy có sự phân bố không đều, hiệu suất có thể giảm. \
    <br> - Trong trường hợp trung bình, <b>độ phức tạp thời gian</b> của Interpolation Search là <b>O(log log n)</b>, nơi n là số lượng phần tử trong dãy. Tuy nhiên, trong trường hợp xấu nhất, độ phức tạp là <b>O(n)</b>, khi dãy không đều phân bố và dãy gần giống với dãy tăng dần. </div> \
    <br> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Hash Table là gì? </b></div> \
    <div class ='lesson'> Cấu trúc dữ liệu Hash Table là một cấu trúc dữ liệu lưu giữ dữ liệu theo cách thức liên hợp. \
        Trong Hash Table, dữ liệu được lưu giữ trong định dạng mảng, trong đó các giá trị dữ liệu có giá trị chỉ mục riêng. \
        Việc truy cập dữ liệu trở nên nhanh hơn nếu chúng ta biết chỉ mục của dữ liệu cần tìm. \
    <br> Do đó, với loại cấu trúc dữ liệu Hash Table này thì các hoạt động chèn và hoạt động tìm kiếm sẽ diễn ra rất nhanh, bất chấp kích cỡ của dữ liệu là bao nhiêu. \
    Hash Table sử dụng mảng như là một kho lưu giữ trung gian và sử dụng kỹ thuật Hash để tạo chỉ mục tại nơi phần tử được chèn vào. </div> \
    <div class='lesson-content'><b>II. Kỹ thuật Hashing </b></div> \
    <div class ='lesson'> Hashing là một kỹ thuật để chuyển đổi một dãy các giá trị khóa (key) vào trong một dãy các giá trị chỉ mục (index) của một mảng. \
        Chúng ta đang sử dụng toán tử lấy phần dư để thu được một dãy các giá trị khóa. \
        Giả sử có một HashTable có kích cỡ là 20, và dưới đây là các phần tử cần được lưu giữ. Phần tử trong định dạng (key, value). </div> \
    <br><center><img src='img/h1.png' alt='Bubble Sort Image'></center> \
    <div class='lesson-content'><b>III. Kỹ thuật Dò tuyến tính (Linear Probing) </b></div> \
    <div class ='lesson'> Chúng ta thấy rằng có thể xảy ra trường hợp mà kỹ thuật Hashing được sử dụng để tạo chỉ mục đã tồn tại trong mảng. \
        Trong tình huống này, chúng ta cần tìm kiếm vị trí trống kế tiếp trong mảng bằng việc nhìn vào trong ô tiếp theo cho tới khi chúng ta tìm thấy một ô trống. \
        Kỹ thuật này được gọi là Dò tuyến tính (Linear Probing). </div> \
    <br><center><img src='img/h2.png' alt='Bubble Sort Image'></center> \
    <div class='lesson-content'><b>IV. Các hoạt động cơ bản trên Hash Table </b></div> \
    <div class ='lesson'> <b> Hoạt động tìm kiếm </b>: tìm kiếm một phần tử trong cấu trúc dữ liệu HashTable. \
    <br><b> Hoạt động chèn </b>: chèn một phần tử vào trong cấu trúc dữ liệu HashTable. \
    <br><b> Hoạt động xóa </b>: xóa một phần tử từ cấu trúc dữ liệu HashTable. </div> \
    <div class='lesson-content'><b>V. Phần tử dữ liệu (DataItem) trong HashTable </b></div> \
    <div class ='lesson'> Phần tử dữ liệu bao gồm: data và key. Dựa vào key này chúng ta có thể thực hiện các hoạt động tìm kiếm trong cấu trúc dữ liệu HashTable. </div> \
    <br><div id='codeContainer'> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code> \
            <br> struct DataItem { \
            <br>    int data;   \
            <br>    int key; \
            <br> }; \
    </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>VI. Phương thức của cấu trúc dữ liệu Hash Table </b></div> \
    <div class ='lesson'> Xác định một phương thức để ước lượng Hash Code của key của phần tử dữ liệu. </div> \
    <br><div id='codeContainer'> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code> \
            <br> int hashCode(int key){ \
            <br>    return key % SIZE;   \
            <br> }; \
    </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>VII. Hoạt động tìm kiếm trong Hash Table </b></div> \
    <div class ='lesson'> Mỗi khi một phần tử được tìm kiếm: ước lượng giá trị hash code của key đã truyền vào và sau đó xác định vị trí của phần tử \
        bởi sử dụng giá trị hash code đó giống như là chỉ mục trong mảng. Sử dụng kỹ thuật <b>Dò tuyến tính (Linear Probing)</b> \
        để lấy phần tử nếu như không tìm thấy phần tử với giá trị hash code đã ước lượng. </div> \
    <br><div id='codeContainer'> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code> \
            <br> struct DataItem *search(int key){ \
            <br>     //lấy giá trị hash   \
            <br>     int hashIndex = hashCode(key); \
            <br> \
            <br>     //di chuyển trong mảng cho tới khi gặp ô trống \
            <br>     while(hashArray[hashIndex] != NULL){ \
            <br>           if(hashArray[hashIndex]->key == key) \
            <br>               return hashArray[hashIndex]; \
            <br>           //tới ô tiếp theo \
            <br>           ++hashIndex; \
            <br>           //bao quanh hash table \
            <br>           hashIndex %= SIZE; \
            <br>     } \
            <br>     return NULL; \
            <br> } \
    </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>VIII. Hoạt động chèn trong Hash Table </b></div> \
    <div class ='lesson'> Mỗi khi một phần tử được chèn: ước lượng giá trị hash code của key đã truyền và xác định vị trí của phần tử \
        bởi sử dụng giá trị hash code đó giống như là chỉ mục trong mảng. Sử dụng <b> Dò tuyến tính (Linear Probing)</b> \
        cho vị trí trống nếu phần tử được tìm thấy với giá trị hash code đã ước lượng. </div> \
    <br><div id='codeContainer'> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code> \
            <br> void insert(int key,int data){ \
            <br>     struct DataItem *item = (struct DataItem*) malloc(sizeof(struct DataItem));   \
            <br>     item->data = data; \
            <br>     item->key = key; \
            <br> \
            <br>     //Lấy giá trị hash \
            <br>     int hashIndex = hashCode(key);  \
            <br>  \
            <br>     //di chuyển trong mảng cho tới khi gặp ô trống hoặc bị xóa \
            <br>     while(hashArray[hashIndex] != NULL && hashArray[hashIndex]->key != -1){ \
            <br>           //tới ô tiếp theo \
            <br>           ++hashIndex; \
            <br>  \
            <br>           //bao quanh hash table \
            <br>           hashIndex %= SIZE; \
            <br>     } \
            <br>     hashArray[hashIndex] = item; \
            <br> } \
    </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>IX. Hoạt động xóa trong Hash Table </b></div> \
    <div class ='lesson'> Mỗi khi một phần tử cần được xóa: ước lượng giá trị hash code của key đã truyền vào và sau đó xác định vị trí của phần tử \
        bởi sử dụng giá trị hash code đó giống như là chỉ mục trong mảng. Sử dụng <b> Dò tuyến tính (Linear Probing) </b> để lấy phần tử \
        nếu như không tìm thấy phần tử với giá trị hash code đã ước lượng. Khi tìm thấy, lưu trữ một phần tử giả tại đây để giữ hiệu suất của hash table. </div> \
    <br><div id='codeContainer'> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code> \
            <br> struct DataItem* delete(struct DataItem* item){ \
            <br>     int key = item->key;   \
            <br> \
            <br>     //lấy giá trị hash \
            <br>     int hashIndex = hashCode(key);\
            <br> \
            <br>     //di chuyển trong mảng cho tới khi gặp ô trống  \
            <br>     while(hashArray[hashIndex] !=NULL){ \
            <br>           if(hashArray[hashIndex]->key == key){  \
            <br>                struct DataItem* temp = hashArray[hashIndex]; \
            <br> \
            <br>                //gán một phần tử giả tại vị trí bị xóa \
            <br>                hashArray[hashIndex] = dummyItem; \
            <br>                return temp; \
            <br>           } \
            <br>           //tới ô tiếp theo \
            <br>           ++hashIndex; \
            <br>           //bao quanh hash table \
            <br>           hashIndex %= SIZE; \
            <br>     }  \
            <br>     return NULL; \
            <br> } \
    </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>X. Tính chất </b></div> \
    <div class ='lesson'> - Hash Table cung cấp khả năng tìm kiếm hiệu quả với độ phức tạp trung bình O(1) cho các thao tác tìm kiếm, thêm và xóa, trong trường hợp lý tưởng. \
    <br> - Hash Table sử dụng hàm băm để ánh xạ khóa (key) thành một vị trí trong bảng. Khi hàm băm được thiết kế tốt, các giá trị phân bố đều, giảm độ chệch và tăng hiệu suất. \
    <br> - Hash Table có khả năng linh hoạt với các kiểu dữ liệu khác nhau cho cả khóa và giá trị. \
    <br> - Hash Table có thể tiết kiệm không gian bộ nhớ nếu được sử dụng hiệu quả. Tuy nhiên, nếu hàm băm không tốt, có thể dẫn đến xung đột và tăng kích thước bảng, làm tăng không gian bộ nhớ sử dụng. \
    <br> - Trong trường hợp tốt, Hash Table có thể cung cấp tốc độ tìm kiếm rất nhanh, vượt qua nhiều thuật toán tìm kiếm khác đối với các tập dữ liệu lớn. \
    <br> - Trong trường hợp lý tưởng, <b>độ phức tạp</b> của thao tác truy cập (tìm kiếm) trong Hash Table là <b>O(1)</b>. Tuy nhiên, trong <b>trường hợp xấu nhất</b>, nếu xảy ra xung đột và cần thực hiện tìm kiếm tuyến tính, độ phức tạp có thể là <b>O(n)</b>, với n là số lượng phần tử trong bảng băm. </div> \
    <br> \
    <br> \
    <br> \
    </div> ",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Cấu trúc dữ liệu đồ thị là gì ? </b></div> \
    <div class ='lesson'> Một đồ thị (đồ thị) là một dạng biểu diễn hình ảnh của một tập các đối tượng, trong đó các cặp đối tượng được kết nối bởi các link. \
        Các đối tượng được nối liền nhau được biểu diễn bởi các điểm được gọi là <b>các đỉnh (vertices) </b>, và các link mà kết nối các đỉnh với nhau được gọi là <b>các cạnh (edges) </b>. \
    <br> Nói chung, một đồ thị là một cặp các tập hợp (V, E), trong đó V là tập các đỉnh và E là tập các cạnh mà kết nối các cặp điểm. Bạn theo dõi đồ thị sau: \
    <br><center><img src='img/g1.jpg' alt='Bubble Sort Image'></center> \
    <br> Trong đồ thị trên: \
    <br>   V = {a, b, c, d, e} \
    <br>   E = {ab, ac, bd, cd, de} </div> \
    <div class='lesson-content'><b>II. Cấu trúc dữ liệu đồ thị (Graph) </b></div> \
    <div class ='lesson'> Các hình toán học có thể được biểu diễn trong cấu trúc dữ liệu. Chúng ta có thể biểu diễn một hình bởi sử dụng một mảng các đỉnh và \
        một mảng hai chiều của các cạnh. Trước khi tiếp tục, chúng ta tìm hiểu một vài khái niệm quan trọng sau: \
    <br><b> Đỉnh (Vertex) </b>: Mỗi nút của hình được biểu diễn như là một đỉnh. Trong ví dụ dưới đây, các hình tròn biểu diễn các đỉnh. \
        Do đó, các điểm từ A tới G là các đỉnh. Chúng ta có thể biểu diễn các đỉnh này bởi sử dụng một mảng, \
        trong đó đỉnh A có thể được nhận diện bởi chỉ mục 0, điểm B là chỉ mục 1, … như hình dưới. \
    <br><b> Cạnh (Edge) </b>: Cạnh biểu diễn một đường nối hai đỉnh. Trong hình dưới, các đường nối A và B, B và C, … là các cạnh. \
        Chúng ta có thể sử dụng một mảng hai chiều để biểu diễn các cạnh này. Trong ví dụ dưới, AB có thể được biểu diễn như là 1 tại hàng 0; BC là 1 tại hàng 1, cột 2,… \
    <br><b> Kề nhau </b>: Hai đỉnh là kề nhau nếu chúng được kết nối với nhau thông qua một cạnh. Trong hình dưới, B là kề với A; C là kề với B,… \
    <br><b> Đường </b>: Đường biểu diễn một dãy các cạnh giữa hai đỉnh. Trong hình dưới, ABCD biểu diễn một đường từ A tới D. </div> \
    <br><center><img src='img/g2.jpg' alt='Bubble Sort Image'></center> \
    <div class='lesson-content'><b>III. Các thao tác cơ bản trên cấu trúc dữ liệu đồ thị </b></div> \
    <div class ='lesson'> <b>Thêm đỉnh </b>: Thêm một đỉnh vào trong đồ thị. \
    <br> <b>Thêm cạnh </b>: Thêm một cạnh vào giữa hai đỉnh của một đồ thị. \
    <br> <b>Hiển thị đỉnh </b>: Hiển thị một đỉnh của một đồ thị. </div> \
    <br> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Giải thuật tìm kiếm theo chiều sâu là gì ? </b></div> \
    <div class ='lesson'> Giải thuật tìm kiếm theo chiều sâu (Depth First Search – viết tắt là DFS), còn được gọi là giải thuật tìm kiếm ưu tiên chiều sâu, \
        là giải thuật duyệt hoặc tìm kiếm trên một cây hoặc một đồ thị và sử dụng stack (ngăn xếp) để ghi nhớ đỉnh liền kề để bắt đầu việc tìm kiếm \
        khi không gặp được đỉnh liền kề trong bất kỳ vòng lặp nào. Giải thuật tiếp tục cho tới khi gặp được đỉnh cần tìm hoặc tới một nút không có con. Khi đó giải thuật quay lui về đỉnh vừa mới tìm kiếm ở bước trước. </div> \
    <br><center><img src='img/df1.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Trong hình minh họa trên, giải thuật tìm kiếm theo chiều sâu đầu tiên duyệt từ các đỉnh A tới B tới C tới D sau đó tới E, \
        sau đó tới F và cuối cùng tới G. Giải thuật này tuân theo qui tắc sau: \
    <br><b>Qui tắc 1 </b>: Duyệt tiếp tới đỉnh liền kề mà chưa được duyệt. Đánh dấu đỉnh mà đã được duyệt. Hiển thị đỉnh đó và đẩy vào trong một ngăn xếp (stack). \
    <br><b>Qui tắc 2 </b>: Nếu không tìm thấy đỉnh liền kề, thì lấy một đỉnh từ trong ngăn xếp (thao tác pop up). \
        (Giải thuật sẽ lấy tất cả các đỉnh từ trong ngăn xếp mà không có các đỉnh liền kề nào) \
    <br><b>Qui tắc 3 </b>: Lặp lại các qui tắc 1 và qui tắc 2 cho tới khi ngăn xếp là trống. \
    <br>Bảng dưới đây minh họa các qui tắc với hình ví dụ trên: </div> \
    <br><center><img src='img/df2.png' alt='Bubble Sort Image' width='800' height='500'></center> \
    <center><img src='img/df3.png' alt='Bubble Sort Image' width='800' height='500'></center> \
    <center><img src='img/df4.png' alt='Bubble Sort Image' width='800' height='500'></center> \
    <center><img src='img/df5.png' alt='Bubble Sort Image' width='800' height='250'></center> \
    <div class ='lesson'> Vì C không có bất kỳ đỉnh nào liền kề mà chưa được duyệt, chúng ta tiếp tục lấy các đỉnh từ trong ngăn xếp để tìm xem có còn bất kỳ đỉnh nào liền kề mà chưa được duyệt hay không. \
        Trong ví dụ này là không có, và chúng ta vẫn tiếp tục cho tới khi ngăn xếp là trống. </div> \
    <div class='lesson-content'><b>II. Tính chất </b></div> \
    <div class ='lesson'> - DFS được sử dụng để duyệt và quy hoạch các đỉnh và cạnh trong đồ thị. \
    <br> - DFS có thể được triển khai bằng cách sử dụng đệ quy hoặc sử dụng ngăn xếp. Trong đệ quy, việc <b>quay lui</b> giúp lưu trữ thông tin về đỉnh hiện tại và tiếp tục duyệt. Trong cách triển khai sử dụng ngăn xếp, thông tin tương tự được lưu trữ nhưng được quản lý bởi ngăn xếp. \
    <br> - DFS sử dụng một mảng hoặc danh sách để kiểm soát xem một đỉnh đã được duyệt hay chưa, tránh việc lặp lại việc duyệt đỉnh đã được duyệt trước đó. \
    <br> - DFS <b>đào sâu</b> vào đồ thị càng sâu càng tốt, trước khi quay lại và đi theo các nhánh còn lại. \
    <br> - DFS thường được sử dụng để kiểm tra xem có tồn tại đường đi giữa hai đỉnh hay không, kiểm tra chu trình trong đồ thị. \
    <br> - Độ phức tạp thời gian: <b>O(V + E)</b>, trong đó V là số đỉnh, E là số cạnh của đồ thị. DFS duyệt qua tất cả các đỉnh và cạnh ít nhất một lần. </div> \
    <br> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Giải thuật tìm kiếm theo chiều rộng là gì ? </b></div> \
    <div class ='lesson'> Giải thuật tìm kiếm theo chiều rộng (Breadth First Search – viết tắt là BFS) duyệt qua một đồ thị theo chiều rộng và sử dụng hàng đợi (queue) \
        để ghi nhớ đỉnh liền kề để bắt đầu việc tìm kiếm khi không gặp được đỉnh liền kề trong bất kỳ vòng lặp nào. </div> \
    <br><center><img src='img/bf1.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Như trong hình ví dụ trên, giải thuật tìm kiếm theo chiều rộng duyệt từ A tới B tới E tới F sau đó tới C, tới G và cuối cùng tới D. Giải thuật này tuân theo qui tắc: \
    <br><b>Qui tắc 1 </b>: Duyệt tiếp tới đỉnh liền kề mà chưa được duyệt. Đánh dấu đỉnh mà đã được duyệt. \
    Hiển thị đỉnh đó và đẩy vào trong một hàng đợi (queue). \
    <br><b>Qui tắc 2 </b>: Nếu không tìm thấy đỉnh liền kề, thì xóa đỉnh đầu tiên trong hàng đợi. \
        (Giải thuật sẽ lấy tất cả các đỉnh từ trong ngăn xếp mà không có các đỉnh liền kề nào) \
    <br><b>Qui tắc 3 </b>: Lặp lại Qui tắc 1 và 2 cho tới khi hàng đợi là trống. \
    <br>Bảng dưới đây minh họa cách giải thuật tìm kiếm theo chiều rộng làm việc với một ví dụ đơn giản sau: </div> \
    <br><center><img src='img/bf2.png' alt='Bubble Sort Image' width='800' height='500'></center> \
    <center><img src='img/bf3.png' alt='Bubble Sort Image' width='800' height='500'></center> \
    <center><img src='img/bf4.png' alt='Bubble Sort Image' width='800' height='500'></center> \
    <center><img src='img/bf5.png' alt='Bubble Sort Image' width='800' height='250'></center> \
    <div class ='lesson'> Đến đây, chúng ta thấy rằng không còn đỉnh nào là chưa được đánh dấu (chưa được duyệt với ví dụ trong bảng này). \
        Nhưng giải thuật vẫn tiếp tục, chúng ta vẫn tiếp tục rút các đỉnh từ hàng đợi theo thứ tự để tìm tất cả các đỉnh mà chưa được duyệt. \
        Khi hàng đợi là trống thì đó là lúc kết thúc giải thuật. </div> \
    <div class='lesson-content'><b>II. Tính chất </b></div> \
    <div class ='lesson'> - BFS được sử dụng để duyệt và quy hoạch các đỉnh và cạnh trong đồ thị. \
    <br> - BFS sử dụng hàng đợi để duyệt qua các đỉnh một cách theo chiều rộng. Đỉnh được thăm đầu tiên sẽ được thêm vào hàng đợi, và các đỉnh kề sẽ được thêm vào hàng đợi sau đó. \
    <br> - BFS sử dụng một mảng hoặc danh sách để kiểm soát xem một đỉnh đã được duyệt hay chưa, tránh việc lặp lại việc duyệt đỉnh đã được duyệt trước đó. \
    <br> - BFS <b>>lan truyền</b> từ đỉnh xuất phát ra theo chiều rộng, duyệt qua các đỉnh kề ở cùng mức trước khi di chuyển xuống các mức tiếp theo. \
    <br> - BFS thường được sử dụng để tìm kiếm đường đi ngắn nhất giữa hai đỉnh trong đồ thị. \
    <br> - <b>Độ phức tạp thời gian</b> là <b>O(V + E)</b>, trong đó V là số đỉnh, E là số cạnh của đồ thị. BFS duyệt qua tất cả các đỉnh và cạnh ít nhất một lần. </div> \
    <br> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Cấu trúc dữ liệu cây là gì ? </b></div> \
    <div class ='lesson'> Cấu trúc dữ liệu cây biểu diễn các nút (node) được kết nối bởi các cạnh. Chúng ta sẽ tìm hiểu về Cây nhị phân (Binary Tree) \
        và Cây tìm kiếm nhị phân (Binary Search Tree) trong phần này. \
    <br> Cây nhị phân là một cấu trúc dữ liệu đặc biệt được sử dụng cho mục đích lưu trữ dữ liệu. \
    Một cây nhị phân có một điều kiện đặc biệt là mỗi nút có thể có tối đa hai nút con. \
    Một cây nhị phân tận dụng lợi thế của hai kiểu cấu trúc dữ liệu: một mảng đã sắp thứ tự và một danh sách liên kết (Linked List), \
    do đó việc tìm kiếm sẽ nhanh như trong mảng đã sắp thứ tự và các thao tác chèn và xóa cũng sẽ nhanh bằng trong Linked List. </div> \
    <br><center><img src='img/tr1.jpg' alt='Bubble Sort Image'></center> \
    <div class='lesson-content'><b>II. Các khái niệm cơ bản về cây nhị phân </b></div> \
    <div class ='lesson'> <b>Đường </b>: là một dãy các nút cùng với các cạnh của một cây. \
    <br><b> Nút gốc (Root) </b>: nút trên cùng của cây được gọi là nút gốc. Một cây sẽ chỉ có một nút gốc và một đường xuất phát từ nút gốc tới bất kỳ nút nào khác. \
        Nút gốc là nút duy nhất không có bất kỳ nút cha nào. \
    <br><b> Nút cha </b>: bất kỳ nút nào ngoại trừ nút gốc mà có một cạnh hướng lên một nút khác thì được gọi là nút cha. \
    <br><b> Nút con </b>: nút ở dưới một nút đã cho được kết nối bởi cạnh dưới của nó được gọi là nút con của nút đó. \
    <br><b> Nút lá </b>: nút mà không có bất kỳ nút con nào thì được gọi là nút lá. \
    <br><b> Cây con </b>: cây con biểu diễn các con của một nút. \
    <br><b> Truy cập </b>: kiểm tra giá trị của một nút khi điều khiển là đang trên một nút đó. \
    <br><b> Duyệt </b>: duyệt qua các nút theo một thứ tự nào đó. \
    <br><b> Bậc </b>: bậc của một nút biểu diễn số con của một nút. Nếu nút gốc có bậc là 0, thì nút con tiếp theo sẽ có bậc là 1, và nút cháu của nó sẽ có bậc là 2,… \
    <br><b> Khóa (Key) </b>: biểu diễn một giá trị của một nút dựa trên những gì mà một thao tác tìm kiếm thực hiện trên nút. </div> \
    <div class='lesson-content'><b>III. Biểu diễn cây tìm kiếm nhị phân </b></div> \
    <div class ='lesson'> Cây tìm kiếm nhị phân biểu diễn một hành vi đặc biệt. Con bên trái của một nút phải có giá trị nhỏ hơn giá trị của nút cha (của nút con này) \
        và con bên phải của nút phải có giá trị lớn hơn giá trị của nút cha (của nút con này). Hình minh họa: </div> \
    <br><center><img src='img/tr2.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Chúng ta đang triển khai cây bởi sử dụng đối tượng nút và kết nối chúng thông qua các tham chiếu. </div> \
    <div class='lesson-content'><b>IV. Nút (Node) trong cây tìm kiếm nhị phân </b></div> \
    <div class ='lesson'> Một nút sẽ có cấu trúc như dưới đây. Nút có phần dữ liệu và phần tham chiếu tới các nút con bên trái và nút con bên phải. </div> \
    <br><div id='codeContainer'> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code> \
            <br> struct node { \
            <br>    int data;    \
            <br>    struct node *leftChild; \
            <br>    struct node *rightChild; \
            <br> }; \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Trong một cây, tất cả các nút chia sẻ cùng một cấu trúc. </div> \
    <div class='lesson-content'><b>V. Hoạt động cơ bản trên cây tìm kiếm nhị phân </b></div> \
    <div class ='lesson'> <b>Chèn </b>: chèn một phần tử vào trong một cây/ tạo một cây. \
    <br> Tìm kiếm </b>: tìm kiếm một phần tử trong một cây. \
    <br> Duyệt tiền thứ tự </b>: duyệt một cây theo cách thức duyệt tiền thứ tự (tham khảo chương sau). \
    <br> Duyệt trung thứ tự </b>: duyệt một cây theo cách thức duyệt trung thứ tự (tham khảo chương sau). \
    <br> Duyệt hậu thứ tự </b>: duyệt một cây theo cách thức duyệt hậu thứ tự (tham khảo chương sau). </div> \
    <div class='lesson-content'><b>VI. Hoạt động chèn trong cây tìm kiếm nhị phân </b></div> \
    <div class ='lesson'> Bước chèn đầu tiên sẽ tạo thành cây. Tiếp đó là sẽ chèn từng phần tử vào trong cây. Đầu tiên chúng ta cần xác định vị trí chính xác của nó. \
        Bắt đầu tìm kiếm từ nút gốc, sau đó nếu dữ liệu là nhỏ hơn giá trị khóa, thì tìm kiếm vị trí rỗng trong cây con bên trái và chèn dữ liệu. \
        Nếu không nhỏ hơn, tìm vị trí rỗng trong cây con bên phải và chèn dữ liệu. </div> \
        <br><div id='codeContainer'> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code> \
            <br> If root là NULL \
            <br>    thì tạo nút gốc (root node)    \
            <br> return \
            <br> \
            <br> If root đã tồn tại thì sau đó  \
            <br>    so sánh dữ liệu với node.data \
            <br>    while tới vị trí chèn đã xác định \
            <br>         If dữ liệu là lớn hơn node.data \
            <br>            tới cây con bên phải \
            <br>         else \
            <br>            tới cây con bên trái \
            <br>    kết thúc while \
            <br>    chèn dữ liệu \
            <br> Kết thúc If \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Giải thuật mẫu cho hoạt động chèn </div> \
    <br><div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> void insert(int data) { \
                    <br>     struct node *tempNode = (struct node*) malloc(sizeof(struct node)); \
                    <br>     struct node *current; \
                    <br>     struct node *parent; \
                    <br>    \
                    <br>     tempNode->data = data; \
                    <br>     tempNode->leftChild = NULL; \
                    <br>     tempNode->rightChild = NULL; \
                    <br>    \
                    <br>     //Nếu cây là trống, chúng ta tạo root node \
                    <br>     if(root == NULL) { \
                    <br>           root = tempNode;  \
                    <br>     } else { \
                    <br>           current = root; \
                    <br>           parent  = NULL; \
                    <br>  \
                    <br>           while(1) { \
                    <br>                parent = current;  \
                    <br>                //tới cây con bên trái \
                    <br>                if(data < parent->data) { \
                    <br>                   current = current->leftChild;  \
                    <br>                   //chèn dữ liệu vào bên trái \
                    <br>                   if(current == NULL) { \
                    <br>                       parent->leftChild = tempNode; \
                    <br>                       return; \
                    <br>                   } \
                    <br>                } \
                    <br>                else { \
                    <br>                    current = current->rightChild; \
                    <br>                    //chèn dữ liệu vào bên phải \
                    <br>                    if(current == NULL) { \
                    <br>                       parent->rightChild = tempNode; \
                    <br>                       return; \
                    <br>                    } \
                    <br>                } \
                    <br>           } \
                    <br>      } \
                    <br> } \
            </code> </div> </pre> </span> </div> \
            <div class='lesson-content'><b>VII. Hoạt động tìm kiếm trong cây nhị phân </b></div> \
    <div class ='lesson'> Mỗi khi một phần tử cần tìm kiếm: bắt đầu tìm kiếm từ nút gốc, sau đó nếu dữ liệu là nhỏ hơn giá trị khóa, thì tìm kiếm phần tử  \
        trong cây con bên trái; nếu không nhỏ hơn thì tìm kiếm phần tử trong cây con bên phải. </div> \
        <br><div id='codeContainer'> \
    <pre id='codeBlock'> \
    <div class='codeWrapper'> \
        <code> \
            <br> If root.data là bằng với search.data \
            <br>    return root    \
            <br> else \
            <br>    while không tìm thấy dữ liệu\
            <br>        If data là lớn hơn node.data  \
            <br>           tới cây con bên phải \
            <br>        else \
            <br>           tới cây con bên trái \
            <br>  \
            <br>         If data được tìm thấy \
            <br>            return node \
            <br>    kết thúc while \
            <br>    return không tìm thấy data \
            <br> Kết thúc If \
    </code> </div> </pre> </span> </div> \
    <div class ='lesson'> Giải thuật mẫu cho hoạt động tìm kiếm </div> \
    <br><div id='codeContainer'> \
            <span id='copyIcon' onclick='copyCode()'>📋</span> \
            <pre id='codeBlock'> \
            <div class='codeWrapper'> \
                <code> \
                    <br> struct node* search(int data) { \
                    <br>     struct node *current = root; \
                    <br>     printf('Truy cap phan tu: '); \
                    <br>  \
                    <br>     while(current->data != data) {  \
                    <br>          if(current != NULL) \
                    <br>          printf('%d ',current->data); \
                    <br>          //tới cây con bên trái \
                    <br>          if(current->data > data) {   \
                    <br>             current = current->leftChild; \
                    <br>          } \
                    <br>          //else  tới cây con bên phải  \
                    <br>          else { \
                    <br>             current = current->rightChild; \
                    <br>          } \
                    <br>  \
                    <br>           //không tìm thấy \
                    <br>           if(current == NULL) {  \
                    <br>              return NULL; \
                    <br>           } \
                    <br>           return current;  \
                    <br>     } \
                    <br> } \
            </code> </div> </pre> </span> </div> \
    <br> \
    <br> \
    <br> \
    </div> ",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Duyệt cây là gì ? </b></div> \
    <div class ='lesson'> Duyệt cây là một tiến trình để truy cập tất cả các nút của một cây và cũng có thể in các giá trị của các nút này. \
        Bởi vì tất cả các nút được kết nối thông qua các cạnh (hoặc các link), nên chúng ta luôn luôn bắt đầu truy cập từ nút gốc. \
        Do đó, chúng ta không thể truy cập ngẫu nhiên bất kỳ nút nào trong cây. Có ba phương thức mà chúng ta có thể sử dụng để duyệt một cây: \
    <br> - Duyệt tiền thứ tự (Pre-order Traversal) \
    <br> - Duyệt trung thứ tự (In-order Traversal) \
    <br> - Duyệt hậu thứ tự (Post-order Traversal) </div> \
    <div class='lesson-content'><b>II. Duyệt trung thứ tự trong cây nhị phân</b></div> \
    <div class ='lesson'> Trong cách duyệt này, cây con bên trái được truy cập đầu tiên, sau đó là nút gốc và sau đó là cây con bên phải. \
        Bạn nên luôn luôn ghi nhớ rằng mỗi nút đều có thể biểu diễn một cây con. \
        Nếu một cây nhị phân được duyệt trung thứ tự, kết quả tạo ra sẽ là các giá trị khóa được sắp xếp theo thứ tự tăng dần. </div> \
    <br><center><img src='img/dc1.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Ở hình ví dụ minh họa trên, A là nút gốc. Với phương thức duyệt trung thứ tự, chúng ta bắt đầu từ nút gốc A, di chuyển tới cây con bên trái B của nút gốc. \
        Tại đây, B cũng được duyệt theo cách thức duyệt trung thứ tự. \
        Và tiến trình tiếp tục cho đến khi tất cả các nút đã được truy cập. Kết quả của cách thức duyệt trung thứ tự cho cây trên sẽ là: \
    <br><center><b> D → B → E → A → F → C → G </b></center></div> \
    <br><b>Giải thuật </b> \
    <br><div id='codeContainer'> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> Duyệt cho tới khi tất cả các nút đều được duyệt: \
                <br> Bước 1: Duyệt các cây con bên trái một cách đệ qui \
                <br> Bước 2: Truy cập nút gốc \
                <br> Bước 3: Duyệt các cây con bên phải một cách đệ qui \
        </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>III. Duyệt tiền thứ tự trong cây nhị phân</b></div> \
    <div class ='lesson'> Trong cách thức duyệt tiền thứ tự trong cây nhị phân, nút gốc được duyệt đầu tiên, sau đó sẽ duyệt cây con bên trái và cuối cùng sẽ duyệt cây con bên phải. </div> \
    <br><center><img src='img/dc2.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Ở hình ví dụ minh họa trên, A là nút gốc. Chúng ta bắt đầu từ A, và theo cách thức duyệt tiền thứ tự, đầu tiên chúng ta truy cập chính nút gốc A này \
        và sau đó di chuyển tới nút con bên trái B của nó. B cũng được duyệt theo cách thức duyệt tiền thứ tự. \
        Và tiến trình tiếp tục cho tới khi tất cả các nút đều đã được truy cập. Kết quả của cách thức duyệt tiền thứ tự cây này sẽ là: \
    <br><center><b> A → B → D → E → C → F → G </b></center></div> \
    <br><b>Giải thuật </b> \
    <br><div id='codeContainer'> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> Duyệt cho tới khi tất cả các nút đều được duyệt: \
                <br> Bước 1: Truy cập nút gốc \
                <br> Bước 2: Duyệt các cây con bên trái một cách đệ qui \
                <br> Bước 3: Duyệt các cây con bên phải một cách đệ qui \
        </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>IV. Duyệt hậu thứ tự trong cây nhị phân</b></div> \
    <div class ='lesson'> Trong cách thức duyệt hậu thứ tự trong cây nhị phân, nút gốc của cây sẽ được truy cập cuối cùng, do đó bạn cần chú ý. \
        Đầu tiên, chúng ta duyệt cây con bên trái, sau đó sẽ duyệt cây con bên phải và cuối cùng là duyệt nút gốc. </div> \
    <br><center><img src='img/dc3.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Ở hình ví dụ minh họa trên, A là nút gốc. Chúng ta bắt đầu từ A, và theo cách duyệt hậu thứ tự, đầu tiên chúng ta truy cập cây con bên trái B. \
        B cũng được duyệt theo cách thứ duyệt hậu thứ tự. Và tiến trình sẽ tiếp tục tới khi \
        tất cả các nút đã được truy cập. Kết quả của cách thức duyệt hậu thứ tự của cây con trên sẽ là: \
    <br><center><b> D → E → B → F → G → C → A </b></center></div> \
    <br><b>Giải thuật </b> \
    <br><div id='codeContainer'> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> Duyệt cho tới khi tất cả các nút đều được duyệt: \
                <br> Bước 1: Duyệt các cây con bên trái một cách đệ qui \
                <br> Bước 2: Duyệt các cây con bên phải một cách đệ qui \
                <br> Bước 3: Truy cập nút gốc. \
        </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>V. Tính chất </b></div> \
    <div class ='lesson'> Duyệt cây là quá trình ghé thăm tất cả các nút trong cây một cách có tổ chức. Có ba cách phổ biến để duyệt cây: \
    <br> 1. Duyệt theo chiều sâu (Depth-First Traversal): \
    <br> - Duyệt tiền thứ tự (Pre-order Traversal): Ghé thăm nút gốc trước, sau đó duyệt theo chiều sâu vào cây con trái và cây con phải. \
    <br> - Duyệt giữa thứ tự (In-order Traversal): Duyệt theo chiều sâu vào cây con trái, sau đó ghé thăm nút gốc và duyệt theo chiều sâu vào cây con phải. \
    <br> - Duyệt hậu thứ tự (Post-order Traversal): Duyệt theo chiều sâu vào cây con trái, sau đó duyệt theo chiều sâu vào cây con phải và cuối cùng ghé thăm nút gốc. \
    <br> 2. Duyệt theo chiều rộng (Breadth-First Traversal): \
    <br> Duyệt cây theo mức, từ trên xuống dưới và từ trái sang phải. \
    <br> 3. Độ phức tạp: \
    <br> - Độ phức tạp thời gian và không gian của các phương pháp duyệt cây phụ thuộc vào số lượng nút và cấu trúc của cây. \
    <br> - Độ phức tạp thời gian của mỗi phương pháp là O(n), trong đó n là số lượng nút trong cây. Mỗi nút đều được ghé thăm ít nhất một lần. </div> \
    <br> \
    <br> \
    <br> \
    </div>",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Cây tìm kiếm nhị phân là gì ? </b></div> \
    <div class ='lesson'> Một cây tìm kiếm nhị phân (Binary Search Tree – viết tắt là BST) là một cây mà trong đó tất cả các nút đều có các đặc điểm sau: \
    <br> - Cây con bên trái của một nút có khóa (key) nhỏ hơn hoặc bằng giá trị khóa của nút cha (của cây con này). \
    <br> - Cây con bên phải của một nút có khóa lớn hơn hoặc bằng giá trị khóa của nút cha (của cây con này). \
    <br> Vì thế có thể nói rằng, một cây tìm kiếm nhị phân (BST) phân chia tất cả các cây con của nó thành hai phần: <i>cây con bên trái và cây con bên phải </i> và có thể được định nghĩa như sau: \
    <br><center><i> left_subtree (keys)  ≤  node (key)  ≤  right_subtree (keys) </i></center> </div> \
    <div class='lesson-content'><b>II. Biểu diễn cây tìm kiếm nhị phân (BST) </b></div> \
    <div class ='lesson'> Cây tìm kiếm nhị phân (BST) là một tập hợp bao gồm các nút được sắp xếp theo cách để chúng có thể duy trì hoặc tuân theo các đặc điểm của cây tìm kiếm nhị phân. \
        Mỗi một nút thì đều có một khóa và giá trị liên kết với nó. \
        Trong khi tìm kiếm, khóa cần tìm được so sánh với các khóa trong cây tìm kiếm nhị phân (BST) và nếu tìm thấy, giá trị liên kết sẽ được thu nhận. </div> \
    <br><center><img src='img/np1.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Từ hình ví dụ minh họa trên ta thấy rằng, khóa của nút gốc có giá trị 27 và tất cả khóa bên trái của cây con bên trái đều có giá trị nhỏ hơn 27 \
        này và tất cả các khóa bên phải của cây con bên phải đều có giá trị lớn hơn 27. </div> \
    <div class='lesson-content'><b>III. Hoạt động cơ bản trên cây tìm kiếm nhị phân </b></div> \
    <div class ='lesson'><b>Hoạt động tìm kiếm </b>: tìm kiếm một phần tử trong một cây. \
    <br><b>Hoạt động chèn </b>: chèn một phần tử vào trong một cây. \
    <br><b>Hoạt động duyệt tiền thứ tự </b>: duyệt một cây theo cách thức duyệt tiền thứ tự. \
    <br><b>Hoạt động duyệt trung thứ tự </b>: duyệt một cây theo cách thứ duyệt trung thứ tự. \
    <br><b>Hoạt động duyệt hậu thứ tự </b>: duyệt một cây theo cách thức duyệt hậu thứ tự. </div>\
    <div class='lesson-content'><b>IV. Nút (Node) trong cây tìm kiếm nhị phân </b></div> \
    <div class ='lesson'> Một nút có một vài dữ liệu, tham chiếu tới các nút con bên trái và nút con bên phải của nó. </div> \
    <br><div id='codeContainer'> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> struct node { \
                <br>    int data; \
                <br>    struct node *leftChild; \
                <br>    struct node *rightChild; \
                <br> } \
        </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>V. Hoạt động tìm kiếm trong cây tìm kiếm nhị phân </b></div> \
    <div class ='lesson'> Mỗi khi một phần tử được tìm kiếm: bắt đầu tìm kiếm từ nút gốc, sau đó nếu dữ liệu là nhỏ hơn giá trị khóa (key), \
        thì sẽ tìm phần tử ở cây con bên trái; nếu lớn hơn thì sẽ tìm phần tử ở cây con bên phải. Dưới đây là giải thuật cho mỗi nút: </div> \
    <br><div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> struct node* search(int data) { \
                <br>     struct node *current = root; \
                <br>     printf('Truy cap phan tu: '); \
                <br>  \
                <br>     while(current->data != data) {  \
                <br>          if(current != NULL) \
                <br>             printf('%d ',current->data); \
                <br>             //tới cây con bên trái \
                <br>             if(current->data > data) {   \
                <br>                current = current->leftChild; \
                <br>              } \
                <br>              //else  tới cây con bên phải  \
                <br>              else { \
                <br>                 current = current->rightChild; \
                <br>              } \
                <br>  \
                <br>              //không tìm thấy \
                <br>              if(current == NULL) {  \
                <br>                 return NULL; \
                <br>              } \
                <br>          }  \
                <br>     } \
                <br>     return current; \
                <br> } \
        </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>VI. Hoạt động chèn trong cây tìm kiếm nhị phân </b></div> \
    <div class ='lesson'> Mỗi khi một phần tử được chèn: đầu tiên chúng ta cần xác định vị trí chính xác của phần tử này. \
        Bắt đầu tìm kiếm từ nút gốc, sau đó nếu dữ liệu là nhỏ hơn giá trị khóa (key), thì tìm kiếm vị trí còn trống ở cây con bên trái \
        và chèn dữ liệu vào đó; nếu dữ liệu là nhỏ hơn thì tìm kiếm vị trí còn sống ở cây con bên phải và chèn dữ liệu vào đó. </div> \
    <br><div id='codeContainer'> \
        <span id='copyIcon' onclick='copyCode()'>📋</span> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> void insert(int data) { \
                <br>     struct node *tempNode = (struct node*) malloc(sizeof(struct node)); \
                <br>     struct node *current; \
                <br>     struct node *parent; \
                <br>    \
                <br>     tempNode->data = data; \
                <br>     tempNode->leftChild = NULL; \
                <br>     tempNode->rightChild = NULL; \
                <br>    \
                <br>     //Nếu cây là trống, chúng ta tạo root node \
                <br>     if(root == NULL) { \
                <br>           root = tempNode;  \
                <br>     } else { \
                <br>           current = root; \
                <br>           parent  = NULL; \
                <br>  \
                <br>           while(1) { \
                <br>                parent = current;  \
                <br>                //tới cây con bên trái \
                <br>                if(data < parent->data) { \
                <br>                   current = current->leftChild;  \
                <br>                   //chèn dữ liệu vào bên trái \
                <br>                   if(current == NULL) { \
                <br>                       parent->leftChild = tempNode; \
                <br>                       return; \
                <br>                   } \
                <br>                } \
                <br>                else { \
                <br>                    current = current->rightChild; \
                <br>                    //chèn dữ liệu vào bên phải \
                <br>                    if(current == NULL) { \
                <br>                       parent->rightChild = tempNode; \
                <br>                       return; \
                <br>                    } \
                <br>                } \
                <br>           } \
                <br>      } \
                <br> } \
        </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>VII. Tính chất </b></div> \
    <div class ='lesson'> - Mỗi nút trong cây tìm kiếm nhị phân có tối đa hai con, được gọi là cây con trái và cây con phải. Các giá trị ở cây con trái đều nhỏ hơn giá trị của nút cha, và các giá trị ở cây con phải đều lớn hơn giá trị của nút cha. \
    <br> - Tìm kiếm trong BST có độ phức tạp thời gian là O(log n) trong trường hợp trung bình, với n là số lượng nút. Tuy nhiên, trong trường hợp xấu nhất (khi cây không cân bằng), thao tác tìm kiếm có thể có độ phức tạp là O(n). \
    <br> - Chèn và xóa trong BST cũng có độ phức tạp O(log n) trong trường hợp trung bình, nhưng có thể lên đến O(n) trong trường hợp xấu nhất khi cây không cân bằng. \
    <br> - Để đảm bảo thời gian tìm kiếm hiệu quả, có những cấu trúc cây tìm kiếm nhị phân cân bằng, như cây đỏ-đen (Red-Black Tree) hoặc cây AVL, giúp giảm thiểu trường hợp xấu nhất. \
    <br> - Cây tìm kiếm nhị phân có thể được duyệt theo nhiều cách, bao gồm duyệt tiền thứ tự, duyệt giữa thứ tự, và duyệt hậu thứ tự. </div> \
    <br> \
    <br> \
    <br> \
    </div> ",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Cây AVL là gì ? </b></div> \
    <div class ='lesson'> Điều gì xảy ra nếu dữ liệu nhập vào cây tìm kiếm nhị phân (BST) là ở dạng đã được sắp thứ tự (tăng dần hoặc giảm dần). \
        Nó sẽ trông giống như sau: </div> \
    <br><center><img src='img/av1.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Cây AVL (viết tắt của tên các nhà phát minh Adelson, Velski và Landis) là cây tìm kiếm nhị phân có độ cân bằng cao. \
        Cây AVL kiểm tra độ cao của các cây con bên trái và cây con bên phải và bảo đảm rằng hiệu số giữa chúng là không lớn hơn 1. <b>Hiệu số</b> này được gọi là <b>Balance Factor (Nhân tố cân bằng) </b>. \
    <br> Dưới đây là hình ví dụ minh họa ba cây, trong đó cây đầu tiên là cân bằng, cây thứ hai và thứ ba là không cân bằng. </div>\
    <br><center><img src='img/av2.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Trong cây thứ hai, cây con bên trái của C có độ cao là 2 và cây con bên phải có độ cao là 0, do đó hiệu số là 2. \
        Trong cây thứ ba, cây con bên phải của A có độ cao là 2 và cây con bên trái có độ cao là 0, do đó hiệu số cũng là 2. \
        Trong khi cây AVL chỉ chấp nhận <b> hiệu số (hay Nhân tố cân bằng) là 1 </b>. \
    <br><center><i> BalanceFactor = height(left-sutree) − height(right-sutree) </i></center> \
    <br> Nếu hiệu số giữa độ cao của các cây con bên trái và cây con bên phải là lớn hơn 1 thì cây được cân bằng \
    bởi sử dụng một số kỹ thuật quay AVL được trình bày dưới đây. </div> \
    <div class='lesson-content'><b>II. Kỹ thuật quay cây AVL </b></div> \
    <div class ='lesson'> Để làm cho cây tự cân bằng, một cây AVL có thể thực hiện 4 loại kỹ thuật quay sau: \
    <br> - Kỹ thuật quay trái \
    <br> - Kỹ thuật quay phải \
    <br> - Kỹ thuật quay trái-phải \
    <br> - Kỹ thuật quay phải-trái </div> \
    <div class='lesson-content'><b>III. Kỹ thuật quay trái cây AVL </b></div> \
    <div class ='lesson'> Nếu một cây trở nên không cân bằng khi một nút được chèn vào trong cây con bên phải của cây con bên phải thì chúng ta có thể thực hiện kỹ thuật quay trái đơn như sau: </div> \
    <br><center><img src='img/av3.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Trong hình minh họa trên, nút A trở nên không cân bằng khi một nút (nút C) được chèn vào cây con bên phải của cây con \
        bên phải của nút A. Chúng ta thực hiện kỹ thuật quay trái để làm A trở thành cây con bên trái của B. </div> \
    <div class='lesson-content'><b>IV. Kỹ thuật quay phải cây AVL </b></div> \
    <div class ='lesson'> Cây AVL trở nên không cân bằng nếu một nút được chèn vào cây con bên trái của cây con bên trái. Để cây cân bằng, chúng ta thực hiện kỹ thuật quay phải như sau: </div> \
    <br><center><img src='img/av4.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Như hình minh họa, nút không cân bằng sẽ trở thành cây con bên phải của cây con bên trái của nó bằng kỹ thuật quay phải. </div> \
    <div class='lesson-content'><b>V. Kỹ thuật quay trái-phải cây AVL </b></div> \
    <div class ='lesson'> Kỹ thuật quay ghép là khá phức tạp so với hai kỹ thuật quay đơn vừa giới thiệu trên. Để hiểu kỹ thuật quay này nhanh hơn, \
        bạn cần phải ghi chú từng hành động được thực hiện trong khi quay. Một kỹ thuật quay trái-phải \
        là sự kết hợp của kỹ thuật quay trái được theo sau bởi kỹ thuật quay phải. </div> \
    <br><center><img src='img/av5.png' alt='Bubble Sort Image' width='800' height='500'></center> \
    <center><img src='img/av6.png' alt='Bubble Sort Image' width='800' height='500'></center> \
    <center><img src='img/av7.png' alt='Bubble Sort Image' width='800' height='230'></center> \
    <div class='lesson-content'><b>VI. Kỹ thuật quay phải-trái cây AVL </b></div> \
    <div class ='lesson'> Một loại kỹ thuật quay ghép khác là kỹ thuật quay phải-trái. Kỹ thuật này là sự kết hợp của kỹ thuật quay phải được theo sau bởi kỹ thuật quay trái. </div> \
    <br><center><img src='img/av8.png' alt='Bubble Sort Image' width='800' height='500'></center> \
    <center><img src='img/av9.png' alt='Bubble Sort Image' width='800' height='500'></center> \
    <center><img src='img/av10.png' alt='Bubble Sort Image' width='800' height='200'></center> \
    <div class='lesson-content'><b>VII. Tính chất </b></div> \
    <div class ='lesson'> - Cây AVL là một cấu trúc cây tìm kiếm nhị phân cân bằng. Cả trước và sau mọi thao tác chèn và xóa, cây AVL đảm bảo rằng chiều cao của hai cây con con trái và con phải của mỗi nút không chênh lệch quá 1. \
    <br> - Để duy trì tính cân bằng, cây AVL sử dụng các phép quay (rotation), bao gồm quay phải (right rotation), quay trái (left rotation), quay kép phải-trái (right-left rotation), và quay kép trái-phải (left-right rotation). \
    <br> - Các nút trong cây AVL được sắp xếp theo thứ tự tăng dần từ trái sang phải. \
    <br> - Với mọi nút, giá trị tất cả các nút trong cây con trái nhỏ hơn giá trị của nút đó, và giá trị tất cả các nút trong cây con phải lớn hơn giá trị của nút đó. \
    <br> - Tính cân bằng của cây AVL độc lập với thứ tự chèn nút, tức là cây AVL sẽ tự cân bằng sau mọi thao tác chèn một cách tự động. </div> \
    <br> \
    <br> \
    <br> \
    </div> ",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Cây khung (Spanning Tree) là gì ? </b></div> \
    <div class ='lesson'> Một cây khung là một tập con của Grahp G mà có tất cả các đỉnh được bao bởi số cạnh tối thiểu nhất. \
        Vì thế, một cây khung sẽ không hình thành một vòng tuần hoàn và nó cũng không thể bị ngắt giữa chừng. \
    <br> Từ định nghĩa trên ta có thể kết luận rằng mỗi Graph G tuần hoàn sẽ có ít nhất một cây khung. Một Graph G bị ngắt giữa chừng sẽ không có bất kỳ cây khung nào. \
    <br> Dưới đây là hình ví dụ minh họa cho một Grahp G và các cây khung của nó: </div> \
    <br><center><img src='img/sp1.jpg' alt='Bubble Sort Image'></center> \
    <div class ='lesson'> Ở trên chúng ta có 3 cây khung của một đồ thị tuần hoàn. Một đồ thị tuần hoàn có thể có tối đa n<sup>n-2</sup> cây khung,\
        trong đó n là số nút. Trong ví dụ trên, n là 3 do đó 3<sup>3−2</sup> = 3 cây khung. </div> \
    <div class='lesson-content'><b>II. Thuộc tính chung của cây khung (Spanning Tree) </b></div> \
    <div class ='lesson'> Bây giờ chúng ta hiểu rằng một Graph có thể có nhiều hơn một cây khung. Phần dưới đây là một số thuộc tính của cây khung của Graph G tuần hoàn đã cho: \
    <br> - Một Grahp G tuần hoàn có thể có nhiều hơn một cây khung. \
    <br> - Tất cả các cây khung của một Graph G đều có cùng số cạnh và số đỉnh. \
    <br> - Cây khung không có bất kỳ vòng tuần hoàn nào. \
    <br> - Việc xóa một cạnh từ cây khung sẽ làm cho Grahp là không tuần hoàn. \
    <br> - Thêm một cạnh vào cây khung sẽ tạo nên một vòng tuần hoàn. </div> \
    <div class='lesson-content'><b>III. Thuộc tính toán học của cây khung (Spanning Tree) </b></div> \
    <div class ='lesson'> Cây khung có n-1 cạnh, trong đó n là số nút (đỉnh). \
    <br> Từ một Graph tuần hoàn, bằng việc xóa đi tối đa <b>e-n+1</b> cạnh, chúng ta có thể xây dựng một cây khung. \
    <br> Một Grahp tuần hoàn có thể có tối đa n<sup>n-2</sup> cây khung. </div> \
    <div class='lesson-content'><b>IV. Ứng dụng của cây khung (Spanning Tree) </b></div> \
    <div class ='lesson'> Về cơ bản cây khung được sử dụng để tìm các đường ngắn nhất để kết nối tất cả các nút trong một Graph. Các ứng dụng phổ biến của cây khung là: Lập kế hoạch mạng dân sự, Giao thức định tuyến mạng máy tính, Cluster Analysis. </div> \
    <div class='lesson-content'><b>V. Tính chất </b></div> \
    <div class ='lesson'> - Một cây bao phủ là một đồ thị cây liên thông, tức là có một đường đi giữa mọi cặp đỉnh trong đồ thị. \
    <br> - Cây bao phủ không chứa chu trình. Điều này làm cho nó trở thành một cây, không phải là một đồ thị. \
    <br> - Cây bao phủ chứa tất cả các đỉnh của đồ thị gốc. \
    <br> - Số lượng cạnh trong cây bao phủ là n - 1, trong đó n là số lượng đỉnh của đồ thị. \
    <br> - Nếu có nhiều cây bao phủ, tất cả chúng đều có cùng số lượng cạnh và không trùng lặp. \
    <br> - Có nhiều thuật toán để tìm kiếm cây bao phủ tốt nhất, như thuật toán Kruskal và thuật toán Prim. Độ phức tạp của cả hai thuật toán là O(E log V), trong đó E là số cạnh và V là số đỉnh trong đồ thị. </div> \
    <br> \
    <br> \
    <br> \
    </div> ",
    "<div id='nd-content-container'>\
    <div id = 'ndcontent'> \
    <div class='lesson-content'><b>I. Đệ qui (Recursion) là gì ? </b></div> \
    <div class ='lesson'> Một số ngôn ngữ lập trình cho phép việc một module hoặc một hàm được gọi tới chính nó. Kỹ thuật này được gọi là <b>Đệ qui (Recursion) </b>. \
        Trong đệ qui, một hàm <b>a</b> có thể: gọi trực tiếp chính hàm <b>a</b> này hoặc gọi một hàm <b>b</b> \
        mà trả về lời gọi tới hàm <b>a</b> ban đầu. Hàm <b>a</b> được gọi là hàm đệ qui. \
    <br> <b>Ví dụ </b>: một hàm gọi chính nó </div> \
    <br><div id='codeContainer'> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> int function(int value) { \
                <br>     if(value < 1) \
                <br>        return; \
                <br>     function(value - 1); \
                <br>     printf('%d '',value);  \
                <br> } \
        </code> </div> </pre> </span> </div> \
    <br> <b>Ví dụ </b>: một hàm mà gọi tới hàm khác mà trả về lời gọi tới hàm ban đầu </div> \
    <br><div id='codeContainer'> \
        <pre id='codeBlock'> \
        <div class='codeWrapper'> \
            <code> \
                <br> int function(int value) { \
                <br>     if(value < 1) \
                <br>        return; \
                <br>     function(value - 1); \
                <br>     printf('%d '',value);  \
                <br> } \
        </code> </div> </pre> </span> </div> \
    <div class='lesson-content'><b>II. Đặc điểm của hàm đệ qui </b></div> \
    <div class ='lesson'> Một hàm đệ qui có thể tiếp tục diễn ra vô số lần giống như một vòng lặp vô hạn. Để tránh điều này, bạn phải ghi nhớ hai thuộc tính sau của hàm đệ qui: \
    <br> <b>Điều kiện cơ bản </b>: phải có ít nhất một điều kiện để khi mà gặp điều kiện này thì việc gọi chính hàm đó (gọi đệ qui) sẽ dừng lại. \
    <br> <b>Tiệm cận </b>: mỗi khi hàm đệ qui được gọi thì nó càng tiệm cận tới điều kiện cơ bản. </div> \
    <div class='lesson-content'><b>III. Sự triển khai hàm đệ qui </b></div> \
    <div class ='lesson'> Nhiều ngôn ngữ lập trình triển khai sự đệ qui theo cách thức của các ngăn xếp (stack). \
        Nói chung, mỗi khi một hàm (hàm gọi – caller) gọi hàm khác (hàm được gọi – callee) hoặc gọi chính nó (callee), \
        thì hàm caller truyền điều khiển thực thi tới callee. Tiến trình truyền này cũng có thể bao gồm một số dữ liệu từ caller tới callee. </div> \
    <div class='lesson-content'><b>IV. So sánh đệ qui và vòng lặp </b></div> \
    <div class ='lesson'> Ai đó có thể nói rằng tại sao lại sử dụng đệ qui trong khi sử dụng vòng lặp cũng có thể làm được các tác vụ tương tự.  \
        Lý do đầu tiên là đệ qui làm cho chương trình dễ đọc hơn và với các hệ thống CPU cải tiến ngày nay thì đệ qui là hiệu quả hơn rất nhiều khi so với các vòng lặp. </div> \
    <div class='lesson-content'><b>V. Độ phức tạp thời gian (Time complexity) của hàm đệ qui </b></div> \
    <div class ='lesson'> Với vòng lặp, chúng ta lấy số vòng lặp để tính độ phức tạp thời gian. Tương tự với đệ qui, giả sử mọi thứ là hằng số, \
        chúng ta tính thời gian một lời gọi đệ qui được tạo ra. Một lời gọi được tạo ra tới một hàm sẽ là Ο(1), \
        Do đó với n là thời gian một lời gọi đệ qui được tạo ra thì độ phức tạp thời gian hàm đệ qui sẽ là Ο(n). </div> \
    <div class='lesson-content'><b>VI. Độ phức tạp bộ nhớ (Space complexity) của hàm đệ qui </b></div> \
    <div class ='lesson'> Độ phức tạp bộ nhớ được ước lượng dựa vào lượng bộ nhớ cần thêm cho một module được thực thi. \
        Với vòng lặp, trình biên dịch hầu như không cần thêm bộ nhớ. Trình biên dịch sẽ tự cập nhật giá trị của biến được sử dụng ngay trong vòng lặp. \
        Nhưng với đệ qui, hệ thống cần lưu giữ các bản ghi động mỗi khi một lời gọi đệ qui được tạo. \
        Do đó có thể nói rằng, độ phức tạp bộ nhớ của hàm đệ qui là cao hơn so với vòng lặp. </div> \
    <div class='lesson-content'><b>VII. Tính chất </b></div> \
    <div class ='lesson'> - Cấu trúc dữ liệu đệ quy là một cấu trúc mà trong đó đối tượng có thể tự tham chiếu hoặc tự gọi lại chính nó. Điều này tạo ra một quy luật tái sử dụng và gọi là <b>>đệ quy</b>. \
    <br> - Cấu trúc dữ liệu đệ quy thường được sử dụng để giải quyết các vấn đề có tính chất lặp đi lặp lại hoặc chia nhỏ thành các bài toán con nhỏ hơn. \
    <br> - Mỗi lần hàm đệ quy được gọi, nó tạo ra một khung hàm mới và thêm vào cây gọi đệ quy. Cây gọi đệ quy này có thể trở nên lớn và sâu nếu có nhiều cuộc gọi đệ quy. \
    <br> - Để tránh lặp vô hạn, mỗi hàm đệ quy thường đi kèm với một điều kiện dừng gọi là <b>>base case</b>. Khi điều kiện này được đáp ứng, cuộc gọi đệ quy dừng lại và bắt đầu trả về giá trị. \
    <br> - Độ phức tạp thời gian của cấu trúc dữ liệu đệ quy phụ thuộc vào số lần đệ quy và thời gian thực hiện trong mỗi lần đệ quy. Nếu mỗi lần đệ quy giảm kích thước của vấn đề một cách đáng kể, thì độ phức tạp thời gian thường là O(2<sup>n</sup>) với n là số lần đệ quy. </div> \
    <br> \
    <br> \
    <br> \
    </div>",
    // Thêm nội dung tương ứng cho các mục khác ở đây
    ];

    const ndContent = document.getElementById('nd');
    const baiHocItems = document.querySelectorAll('.baihoc2-item');
    const ndlqItems = document.querySelectorAll('.ndlq-item');

    baiHocItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baihoc');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Bubble') {
            ndContent.innerHTML = lessonContents[1];
        } else if (item.textContent.trim() === 'Insert') {
            ndContent.innerHTML = lessonContents[2];
        }
        else if(item.textContent.trim() === 'Selection') {
            ndContent.innerHTML = lessonContents[3];
        }
        else if(item.textContent.trim() === 'Merge') {
            ndContent.innerHTML = lessonContents[4];
        }
        else if(item.textContent.trim() === 'Quick') {
            ndContent.innerHTML = lessonContents[5];
        }
        else if(item.textContent.trim() === 'Shell') {
            ndContent.innerHTML = lessonContents[6];
        }
        // else if(item.textContent.trim() === 'Khái') {
        //     ndContent.innerHTML = lessonContents[6];
        // }

        else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

    ndlqItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        if (item.textContent.trim() === 'Bubble Sort') {
            ndContent.innerHTML = lessonContents[1];
        } else if (item.textContent.trim() === 'Insert Sort') {
            ndContent.innerHTML = lessonContents[2];
        } 
        else if(item.textContent.trim() === 'Selection Sort') {
            ndContent.innerHTML = lessonContents[3];
        }
        else if(item.textContent.trim() === 'Merge Sort') {
            ndContent.innerHTML = lessonContents[4];
        }
        else if(item.textContent.trim() === 'Quick Sort') {
            ndContent.innerHTML = lessonContents[5];
        }
        else if(item.textContent.trim() === 'Shell Sort') {
            ndContent.innerHTML = lessonContents[6];
        }
        else {
        // Xử lý các mục khác trong Nội dung liên quan nếu cần thiết
        }
        });
    });

  // ------------------- //
    baiHocItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baihoc');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Stack') {
            ndContent.innerHTML = lessonContents[7];
        } else if (item.textContent.trim() === 'Queue') {
            ndContent.innerHTML = lessonContents[8];
        } else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

    ndlqItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        if (item.textContent.trim() === 'Stack') {
            ndContent.innerHTML = lessonContents[7];
        } else if (item.textContent.trim() === 'Queue') {
            ndContent.innerHTML = lessonContents[8];
        } else {
        // Xử lý các mục khác trong Nội dung liên quan nếu cần thiết
        }
        });
    });

  // --------------------------------- //

    baiHocItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baihoc');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Linked') {
            ndContent.innerHTML = lessonContents[9];
        } else if (item.textContent.trim() === 'Doubly') {
            ndContent.innerHTML = lessonContents[10];
        } else if (item.textContent.trim() === 'Circular') {
            ndContent.innerHTML = lessonContents[11];
        } else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

    ndlqItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        if (item.textContent.trim() === 'Linked Lists') {
            ndContent.innerHTML = lessonContents[9];
        } else if (item.textContent.trim() === 'Doubly Linked List') {
            ndContent.innerHTML = lessonContents[10];
        } else if (item.textContent.trim() === 'Circular Linked List') {
            ndContent.innerHTML = lessonContents[11];
        } else {
            // Xử lý các mục khác trong Nội dung liên quan nếu cần thiết
        }
        });
    });

// ----------------------------------------------- //
baiHocItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baihoc');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Cấu') {
            ndContent.innerHTML = lessonContents[12];
        }

        else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

  // --------------------------- //

    baiHocItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baihoc');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Linear') {
            ndContent.innerHTML = lessonContents[13];
        } else if (item.textContent.trim() === 'Binary') {
            ndContent.innerHTML = lessonContents[14];
        } else if (item.textContent.trim() === 'Inter') {
                ndContent.innerHTML = lessonContents[15];
        } else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

    ndlqItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        if (item.textContent.trim() === 'Linear Search') {
            ndContent.innerHTML = lessonContents[13];
        } else if (item.textContent.trim() === 'Binary Search') {
            ndContent.innerHTML = lessonContents[14];
        } else if (item.textContent.trim() === 'Interpolation Search') {
            ndContent.innerHTML = lessonContents[15];
        } else {
            // Xử lý các mục khác trong Nội dung liên quan nếu cần thiết
        }
        });
    });

    // ------------------------
    baiHocItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baihoc');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Hash') {
            ndContent.innerHTML = lessonContents[16];
        }

        else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

  // --------------------- //
    baiHocItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baihoc');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Graph') {
            ndContent.innerHTML = lessonContents[17];
        } else if (item.textContent.trim() === 'Dept') {
            ndContent.innerHTML = lessonContents[18];
        } else if (item.textContent.trim() === 'Breadth') {
            ndContent.innerHTML = lessonContents[19];
        } else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

    ndlqItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        if (item.textContent.trim() === 'Dept First Traversal') {
            ndContent.innerHTML = lessonContents[18];
        } else if (item.textContent.trim() === 'Breadth First Traversal') {
            ndContent.innerHTML = lessonContents[19];
        } else {
            // Xử lý các mục khác trong Nội dung liên quan nếu cần thiết
        }
        });
    });

  // --------------------- //
    baiHocItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baihoc');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Tree') {
            ndContent.innerHTML = lessonContents[20];
        } else if (item.textContent.trim() === 'Cây') {
            ndContent.innerHTML = lessonContents[21];
        } else if (item.textContent.trim() === 'Binary') {
            ndContent.innerHTML = lessonContents[22];
        } else if (item.textContent.trim() === 'AVL') {
            ndContent.innerHTML = lessonContents[23];
        } else if (item.textContent.trim() === 'Spanning') {
            ndContent.innerHTML = lessonContents[24];
        } else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

    ndlqItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        if (item.textContent.trim() === 'Duyệt cây - Tree Traversal') {
            ndContent.innerHTML = lessonContents[21];
        } else if (item.textContent.trim() === 'Binary Search Tree') {
            ndContent.innerHTML = lessonContents[22];
        } else if (item.textContent.trim() === 'AVL Tree') {
            ndContent.innerHTML = lessonContents[23];
        } else if (item.textContent.trim() === 'Spanning Tree') {
            ndContent.innerHTML = lessonContents[24];
        } else {
            // Xử lý các mục khác trong Nội dung liên quan nếu cần thiết
        }
        });
    });

    // -----------------------
    baiHocItems.forEach((item, index) => {
        item.addEventListener('click', function () {
        const selectedContent = document.getElementById('baihoc');
        selectedContent.style.display = 'block';

        if (item.textContent.trim() === 'Đệ') {
            ndContent.innerHTML = lessonContents[25];
        }

        else {
            ndContent.innerHTML = lessonContents[index];
        }
        });
    });

});



// --------------------------------------------- //
document.addEventListener('DOMContentLoaded', function () {
    const khaiNiemCheckbox = document.getElementById('khai-niem-checkbox');
    const baiHoc3Item = document.querySelectorAll('.baihoc3-item');
    const noiDungKhaiNiem = document.getElementById('nd');
    const noiDungKhaiNiem1 = document.getElementById('nd');
    const noiDungKhaiNiem2 = document.getElementById('nd');
    const noiDungKhaiNiem3 = document.getElementById('nd');
    const noiDungKhaiNiem4 = document.getElementById('nd');
    const noiDungKhaiNiem5 = document.getElementById('nd');
    const noiDungKhaiNiem6 = document.getElementById('nd');
    const noiDungKhaiNiem7 = document.getElementById('nd');
    const noiDungKhaiNiem8 = document.getElementById('nd');
    const noiDungKhaiNiem9 = document.getElementById('nd');
    const noiDungKhaiNiem10 = document.getElementById('nd');
    const noiDungKhaiNiem11 = document.getElementById('nd');
    const noiDungKhaiNiem12 = document.getElementById('nd');
    const noiDungKhaiNiem13 = document.getElementById('nd');
    const noiDungKhaiNiem14 = document.getElementById('nd');
    const noiDungKhaiNiem15 = document.getElementById('nd');
    const noiDungKhaiNiem16 = document.getElementById('nd');
    const noiDungKhaiNiem17 = document.getElementById('nd');
    const noiDungKhaiNiem18 = document.getElementById('nd');
    const noiDungKhaiNiem19 = document.getElementById('nd');
    const noiDungKhaiNiem20 = document.getElementById('nd');
    const noiDungKhaiNiem21 = document.getElementById('nd');
    const noiDungKhaiNiem22 = document.getElementById('nd');
    const noiDungKhaiNiem23 = document.getElementById('nd');

      // Set initial display based on checkbox state
    baiHoc3Item.forEach(item => {
        item.style.display = khaiNiemCheckbox.checked ? 'block' : 'none';
    });

    // Add event listener for checkbox change
    khaiNiemCheckbox.addEventListener('change', function () {
    // Show/hide based on checkbox state
        baiHoc3Item.forEach(item => {
            item.style.display = this.checked ? 'block' : 'none';
        });

        // Clear content when checkbox state changes
        noiDungKhaiNiem.innerHTML = '';
        noiDungKhaiNiem1.innerHTML = '';
        noiDungKhaiNiem2.innerHTML = '';
        noiDungKhaiNiem3.innerHTML = '';
        noiDungKhaiNiem4.innerHTML = '';
        noiDungKhaiNiem5.innerHTML = '';
        noiDungKhaiNiem6.innerHTML = '';
        noiDungKhaiNiem7.innerHTML = '';
        noiDungKhaiNiem8.innerHTML = '';
        noiDungKhaiNiem9.innerHTML = '';
        noiDungKhaiNiem10.innerHTML = '';
        noiDungKhaiNiem11.innerHTML = '';
        noiDungKhaiNiem12.innerHTML = '';
        noiDungKhaiNiem13.innerHTML = '';
        noiDungKhaiNiem14.innerHTML = '';
        noiDungKhaiNiem15.innerHTML = '';
        noiDungKhaiNiem16.innerHTML = '';
        noiDungKhaiNiem17.innerHTML = '';
        noiDungKhaiNiem18.innerHTML = '';
        noiDungKhaiNiem19.innerHTML = '';
        noiDungKhaiNiem20.innerHTML = '';
        noiDungKhaiNiem21.innerHTML = '';
        noiDungKhaiNiem22.innerHTML = '';
        noiDungKhaiNiem23.innerHTML = '';
    });

      // Add event listeners for Khái niệm sections
    document.getElementById('kn').addEventListener('click', function () {
        noiDungKhaiNiem.innerHTML = '<div class="lesson-content"><b>I. Sắp xếp nổi bọt (Bubble Sort) là gì ? </b></div>\
    <div class ="lesson">Sắp xếp nổi bọt là một giải thuật sắp xếp đơn giản. \
    Giải thuật sắp xếp này được tiến hành dựa trên việc so sánh cặp phần tử liền kề nhau và tráo đổi thứ tự nếu chúng không theo thứ tự.\
    <br>Giải thuật này không thích hợp sử dụng với các tập dữ liệu lớn khi mà độ phức tạp trường hợp xấu nhất và trường hợp trung bình là O(n<sup>2</sup>) với n là số phần tử. \
    <br>Giải thuật sắp xếp nổi bọt là giải thuật chậm nhất trong số các giải thuật sắp xếp cơ bản. \
    Giải thuật này còn chậm hơn giải thuật đổi chỗ trực tiếp mặc dù số lần so sánh bằng nhau, nhưng do đổi chỗ hai phần tử kề nhau nên số lần đổi chỗ nhiều hơn.</div> \
    <br> \
    <br> \
    <br> ';
    });

    document.getElementById('kn1').addEventListener('click', function () {
        noiDungKhaiNiem1.innerHTML = '<div class="lesson-content"><b>I. Sắp xếp chèn (Insertion Sort) là gì ? </b></div> \
    <div class ="lesson">Sắp xếp chèn là một giải thuật sắp xếp dựa trên so sánh in-place. \
    Ở đây, một danh sách con luôn luôn được duy trì dưới dạng đã qua sắp xếp. \
    Sắp xếp chèn là chèn thêm một phần tử vào danh sách con đã qua sắp xếp. \
    Phần tử được chèn vào vị trí thích hợp sao cho vẫn đảm bảo rằng danh sách con đó vẫn sắp theo thứ tự. \
    <br>Với cấu trúc dữ liệu mảng, chúng ta tưởng tượng là: mảng gồm hai phần: một danh sách con đã được sắp xếp và phần khác là các phần tử không có thứ tự. \
    Giải thuật sắp xếp chèn sẽ thực hiện việc tìm kiếm liên tiếp qua mảng đó, \
    và các phần tử không có thứ tự sẽ được di chuyển và được chèn vào vị trí thích hợp trong danh sách con (của cùng mảng đó). \
    <br>Giải thuật này không thích hợp sử dụng với các tập dữ liệu lớn khi độ phức tạp trường hợp xấu nhất và trường hợp trung bình là Ο(n<sup>2</sup>) với n là số phần tử. </div> \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('kn2').addEventListener('click', function () {
        noiDungKhaiNiem2.innerHTML = '<div class="lesson-content"><b>I. Giải thuật sắp xếp chọn (Selection Sort) là gì ? </b></div> \
    <div class ="lesson"> Giải thuật sắp xếp chọn (Selection Sort) là một giải thuật đơn giản. Giải thuật sắp xếp này là một giải thuật dựa trên việc so sánh in-place, \
    trong đó danh sách được chia thành hai phần, phần được sắp xếp (sorted list) ở bên trái và phần chưa được sắp xếp (unsorted list) ở bên phải. \
    Ban đầu, phần được sắp xếp là trống và phần chưa được sắp xếp là toàn bộ danh sách ban đầu. \
    <br>Phần tử nhỏ nhất được lựa chọn từ mảng chưa được sắp xếp và được tráo đổi với phần bên trái nhất và phần tử đó trở thành phần tử của mảng được sắp xếp. \
    Tiến trình này tiếp tục cho tới khi toàn bộ từng phần tử trong mảng chưa được sắp xếp đều được di chuyển sang mảng đã được sắp xếp. \
    <br>Giải thuật này không phù hợp với tập dữ liệu lớn khi mà độ phức tạp trường hợp xấu nhất và trường hợp trung bình là O(n2) với n là số phần tử. </div>\
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('kn3').addEventListener('click', function () {
        noiDungKhaiNiem3.innerHTML = '<div class="lesson-content"><b>I. Giải thuật sắp xếp trộn (Merge Sort) là gì ? </b></div> \
    <div class ="lesson"> Sắp xếp trộn (Merge Sort) là một giải thuật sắp xếp dựa trên giải thuật <b>Chia để trị (Divide and Conquer)</b>. Với độ phức tạp thời gian trường hợp xấu nhất là Ο(n log n) thì đây là một trong các giải thuật đáng được quan tâm nhất. \
    <br>Đầu tiên, giải thuật sắp xếp trộn chia mảng thành hai nửa và sau đó kết hợp chúng lại với nhau thành một mảng đã được sắp xếp. </div> \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('kn4').addEventListener('click', function () {
        noiDungKhaiNiem4.innerHTML = '<div class="lesson-content"><b>I. Sắp xếp nhanh (Quick Sort) là gì ? </b></div> \
    <div class ="lesson"> Giải thuật sắp xếp nhanh (Quick Sort) là một giải thuật hiệu quả cao và dựa trên việc chia mảng dữa liệu thành các mảng nhỏ hơn. \
        Giải thuật sắp xếp nhanh chia mảng thành hai phần bằng cách so sánh từng phần tử của mảng với một phần tử được chọn gọi là <b> phần tử chốt (Pivot) </b> : \
        một mảng bao gồm các phần tử nhỏ hơn hoặc bằng phần tử chốt và mảng còn lại bao gồm các phần tử lớn hơn hoặc bằng phần tử chốt. \
    <br> Tiến trình chia này diễn ra tiếp tục cho tới khi độ dài của các mảng con đều bằng 1. Giải thuật sắp xếp nhanh tỏ ra khá hiệu quả \
    với các tập dữ liệu lớn khi mà độ phức tạp trường hợp trung bình và trường hợp xấu nhất là O(nlogn) với n là số phần tử. </div> \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('kn5').addEventListener('click', function () {
        noiDungKhaiNiem5.innerHTML = '<div class="lesson-content"><b>I. Sắp xếp Shell Sort là gì ? </b></div> \
        <div class ="lesson"> Shell Sort là một giải thuật sắp xếp mang lại hiệu quả cao dựa trên giải thuật sắp xếp chèn (Insertion Sort). \
        Giải thuật này tránh các trường hợp phải tráo đổi vị trí của hai phần tử xa nhau trong giải thuật sắp xếp chọn (nếu như phần tử nhỏ hơn ở vị trí bên phải khá xa so với phần tử lớn hơn bên trái). \
    <br> Đầu tiên, giải thuật này sử dụng giải thuật sắp xếp chọn trên các phần tử có khoảng cách xa nhau, sau đó sắp xếp các phần tử có khoảng cách hẹp hơn.\
    Khoảng cách này còn được gọi là <b>khoảng (interval) </b> – là số vị trí từ phần tử này tới phần tử khác. Khoảng này được tính dựa vào công thức Knuth như sau: \
    <center><b> h = h*3 + 1 </b><i>trong đó: h là Khoảng (interval) với giá trị ban đâu là 1 </i></center> \
    Giải thuật này khá hiệu quả với các tập dữ liệu có kích cỡ trung bình khi mà độ phức tạp trường hợp xấu nhất và trường hợp trung bình là O(n), với n là số phần tử. </div> \
    <br> \
    <br> \
    <br> ';
    });

    document.getElementById('tq1').addEventListener('click', function () {
        noiDungKhaiNiem6.innerHTML = '<div class="lesson-content"><b>I. Cấu trúc dữ liệu (Data Structure) là gì? </div></b>\
    <div class ="lesson">Cấu trúc dữ liệu là cách lưu trữ, tổ chức dữ liệu có thứ tự, có hệ thống để dữ liệu có thể được sử dụng một cách hiệu quả. </div>\
    <div class="lesson-content"><b>II. Đặc điểm của Cấu trúc dữ liệu </b></div> \
    <div class ="lesson"><b>Chính xác:</b> Sự triển khai của Cấu trúc dữ liệu nên triển khai Interface của nó một cách chính xác. \
    <br><b>Độ phức tạp về thời gian (Time Complexity):</b> Thời gian chạy hoặc thời gian thực thi của các phép tính của cấu trúc dữ liệu phải là nhỏ nhất có thể. \
    <br><b>Độ phức tạp về bộ nhớ (Space Complexity): </b> Sự sử dụng bộ nhớ của mỗi phép tính của cấu trúc dữ liệu nên là nhỏ nhất có thể. </div> \
    <br> \
    <br> \
    <br> ';
    });

    document.getElementById('kn6').addEventListener('click', function () {
        noiDungKhaiNiem7.innerHTML = '<div class="lesson-content"><b>I. Ngăn xếp (Stack) là gì ? </b></div> \
    <div class ="lesson"> Một ngăn xếp là một cấu trúc dữ liệu trừu tượng (Abstract Data Type – viết tắt là ADT), hầu như được sử dụng trong hầu hết mọi ngôn ngữ lập trình. Đặt tên là ngăn xếp bởi vì nó hoạt động như một ngăn xếp trong đời sống thực, ví dụ như một cỗ bài hay một chồng đĩa,… </div> \
    <br><center><img src="img/sta1.jpg" alt="Bubble Sort Image"></center> \
    <div class ="lesson"> Trong đời sống thực, ngăn xếp chỉ cho phép các hoạt động tại vị trí trên cùng của ngăn xếp. \
        Ví dụ, chúng ta chỉ có thể đặt hoặc thêm một lá bài hay một cái đĩa vào trên cùng của ngăn xếp. \
        Do đó, cấu trúc dữ liệu trừu tượng ngăn xếp chỉ cho phép các thao tác dữ liệu tại vị trí trên cùng. Tại bất cứ thời điểm nào, chúng ta chỉ có thể truy cập phần tử trên cùng của ngăn xếp. \
    <br> Đặc điểm này làm cho ngăn xếp trở thành cấu trúc dữ liệu dạng <b>LIFO</b>. <b>LIFO</b> là viết tắt của <b>Last-In-First-Out</b>. \
    Ở đây, phần tử được đặt vào (được chèn, được thêm vào) cuối cùng sẽ được truy cập đầu tiên. \
    Trong thuật ngữ ngăn xếp, hoạt động chèn được gọi là hoạt động <b>PUSH</b> và hoạt động xóa được gọi là hoạt động <b>POP</b>. </div> \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('kn7').addEventListener('click', function () {
        noiDungKhaiNiem8.innerHTML = '<div class="lesson-content"><b>I. Cấu trúc dữ liệu hàng đợi (Queue) là gì ? </b></div> \
    <div class ="lesson"> Hàng đợi (Queue) là một cấu trúc dữ liệu trừu tượng, là một cái gì đó tương tự như hàng đợi trong đời sống hàng ngày (xếp hàng). </div> \
    <br><center><img src="img/que1.jpg" alt="Bubble Sort Image"></center> \
    <div class ="lesson"> Khác với ngăn xếp, hàng đợi là mở ở cả hai đầu. Một đầu luôn luôn được sử dụng để chèn dữ liệu vào (hay còn gọi là sắp vào hàng) và đầu kia được sử dụng để xóa dữ liệu (rời hàng). \
        Cấu trúc dữ liệu hàng đợi tuân theo phương pháp First-In-First-Out, tức là dữ liệu được nhập vào đầu tiên sẽ được truy cập đầu tiên. \
    <br> Trong đời sống thực chúng ta có rất nhiều ví dụ về hàng đợi, chẳng hạn như hàng xe ô tô trên đường một chiều (đặc biệt là khi tắc xe), trong đó xe nào vào đầu tiên sẽ thoát ra đầu tiên. Một vài ví dụ khác là xếp hàng học sinh, xếp hàng mua vé,… </div> \
    <br> \
    <br> \
    <br> ';
    });

    document.getElementById('kn8').addEventListener('click', function () {
        noiDungKhaiNiem9.innerHTML = '<div class="lesson-content"><b>I. Danh sách liên kết (Linked List) là gì ? </b></div> \
    <div class ="lesson"> Một Danh sách liên kết (Linked List) là một dãy các cấu trúc dữ liệu được kết nối với nhau thông qua các liên kết (link). \
        Hiểu một cách đơn giản thì Danh sách liên kết là một cấu trúc dữ liệu bao gồm một nhóm các nút (node) tạo thành một chuỗi. Mỗi nút gồm dữ liệu ở nút đó và tham chiếu đến nút kế tiếp trong chuỗi. \
    <br> Danh sách liên kết là cấu trúc dữ liệu được sử dụng phổ biến thứ hai sau mảng. Dưới đây là các khái niệm cơ bản liên quan tới Danh sách liên kết: \
    <br><b> Link (liên kết) </b>: mỗi link của một Danh sách liên kết có thể lưu giữ một dữ liệu được gọi là một phần tử. \
    <br><b> Next </b>: Mỗi liên kết của một Danh sách liên kết chứa một link tới next link được gọi là Next. \
    <br><b> First </b>: một Danh sách liên kết bao gồm các link kết nối tới first link được gọi là First. </div> \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('kn9').addEventListener('click', function () {
        noiDungKhaiNiem10.innerHTML = '<div class="lesson-content"><b>I. Danh sách liên kết đôi (Doubly Linked List) là gì ? </b></div> \
    <div class ="lesson"> Danh sách liên kết đôi (Doubly Linked List) là một biến thể của Danh sách liên kết (Linked List), trong đó hoạt động duyệt qua các nút có thể được thực hiện theo hai chiều: \
        về trước và về sau một cách dễ dàng khi so sánh với Danh sách liên kết đơn. Dưới đây là một số khái niệm quan trọng cần ghi nhớ về Danh sách liên kết đôi. \
    <br> <b>Link </b>: mỗi link của một Danh sách liên kết có thể lưu giữ một dữ liệu và được gọi là một phần tử. \
    <br> <b>Next </b>: mỗi link của một Danh sách liên kết có thể chứa một link tới next link và được gọi là Next. \
    <br> <b>Prev </b>: mỗi link của một Danh sách liên kết có thể chứa một link tới previous link và được gọi là Prev. \
    <br> <b>First và Last </b>: một Danh sách liên kết chứa link kết nối tới first link được gọi là First và tới last link được gọi là Last. </div> \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('kn10').addEventListener('click', function () {
        noiDungKhaiNiem11.innerHTML = '<div class="lesson-content"><b>I. Danh sách liên kết vòng (Circular Linked List) là gì ? </b></div> \
    <div class ="lesson"> Danh sách liên kết vòng (Circular Linked List) là một biến thể của Danh sách liên kết (Linked List), trong đó phần tử đầu tiên \
        trỏ tới phần tử cuối cùng và phần tử cuối cùng trỏ tới phần tử đầu tiên. \
    <br> Cả hai loại Danh sách liên kết đơn (Singly Linked List) và Danh sách liên kết đôi (Doubly Linked List) đều có thể được tạo thành dạng Danh sách liên kết vòng. \
    Phần dưới chúng ta sẽ tìm hiểu từng cách tạo một. </div> \
    <br> \
    <br> \
    <br> ';
    });

    document.getElementById('kn11').addEventListener('click', function () {
        noiDungKhaiNiem12.innerHTML = '<div class="lesson-content"><b>I. Cấu trúc dữ liệu mảng là gì ? </b></div> \
    <div class ="lesson"> Mảng (Array) là một trong các cấu trúc dữ liệu cũ và quan trọng nhất. Mảng có thể lưu giữ một số phần tử cố định và các phần tử \
        này nền có cùng kiểu. Hầu hết các cấu trúc dữ liệu đều sử dụng mảng để triển khai giải thuật. \
    <br> <b> Phần tử </b>: Mỗi mục được lưu giữ trong một mảng được gọi là một phần tử. \
    <br> <b> Chỉ mục (Index) </b>: Mỗi vị trí của một phần tử trong một mảng có một chỉ mục số được sử dụng để nhận diện phần tử. \
    <br> <b> Mảng </b> gồm các bản ghi có kiểu giống nhau, có kích thước cố định, mỗi phần tử được xác định bởi chỉ số \
    <br> <b> Mảng </b> là cấu trúc dữ liệu được cấp phát lien tục cơ bản \
    <br> <b> Ưu điểm </b> : \
    <br> - Truy cập phàn tử với thời gian hằng số O(1) \
    <br> - Sử dụng bộ nhớ hiệu quả \
    <br> - Tính cục bộ về bộ nhớ \
    <br> <b> Nhược điểm </b> : \
    <br> - Không thể thay đổi kích thước của mảng khi chương trình dang thực hiện. </div>  \
    <br> \
    <br> \
    <br> ';
    });

    document.getElementById('kn12').addEventListener('click', function () {
        noiDungKhaiNiem13.innerHTML = '<div class="lesson-content"><b>I. Tìm kiếm tuyến tính (Linear Search) là gì ? </b></div> \
    <div class ="lesson"> Linear Search là một giải thuật tìm kiếm rất cơ bản. Trong kiểu tìm kiếm này, một hoạt động tìm kiếm \
    liên tiếp được diễn ra qua tất cả từng phần tử. Mỗi phần tử đều được kiểm tra và nếu tìm thấy bất kỳ kết nối nào thì phần tử cụ thể đó được trả về; \
    nếu không tìm thấy thì quá trình tìm kiếm tiếp tục diễn ra cho tới khi tìm kiếm hết dữ liệu. </div> \
    <br><center><img src="img/li.gif" alt="Bubble Sort Image"></center>    \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('kn13').addEventListener('click', function () {
        noiDungKhaiNiem14.innerHTML = '<div class="lesson-content"><b>I. Giải thuật tìm kiếm nhị phân (Binary Search) là gì ? </b></div> \
    <div class ="lesson"> Binany Search (Tìm kiếm nhị phân) là một giải thuật tìm kiếm nhanh với độ phức tạp thời gian chạy là Ο(log n). \
        Giải thuật tìm kiếm nhị phân làm việc dựa trên nguyên tắc chia để trị (Divide and Conquer). \
        Để giải thuật này có thể làm việc một cách chính xác thì tập dữ liệu nên ở trong dạng đã được sắp xếp. \
    <br> Binary Search tìm kiếm một phần tử cụ thể bằng cách so sánh phần tử tại vị trí giữa nhất của tập dữ liệu. \
    Nếu tìm thấy kết nối thì chỉ mục của phần tử được trả về. Nếu phần tử cần tìm là lớn hơn giá trị phần tử giữa thì phần tử cần tìm được tìm trong mảng con \
    nằm ở bên phải phần tử giữa; nếu không thì sẽ tìm ở trong mảng con nằm ở bên trái phần tử giữa. \
    Tiến trình sẽ tiếp tục như vậy trên mảng con cho tới khi tìm hết mọi phần tử trên mảng con này. </div>  \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('kn14').addEventListener('click', function () {
        noiDungKhaiNiem15.innerHTML = '<div class="lesson-content"><b>I. Giải thuật Tìm kiếm nội suy (Interpolation Search) là gì ? </b></div> \
    <div class ="lesson"> Tìm kiếm nội suy (Interpolation Search) là biến thể cải tiến của Tìm kiếm nhị phân (Binary Search). \
        Để giải thuật tìm kiếm này làm việc chính xác thì tập dữ liệu phải được sắp xếp. \
    <br> Binary Search có lợi thế lớn về độ phức tạp thời gian khi so sánh với Linear Search. \
    Linear Search có độ phức tạp trường hợp xấu nhất là Ο(n) trong khi Binary Search là Ο(log n). </div>     \
    <br> \
    <br> \
    <br>';
    });

    document.getElementById('kn15').addEventListener('click', function () {
        noiDungKhaiNiem16.innerHTML = '<div class="lesson-content"><b>I. Hash Table là gì? </b></div> \
    <div class ="lesson"> Cấu trúc dữ liệu Hash Table là một cấu trúc dữ liệu lưu giữ dữ liệu theo cách thức liên hợp. \
        Trong Hash Table, dữ liệu được lưu giữ trong định dạng mảng, trong đó các giá trị dữ liệu có giá trị chỉ mục riêng. \
        Việc truy cập dữ liệu trở nên nhanh hơn nếu chúng ta biết chỉ mục của dữ liệu cần tìm. \
    <br> Do đó, với loại cấu trúc dữ liệu Hash Table này thì các hoạt động chèn và hoạt động tìm kiếm sẽ diễn ra rất nhanh, bất chấp kích cỡ của dữ liệu là bao nhiêu. \
    Hash Table sử dụng mảng như là một kho lưu giữ trung gian và sử dụng kỹ thuật Hash để tạo chỉ mục tại nơi phần tử được chèn vào. </div>  \
    <br> \
    <br> \
    <br>';
    });

    document.getElementById('kn16').addEventListener('click', function () {
        noiDungKhaiNiem17.innerHTML = '<div class="lesson-content"><b>I. Giải thuật tìm kiếm theo chiều sâu là gì ? </b></div> \
    <div class ="lesson"> Giải thuật tìm kiếm theo chiều sâu (Depth First Search – viết tắt là DFS), còn được gọi là giải thuật tìm kiếm ưu tiên chiều sâu, \
        là giải thuật duyệt hoặc tìm kiếm trên một cây hoặc một đồ thị và sử dụng stack (ngăn xếp) để ghi nhớ đỉnh liền kề để bắt đầu việc tìm kiếm \
        khi không gặp được đỉnh liền kề trong bất kỳ vòng lặp nào. Giải thuật tiếp tục cho tới khi gặp được đỉnh cần tìm hoặc tới một nút không có con. Khi đó giải thuật quay lui về đỉnh vừa mới tìm kiếm ở bước trước. </div> \
    <br><center><img src="img/df1.jpg" alt="Bubble Sort Image"></center>  \
    <br> \
    <br> \
    <br>';
    });
    document.getElementById('kn17').addEventListener('click', function () {
        noiDungKhaiNiem18.innerHTML = '<div class="lesson-content"><b>I. Giải thuật tìm kiếm theo chiều rộng là gì ? </b></div> \
    <div class ="lesson"> Giải thuật tìm kiếm theo chiều rộng (Breadth First Search – viết tắt là BFS) duyệt qua một đồ thị theo chiều rộng và sử dụng hàng đợi (queue) \
        để ghi nhớ đỉnh liền kề để bắt đầu việc tìm kiếm khi không gặp được đỉnh liền kề trong bất kỳ vòng lặp nào. </div> \
    <br><center><img src="img/bf1.jpg" alt= "Bubble Sort Image"></center> \
    <br> \
    <br> \
    <br> ';
    });

    document.getElementById('kn18').addEventListener('click', function () {
        noiDungKhaiNiem19.innerHTML = '<div class="lesson-content"><b>I. Duyệt cây là gì ? </b></div> \
    <div class ="lesson"> Duyệt cây là một tiến trình để truy cập tất cả các nút của một cây và cũng có thể in các giá trị của các nút này. \
        Bởi vì tất cả các nút được kết nối thông qua các cạnh (hoặc các link), nên chúng ta luôn luôn bắt đầu truy cập từ nút gốc. \
 </div>  \
    <div class="lesson-content"><b>II. Duyệt trung thứ tự trong cây nhị phân</b></div> \
    <div class ="lesson"> Trong cách duyệt này, cây con bên trái được truy cập đầu tiên, sau đó là nút gốc và sau đó là cây con bên phải. \
        Bạn nên luôn luôn ghi nhớ rằng mỗi nút đều có thể biểu diễn một cây con. \
        Nếu một cây nhị phân được duyệt trung thứ tự, kết quả tạo ra sẽ là các giá trị khóa được sắp xếp theo thứ tự tăng dần. </div> \
    <div class="lesson-content"><b>III. Duyệt tiền thứ tự trong cây nhị phân</b></div> \
    <div class ="lesson"> Trong cách thức duyệt tiền thứ tự trong cây nhị phân, nút gốc được duyệt đầu tiên, sau đó sẽ duyệt cây con bên trái và cuối cùng sẽ duyệt cây con bên phải. </div> \
    <div class="lesson-content"><b>IV. Duyệt hậu thứ tự trong cây nhị phân</b></div> \
    <div class ="lesson"> Trong cách thức duyệt hậu thứ tự trong cây nhị phân, nút gốc của cây sẽ được truy cập cuối cùng, do đó bạn cần chú ý. \
        Đầu tiên, chúng ta duyệt cây con bên trái, sau đó sẽ duyệt cây con bên phải và cuối cùng là duyệt nút gốc. </div> \
        <br> \
        <br> \
        <br> ';
    });
    document.getElementById('kn19').addEventListener('click', function () {
        noiDungKhaiNiem20.innerHTML = '<div class="lesson-content"><b>I. Cây tìm kiếm nhị phân là gì ? </b></div> \
    <div class ="lesson"> Một cây tìm kiếm nhị phân (Binary Search Tree – viết tắt là BST) là một cây mà trong đó tất cả các nút đều có các đặc điểm sau: \
    <br> - Cây con bên trái của một nút có khóa (key) nhỏ hơn hoặc bằng giá trị khóa của nút cha (của cây con này). \
    <br> - Cây con bên phải của một nút có khóa lớn hơn hoặc bằng giá trị khóa của nút cha (của cây con này). \
    <br> Vì thế có thể nói rằng, một cây tìm kiếm nhị phân (BST) phân chia tất cả các cây con của nó thành hai phần: <i>cây con bên trái và cây con bên phải </i> và có thể được định nghĩa như sau: \
    <br><center><i> left_subtree (keys)  ≤  node (key)  ≤  right_subtree (keys) </i></center> </div> \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('kn20').addEventListener('click', function () {
        noiDungKhaiNiem21.innerHTML = '<div class="lesson-content"><b>I. Cây AVL là gì ? </b></div> \
    <div class ="lesson"> Điều gì xảy ra nếu dữ liệu nhập vào cây tìm kiếm nhị phân (BST) là ở dạng đã được sắp thứ tự (tăng dần hoặc giảm dần). \
        Nó sẽ trông giống như sau: </div> \
    <br><center><img src="img/av1.jpg" alt="Bubble Sort Image"></center> \
    <div class ="lesson"> Cây AVL (viết tắt của tên các nhà phát minh Adelson, Velski và Landis) là cây tìm kiếm nhị phân có độ cân bằng cao. \
        Cây AVL kiểm tra độ cao của các cây con bên trái và cây con bên phải và bảo đảm rằng hiệu số giữa chúng là không lớn hơn 1. <b>Hiệu số</b> này được gọi là <b>Balance Factor (Nhân tố cân bằng) </b>. \
    <br> Dưới đây là hình ví dụ minh họa ba cây, trong đó cây đầu tiên là cân bằng, cây thứ hai và thứ ba là không cân bằng. </div>\
    <br><center><img src="img/av2.jpg" alt="Bubble Sort Image"></center> \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('kn21').addEventListener('click', function () {
        noiDungKhaiNiem22.innerHTML = '<div class="lesson-content"><b>I. Cây khung (Spanning Tree) là gì ? </b></div> \
    <div class ="lesson"> Một cây khung là một tập con của Grahp G mà có tất cả các đỉnh được bao bởi số cạnh tối thiểu nhất. \
        Vì thế, một cây khung sẽ không hình thành một vòng tuần hoàn và nó cũng không thể bị ngắt giữa chừng. \
    <br> Từ định nghĩa trên ta có thể kết luận rằng mỗi Graph G tuần hoàn sẽ có ít nhất một cây khung. Một Graph G bị ngắt giữa chừng sẽ không có bất kỳ cây khung nào. \
    <br> Dưới đây là hình ví dụ minh họa cho một Grahp G và các cây khung của nó: </div> \
    <br><center><img src="img/sp1.jpg" alt="Bubble Sort Image"></center> \
    <div class ="lesson"> Ở trên chúng ta có 3 cây khung của một đồ thị tuần hoàn. Một đồ thị tuần hoàn có thể có tối đa n<sup>n-2</sup> cây khung,\
        trong đó n là số nút. Trong ví dụ trên, n là 3 do đó 3<sup>3−2</sup> = 3 cây khung. </div>   \
    <br> \
    <br> \
    <br>';
    });

    document.getElementById('kn22').addEventListener('click', function () {
        noiDungKhaiNiem23.innerHTML = '<div class="lesson-content"><b>I. Đệ qui (Recursion) là gì ? </b></div> \
    <div class ="lesson"> Một số ngôn ngữ lập trình cho phép việc một module hoặc một hàm được gọi tới chính nó. Kỹ thuật này được gọi là <b>Đệ qui (Recursion) </b>. \
        Trong đệ qui, một hàm <b>a</b> có thể: gọi trực tiếp chính hàm <b>a</b> này hoặc gọi một hàm <b>b</b> \
        mà trả về lời gọi tới hàm <b>a</b> ban đầu. Hàm <b>a</b> được gọi là hàm đệ qui.  \
        <br> \
        <br> \
        <br>';
    });
});

// --------------------------------------------------------------------------------------- //

document.addEventListener('DOMContentLoaded', function () {
    const tinhchatCheckbox = document.getElementById('tinh-chat-checkbox');
    const baiHoc4Item = document.querySelectorAll('.baihoc4-item');
    const noiDungTinhchat = document.getElementById('nd');
    const noiDungTinhchat1 = document.getElementById('nd');
    const noiDungTinhchat2 = document.getElementById('nd');
    const noiDungTinhchat3 = document.getElementById('nd');
    const noiDungTinhchat4 = document.getElementById('nd');
    const noiDungTinhchat5 = document.getElementById('nd');
    const noiDungTinhchat6 = document.getElementById('nd');
    const noiDungTinhchat7 = document.getElementById('nd');
    const noiDungTinhchat8 = document.getElementById('nd');
    const noiDungTinhchat9 = document.getElementById('nd');
    const noiDungTinhchat10 = document.getElementById('nd');
    const noiDungTinhchat11 = document.getElementById('nd');
    const noiDungTinhchat12 = document.getElementById('nd');
    const noiDungTinhchat13 = document.getElementById('nd');
    const noiDungTinhchat14 = document.getElementById('nd');
    const noiDungTinhchat15 = document.getElementById('nd');
    const noiDungTinhchat16 = document.getElementById('nd');
    const noiDungTinhchat17 = document.getElementById('nd');
    const noiDungTinhchat18 = document.getElementById('nd');
    const noiDungTinhchat19 = document.getElementById('nd');
    const noiDungTinhchat20 = document.getElementById('nd');
    const noiDungTinhchat21 = document.getElementById('nd');
    const noiDungTinhchat22 = document.getElementById('nd');

      // Set initial display based on checkbox state
    baiHoc4Item.forEach(item => {
        item.style.display = tinhchatCheckbox.checked ? 'block' : 'none';
    });

      // Add event listener for checkbox change
    tinhchatCheckbox.addEventListener('change', function () {
        // Show/hide based on checkbox state
        baiHoc3Item.forEach(item => {
            item.style.display = this.checked ? 'block' : 'none';
        });

        // Clear content when checkbox state changes
        noiDungTinhchat.innerHTML = '';
        noiDungTinhchat1.innerHTML = '';
        noiDungTinhchat2.innerHTML = '';
        noiDungTinhchat3.innerHTML = '';
        noiDungTinhchat4.innerHTML = '';
        noiDungTinhchat5.innerHTML = '';
        noiDungTinhchat6.innerHTML = '';
        noiDungTinhchat7.innerHTML = '';
        noiDungTinhchat8.innerHTML = '';
        noiDungTinhchat9.innerHTML = '';
        noiDungTinhchat10.innerHTML = '';
        noiDungTinhchat11.innerHTML = '';
        noiDungTinhchat12.innerHTML = '';
        noiDungTinhchat13.innerHTML = '';
        noiDungTinhchat14.innerHTML = '';
        noiDungTinhchat15.innerHTML = '';
        noiDungTinhchat16.innerHTML = '';
        noiDungTinhchat17.innerHTML = '';
        noiDungTinhchat18.innerHTML = '';
        noiDungTinhchat19.innerHTML = '';
        noiDungTinhchat20.innerHTML = '';
        noiDungTinhchat21.innerHTML = '';
        noiDungTinhchat22.innerHTML = '';
    });

      // Add event listeners for Khái niệm sections
    document.getElementById('tc').addEventListener('click', function () {
        noiDungTinhchat.innerHTML = '<div class="lesson-content"><b>I. Những điều lưu ý của thuật toán </b> </div> \
    <b><div class ="lesson"> 1. Ưu điểm </b> \
    <br> - Là thuật toán cơ bản, dễ hiểu, phù hợp cho người bắt đầu học về sắp xếp. \
    <br> - Đoạn code ngắn gọn, dễ nhớ. \
    <br><b> 2. Nhược điểm </b> \
    <br> - Hiệu suất chậm nhất trong các thuật toán sắp xếp. \
    <br> - Không hiệu quả với những dữ liệu lớn. \
    <br><b> 3. Thời gian tính và độ phức tạp </b> \
    <br>Với mỗi i = 1,2,...,n - 1 ta cần n - i phép so sánh. Do đó số nhiều nhất các lần so sánh và đổi chỗ trong giải thuật là \
    (n - 1) + (n - 2) + ... + 2 + 1 = (n-1)n/2. Do đó ta có độ phức tạp là O(n<sup>2</sup>). </div> \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('tc1').addEventListener('click', function () {
        noiDungTinhchat1.innerHTML = '<div class="lesson-content"><b>I. Độ phức tạp thuật toán </b></div> \
        <div class ="lesson">Giải thuật này không thích hợp sử dụng với các tập dữ liệu lớn khi độ phức tạp trường hợp xấu nhất và trường hợp trung bình là Ο(n<sup>2</sup>) với n là số phần tử. \
        <br> Trường hợp tốt: O(n) \
        <br> Trung bình: Ο(n<sup>2</sup>) \
        <br> Trường hợp xấu: Ο(n<sup>2</sup>) </div>\
        <br> \
    <br> \
    <br> ';
    });
    document.getElementById('tc2').addEventListener('click', function () {
        noiDungTinhchat2.innerHTML = '<div class="lesson-content"><b>I. Tính chất và độ phức tạp thuật toán </b></div> \
    <div class ="lesson">Giải thuật sắp xếp này là một giải thuật dựa trên việc so sánh in-place, \
        trong đó danh sách được chia thành hai phần, phần được sắp xếp (sorted list) ở bên trái và phần chưa được sắp xếp (unsorted list) ở bên phải. \
         Ban đầu, phần được sắp xếp là trống và phần chưa được sắp xếp là toàn bộ danh sách ban đầu. \
    <br>Phần tử nhỏ nhất được lựa chọn từ mảng chưa được sắp xếp và được tráo đổi với phần bên trái nhất và phần tử đó trở thành phần tử của mảng được sắp xếp. \
        Tiến trình này tiếp tục cho tới khi toàn bộ từng phần tử trong mảng chưa được sắp xếp đều được di chuyển sang mảng đã được sắp xếp. \
    <br>Giải thuật này không phù hợp với tập dữ liệu lớn khi mà độ phức tạp trường hợp xấu nhất và trường hợp trung bình là O(n2) với n là số phần tử. </div>  \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('tc3').addEventListener('click', function () {
        noiDungTinhchat3.innerHTML = '<div class="lesson-content"><b>I. Tính chất và độ phức tạp thuật toán? </b></div> \
    <div class ="lesson"> Với độ phức tạp thời gian trường hợp xấu nhất là Ο(n log n) thì đây là một trong các giải thuật đáng được quan tâm nhất. \
        <br>Đầu tiên, giải thuật sắp xếp trộn chia mảng thành hai nửa và sau đó kết hợp chúng lại với nhau thành một mảng đã được sắp xếp. </div> \
        <br> \
    <br> \
    <br> ';
    });
    document.getElementById('tc4').addEventListener('click', function () {
        noiDungTinhchat4.innerHTML = '<div class="lesson-content"><b>I. Tính chất và độ phức tạp thuật toán? </b></div> \
    <div class ="lesson">Giải thuật sắp xếp nhanh chia mảng thành hai phần bằng cách so sánh từng phần tử của mảng với một phần tử được chọn gọi là <b> phần tử chốt (Pivot) </b> : \
        một mảng bao gồm các phần tử nhỏ hơn hoặc bằng phần tử chốt và mảng còn lại bao gồm các phần tử lớn hơn hoặc bằng phần tử chốt. \
    <br> Tiến trình chia này diễn ra tiếp tục cho tới khi độ dài của các mảng con đều bằng 1. Giải thuật sắp xếp nhanh tỏ ra khá hiệu quả \
    với các tập dữ liệu lớn khi mà độ phức tạp trường hợp trung bình và trường hợp xấu nhất là O(nlogn) với n là số phần tử. </div>  \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('tc5').addEventListener('click', function () {
        noiDungTinhchat5.innerHTML = '<div class="lesson-content"><b>I. Tính chất và độ phức tạp thuật toán? </b></div> \
    <div class ="lesson"> - Shell Sort là một thuật toán sắp xếp không ổn định, nghĩa là nó có thể thay đổi vị trí của các phần tử có giá trị bằng nhau. \
        Ý tưởng chính của Shell Sort là sắp xếp các phần tử cách xa nhau, sau đó giảm dần khoảng cách giữa các phần tử để thực hiện sắp xếp địa phương (local sorting). \
    <br> - Shell Sort thường hiệu quả hơn Insertion Sort khi xử lý dãy dữ liệu lớn, đặc biệt là khi dãy dữ liệu gần sắp xếp. \
    <br> - Shell Sort không đòi hỏi bộ nhớ phụ (auxiliary memory) ngoài việc lưu trữ dãy dữ liệu cần sắp xếp. \
    <br> - <b>Độ phức tạp thời gian</b> của Shell Sort không dễ đánh giá chính xác do nó phụ thuộc vào khoảng cách giữa các phần tử khi sắp xếp.  </div>  \
    <br> \
    <br> \
    <br> ';
    });

    document.getElementById('tc6').addEventListener('click', function () {
        noiDungTinhchat6.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> - LIFO (Last In, First Out): Phần tử cuối cùng được thêm vào Stack là phần tử đầu tiên được lấy ra khỏi Stack. Điều này tạo ra một cấu trúc dữ liệu theo thứ tự ngược lại so với thứ tự thêm vào. \
    <br> - Các thao tác cơ bản trên Stack bao gồm <b>"push"</b> để thêm một phần tử vào đỉnh của Stack và <b>"pop"</b> để loại bỏ phần tử ở đỉnh của Stack. \
    <br> - <b>Đỉnh Stack </b>: Là phần tử cuối cùng được thêm vào Stack, cũng là phần tử đầu tiên được lấy ra khi thực hiện thao tác "pop". \
    <br> - Stack có thể được triển khai dưới dạng mảng động hoặc danh sách liên kết, và nó không giới hạn kích thước, tùy thuộc vào bộ nhớ hệ thống. \
    <br> - Stack thường được sử dụng trong nhiều ứng dụng, bao gồm quản lý ngăn xếp cuộc gọi hàm trong ngôn ngữ lập trình, duyệt cây (traversal), và các vấn đề liên quan đến lưu trữ tạm thời và quản lý trạng thái. </div> \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('tc7').addEventListener('click', function () {
        noiDungTinhchat7.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> - FIFO (First In, First Out): Phần tử đầu tiên được thêm vào Queue là phần tử đầu tiên được lấy ra khỏi Queue. Điều này tạo ra một cấu trúc dữ liệu theo thứ tự giống như hàng đợi thực tế. \
    <br> - Các thao tác cơ bản trên Queue bao gồm "enqueue" để thêm một phần tử vào cuối Queue và "dequeue" để loại bỏ phần tử ở đầu Queue. \
    <br> - Đầu Queue là nơi thực hiện thao tác "dequeue," còn Đuôi Queue là nơi thực hiện thao tác "enqueue." Phần tử nào đến trước sẽ ở Đầu Queue và phần tử nào đến sau sẽ ở Đuôi Queue. \
    <br> - Queue có thể được triển khai dưới dạng mảng động hoặc danh sách liên kết và không có giới hạn về kích thước. \
    <br> - Queue thường được sử dụng trong nhiều ứng dụng, bao gồm quản lý các công việc được thực hiện theo thứ tự đầu vào đầu ra, xử lý các yêu cầu theo thứ tự đến, và giải quyết các vấn đề liên quan đến quản lý dữ liệu theo nguyên tắc FIFO. </div> \
    <br> \
    <br> \
    <br> ';
    });


    document.getElementById('tc8').addEventListener('click', function () {
        noiDungTinhchat8.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> - Danh sách liên kết đơn (Singly Linked List) Là một cấu trúc dữ liệu tạo thành từ các "nút" liên kết với nhau theo chiều một chiều, trong đó mỗi nút chứa dữ liệu và một con trỏ (thường được gọi là con trỏ "next") trỏ tới nút tiếp theo trong danh sách. \
    <br> -  Mỗi nút của danh sách liên kết có thể nằm ở một vị trí bất kỳ trong bộ nhớ, không cần phải là liên tục nhau như mảng. \
    <br> - Thao tác chèn và xóa phần tử giữa danh sách liên kết thường nhanh và dễ dàng hơn so với mảng, do chỉ cần điều chỉnh con trỏ liên kết. \
    <br> - Kích thước của danh sách liên kết có thể thay đổi linh hoạt, không như mảng có kích thước cố định. \
    <br> - Linked List được sử dụng trong nhiều bài toán và ứng dụng như quản lý bộ nhớ động, triển khai danh sách liên kết xếp hạng, và là một phần của các cấu trúc dữ liệu phức tạp hơn như cây. </div> \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('tc9').addEventListener('click', function () {
        noiDungTinhchat9.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> - Mỗi nút trong danh sách liên kết đôi chứa hai con trỏ, một con trỏ trỏ tới nút phía trước (prev) và một con trỏ trỏ tới nút phía sau (next). \
    <br> -  Do có con trỏ prev và next, việc di chuyển lùi (backward) và tiến (forward) trong danh sách liên kết đôi là dễ dàng và hiệu quả. \
    <br> - So với danh sách liên kết đơn, việc chèn và xóa phần tử giữa danh sách liên kết đôi thường nhanh chóng hơn, vì không cần phải điều chỉnh con trỏ prev của nút kế trước phần tử cần chèn hoặc xóa. \
    <br> - Danh sách liên kết đôi tăng cường tính linh hoạt của cấu trúc dữ liệu, cho phép truy cập ngược (backward traversal) và thực hiện các thao tác chèn và xóa một cách hiệu quả. </div> \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('tc10').addEventListener('click', function () {
        noiDungTinhchat10.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> - Trong danh sách liên kết vòng, nút cuối cùng của danh sách sẽ trỏ lại đến nút đầu tiên, tạo thành một vòng đóng. \
    <br> - Tương tự như danh sách liên kết đôi, với danh sách liên kết vòng, việc di chuyển lùi (backward) và tiến (forward) là dễ dàng và hiệu quả. \
    <br> - Do tính chất vòng của danh sách, thao tác chèn và xóa phần tử giữa danh sách cũng thường nhanh chóng và dễ dàng hơn so với danh sách liên kết đơn. \
    <br> - Danh sách liên kết vòng không có nút kết thúc (tail) truyền thống như trong danh sách liên kết đơn. \
    <br> - Tăng tính linh hoạt của cấu trúc dữ liệu, cho phép truy cập ngược và một số thao tác chèn và xóa hiệu quả. </div> \
    <br> \
    <br> \
    <br> ';
    });

    document.getElementById('tc11').addEventListener('click', function () {
        noiDungTinhchat11.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> - Các phần tử trong mảng được lưu trữ liên tục trong bộ nhớ, giúp quá trình truy cập và xử lý dữ liệu nhanh chóng. \
    <br> - Bạn có thể truy cập bất kỳ phần tử nào trong mảng bằng cách sử dụng chỉ số (index), cho phép truy cập ngẫu nhiên. \
    <br> - Mảng có kích thước cố định khi được khởi tạo, và không thể thay đổi kích thước của mảng một cách linh hoạt. \
    <br> - Mỗi phần tử trong mảng có cùng một kiểu dữ liệu, điều này giúp cải thiện hiệu suất và quản lý dữ liệu. \
    <br> - Sắp xếp mảng làm việc hiệu quả và dễ dàng, đặc biệt là khi sử dụng các thuật toán sắp xếp phổ biến như QuickSort hoặc MergeSort. </div> \
    <br> \
    <br> \
    <br> ';
    });

    document.getElementById('tc12').addEventListener('click', function () {
        noiDungTinhchat12.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> -  Linear Search duyệt qua từng phần tử của dãy dữ liệu một cách tuần tự từ đầu đến cuối cho đến khi tìm thấy phần tử cần tìm hoặc duyệt qua toàn bộ dãy. \
    <br> - Linear Search là thuật toán đơn giản và dễ cài đặt. Nó không đòi hỏi dãy dữ liệu được sắp xếp và phù hợp cho các tình huống khi không có thông tin nào về thứ tự của dãy. \
    <br> - Linear Search không cần thêm bộ nhớ phụ ngoài việc lưu trữ biến tạm thời. \
    <br><b> Độ phức tạp thời gian </b> của Linear Search là <b>O(n)</b>, trong đó n là số lượng phần tử trong dãy dữ liệu. Bởi vì trong trường hợp xấu nhất, phải duyệt qua toàn bộ dãy để tìm kiếm phần tử cần. </div> \
    <br> \
    <br> \
    <br>';
    });
    document.getElementById('tc13').addEventListener('click', function () {
        noiDungTinhchat13.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> - Binary Search yêu cầu dãy dữ liệu đã được sắp xếp (thường là sắp xếp tăng dần hoặc giảm dần). Điều này là quan trọng để có thể áp dụng thuật toán chia để trị. \
    <br> - Binary Search sử dụng phương pháp chia để trị để giảm bớt phạm vi tìm kiếm, tìm kiếm ở giữa dãy và quyết định tiếp tục tìm kiếm ở nửa phía trước hoặc nửa phía sau của dãy dữ liệu. \
    <br> - Đối với dãy dữ liệu lớn và đã sắp xếp, Binary Search có hiệu suất cao hơn so với Linear Search. Độ phức tạp thời gian của Binary Search là O(log n), trong đó n là số lượng phần tử trong dãy. \
    <br> - Mỗi bước của Binary Search loại trừ một nửa dãy dữ liệu, giảm đáng kể thời gian tìm kiếm so với Linear Search. \
    <br><b> Độ phức tạp thời gian </b> của Binary Search là <b>O(log n)</b>, trong đó n là số lượng phần tử trong dãy. Điều này là do mỗi lần thực hiện, phạm vi tìm kiếm giảm đi một nửa. </div> \
    <br> \
    <br> \
    <br>';
    });
    document.getElementById('tc14').addEventListener('click', function () {
        noiDungTinhchat14.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> - Tương tự như Binary Search, Interpolation Search yêu cầu dãy dữ liệu đã được sắp xếp. Điều này là để có thể áp dụng phương pháp tìm kiếm nội suy. \
    <br> - Interpolation Search sử dụng phương pháp nội suy để ước lượng vị trí gần đúng của phần tử cần tìm dựa trên giá trị của nó và giá trị ở hai đầu của dãy. \
    <br> - Nếu dãy dữ liệu được phân bố đều, Interpolation Search có thể hiệu quả hơn so với Binary Search. Tuy nhiên, đối với dãy có sự phân bố không đều, hiệu suất có thể giảm. \
    <br> - Trong trường hợp trung bình, <b>độ phức tạp thời gian</b> của Interpolation Search là <b>O(log log n)</b>, nơi n là số lượng phần tử trong dãy. Tuy nhiên, trong trường hợp xấu nhất, độ phức tạp là <b>O(n)</b>, khi dãy không đều phân bố và dãy gần giống với dãy tăng dần. </div> \
    <br> \
    <br> \
    <br>';
    });

    document.getElementById('tc15').addEventListener('click', function () {
        noiDungTinhchat15.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> - Hash Table cung cấp khả năng tìm kiếm hiệu quả với độ phức tạp trung bình O(1) cho các thao tác tìm kiếm, thêm và xóa, trong trường hợp lý tưởng. \
    <br> - Hash Table sử dụng hàm băm để ánh xạ khóa (key) thành một vị trí trong bảng. Khi hàm băm được thiết kế tốt, các giá trị phân bố đều, giảm độ chệch và tăng hiệu suất. \
    <br> - Hash Table có khả năng linh hoạt với các kiểu dữ liệu khác nhau cho cả khóa và giá trị. \
    <br> - Hash Table có thể tiết kiệm không gian bộ nhớ nếu được sử dụng hiệu quả. Tuy nhiên, nếu hàm băm không tốt, có thể dẫn đến xung đột và tăng kích thước bảng, làm tăng không gian bộ nhớ sử dụng. \
    <br> - Trong trường hợp tốt, Hash Table có thể cung cấp tốc độ tìm kiếm rất nhanh, vượt qua nhiều thuật toán tìm kiếm khác đối với các tập dữ liệu lớn. \
    <br> - Trong trường hợp lý tưởng, <b>độ phức tạp</b> của thao tác truy cập (tìm kiếm) trong Hash Table là <b>O(1)</b>. Tuy nhiên, trong <b>trường hợp xấu nhất</b>, nếu xảy ra xung đột và cần thực hiện tìm kiếm tuyến tính, độ phức tạp có thể là <b>O(n)</b>, với n là số lượng phần tử trong bảng băm. </div> \
    <br> \
    <br> \
    <br>';
    });

    document.getElementById('tc16').addEventListener('click', function () {
        noiDungTinhchat16.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> - DFS được sử dụng để duyệt và quy hoạch các đỉnh và cạnh trong đồ thị. \
    <br> - DFS có thể được triển khai bằng cách sử dụng đệ quy hoặc sử dụng ngăn xếp. Trong đệ quy, việc "quay lui" giúp lưu trữ thông tin về đỉnh hiện tại và tiếp tục duyệt. Trong cách triển khai sử dụng ngăn xếp, thông tin tương tự được lưu trữ nhưng được quản lý bởi ngăn xếp. \
    <br> - DFS sử dụng một mảng hoặc danh sách để kiểm soát xem một đỉnh đã được duyệt hay chưa, tránh việc lặp lại việc duyệt đỉnh đã được duyệt trước đó. \
    <br> - DFS "đào sâu" vào đồ thị càng sâu càng tốt, trước khi quay lại và đi theo các nhánh còn lại. \
    <br> - DFS thường được sử dụng để kiểm tra xem có tồn tại đường đi giữa hai đỉnh hay không, kiểm tra chu trình trong đồ thị. \
    <br> - Độ phức tạp thời gian: <b>O(V + E)</b>, trong đó V là số đỉnh, E là số cạnh của đồ thị. DFS duyệt qua tất cả các đỉnh và cạnh ít nhất một lần. </div> \
    <br> \
    <br> \
    <br>';
    });
    document.getElementById('tc17').addEventListener('click', function () {
        noiDungTinhchat17.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> - BFS được sử dụng để duyệt và quy hoạch các đỉnh và cạnh trong đồ thị. \
    <br> - BFS sử dụng hàng đợi để duyệt qua các đỉnh một cách theo chiều rộng. Đỉnh được thăm đầu tiên sẽ được thêm vào hàng đợi, và các đỉnh kề sẽ được thêm vào hàng đợi sau đó. \
    <br> - BFS sử dụng một mảng hoặc danh sách để kiểm soát xem một đỉnh đã được duyệt hay chưa, tránh việc lặp lại việc duyệt đỉnh đã được duyệt trước đó. \
    <br> - BFS "lan truyền" từ đỉnh xuất phát ra theo chiều rộng, duyệt qua các đỉnh kề ở cùng mức trước khi di chuyển xuống các mức tiếp theo. \
    <br> - BFS thường được sử dụng để tìm kiếm đường đi ngắn nhất giữa hai đỉnh trong đồ thị. \
    <br> - <b>Độ phức tạp thời gian</b> là <b>O(V + E)</b>, trong đó V là số đỉnh, E là số cạnh của đồ thị. BFS duyệt qua tất cả các đỉnh và cạnh ít nhất một lần. </div> \
    <br> \
    <br> \
    <br>';
    });

    document.getElementById('tc18').addEventListener('click', function () {
        noiDungTinhchat18.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> Duyệt cây là quá trình ghé thăm tất cả các nút trong cây một cách có tổ chức. Có ba cách phổ biến để duyệt cây: \
    <br> 1. Duyệt theo chiều sâu (Depth-First Traversal): \
    <br> - Duyệt tiền thứ tự (Pre-order Traversal): Ghé thăm nút gốc trước, sau đó duyệt theo chiều sâu vào cây con trái và cây con phải. \
    <br> - Duyệt giữa thứ tự (In-order Traversal): Duyệt theo chiều sâu vào cây con trái, sau đó ghé thăm nút gốc và duyệt theo chiều sâu vào cây con phải. \
    <br> - Duyệt hậu thứ tự (Post-order Traversal): Duyệt theo chiều sâu vào cây con trái, sau đó duyệt theo chiều sâu vào cây con phải và cuối cùng ghé thăm nút gốc. \
    <br> 2. Duyệt theo chiều rộng (Breadth-First Traversal): \
    <br> Duyệt cây theo mức, từ trên xuống dưới và từ trái sang phải. \
    <br> 3. Độ phức tạp: \
    <br> - Độ phức tạp thời gian và không gian của các phương pháp duyệt cây phụ thuộc vào số lượng nút và cấu trúc của cây. \
    <br> - Độ phức tạp thời gian của mỗi phương pháp là O(n), trong đó n là số lượng nút trong cây. Mỗi nút đều được ghé thăm ít nhất một lần. </div> \
    <br> \
    <br> \
    <br>';
    });
    document.getElementById('tc19').addEventListener('click', function () {
        noiDungTinhchat19.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> - Mỗi nút trong cây tìm kiếm nhị phân có tối đa hai con, được gọi là cây con trái và cây con phải. Các giá trị ở cây con trái đều nhỏ hơn giá trị của nút cha, và các giá trị ở cây con phải đều lớn hơn giá trị của nút cha. \
    <br> - Tìm kiếm trong BST có độ phức tạp thời gian là O(log n) trong trường hợp trung bình, với n là số lượng nút. Tuy nhiên, trong trường hợp xấu nhất (khi cây không cân bằng), thao tác tìm kiếm có thể có độ phức tạp là O(n). \
    <br> - Chèn và xóa trong BST cũng có độ phức tạp O(log n) trong trường hợp trung bình, nhưng có thể lên đến O(n) trong trường hợp xấu nhất khi cây không cân bằng. \
    <br> - Để đảm bảo thời gian tìm kiếm hiệu quả, có những cấu trúc cây tìm kiếm nhị phân cân bằng, như cây đỏ-đen (Red-Black Tree) hoặc cây AVL, giúp giảm thiểu trường hợp xấu nhất. \
    <br> - Cây tìm kiếm nhị phân có thể được duyệt theo nhiều cách, bao gồm duyệt tiền thứ tự, duyệt giữa thứ tự, và duyệt hậu thứ tự. </div> \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('tc20').addEventListener('click', function () {
        noiDungTinhchat20.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> - Cây AVL là một cấu trúc cây tìm kiếm nhị phân cân bằng. Cả trước và sau mọi thao tác chèn và xóa, cây AVL đảm bảo rằng chiều cao của hai cây con con trái và con phải của mỗi nút không chênh lệch quá 1. \
    <br> - Để duy trì tính cân bằng, cây AVL sử dụng các phép quay (rotation), bao gồm quay phải (right rotation), quay trái (left rotation), quay kép phải-trái (right-left rotation), và quay kép trái-phải (left-right rotation). \
    <br> - Các nút trong cây AVL được sắp xếp theo thứ tự tăng dần từ trái sang phải. \
    <br> - Với mọi nút, giá trị tất cả các nút trong cây con trái nhỏ hơn giá trị của nút đó, và giá trị tất cả các nút trong cây con phải lớn hơn giá trị của nút đó. \
    <br> - Tính cân bằng của cây AVL độc lập với thứ tự chèn nút, tức là cây AVL sẽ tự cân bằng sau mọi thao tác chèn một cách tự động. </div> \
    <br> \
    <br> \
    <br> ';
    });
    document.getElementById('tc21').addEventListener('click', function () {
        noiDungTinhchat21.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> - Một cây bao phủ là một đồ thị cây liên thông, tức là có một đường đi giữa mọi cặp đỉnh trong đồ thị. \
    <br> - Cây bao phủ không chứa chu trình. Điều này làm cho nó trở thành một cây, không phải là một đồ thị. \
    <br> - Cây bao phủ chứa tất cả các đỉnh của đồ thị gốc. \
    <br> - Số lượng cạnh trong cây bao phủ là n - 1, trong đó n là số lượng đỉnh của đồ thị. \
    <br> - Nếu có nhiều cây bao phủ, tất cả chúng đều có cùng số lượng cạnh và không trùng lặp. \
    <br> - Có nhiều thuật toán để tìm kiếm cây bao phủ tốt nhất, như thuật toán Kruskal và thuật toán Prim. Độ phức tạp của cả hai thuật toán là O(E log V), trong đó E là số cạnh và V là số đỉnh trong đồ thị. </div> \
    <br> \
    <br> \
    <br> ';
    });

    document.getElementById('tc22').addEventListener('click', function () {
        noiDungTinhchat22.innerHTML = '<div class="lesson-content"><b>I. Tính chất </b></div> \
    <div class ="lesson"> - Cấu trúc dữ liệu đệ quy là một cấu trúc mà trong đó đối tượng có thể tự tham chiếu hoặc tự gọi lại chính nó. Điều này tạo ra một quy luật tái sử dụng và gọi là "đệ quy". \
    <br> - Cấu trúc dữ liệu đệ quy thường được sử dụng để giải quyết các vấn đề có tính chất lặp đi lặp lại hoặc chia nhỏ thành các bài toán con nhỏ hơn. \
    <br> - Mỗi lần hàm đệ quy được gọi, nó tạo ra một khung hàm mới và thêm vào cây gọi đệ quy. Cây gọi đệ quy này có thể trở nên lớn và sâu nếu có nhiều cuộc gọi đệ quy. \
    <br> - Để tránh lặp vô hạn, mỗi hàm đệ quy thường đi kèm với một điều kiện dừng gọi là "base case". Khi điều kiện này được đáp ứng, cuộc gọi đệ quy dừng lại và bắt đầu trả về giá trị. \
    <br> - Độ phức tạp thời gian của cấu trúc dữ liệu đệ quy phụ thuộc vào số lần đệ quy và thời gian thực hiện trong mỗi lần đệ quy. Nếu mỗi lần đệ quy giảm kích thước của vấn đề một cách đáng kể, thì độ phức tạp thời gian thường là O(2<sup>n</sup>) với n là số lần đệ quy. </div> \
    <br> \
    <br> \
    <br> ';
    });
});

// ----------------------------------------------------------- //


document.addEventListener('DOMContentLoaded', function () {
    const sorting = document.getElementById('sorting');
    const bubbleSortRelated = document.getElementById('ndBubbleSort');
    const insertSortRelated = document.getElementById('ndInsertSort');
    const selectionSortRelated = document.getElementById('ndSelectionSort');
    const mergeSortRelated = document.getElementById('ndMergeSort');
    const quickSortRelated = document.getElementById('ndQuickSort');
    const shellSortRelated = document.getElementById('ndShellSort');


    const bits = document.getElementById('bits');
    const stackRelated = document.getElementById('ndStack');
    const queueRelated = document.getElementById('ndQueue');

    const linked = document.getElementById('linked');
    const linkedListRelated = document.getElementById('ndLinkList');
    const doublyLinkedListRelated = document.getElementById('ndDoubly');
    const circularLinkedListRelated = document.getElementById('ndCircular');

    const search = document.getElementById('search');
    const linearSearchRelated = document.getElementById('ndLinear');
    const binarySearchRelated = document.getElementById('ndBinary');
    const interpolationSearchRelated = document.getElementById('ndInter');

    const graph = document.getElementById('graph');
    const deptTraversalRelated = document.getElementById('ndDept');
    const breadthTraversalRelated = document.getElementById('ndBreadth');

    const tree = document.getElementById('tree');
    const treeTraversalRelated = document.getElementById('ndTree');
    const binarysearchTreeRelated = document.getElementById('ndBST');
    const avlTreeRelated = document.getElementById('ndAVL');
    const spanningTreeRelated = document.getElementById('ndSpanning');

    // Ẩn nội dung liên quan ban đầu
    bubbleSortRelated.style.display = 'none';
    insertSortRelated.style.display = 'none';
    selectionSortRelated.style.display = 'none';
    mergeSortRelated.style.display = 'none';
    quickSortRelated.style.display = 'none';
    shellSortRelated.style.display = 'none';

    stackRelated.style.display = 'none';
    queueRelated.style.display = 'none';

    linkedListRelated.style.display = 'none';
    doublyLinkedListRelated.style.display = 'none';
    circularLinkedListRelated.style.display = 'none';

    linearSearchRelated.style.display = 'none';
    binarySearchRelated.style.display = 'none';
    interpolationSearchRelated.style.display = 'none';

    deptTraversalRelated.style.display = 'none';
    breadthTraversalRelated.style.display = 'none';

    treeTraversalRelated.style.display = 'none';
    binarysearchTreeRelated.style.display = 'none';
    avlTreeRelated.style.display = 'none';
    spanningTreeRelated.style.display = 'none';

    sorting.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'block';
        insertSortRelated.style.display = 'block';
        selectionSortRelated.style.display = 'block';
        mergeSortRelated.style.display = 'block';
        quickSortRelated.style.display = 'block';
        shellSortRelated.style.display = 'block';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';

    });

    bits.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'block';
        queueRelated.style.display = 'block';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    linked.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'block';
        doublyLinkedListRelated.style.display = 'block';
        circularLinkedListRelated.style.display = 'block';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    search.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'block';
        binarySearchRelated.style.display = 'block';
        interpolationSearchRelated.style.display = 'block';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    graph.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'block';
        breadthTraversalRelated.style.display = 'block';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    tree.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'block';
        binarysearchTreeRelated.style.display = 'block';
        avlTreeRelated.style.display = 'block';
        spanningTreeRelated.style.display = 'block';
    });

    array.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';



        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    hash.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    dequy.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    ctdl.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    tq.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    bb.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'block';
        selectionSortRelated.style.display = 'block';
        mergeSortRelated.style.display = 'block';
        quickSortRelated.style.display = 'block';
        shellSortRelated.style.display = 'block';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    inse.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'block';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'block';
        mergeSortRelated.style.display = 'block';
        quickSortRelated.style.display = 'block';
        shellSortRelated.style.display = 'block';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    se.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'block';
        insertSortRelated.style.display = 'block';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'block';
        quickSortRelated.style.display = 'block';
        shellSortRelated.style.display = 'block';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    me.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'block';
        insertSortRelated.style.display = 'block';
        selectionSortRelated.style.display = 'block';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'block';
        shellSortRelated.style.display = 'block';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    qu.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'block';
        insertSortRelated.style.display = 'block';
        selectionSortRelated.style.display = 'block';
        mergeSortRelated.style.display = 'block';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'block';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    sh.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'block';
        insertSortRelated.style.display = 'block';
        selectionSortRelated.style.display = 'block';
        mergeSortRelated.style.display = 'block';
        quickSortRelated.style.display = 'block';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    sta.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'block';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    que.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'block';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    link.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'block';
        circularLinkedListRelated.style.display = 'block';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    link2.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'block';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'block';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    link3.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'block';
        doublyLinkedListRelated.style.display = 'block';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    tk1.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'block';
        interpolationSearchRelated.style.display = 'block';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    tk2.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'block';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'block';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    tk3.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'block';
        binarySearchRelated.style.display = 'block';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    dt1.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'block';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    dt2.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'block';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'none';
    });

    tr1.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'none';
        binarysearchTreeRelated.style.display = 'block';
        avlTreeRelated.style.display = 'block';
        spanningTreeRelated.style.display = 'block';
    });

    tr2.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'block';
        binarysearchTreeRelated.style.display = 'none';
        avlTreeRelated.style.display = 'block';
        spanningTreeRelated.style.display = 'block';
    });

    tr3.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'block';
        binarysearchTreeRelated.style.display = 'block';
        avlTreeRelated.style.display = 'none';
        spanningTreeRelated.style.display = 'block';
    });

    tr4.addEventListener('click', function() {
        bubbleSortRelated.style.display = 'none';
        insertSortRelated.style.display = 'none';
        selectionSortRelated.style.display = 'none';
        mergeSortRelated.style.display = 'none';
        quickSortRelated.style.display = 'none';
        shellSortRelated.style.display = 'none';

        stackRelated.style.display = 'none';
        queueRelated.style.display = 'none';

        linkedListRelated.style.display = 'none';
        doublyLinkedListRelated.style.display = 'none';
        circularLinkedListRelated.style.display = 'none';

        linearSearchRelated.style.display = 'none';
        binarySearchRelated.style.display = 'none';
        interpolationSearchRelated.style.display = 'none';

        deptTraversalRelated.style.display = 'none';
        breadthTraversalRelated.style.display = 'none';

        treeTraversalRelated.style.display = 'block';
        binarysearchTreeRelated.style.display = 'block';
        avlTreeRelated.style.display = 'block';
        spanningTreeRelated.style.display = 'none';
    });

});
// -------------------------------------- //

document.addEventListener("DOMContentLoaded", function () {
    var baihocItems = document.querySelectorAll(".baihoc-item");

    baihocItems.forEach(function (item) {
        item.addEventListener("click", function () {
            if (item.id === "sorting") {
                var subItemsContainer = item.nextElementSibling;
                subItemsContainer.classList.toggle("hidden");
            } 
            
            else if(item.id === "bits") {
                var subItemsContainer = item.nextElementSibling;
                subItemsContainer.classList.toggle("hidden");
            }

            else {
                var associatedBaiHoc2Container = item.nextElementSibling;
                associatedBaiHoc2Container.classList.toggle("hidden");
            }

        });
    });
});

// --------------------------------------- //

document.addEventListener("DOMContentLoaded", function () {
    var baihocItems = document.querySelectorAll(".baitap-item");

    baihocItems.forEach(function (item) {
        item.addEventListener("click", function () {
            if (item.id === "sorting") {
                var subItemsContainer = item.nextElementSibling;
                subItemsContainer.classList.toggle("hidden");
            } 
            
            else if(item.id === "bits") {
                var subItemsContainer = item.nextElementSibling;
                subItemsContainer.classList.toggle("hidden");
            }

            else {
                var associatedBaiHoc2Container = item.nextElementSibling;
                associatedBaiHoc2Container.classList.toggle("hidden");
            }
            
        });
    });
});

// ----------------------------------------- //


function copyCode() {
    const codeBlock = document.getElementById('codeBlock');
    const textArea = document.createElement('textarea');
    textArea.value = codeBlock.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    //alert('Code copied to clipboard!');
}

function showCode(language) {
    document.getElementById('cppCode').style.display = 'none';
    document.getElementById('javaCode').style.display = 'none';
    document.getElementById('phpCode').style.display = 'none';

    document.getElementById(language + 'Code').style.display = 'block';
}

function selectMenuItem(selectedElement) {
    // Remove the 'selected' class from all menu items
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function(item) {
        item.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked menu item
    selectedElement.classList.add('selected');
}

    // /////////////////////// //

function toggleSelected(selectedElement) {
// Kiểm tra xem phần tử đã có class "selected" hay chưa
    var baihocItems = document.querySelectorAll('.baihoc-item');
    baihocItems.forEach(function(item) {
        item.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked menu item
    selectedElement.classList.add('selected');
}

function toggleSelected2(selectedElement) {
    // Kiểm tra xem phần tử đã có class "selected" hay chưa
    var baihoc2Items = document.querySelectorAll('.baihoc2-item');
    baihoc2Items.forEach(function(item) {
        item.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked menu item
    selectedElement.classList.add('selected');
}

function toggleSelected3(selectedElement) {
    // Kiểm tra xem phần tử đã có class "selected" hay chưa
    var baihoc3Items = document.querySelectorAll('.baihoc3-item');
    baihoc3Items.forEach(function(item) {
        item.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked menu item
    selectedElement.classList.add('selected');
}

function toggleSelected4(selectedElement) {
    // Kiểm tra xem phần tử đã có class "selected" hay chưa
    var baitap3Items = document.querySelectorAll('.baitap3-item');
    baitap3Items.forEach(function(item) {
        item.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked menu item
    selectedElement.classList.add('selected');
}

function toggleSelected5(selectedElement) {
    // Kiểm tra xem phần tử đã có class "selected" hay chưa
    var baihoc4Items = document.querySelectorAll('.baihoc4-item');
    baihoc4Items.forEach(function(item) {
        item.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked menu item
    selectedElement.classList.add('selected');
}

function toggleSelected6(selectedElement) {
    // Kiểm tra xem phần tử đã có class "selected" hay chưa
    var baitap4Items = document.querySelectorAll('.baitap4-item');
    baitap4Items.forEach(function(item) {
        item.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked menu item
    selectedElement.classList.add('selected');
}

function toggleSelected7(selectedElement) {
    // Kiểm tra xem phần tử đã có class "selected" hay chưa
    var baihoc5Items = document.querySelectorAll('.baihoc5-item');
    baihoc5Items.forEach(function(item) {
        item.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked menu item
    selectedElement.classList.add('selected');
}

function toggleSelected8(selectedElement) {
    // Kiểm tra xem phần tử đã có class "selected" hay chưa
    var baiTapItems = document.querySelectorAll('.baitap-item');
    baiTapItems.forEach(function(item) {
        item.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked menu item
    selectedElement.classList.add('selected');
}

function toggleSelected9(selectedElement) {
    // Kiểm tra xem phần tử đã có class "selected" hay chưa
    var baiTap2Items = document.querySelectorAll('.baitap2-item');
    baiTap2Items.forEach(function(item) {
        item.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked menu item
    selectedElement.classList.add('selected');
}

// document.getElementById('khai-niem-checkbox').addEventListener('change', function() {
//     // Kiểm tra xem checkbox có được tích vào hay không
//     if (this.checked) {
//         // Hiển thị phần I trong mỗi bài học và ẩn các phần còn lại
//         const lessons = document.querySelectorAll('.lesson');
//         lessons.forEach(lesson => {
//             const lessonIContent = lesson.querySelector('.lesson-content');
//             if (lessonIContent) {
//                 lessonIContent.style.display = 'block';
//             }
//         });
//     } else {
//         // Nếu checkbox không được tích, ẩn toàn bộ nội dung của mỗi bài học
//         const lessons = document.querySelectorAll('.lesson-content');
//         const lessons2 = document.querySelectorAll('.lesson');
//         lessons.forEach(lesson => {
//             lesson.style.display = 'none';
//         });
//     }
// });

// //////////////////////// 

document.getElementById('khai-niem-checkbox').addEventListener('change', function () {
  // Kiểm tra xem checkbox có được tích vào hay không
    if (this.checked) {
        // Hiển thị phần I trong mỗi bài học lesson-content-I

        const lessonIContents5 = document.querySelectorAll('.baihoc2-item');
        lessonIContents5.forEach((content) => {
        content.style.display = 'none';
        });

        const lessonIContents8 = document.querySelectorAll('.baihoc3-item');
        lessonIContents8.forEach((content) => {
        content.style.display = 'block';
        });

        const lessonIContents9 = document.querySelectorAll('.baihoc5-item');
        lessonIContents9.forEach((content) => {
        content.style.display = 'none';
        });


    } else {
    // Nếu checkbox không được tích, ẩn phần I của mỗi bài học
        const lessonIContents5 = document.querySelectorAll('.baihoc2-item');
        lessonIContents5.forEach((content) => {
        content.style.display = 'block';
        });

        const lessonIContents8 = document.querySelectorAll('.baihoc3-item');
        lessonIContents8.forEach((content) => {
        content.style.display = 'none';
        });

        const lessonIContents9 = document.querySelectorAll('.baihoc5-item');
        lessonIContents9.forEach((content) => {
        content.style.display = 'none';
        });
    }
});

// -----------------------------------------


document.getElementById('phuong-phap-checkbox').addEventListener('change', function () {
  // Kiểm tra xem checkbox có được tích vào hay không
    if (this.checked) {
    // Hiển thị phần I trong mỗi bài học lesson-content-I

        const lessonIContents5 = document.querySelectorAll('.baitap2-item');
        lessonIContents5.forEach((content) => {
        content.style.display = 'block';
        });

        const lessonIContents8 = document.querySelectorAll('.baitap3-item');
        lessonIContents8.forEach((content) => {
        content.style.display = 'none';
        });

        const lessonIContentsK = document.querySelectorAll('.baitap4-item');
        lessonIContentsK.forEach((content) => {
        content.style.display = 'none';
        });

    } else {
    // Nếu checkbox không được tích, ẩn phần I của mỗi bài học
    
        const lessonIContents5 = document.querySelectorAll('.baitap2-item');
        lessonIContents5.forEach((content) => {
            content.style.display = 'block';
        });
    

        const lessonIContents8 = document.querySelectorAll('.baitap3-item');
        lessonIContents8.forEach((content) => {
        content.style.display = 'none';
        });

        const lessonIContentsK = document.querySelectorAll('.baitap4-item');
        lessonIContentsK.forEach((content) => {
        content.style.display = 'none';
        });
    }
});

// -----------------------------------------------------------

document.getElementById('tinh-chat-checkbox').addEventListener('change', function () {
  // Kiểm tra xem checkbox có được tích vào hay không
    if (this.checked) {
    // Hiển thị phần I trong mỗi bài học lesson-content-I

        const lessonIContents11 = document.querySelectorAll('.baihoc2-item');
        lessonIContents11.forEach((content) => {
        content.style.display = 'none';
        });

        const lessonIContents12 = document.querySelectorAll('.baihoc3-item');
        lessonIContents12.forEach((content) => {
        content.style.display = 'none';
        });

        const lessonIContents13 = document.querySelectorAll('.baihoc4-item');
        lessonIContents13.forEach((content) => {
        content.style.display = 'block';
        });

    } else {
    // Nếu checkbox không được tích, ẩn phần I của mỗi bài học
    
        const lessonIContents11 = document.querySelectorAll('.baihoc2-item');
        lessonIContents11.forEach((content) => {
        content.style.display = 'block';
        });
        

        const lessonIContents12 = document.querySelectorAll('.baihoc3-item');
        lessonIContents12.forEach((content) => {
        content.style.display = 'none';
        });

        const lessonIContents13 = document.querySelectorAll('.baihoc4-item');
        lessonIContents13.forEach((content) => {
        content.style.display = 'none';
        });
    }
});

// -------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const baitapCheckbox = document.getElementById('bai-tap-checkbox');
    const baiTap4Item = document.querySelectorAll('.baitap4-item');
    const noiDungBT = document.getElementById('ndbaitap');
    const noiDungBT1 = document.getElementById('ndbaitap');
    const noiDungBT2 = document.getElementById('ndbaitap');
    const noiDungBT3 = document.getElementById('ndbaitap');
    const noiDungBT4 = document.getElementById('ndbaitap');
    const noiDungBT5 = document.getElementById('ndbaitap');
    const noiDungBT6 = document.getElementById('ndbaitap');
    const noiDungBT7 = document.getElementById('ndbaitap');
    const noiDungBT8 = document.getElementById('ndbaitap');

      // Set initial display based on checkbox state
    baiTap4Item.forEach(item => {
        item.style.display = baitapCheckbox.checked ? 'block' : 'none';
    });

    // Add event listener for checkbox change
    baitapCheckbox.addEventListener('change', function () {
    // Show/hide based on checkbox state
        baiTap4Item.forEach(item => {
            item.style.display = this.checked ? 'block' : 'none';
        });

    // Clear content when checkbox state changes
        noiDungBT.innerHTML = '';
        noiDungBT1.innerHTML = '';
        noiDungBT2.innerHTML = '';
        noiDungBT3.innerHTML = '';
        noiDungBT4.innerHTML = '';
        noiDungBT5.innerHTML = '';
        noiDungBT6.innerHTML = '';
        noiDungBT7.innerHTML = '';
        noiDungBT8.innerHTML = '';
    });

      // Add event listeners for Khái niệm sections
    document.getElementById('cbt').addEventListener('click', function () {
        noiDungBT.innerHTML = '<br><div class="bt-content"><b><center>Bài tập<center></b></div> \
        <div class ="bt">Viết chương trình hoàn chỉnh cho các bài toán sau đây \
        <br><b>Bài tập 1.</b> Cho dãy số \
        <br> 84   32    13    64    1     55    48 \
        <br> Hãy mô phỏng sắp xếp tăng dần dãy số trên bằng các thuật toán sắp xếp (Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, Quick Sort, Shell Sort). \
        <br><b>Bài tập 2. </b> Cho mảng một chiều n phần tử. Sắp xếp các số nguyên tố tăng dần, các số khác giữ nguyên giá trị và vị trí. </div> \
        <br> \
        <br> \
        <br> \
        <br> ';
      });
    document.getElementById('cbt1').addEventListener('click', function () {
        noiDungBT1.innerHTML = '<br><div class="bt-content"><b><center>Bài tập<center></b></div> \
        <div class ="bt"><b>Bài tập 1. </b> Cho dãy n số nguyên a[0], a[1],...a[n-1] đã được sắp xếp tăng dần và một số nguyên x. \
        <br> a. Hãy viết hàm tìm kiếm nhị phân kiểm tra xem x có thuộc dãy số trên hay không? Nếu tìm thấy trả về giá trị i nhỏ nhất mà a[i] = x, nếu không trả về giá trị -1. \
        <br> b. Cho biết k số phần tử lớn nhất của dãy. \
        <br> Ví dụ với n = 12 \
        <br> 9  6  2  7  9  9  6  5  7  9  6  7 \
        <br> Nếu k = 5 thì kết quả là 9, 9, 9, 9, 7 \
        <br><Bài tập 2. Cho một tập tin văn bản. Hãy cho biết số lượng của các số nguyên tố, chính phương, hoàn hảo trong tập tin. </div> \
        <br> \
        <br> \
        <br> \
        <br> ';
    });
    document.getElementById('cbt2').addEventListener('click', function () {
        noiDungBT2.innerHTML = '<br><div class="bt-content"><b><center>Bài tập<center></b></div> \
        <div class ="bt"><b>Bài tập 1. </b> Cho một danh sách liên kết đơn l, mỗi nút là một số nguyên dương. \
        <br> a. Tìm phần tử lớn nhất danh sách l. \
        <br> b. Tìm tổng các phần tử của danh sách l. \
        <br> c. Đếm xem trong danh sách l có bao nhiêu số nguyên tố? \
        <br> d. Đếm xem trong danh sách có bao nhiêu số âm? Bao nhiêu số bằng 0? Bao nhiêu số dương? \
        <br><b>Bài tập 2. </b> Viết chương trình thực hiện các yêu cầu sau: \
        <br> a. Khai báo cấu trúc dữ liệu của một danh sách liên kết đơn để lưu tọa độ các đỉnh của một đa giác lồi trong mặt phẳng OXY. \
        <br> b. Tính chu vi của đa giác. \
        <br> c. Tính diện tích của đa giác. </div> \
        <br> \
        <br> \
        <br> \
        <br> ';
    });
    document.getElementById('cbt3').addEventListener('click', function () {
        noiDungBT3.innerHTML = '<br><div class="bt-content"><b><center>Bài tập<center></b></div> \
        <div class ="bt"><b>Bài tập 1. </b> Viết hàm kiểm tra xem một biểu thức có đúng dấu ngoặc hay không bằng cách sử dụng stack. \
        <br><b>Bài tập 2. </b> Một chuỗi palindrome là chuỗi có thể đọc xuôi hay ngược đều giống nhau. Hãy viết một chương trình để kiểm tra xem một chuỗi cho trước có phải là chuỗi palindrome hay không. \
        <br><b>Bài tập 3. </b> Viết hàm để kiểm tra xem một dãy số có thỏa mãn kích thước hàng đợi tối đa cho trước hay không. \
        <br><b>Bài tập 4. </b> Viết hàm chuyển đổi một số nguyên từ hệ thập phân sang hệ nhị phân bằng cách sử dụng stack. </div> \
        <br> \
        <br> \
        <br> \
        <br> ';
    });
    document.getElementById('cbt4').addEventListener('click', function () {
        noiDungBT4.innerHTML = '<br><div class="bt-content"><b><center>Bài tập<center></b></div> \
        <div class ="bt"><b>Bài tập 1. </b> Cho cây nhị phân như hình vẽ sau. \
        <br><center><img src="img/np1.png" width="800" height="500"></center> \
        <br> Hãy viết các nút được thăm khi duyệt cây theo: \
        <br> a. thứ tự trước \
        <br> b. thứ tự sau \
        <br> c. thứ tự giữa \
        <br><b>Bài tập 2. </b> BT4-12.Cho cây nhị phân T trong đó thông tin tại mỗi nút trong cây biểu diễn các thành phần thông tin của một độc giả. Biết rằng một độc giả gồm những thành phần: Mã độc giả, tên độc giả, ngày sinh, địa chỉ, ngày lập thẻ. \
        <br> a.Tìm địa chỉ của độc giả lớn tuoi nhật trong cây. \
        <br> b.Liệt kê các độc giả trong cây sinh \
        <br> c.Đếm số lượng node có đủ 2 09/07/2009. sau năm 1975 cây còn có ngày lập thẻ trong ngày \
        <br> d. Tìm kiếm địa chỉ theo mã độc giả. \
        <br> e. Liệt kê các độc giả trong cây </div> \
        <br> \
        <br> \
        <br> \
        <br> ';
    });
    document.getElementById('cbt5').addEventListener('click', function () {
        noiDungBT5.innerHTML = '<br><div class="bt-content"><b><center>Bài tập<center></b></div> \
        <div class ="bt"><b>Bài tập 1. </b> Hãy viết một lớp đơn giản để hiện thực một Hash Table. Bạn có thể sử dụng một mảng và phương thức hash đơn giản để ánh xạ khóa vào chỉ mục trong mảng. \
        <br><b>Bài tập 2. </b> Viết phương thức để thêm, xóa một phần tử mới vào Hash Table. \
        <br><b>Bài tập 3. </b> Sử dụng Hash Table để đếm số lần xuất hiện của mỗi phần tử trong một mảng. \
        <br><b>Bài tập 4. </b> Thêm chức năng tự động thay đổi kích thước của Hash Table khi số lượng phần tử vượt quá một ngưỡng nhất định.</div>';
    });

    document.getElementById('cbt6').addEventListener('click', function () {
        noiDungBT6.innerHTML = '<br><div class="bt-content"><b><center>Bài tập<center></b> \
        <div class ="bt"><b>Bài tập 1. </b> Viết lớp hoặc module để hiện thực đồ thị không trọng số. Sử dụng danh sách kề để lưu trữ đỉnh và các đỉnh kề với nó. \
        <br><b>Bài tập 2. </b> Viết hàm để kiểm tra xem đồ thị có chu trình âm hay không (đối với đồ thị có trọng số). \
        <br><b>Bài tập 3. </b> Viết hàm để kiểm tra xem đồ thị có chu trình hay không. \
        <br><b>Bài tập 4. </b> Hiện thực thuật toán Dijkstra để tìm đường đi ngắn nhất giữa hai đỉnh trong đồ thị có trọng số dương. </div> \
        <br> \
        <br> \
        <br> \
        <br> ';
    });
    document.getElementById('cbt7').addEventListener('click', function () {
        noiDungBT7.innerHTML = '<br><div class="bt-content><b><center>Bài tập<center></b></div> \
        <div class ="bt"><b>Bài tập 1. </b> Viết một hàm để tìm giá trị lớn nhất và nhỏ nhất trong một mảng. \
        <br><b>Bài tập 2. </b> Viết hàm thực hiện tìm kiếm tuyến tính để kiểm tra xem một phần tử có tồn tại trong mảng hay không. \
        <br><b>Bài tập 3. </b> Viết hàm để tách một mảng thành hai mảng con, một chứa các số dương và một chứa các số âm. \
        <br><b>Bài tập 4. </b> Viết hàm để tìm phần tử lớn thứ k trong một mảng. \
        <br><b>Bài tập 5. </b> Viết hàm để đếm số lần xuất hiện của một phần tử trong mảng. </div> \
        <br> \
        <br> \
        <br> \
        <br>';
    });
    document.getElementById('cbt8').addEventListener('click', function () {
        noiDungBT8.innerHTML = '<br><div class="bt-content"><b><center>Bài tập<center></b></div> \
        <div class ="bt"><b>Bài tập 1. </b> In đảo ngược số n nguyên dương \
        <br><b>Bài tập 2. </b> Đếm số lượng chữ số nguyên dương n \
        <br><b>Bài tập 3. </b> Tìm chữ số có giá trị lớn nhất của số nguyên dương n \
        <br><b>Bài tập 4. </b> Đổi sang hệ nhị phân của số nguyên dương n \
        <br><b>Bài tập 5. </b> Tính S(n)=1+3+5+…+(2.n+1) với n>=0 \
        <br><b>Bài tập 6. </b> Tính S(n)=1-2+3-4+…+ ((-1)^(n+1)).n với n>0 </div> \
        <br> \
        <br> \
        <br> \
        <br> ';
    });
      
});

document.getElementById('bai-tap-checkbox').addEventListener('change', function () {
  // Kiểm tra xem checkbox có được tích vào hay không
    if (this.checked) {
    // Hiển thị phần I trong mỗi bài học lesson-content-I

        const lessonIContentsM = document.querySelectorAll('.baitap2-item');
        lessonIContentsM.forEach((content) => {
            content.style.display = 'none';
        });

        const lessonIContentsN = document.querySelectorAll('.baitap3-item');
        lessonIContentsN.forEach((content) => {
            content.style.display = 'none';
        });

        const lessonIContentsK = document.querySelectorAll('.baitap4-item');
        lessonIContentsK.forEach((content) => {
            content.style.display = 'block';
        });

    } else {
    // Nếu checkbox không được tích, ẩn phần I của mỗi bài học
    
        const lessonIContentsM = document.querySelectorAll('.baitap2-item');
        lessonIContentsM.forEach((content) => {
            content.style.display = 'block';
        });

        const lessonIContentsN = document.querySelectorAll('.baitap3-item');
        lessonIContentsN.forEach((content) => {
            content.style.display = 'none';
        });

        const lessonIContentsK = document.querySelectorAll('.baitap4-item');
        lessonIContentsK.forEach((content) => {
            content.style.display = 'none';
        });
    }
});



// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const khaiNiemCheckbox = document.getElementById('khai-niem-checkbox');
    const tinhChatCheckbox = document.getElementById('tinh-chat-checkbox');

    // Thêm sự kiện cho "khai-niem-checkbox"
    khaiNiemCheckbox.addEventListener('change', function () {
        // Cập nhật nội dung dựa trên trạng thái của checkbox
        updateContent();
    });

    // Thêm sự kiện cho "tinh-chat-checkbox"
    tinhChatCheckbox.addEventListener('change', function () {
        // Cập nhật nội dung dựa trên trạng thái của checkbox
        updateContent();
    });

    // Thêm sự kiện cho "#baihoc5-item-1"
    const baiHoc5Item1 = document.getElementById('baihoc5-item-1');
    baiHoc5Item1.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-1"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Sắp xếp nổi bọt (Bubble Sort) là gì ? </b></div>\
    <div class ="lesson">Sắp xếp nổi bọt là một giải thuật sắp xếp đơn giản. \
    Giải thuật sắp xếp này được tiến hành dựa trên việc so sánh cặp phần tử liền kề nhau và tráo đổi thứ tự nếu chúng không theo thứ tự.\
    <br>Giải thuật này không thích hợp sử dụng với các tập dữ liệu lớn khi mà độ phức tạp trường hợp xấu nhất và trường hợp trung bình là O(n<sup>2</sup>) với n là số phần tử. \
    <br>Giải thuật sắp xếp nổi bọt là giải thuật chậm nhất trong số các giải thuật sắp xếp cơ bản. \
    Giải thuật này còn chậm hơn giải thuật đổi chỗ trực tiếp mặc dù số lần so sánh bằng nhau, nhưng do đổi chỗ hai phần tử kề nhau nên số lần đổi chỗ nhiều hơn.</div> \
<div class="lesson-content"><b>II. Những điều lưu ý của thuật toán </b> </div> \
    <b><div class ="lesson"> 1. Ưu điểm </b> \
    <br> - Là thuật toán cơ bản, dễ hiểu, phù hợp cho người bắt đầu học về sắp xếp. \
    <br> - Đoạn code ngắn gọn, dễ nhớ. \
    <br><b> 2. Nhược điểm </b> \
    <br> - Hiệu suất chậm nhất trong các thuật toán sắp xếp. \
    <br> - Không hiệu quả với những dữ liệu lớn. \
    <br><b> 3. Thời gian tính và độ phức tạp </b> \
    <br>Với mỗi i = 1,2,...,n - 1 ta cần n - i phép so sánh. Do đó số nhiều nhất các lần so sánh và đổi chỗ trong giải thuật là \
    (n - 1) + (n - 2) + ... + 2 + 1 = (n-1)n/2. Do đó ta có độ phức tạp là O(n<sup>2</sup>). </div> \
    <br> \
    <br> \
    <br> ';
    });

    const baiHoc5Item2 = document.getElementById('baihoc5-item-2');
    baiHoc5Item2.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Sắp xếp chèn (Insertion Sort) là gì ? </b></div> \
    <div class ="lesson">Sắp xếp chèn là một giải thuật sắp xếp dựa trên so sánh in-place. \
    Ở đây, một danh sách con luôn luôn được duy trì dưới dạng đã qua sắp xếp. \
    Sắp xếp chèn là chèn thêm một phần tử vào danh sách con đã qua sắp xếp. \
    Phần tử được chèn vào vị trí thích hợp sao cho vẫn đảm bảo rằng danh sách con đó vẫn sắp theo thứ tự. \
    <br>Với cấu trúc dữ liệu mảng, chúng ta tưởng tượng là: mảng gồm hai phần: một danh sách con đã được sắp xếp và phần khác là các phần tử không có thứ tự. \
    Giải thuật sắp xếp chèn sẽ thực hiện việc tìm kiếm liên tiếp qua mảng đó, \
    và các phần tử không có thứ tự sẽ được di chuyển và được chèn vào vị trí thích hợp trong danh sách con (của cùng mảng đó). \
    <br>Giải thuật này không thích hợp sử dụng với các tập dữ liệu lớn khi độ phức tạp trường hợp xấu nhất và trường hợp trung bình là Ο(n<sup>2</sup>) với n là số phần tử. </div> \
    <div class="lesson-content"><b>II. Độ phức tạp thuật toán </b></div> \
    <div class ="lesson">Giải thuật này không thích hợp sử dụng với các tập dữ liệu lớn khi độ phức tạp trường hợp xấu nhất và trường hợp trung bình là Ο(n<sup>2</sup>) với n là số phần tử. \
        <br> Trường hợp tốt: O(n) \
        <br> Trung bình: Ο(n<sup>2</sup>) \
        <br> Trường hợp xấu: Ο(n<sup>2</sup>) </div>\
        <br> \
    <br> \
    <br> ';
    });

    const baiHoc5Item3 = document.getElementById('baihoc5-item-3');
    baiHoc5Item3.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Giải thuật sắp xếp chọn (Selection Sort) là gì ? </b></div> \
    <div class ="lesson"> Giải thuật sắp xếp chọn (Selection Sort) là một giải thuật đơn giản. Giải thuật sắp xếp này là một giải thuật dựa trên việc so sánh in-place, \
    trong đó danh sách được chia thành hai phần, phần được sắp xếp (sorted list) ở bên trái và phần chưa được sắp xếp (unsorted list) ở bên phải. \
    Ban đầu, phần được sắp xếp là trống và phần chưa được sắp xếp là toàn bộ danh sách ban đầu. \
    <br>Phần tử nhỏ nhất được lựa chọn từ mảng chưa được sắp xếp và được tráo đổi với phần bên trái nhất và phần tử đó trở thành phần tử của mảng được sắp xếp. \
    Tiến trình này tiếp tục cho tới khi toàn bộ từng phần tử trong mảng chưa được sắp xếp đều được di chuyển sang mảng đã được sắp xếp. \
    <br>Giải thuật này không phù hợp với tập dữ liệu lớn khi mà độ phức tạp trường hợp xấu nhất và trường hợp trung bình là O(n2) với n là số phần tử. </div>\
<div class="lesson-content"><b>II. Tính chất và độ phức tạp thuật toán </b></div> \
    <div class ="lesson">Giải thuật sắp xếp này là một giải thuật dựa trên việc so sánh in-place, \
        trong đó danh sách được chia thành hai phần, phần được sắp xếp (sorted list) ở bên trái và phần chưa được sắp xếp (unsorted list) ở bên phải. \
         Ban đầu, phần được sắp xếp là trống và phần chưa được sắp xếp là toàn bộ danh sách ban đầu. \
    <br>Phần tử nhỏ nhất được lựa chọn từ mảng chưa được sắp xếp và được tráo đổi với phần bên trái nhất và phần tử đó trở thành phần tử của mảng được sắp xếp. \
        Tiến trình này tiếp tục cho tới khi toàn bộ từng phần tử trong mảng chưa được sắp xếp đều được di chuyển sang mảng đã được sắp xếp. \
    <br>Giải thuật này không phù hợp với tập dữ liệu lớn khi mà độ phức tạp trường hợp xấu nhất và trường hợp trung bình là O(n2) với n là số phần tử. </div>  \
    <br> \
    <br> \
    <br> ';
    });

    const baiHoc5Item4 = document.getElementById('baihoc5-item-4');
    baiHoc5Item4.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Giải thuật sắp xếp trộn (Merge Sort) là gì ? </b></div> \
    <div class ="lesson"> Sắp xếp trộn (Merge Sort) là một giải thuật sắp xếp dựa trên giải thuật <b>Chia để trị (Divide and Conquer)</b>. Với độ phức tạp thời gian trường hợp xấu nhất là Ο(n log n) thì đây là một trong các giải thuật đáng được quan tâm nhất. \
    <br>Đầu tiên, giải thuật sắp xếp trộn chia mảng thành hai nửa và sau đó kết hợp chúng lại với nhau thành một mảng đã được sắp xếp. </div> \
<div class="lesson-content"><b>II. Tính chất và độ phức tạp thuật toán? </b></div> \
    <div class ="lesson"> Với độ phức tạp thời gian trường hợp xấu nhất là Ο(n log n) thì đây là một trong các giải thuật đáng được quan tâm nhất. \
        <br>Đầu tiên, giải thuật sắp xếp trộn chia mảng thành hai nửa và sau đó kết hợp chúng lại với nhau thành một mảng đã được sắp xếp. </div> \
        <br> \
    <br> \
    <br>  ';
    });

    const baiHoc5Item5 = document.getElementById('baihoc5-item-5');
    baiHoc5Item5.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Sắp xếp nhanh (Quick Sort) là gì ? </b></div> \
    <div class ="lesson"> Giải thuật sắp xếp nhanh (Quick Sort) là một giải thuật hiệu quả cao và dựa trên việc chia mảng dữa liệu thành các mảng nhỏ hơn. \
        Giải thuật sắp xếp nhanh chia mảng thành hai phần bằng cách so sánh từng phần tử của mảng với một phần tử được chọn gọi là <b> phần tử chốt (Pivot) </b> : \
        một mảng bao gồm các phần tử nhỏ hơn hoặc bằng phần tử chốt và mảng còn lại bao gồm các phần tử lớn hơn hoặc bằng phần tử chốt. \
    <br> Tiến trình chia này diễn ra tiếp tục cho tới khi độ dài của các mảng con đều bằng 1. Giải thuật sắp xếp nhanh tỏ ra khá hiệu quả \
    với các tập dữ liệu lớn khi mà độ phức tạp trường hợp trung bình và trường hợp xấu nhất là O(nlogn) với n là số phần tử. </div> \
<div class="lesson-content"><b>II. Tính chất và độ phức tạp thuật toán? </b></div> \
    <div class ="lesson">Giải thuật sắp xếp nhanh chia mảng thành hai phần bằng cách so sánh từng phần tử của mảng với một phần tử được chọn gọi là <b> phần tử chốt (Pivot) </b> : \
        một mảng bao gồm các phần tử nhỏ hơn hoặc bằng phần tử chốt và mảng còn lại bao gồm các phần tử lớn hơn hoặc bằng phần tử chốt. \
    <br> Tiến trình chia này diễn ra tiếp tục cho tới khi độ dài của các mảng con đều bằng 1. Giải thuật sắp xếp nhanh tỏ ra khá hiệu quả \
    với các tập dữ liệu lớn khi mà độ phức tạp trường hợp trung bình và trường hợp xấu nhất là O(nlogn) với n là số phần tử. </div>  \
    <br> \
    <br> \
    <br> ';
    });

    const baiHoc5Item6 = document.getElementById('baihoc5-item-6');
    baiHoc5Item6.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Sắp xếp Shell Sort là gì ? </b></div> \
        <div class ="lesson"> Shell Sort là một giải thuật sắp xếp mang lại hiệu quả cao dựa trên giải thuật sắp xếp chèn (Insertion Sort). \
        Giải thuật này tránh các trường hợp phải tráo đổi vị trí của hai phần tử xa nhau trong giải thuật sắp xếp chọn (nếu như phần tử nhỏ hơn ở vị trí bên phải khá xa so với phần tử lớn hơn bên trái). \
    <br> Đầu tiên, giải thuật này sử dụng giải thuật sắp xếp chọn trên các phần tử có khoảng cách xa nhau, sau đó sắp xếp các phần tử có khoảng cách hẹp hơn.\
    Khoảng cách này còn được gọi là <b>khoảng (interval) </b> – là số vị trí từ phần tử này tới phần tử khác. Khoảng này được tính dựa vào công thức Knuth như sau: \
    <center><b> h = h*3 + 1 </b><i>trong đó: h là Khoảng (interval) với giá trị ban đâu là 1 </i></center> \
    Giải thuật này khá hiệu quả với các tập dữ liệu có kích cỡ trung bình khi mà độ phức tạp trường hợp xấu nhất và trường hợp trung bình là O(n), với n là số phần tử. </div> \
<div class="lesson-content"><b>II. Tính chất và độ phức tạp thuật toán? </b></div> \
    <div class ="lesson"> - Shell Sort là một thuật toán sắp xếp không ổn định, nghĩa là nó có thể thay đổi vị trí của các phần tử có giá trị bằng nhau. \
        Ý tưởng chính của Shell Sort là sắp xếp các phần tử cách xa nhau, sau đó giảm dần khoảng cách giữa các phần tử để thực hiện sắp xếp địa phương (local sorting). \
    <br> - Shell Sort thường hiệu quả hơn Insertion Sort khi xử lý dãy dữ liệu lớn, đặc biệt là khi dãy dữ liệu gần sắp xếp. \
    <br> - Shell Sort không đòi hỏi bộ nhớ phụ (auxiliary memory) ngoài việc lưu trữ dãy dữ liệu cần sắp xếp. \
    <br> - <b>Độ phức tạp thời gian</b> của Shell Sort không dễ đánh giá chính xác do nó phụ thuộc vào khoảng cách giữa các phần tử khi sắp xếp.  </div>  \
    <br> \
    <br> \
    <br> ';
    });

    const baiHoc5Item7 = document.getElementById('baihoc5-item-7');
    baiHoc5Item7.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Ngăn xếp (Stack) là gì ? </b></div> \
    <div class ="lesson"> Một ngăn xếp là một cấu trúc dữ liệu trừu tượng (Abstract Data Type – viết tắt là ADT), hầu như được sử dụng trong hầu hết mọi ngôn ngữ lập trình. Đặt tên là ngăn xếp bởi vì nó hoạt động như một ngăn xếp trong đời sống thực, ví dụ như một cỗ bài hay một chồng đĩa,… </div> \
    <br><center><img src="img/sta1.jpg" alt="Bubble Sort Image"></center> \
    <div class ="lesson"> Trong đời sống thực, ngăn xếp chỉ cho phép các hoạt động tại vị trí trên cùng của ngăn xếp. \
        Ví dụ, chúng ta chỉ có thể đặt hoặc thêm một lá bài hay một cái đĩa vào trên cùng của ngăn xếp. \
        Do đó, cấu trúc dữ liệu trừu tượng ngăn xếp chỉ cho phép các thao tác dữ liệu tại vị trí trên cùng. Tại bất cứ thời điểm nào, chúng ta chỉ có thể truy cập phần tử trên cùng của ngăn xếp. \
    <br> Đặc điểm này làm cho ngăn xếp trở thành cấu trúc dữ liệu dạng <b>LIFO</b>. <b>LIFO</b> là viết tắt của <b>Last-In-First-Out</b>. \
    Ở đây, phần tử được đặt vào (được chèn, được thêm vào) cuối cùng sẽ được truy cập đầu tiên. \
    Trong thuật ngữ ngăn xếp, hoạt động chèn được gọi là hoạt động <b>PUSH</b> và hoạt động xóa được gọi là hoạt động <b>POP</b>. </div> \
<div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> - LIFO (Last In, First Out): Phần tử cuối cùng được thêm vào Stack là phần tử đầu tiên được lấy ra khỏi Stack. Điều này tạo ra một cấu trúc dữ liệu theo thứ tự ngược lại so với thứ tự thêm vào. \
    <br> - Các thao tác cơ bản trên Stack bao gồm <b>"push"</b> để thêm một phần tử vào đỉnh của Stack và <b>"pop"</b> để loại bỏ phần tử ở đỉnh của Stack. \
    <br> - <b>Đỉnh Stack </b>: Là phần tử cuối cùng được thêm vào Stack, cũng là phần tử đầu tiên được lấy ra khi thực hiện thao tác "pop". \
    <br> - Stack có thể được triển khai dưới dạng mảng động hoặc danh sách liên kết, và nó không giới hạn kích thước, tùy thuộc vào bộ nhớ hệ thống. \
    <br> - Stack thường được sử dụng trong nhiều ứng dụng, bao gồm quản lý ngăn xếp cuộc gọi hàm trong ngôn ngữ lập trình, duyệt cây (traversal), và các vấn đề liên quan đến lưu trữ tạm thời và quản lý trạng thái. </div> \
    <br> \
    <br> \
    <br> ';
    });

    const baiHoc5Item8 = document.getElementById('baihoc5-item-8');
    baiHoc5Item8.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Cấu trúc dữ liệu hàng đợi (Queue) là gì ? </b></div> \
    <div class ="lesson"> Hàng đợi (Queue) là một cấu trúc dữ liệu trừu tượng, là một cái gì đó tương tự như hàng đợi trong đời sống hàng ngày (xếp hàng). </div> \
    <br><center><img src="img/que1.jpg" alt="Bubble Sort Image"></center> \
    <div class ="lesson"> Khác với ngăn xếp, hàng đợi là mở ở cả hai đầu. Một đầu luôn luôn được sử dụng để chèn dữ liệu vào (hay còn gọi là sắp vào hàng) và đầu kia được sử dụng để xóa dữ liệu (rời hàng). \
        Cấu trúc dữ liệu hàng đợi tuân theo phương pháp First-In-First-Out, tức là dữ liệu được nhập vào đầu tiên sẽ được truy cập đầu tiên. \
    <br> Trong đời sống thực chúng ta có rất nhiều ví dụ về hàng đợi, chẳng hạn như hàng xe ô tô trên đường một chiều (đặc biệt là khi tắc xe), trong đó xe nào vào đầu tiên sẽ thoát ra đầu tiên. Một vài ví dụ khác là xếp hàng học sinh, xếp hàng mua vé,… </div> \
<div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> - FIFO (First In, First Out): Phần tử đầu tiên được thêm vào Queue là phần tử đầu tiên được lấy ra khỏi Queue. Điều này tạo ra một cấu trúc dữ liệu theo thứ tự giống như hàng đợi thực tế. \
    <br> - Các thao tác cơ bản trên Queue bao gồm "enqueue" để thêm một phần tử vào cuối Queue và "dequeue" để loại bỏ phần tử ở đầu Queue. \
    <br> - Đầu Queue là nơi thực hiện thao tác "dequeue," còn Đuôi Queue là nơi thực hiện thao tác "enqueue." Phần tử nào đến trước sẽ ở Đầu Queue và phần tử nào đến sau sẽ ở Đuôi Queue. \
    <br> - Queue có thể được triển khai dưới dạng mảng động hoặc danh sách liên kết và không có giới hạn về kích thước. \
    <br> - Queue thường được sử dụng trong nhiều ứng dụng, bao gồm quản lý các công việc được thực hiện theo thứ tự đầu vào đầu ra, xử lý các yêu cầu theo thứ tự đến, và giải quyết các vấn đề liên quan đến quản lý dữ liệu theo nguyên tắc FIFO. </div> \
    <br> \
    <br> \
    <br> ';
    });

    const baiHoc5Item9 = document.getElementById('baihoc5-item-9');
    baiHoc5Item9.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Danh sách liên kết (Linked List) là gì ? </b></div> \
    <div class ="lesson"> Một Danh sách liên kết (Linked List) là một dãy các cấu trúc dữ liệu được kết nối với nhau thông qua các liên kết (link). \
        Hiểu một cách đơn giản thì Danh sách liên kết là một cấu trúc dữ liệu bao gồm một nhóm các nút (node) tạo thành một chuỗi. Mỗi nút gồm dữ liệu ở nút đó và tham chiếu đến nút kế tiếp trong chuỗi. \
    <br> Danh sách liên kết là cấu trúc dữ liệu được sử dụng phổ biến thứ hai sau mảng. Dưới đây là các khái niệm cơ bản liên quan tới Danh sách liên kết: \
    <br><b> Link (liên kết) </b>: mỗi link của một Danh sách liên kết có thể lưu giữ một dữ liệu được gọi là một phần tử. \
    <br><b> Next </b>: Mỗi liên kết của một Danh sách liên kết chứa một link tới next link được gọi là Next. \
    <br><b> First </b>: một Danh sách liên kết bao gồm các link kết nối tới first link được gọi là First. </div> \
<div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> - Danh sách liên kết đơn (Singly Linked List) Là một cấu trúc dữ liệu tạo thành từ các "nút" liên kết với nhau theo chiều một chiều, trong đó mỗi nút chứa dữ liệu và một con trỏ (thường được gọi là con trỏ "next") trỏ tới nút tiếp theo trong danh sách. \
    <br> -  Mỗi nút của danh sách liên kết có thể nằm ở một vị trí bất kỳ trong bộ nhớ, không cần phải là liên tục nhau như mảng. \
    <br> - Thao tác chèn và xóa phần tử giữa danh sách liên kết thường nhanh và dễ dàng hơn so với mảng, do chỉ cần điều chỉnh con trỏ liên kết. \
    <br> - Kích thước của danh sách liên kết có thể thay đổi linh hoạt, không như mảng có kích thước cố định. \
    <br> - Linked List được sử dụng trong nhiều bài toán và ứng dụng như quản lý bộ nhớ động, triển khai danh sách liên kết xếp hạng, và là một phần của các cấu trúc dữ liệu phức tạp hơn như cây. </div> \
    <br> \
    <br> \
    <br> ';
    });
    const baiHoc5Item10 = document.getElementById('baihoc5-item-10');
    baiHoc5Item10.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Danh sách liên kết đôi (Doubly Linked List) là gì ? </b></div> \
    <div class ="lesson"> Danh sách liên kết đôi (Doubly Linked List) là một biến thể của Danh sách liên kết (Linked List), trong đó hoạt động duyệt qua các nút có thể được thực hiện theo hai chiều: \
        về trước và về sau một cách dễ dàng khi so sánh với Danh sách liên kết đơn. Dưới đây là một số khái niệm quan trọng cần ghi nhớ về Danh sách liên kết đôi. \
    <br> <b>Link </b>: mỗi link của một Danh sách liên kết có thể lưu giữ một dữ liệu và được gọi là một phần tử. \
    <br> <b>Next </b>: mỗi link của một Danh sách liên kết có thể chứa một link tới next link và được gọi là Next. \
    <br> <b>Prev </b>: mỗi link của một Danh sách liên kết có thể chứa một link tới previous link và được gọi là Prev. \
    <br> <b>First và Last </b>: một Danh sách liên kết chứa link kết nối tới first link được gọi là First và tới last link được gọi là Last. </div> \
<div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> - Mỗi nút trong danh sách liên kết đôi chứa hai con trỏ, một con trỏ trỏ tới nút phía trước (prev) và một con trỏ trỏ tới nút phía sau (next). \
    <br> -  Do có con trỏ prev và next, việc di chuyển lùi (backward) và tiến (forward) trong danh sách liên kết đôi là dễ dàng và hiệu quả. \
    <br> - So với danh sách liên kết đơn, việc chèn và xóa phần tử giữa danh sách liên kết đôi thường nhanh chóng hơn, vì không cần phải điều chỉnh con trỏ prev của nút kế trước phần tử cần chèn hoặc xóa. \
    <br> - Danh sách liên kết đôi tăng cường tính linh hoạt của cấu trúc dữ liệu, cho phép truy cập ngược (backward traversal) và thực hiện các thao tác chèn và xóa một cách hiệu quả. </div> \
    <br> \
    <br> \
    <br> ';
    });
    const baiHoc5Item11 = document.getElementById('baihoc5-item-11');
    baiHoc5Item11.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Danh sách liên kết vòng (Circular Linked List) là gì ? </b></div> \
    <div class ="lesson"> Danh sách liên kết vòng (Circular Linked List) là một biến thể của Danh sách liên kết (Linked List), trong đó phần tử đầu tiên \
        trỏ tới phần tử cuối cùng và phần tử cuối cùng trỏ tới phần tử đầu tiên. \
    <br> Cả hai loại Danh sách liên kết đơn (Singly Linked List) và Danh sách liên kết đôi (Doubly Linked List) đều có thể được tạo thành dạng Danh sách liên kết vòng. </div> \
    <div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> - Trong danh sách liên kết vòng, nút cuối cùng của danh sách sẽ trỏ lại đến nút đầu tiên, tạo thành một vòng đóng. \
    <br> - Tương tự như danh sách liên kết đôi, với danh sách liên kết vòng, việc di chuyển lùi (backward) và tiến (forward) là dễ dàng và hiệu quả. \
    <br> - Do tính chất vòng của danh sách, thao tác chèn và xóa phần tử giữa danh sách cũng thường nhanh chóng và dễ dàng hơn so với danh sách liên kết đơn. \
    <br> - Danh sách liên kết vòng không có nút kết thúc (tail) truyền thống như trong danh sách liên kết đơn. \
    <br> - Tăng tính linh hoạt của cấu trúc dữ liệu, cho phép truy cập ngược và một số thao tác chèn và xóa hiệu quả. </div> \
    <br> \
    <br> \
    <br> ';
    });

    const baiHoc5Item12 = document.getElementById('baihoc5-item-12');
    baiHoc5Item12.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Cấu trúc dữ liệu mảng là gì ? </b></div> \
    <div class ="lesson"> Mảng (Array) là một trong các cấu trúc dữ liệu cũ và quan trọng nhất. Mảng có thể lưu giữ một số phần tử cố định và các phần tử \
        này nền có cùng kiểu. Hầu hết các cấu trúc dữ liệu đều sử dụng mảng để triển khai giải thuật. \
    <br> <b> Phần tử </b>: Mỗi mục được lưu giữ trong một mảng được gọi là một phần tử. \
    <br> <b> Chỉ mục (Index) </b>: Mỗi vị trí của một phần tử trong một mảng có một chỉ mục số được sử dụng để nhận diện phần tử. \
    <br> <b> Mảng </b> gồm các bản ghi có kiểu giống nhau, có kích thước cố định, mỗi phần tử được xác định bởi chỉ số \
    <br> <b> Mảng </b> là cấu trúc dữ liệu được cấp phát lien tục cơ bản \
    <br> <b> Ưu điểm </b> : \
    <br> - Truy cập phàn tử với thời gian hằng số O(1) \
    <br> - Sử dụng bộ nhớ hiệu quả \
    <br> - Tính cục bộ về bộ nhớ \
    <br> <b> Nhược điểm </b> : \
    <br> - Không thể thay đổi kích thước của mảng khi chương trình dang thực hiện. </div> \
<div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> - Các phần tử trong mảng được lưu trữ liên tục trong bộ nhớ, giúp quá trình truy cập và xử lý dữ liệu nhanh chóng. \
    <br> - Bạn có thể truy cập bất kỳ phần tử nào trong mảng bằng cách sử dụng chỉ số (index), cho phép truy cập ngẫu nhiên. \
    <br> - Mảng có kích thước cố định khi được khởi tạo, và không thể thay đổi kích thước của mảng một cách linh hoạt. \
    <br> - Mỗi phần tử trong mảng có cùng một kiểu dữ liệu, điều này giúp cải thiện hiệu suất và quản lý dữ liệu. \
    <br> - Sắp xếp mảng làm việc hiệu quả và dễ dàng, đặc biệt là khi sử dụng các thuật toán sắp xếp phổ biến như QuickSort hoặc MergeSort. </div> \
    <br> \
    <br> \
    <br> ';
    });

    const baiHoc5Item13 = document.getElementById('baihoc5-item-13');
    baiHoc5Item13.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Tìm kiếm tuyến tính (Linear Search) là gì ? </b></div> \
    <div class ="lesson"> Linear Search là một giải thuật tìm kiếm rất cơ bản. Trong kiểu tìm kiếm này, một hoạt động tìm kiếm \
    liên tiếp được diễn ra qua tất cả từng phần tử. Mỗi phần tử đều được kiểm tra và nếu tìm thấy bất kỳ kết nối nào thì phần tử cụ thể đó được trả về; \
    nếu không tìm thấy thì quá trình tìm kiếm tiếp tục diễn ra cho tới khi tìm kiếm hết dữ liệu. </div> \
    <br><center><img src="img/li.gif" alt="Bubble Sort Image"></center>    \
<div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> -  Linear Search duyệt qua từng phần tử của dãy dữ liệu một cách tuần tự từ đầu đến cuối cho đến khi tìm thấy phần tử cần tìm hoặc duyệt qua toàn bộ dãy. \
    <br> - Linear Search là thuật toán đơn giản và dễ cài đặt. Nó không đòi hỏi dãy dữ liệu được sắp xếp và phù hợp cho các tình huống khi không có thông tin nào về thứ tự của dãy. \
    <br> - Linear Search không cần thêm bộ nhớ phụ ngoài việc lưu trữ biến tạm thời. \
    <br><b> Độ phức tạp thời gian </b> của Linear Search là <b>O(n)</b>, trong đó n là số lượng phần tử trong dãy dữ liệu. Bởi vì trong trường hợp xấu nhất, phải duyệt qua toàn bộ dãy để tìm kiếm phần tử cần. </div> \
    <br> \
    <br> \
    <br> ';
    });
    const baiHoc5Item14 = document.getElementById('baihoc5-item-14');
    baiHoc5Item14.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Giải thuật tìm kiếm nhị phân (Binary Search) là gì ? </b></div> \
    <div class ="lesson"> Binany Search (Tìm kiếm nhị phân) là một giải thuật tìm kiếm nhanh với độ phức tạp thời gian chạy là Ο(log n). \
        Giải thuật tìm kiếm nhị phân làm việc dựa trên nguyên tắc chia để trị (Divide and Conquer). \
        Để giải thuật này có thể làm việc một cách chính xác thì tập dữ liệu nên ở trong dạng đã được sắp xếp. \
    <br> Binary Search tìm kiếm một phần tử cụ thể bằng cách so sánh phần tử tại vị trí giữa nhất của tập dữ liệu. \
    Nếu tìm thấy kết nối thì chỉ mục của phần tử được trả về. Nếu phần tử cần tìm là lớn hơn giá trị phần tử giữa thì phần tử cần tìm được tìm trong mảng con \
    nằm ở bên phải phần tử giữa; nếu không thì sẽ tìm ở trong mảng con nằm ở bên trái phần tử giữa. \
    Tiến trình sẽ tiếp tục như vậy trên mảng con cho tới khi tìm hết mọi phần tử trên mảng con này. </div> \
<div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> - Binary Search yêu cầu dãy dữ liệu đã được sắp xếp (thường là sắp xếp tăng dần hoặc giảm dần). Điều này là quan trọng để có thể áp dụng thuật toán chia để trị. \
    <br> - Binary Search sử dụng phương pháp chia để trị để giảm bớt phạm vi tìm kiếm, tìm kiếm ở giữa dãy và quyết định tiếp tục tìm kiếm ở nửa phía trước hoặc nửa phía sau của dãy dữ liệu. \
    <br> - Đối với dãy dữ liệu lớn và đã sắp xếp, Binary Search có hiệu suất cao hơn so với Linear Search. Độ phức tạp thời gian của Binary Search là O(log n), trong đó n là số lượng phần tử trong dãy. \
    <br> - Mỗi bước của Binary Search loại trừ một nửa dãy dữ liệu, giảm đáng kể thời gian tìm kiếm so với Linear Search. \
    <br><b> Độ phức tạp thời gian </b> của Binary Search là <b>O(log n)</b>, trong đó n là số lượng phần tử trong dãy. Điều này là do mỗi lần thực hiện, phạm vi tìm kiếm giảm đi một nửa. </div> \
    <br> \
    <br> \
    <br> ';
    });
    const baiHoc5Item15 = document.getElementById('baihoc5-item-15');
    baiHoc5Item15.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Giải thuật Tìm kiếm nội suy (Interpolation Search) là gì ? </b></div> \
    <div class ="lesson"> Tìm kiếm nội suy (Interpolation Search) là biến thể cải tiến của Tìm kiếm nhị phân (Binary Search). \
        Để giải thuật tìm kiếm này làm việc chính xác thì tập dữ liệu phải được sắp xếp. \
    <br> Binary Search có lợi thế lớn về độ phức tạp thời gian khi so sánh với Linear Search. \
    Linear Search có độ phức tạp trường hợp xấu nhất là Ο(n) trong khi Binary Search là Ο(log n). </div>  \
<div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> - Tương tự như Binary Search, Interpolation Search yêu cầu dãy dữ liệu đã được sắp xếp. Điều này là để có thể áp dụng phương pháp tìm kiếm nội suy. \
    <br> - Interpolation Search sử dụng phương pháp nội suy để ước lượng vị trí gần đúng của phần tử cần tìm dựa trên giá trị của nó và giá trị ở hai đầu của dãy. \
    <br> - Nếu dãy dữ liệu được phân bố đều, Interpolation Search có thể hiệu quả hơn so với Binary Search. Tuy nhiên, đối với dãy có sự phân bố không đều, hiệu suất có thể giảm. \
    <br> - Trong trường hợp trung bình, <b>độ phức tạp thời gian</b> của Interpolation Search là <b>O(log log n)</b>, nơi n là số lượng phần tử trong dãy. Tuy nhiên, trong trường hợp xấu nhất, độ phức tạp là <b>O(n)</b>, khi dãy không đều phân bố và dãy gần giống với dãy tăng dần. </div> \
    <br> \
    <br> \
    <br> ';
    });

    const baiHoc5Item16 = document.getElementById('baihoc5-item-16');
    baiHoc5Item16.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Hash Table là gì? </b></div> \
    <div class ="lesson"> Cấu trúc dữ liệu Hash Table là một cấu trúc dữ liệu lưu giữ dữ liệu theo cách thức liên hợp. \
        Trong Hash Table, dữ liệu được lưu giữ trong định dạng mảng, trong đó các giá trị dữ liệu có giá trị chỉ mục riêng. \
        Việc truy cập dữ liệu trở nên nhanh hơn nếu chúng ta biết chỉ mục của dữ liệu cần tìm. \
    <br> Do đó, với loại cấu trúc dữ liệu Hash Table này thì các hoạt động chèn và hoạt động tìm kiếm sẽ diễn ra rất nhanh, bất chấp kích cỡ của dữ liệu là bao nhiêu. \
    Hash Table sử dụng mảng như là một kho lưu giữ trung gian và sử dụng kỹ thuật Hash để tạo chỉ mục tại nơi phần tử được chèn vào. </div>  \
<div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> - Hash Table cung cấp khả năng tìm kiếm hiệu quả với độ phức tạp trung bình O(1) cho các thao tác tìm kiếm, thêm và xóa, trong trường hợp lý tưởng. \
    <br> - Hash Table sử dụng hàm băm để ánh xạ khóa (key) thành một vị trí trong bảng. Khi hàm băm được thiết kế tốt, các giá trị phân bố đều, giảm độ chệch và tăng hiệu suất. \
    <br> - Hash Table có khả năng linh hoạt với các kiểu dữ liệu khác nhau cho cả khóa và giá trị. \
    <br> - Hash Table có thể tiết kiệm không gian bộ nhớ nếu được sử dụng hiệu quả. Tuy nhiên, nếu hàm băm không tốt, có thể dẫn đến xung đột và tăng kích thước bảng, làm tăng không gian bộ nhớ sử dụng. \
    <br> - Trong trường hợp tốt, Hash Table có thể cung cấp tốc độ tìm kiếm rất nhanh, vượt qua nhiều thuật toán tìm kiếm khác đối với các tập dữ liệu lớn. \
    <br> - Trong trường hợp lý tưởng, <b>độ phức tạp</b> của thao tác truy cập (tìm kiếm) trong Hash Table là <b>O(1)</b>. Tuy nhiên, trong <b>trường hợp xấu nhất</b>, nếu xảy ra xung đột và cần thực hiện tìm kiếm tuyến tính, độ phức tạp có thể là <b>O(n)</b>, với n là số lượng phần tử trong bảng băm. </div> \
    <br> \
    <br> \
    <br> ';
    });

    const baiHoc5Item17 = document.getElementById('baihoc5-item-17');
    baiHoc5Item17.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Giải thuật tìm kiếm theo chiều sâu là gì ? </b></div> \
    <div class ="lesson"> Giải thuật tìm kiếm theo chiều sâu (Depth First Search – viết tắt là DFS), còn được gọi là giải thuật tìm kiếm ưu tiên chiều sâu, \
        là giải thuật duyệt hoặc tìm kiếm trên một cây hoặc một đồ thị và sử dụng stack (ngăn xếp) để ghi nhớ đỉnh liền kề để bắt đầu việc tìm kiếm \
        khi không gặp được đỉnh liền kề trong bất kỳ vòng lặp nào. Giải thuật tiếp tục cho tới khi gặp được đỉnh cần tìm hoặc tới một nút không có con. Khi đó giải thuật quay lui về đỉnh vừa mới tìm kiếm ở bước trước. </div> \
    <br><center><img src="img/df1.jpg" alt="Bubble Sort Image"></center>  \
<div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> - DFS được sử dụng để duyệt và quy hoạch các đỉnh và cạnh trong đồ thị. \
    <br> - DFS có thể được triển khai bằng cách sử dụng đệ quy hoặc sử dụng ngăn xếp. Trong đệ quy, việc "quay lui" giúp lưu trữ thông tin về đỉnh hiện tại và tiếp tục duyệt. Trong cách triển khai sử dụng ngăn xếp, thông tin tương tự được lưu trữ nhưng được quản lý bởi ngăn xếp. \
    <br> - DFS sử dụng một mảng hoặc danh sách để kiểm soát xem một đỉnh đã được duyệt hay chưa, tránh việc lặp lại việc duyệt đỉnh đã được duyệt trước đó. \
    <br> - DFS "đào sâu" vào đồ thị càng sâu càng tốt, trước khi quay lại và đi theo các nhánh còn lại. \
    <br> - DFS thường được sử dụng để kiểm tra xem có tồn tại đường đi giữa hai đỉnh hay không, kiểm tra chu trình trong đồ thị. \
    <br> - Độ phức tạp thời gian: <b>O(V + E)</b>, trong đó V là số đỉnh, E là số cạnh của đồ thị. DFS duyệt qua tất cả các đỉnh và cạnh ít nhất một lần. </div> \
    <br> \
    <br> \
    <br> ';
    });
    const baiHoc5Item18 = document.getElementById('baihoc5-item-18');
    baiHoc5Item18.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Giải thuật tìm kiếm theo chiều rộng là gì ? </b></div> \
    <div class ="lesson"> Giải thuật tìm kiếm theo chiều rộng (Breadth First Search – viết tắt là BFS) duyệt qua một đồ thị theo chiều rộng và sử dụng hàng đợi (queue) \
        để ghi nhớ đỉnh liền kề để bắt đầu việc tìm kiếm khi không gặp được đỉnh liền kề trong bất kỳ vòng lặp nào. </div> \
    <br><center><img src="img/bf1.jpg" alt= "Bubble Sort Image"></center> \
<div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> - BFS được sử dụng để duyệt và quy hoạch các đỉnh và cạnh trong đồ thị. \
    <br> - BFS sử dụng hàng đợi để duyệt qua các đỉnh một cách theo chiều rộng. Đỉnh được thăm đầu tiên sẽ được thêm vào hàng đợi, và các đỉnh kề sẽ được thêm vào hàng đợi sau đó. \
    <br> - BFS sử dụng một mảng hoặc danh sách để kiểm soát xem một đỉnh đã được duyệt hay chưa, tránh việc lặp lại việc duyệt đỉnh đã được duyệt trước đó. \
    <br> - BFS "lan truyền" từ đỉnh xuất phát ra theo chiều rộng, duyệt qua các đỉnh kề ở cùng mức trước khi di chuyển xuống các mức tiếp theo. \
    <br> - BFS thường được sử dụng để tìm kiếm đường đi ngắn nhất giữa hai đỉnh trong đồ thị. \
    <br> - <b>Độ phức tạp thời gian</b> là <b>O(V + E)</b>, trong đó V là số đỉnh, E là số cạnh của đồ thị. BFS duyệt qua tất cả các đỉnh và cạnh ít nhất một lần. </div> \
    <br> \
    <br> \
    <br> ';
    });

    const baiHoc5Item19 = document.getElementById('baihoc5-item-19');
    baiHoc5Item19.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Duyệt cây là gì ? </b></div> \
    <div class ="lesson"> Duyệt cây là một tiến trình để truy cập tất cả các nút của một cây và cũng có thể in các giá trị của các nút này. \
        Bởi vì tất cả các nút được kết nối thông qua các cạnh (hoặc các link), nên chúng ta luôn luôn bắt đầu truy cập từ nút gốc. \
 </div>  \
    <div class="lesson-content"><b>II. Duyệt trung thứ tự trong cây nhị phân</b></div> \
    <div class ="lesson"> Trong cách duyệt này, cây con bên trái được truy cập đầu tiên, sau đó là nút gốc và sau đó là cây con bên phải. \
        Bạn nên luôn luôn ghi nhớ rằng mỗi nút đều có thể biểu diễn một cây con. \
        Nếu một cây nhị phân được duyệt trung thứ tự, kết quả tạo ra sẽ là các giá trị khóa được sắp xếp theo thứ tự tăng dần. </div> \
    <div class="lesson-content"><b>III. Duyệt tiền thứ tự trong cây nhị phân</b></div> \
    <div class ="lesson"> Trong cách thức duyệt tiền thứ tự trong cây nhị phân, nút gốc được duyệt đầu tiên, sau đó sẽ duyệt cây con bên trái và cuối cùng sẽ duyệt cây con bên phải. </div> \
    <div class="lesson-content"><b>IV. Duyệt hậu thứ tự trong cây nhị phân</b></div> \
    <div class ="lesson"> Trong cách thức duyệt hậu thứ tự trong cây nhị phân, nút gốc của cây sẽ được truy cập cuối cùng, do đó bạn cần chú ý. \
        Đầu tiên, chúng ta duyệt cây con bên trái, sau đó sẽ duyệt cây con bên phải và cuối cùng là duyệt nút gốc. </div> \
<div class="lesson-content"><b>V. Tính chất </b></div> \
    <div class ="lesson"> Duyệt cây là quá trình ghé thăm tất cả các nút trong cây một cách có tổ chức. Có ba cách phổ biến để duyệt cây: \
    <br> 1. Duyệt theo chiều sâu (Depth-First Traversal): \
    <br> - Duyệt tiền thứ tự (Pre-order Traversal): Ghé thăm nút gốc trước, sau đó duyệt theo chiều sâu vào cây con trái và cây con phải. \
    <br> - Duyệt giữa thứ tự (In-order Traversal): Duyệt theo chiều sâu vào cây con trái, sau đó ghé thăm nút gốc và duyệt theo chiều sâu vào cây con phải. \
    <br> - Duyệt hậu thứ tự (Post-order Traversal): Duyệt theo chiều sâu vào cây con trái, sau đó duyệt theo chiều sâu vào cây con phải và cuối cùng ghé thăm nút gốc. \
    <br> 2. Duyệt theo chiều rộng (Breadth-First Traversal): \
    <br> Duyệt cây theo mức, từ trên xuống dưới và từ trái sang phải. \
    <br> 3. Độ phức tạp: \
    <br> - Độ phức tạp thời gian và không gian của các phương pháp duyệt cây phụ thuộc vào số lượng nút và cấu trúc của cây. \
    <br> - Độ phức tạp thời gian của mỗi phương pháp là O(n), trong đó n là số lượng nút trong cây. Mỗi nút đều được ghé thăm ít nhất một lần. </div> \
    <br> \
    <br> \
    <br> ';
    });
    const baiHoc5Item20 = document.getElementById('baihoc5-item-20');
    baiHoc5Item20.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Cây tìm kiếm nhị phân là gì ? </b></div> \
    <div class ="lesson"> Một cây tìm kiếm nhị phân (Binary Search Tree – viết tắt là BST) là một cây mà trong đó tất cả các nút đều có các đặc điểm sau: \
    <br> - Cây con bên trái của một nút có khóa (key) nhỏ hơn hoặc bằng giá trị khóa của nút cha (của cây con này). \
    <br> - Cây con bên phải của một nút có khóa lớn hơn hoặc bằng giá trị khóa của nút cha (của cây con này). \
    <br> Vì thế có thể nói rằng, một cây tìm kiếm nhị phân (BST) phân chia tất cả các cây con của nó thành hai phần: <i>cây con bên trái và cây con bên phải </i> và có thể được định nghĩa như sau: \
    <br><center><i> left_subtree (keys)  ≤  node (key)  ≤  right_subtree (keys) </i></center> </div> \
<div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> - Mỗi nút trong cây tìm kiếm nhị phân có tối đa hai con, được gọi là cây con trái và cây con phải. Các giá trị ở cây con trái đều nhỏ hơn giá trị của nút cha, và các giá trị ở cây con phải đều lớn hơn giá trị của nút cha. \
    <br> - Tìm kiếm trong BST có độ phức tạp thời gian là O(log n) trong trường hợp trung bình, với n là số lượng nút. Tuy nhiên, trong trường hợp xấu nhất (khi cây không cân bằng), thao tác tìm kiếm có thể có độ phức tạp là O(n). \
    <br> - Chèn và xóa trong BST cũng có độ phức tạp O(log n) trong trường hợp trung bình, nhưng có thể lên đến O(n) trong trường hợp xấu nhất khi cây không cân bằng. \
    <br> - Để đảm bảo thời gian tìm kiếm hiệu quả, có những cấu trúc cây tìm kiếm nhị phân cân bằng, như cây đỏ-đen (Red-Black Tree) hoặc cây AVL, giúp giảm thiểu trường hợp xấu nhất. \
    <br> - Cây tìm kiếm nhị phân có thể được duyệt theo nhiều cách, bao gồm duyệt tiền thứ tự, duyệt giữa thứ tự, và duyệt hậu thứ tự. </div> \
    <br> \
    <br> \
    <br> ';
    });
    const baiHoc5Item21 = document.getElementById('baihoc5-item-21');
    baiHoc5Item21.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Cây AVL là gì ? </b></div> \
    <div class ="lesson"> Điều gì xảy ra nếu dữ liệu nhập vào cây tìm kiếm nhị phân (BST) là ở dạng đã được sắp thứ tự (tăng dần hoặc giảm dần). \
        Nó sẽ trông giống như sau: </div> \
    <br><center><img src="img/av1.jpg" alt="Bubble Sort Image"></center> \
    <div class ="lesson"> Cây AVL (viết tắt của tên các nhà phát minh Adelson, Velski và Landis) là cây tìm kiếm nhị phân có độ cân bằng cao. \
        Cây AVL kiểm tra độ cao của các cây con bên trái và cây con bên phải và bảo đảm rằng hiệu số giữa chúng là không lớn hơn 1. <b>Hiệu số</b> này được gọi là <b>Balance Factor (Nhân tố cân bằng) </b>. \
    <br> Dưới đây là hình ví dụ minh họa ba cây, trong đó cây đầu tiên là cân bằng, cây thứ hai và thứ ba là không cân bằng. </div>\
    <br><center><img src="img/av2.jpg" alt="Bubble Sort Image"></center> \
<div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> - Cây AVL là một cấu trúc cây tìm kiếm nhị phân cân bằng. Cả trước và sau mọi thao tác chèn và xóa, cây AVL đảm bảo rằng chiều cao của hai cây con con trái và con phải của mỗi nút không chênh lệch quá 1. \
    <br> - Để duy trì tính cân bằng, cây AVL sử dụng các phép quay (rotation), bao gồm quay phải (right rotation), quay trái (left rotation), quay kép phải-trái (right-left rotation), và quay kép trái-phải (left-right rotation). \
    <br> - Các nút trong cây AVL được sắp xếp theo thứ tự tăng dần từ trái sang phải. \
    <br> - Với mọi nút, giá trị tất cả các nút trong cây con trái nhỏ hơn giá trị của nút đó, và giá trị tất cả các nút trong cây con phải lớn hơn giá trị của nút đó. \
    <br> - Tính cân bằng của cây AVL độc lập với thứ tự chèn nút, tức là cây AVL sẽ tự cân bằng sau mọi thao tác chèn một cách tự động. </div> \
    <br> \
    <br> \
    <br> ';
    });
    const baiHoc5Item22 = document.getElementById('baihoc5-item-22');
    baiHoc5Item22.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Cây khung (Spanning Tree) là gì ? </b></div> \
    <div class ="lesson"> Một cây khung là một tập con của Grahp G mà có tất cả các đỉnh được bao bởi số cạnh tối thiểu nhất. \
        Vì thế, một cây khung sẽ không hình thành một vòng tuần hoàn và nó cũng không thể bị ngắt giữa chừng. \
    <br> Từ định nghĩa trên ta có thể kết luận rằng mỗi Graph G tuần hoàn sẽ có ít nhất một cây khung. Một Graph G bị ngắt giữa chừng sẽ không có bất kỳ cây khung nào. \
    <br> Dưới đây là hình ví dụ minh họa cho một Grahp G và các cây khung của nó: </div> \
    <br><center><img src="img/sp1.jpg" alt="Bubble Sort Image"></center> \
    <div class ="lesson"> Ở trên chúng ta có 3 cây khung của một đồ thị tuần hoàn. Một đồ thị tuần hoàn có thể có tối đa n<sup>n-2</sup> cây khung,\
        trong đó n là số nút. Trong ví dụ trên, n là 3 do đó 3<sup>3−2</sup> = 3 cây khung. </div>  \
<div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> - Một cây bao phủ là một đồ thị cây liên thông, tức là có một đường đi giữa mọi cặp đỉnh trong đồ thị. \
    <br> - Cây bao phủ không chứa chu trình. Điều này làm cho nó trở thành một cây, không phải là một đồ thị. \
    <br> - Cây bao phủ chứa tất cả các đỉnh của đồ thị gốc. \
    <br> - Số lượng cạnh trong cây bao phủ là n - 1, trong đó n là số lượng đỉnh của đồ thị. \
    <br> - Nếu có nhiều cây bao phủ, tất cả chúng đều có cùng số lượng cạnh và không trùng lặp. \
    <br> - Có nhiều thuật toán để tìm kiếm cây bao phủ tốt nhất, như thuật toán Kruskal và thuật toán Prim. Độ phức tạp của cả hai thuật toán là O(E log V), trong đó E là số cạnh và V là số đỉnh trong đồ thị. </div> \
    <br> \
    <br> \
    <br> ';
    });

    const baiHoc5Item23 = document.getElementById('baihoc5-item-23');
    baiHoc5Item23.addEventListener('click', function () {
        // Hiển thị nội dung cho "#nd" khi nhấn vào "#baihoc5-item-2"
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = '<div class="lesson-content"><b>I. Đệ qui (Recursion) là gì ? </b></div> \
    <div class ="lesson"> Một số ngôn ngữ lập trình cho phép việc một module hoặc một hàm được gọi tới chính nó. Kỹ thuật này được gọi là <b>Đệ qui (Recursion) </b>. \
        Trong đệ qui, một hàm <b>a</b> có thể: gọi trực tiếp chính hàm <b>a</b> này hoặc gọi một hàm <b>b</b> \
        mà trả về lời gọi tới hàm <b>a</b> ban đầu. Hàm <b>a</b> được gọi là hàm đệ qui. </div> \
<div class="lesson-content"><b>II. Tính chất </b></div> \
    <div class ="lesson"> - Cấu trúc dữ liệu đệ quy là một cấu trúc mà trong đó đối tượng có thể tự tham chiếu hoặc tự gọi lại chính nó. Điều này tạo ra một quy luật tái sử dụng và gọi là "đệ quy". \
    <br> - Cấu trúc dữ liệu đệ quy thường được sử dụng để giải quyết các vấn đề có tính chất lặp đi lặp lại hoặc chia nhỏ thành các bài toán con nhỏ hơn. \
    <br> - Mỗi lần hàm đệ quy được gọi, nó tạo ra một khung hàm mới và thêm vào cây gọi đệ quy. Cây gọi đệ quy này có thể trở nên lớn và sâu nếu có nhiều cuộc gọi đệ quy. \
    <br> - Để tránh lặp vô hạn, mỗi hàm đệ quy thường đi kèm với một điều kiện dừng gọi là "base case". Khi điều kiện này được đáp ứng, cuộc gọi đệ quy dừng lại và bắt đầu trả về giá trị. \
    <br> - Độ phức tạp thời gian của cấu trúc dữ liệu đệ quy phụ thuộc vào số lần đệ quy và thời gian thực hiện trong mỗi lần đệ quy. Nếu mỗi lần đệ quy giảm kích thước của vấn đề một cách đáng kể, thì độ phức tạp thời gian thường là O(2<sup>n</sup>) với n là số lần đệ quy. </div> \
    <br> \
    <br> \
    <br> ';
    });

    // Hàm cập nhật nội dung
    function updateContent() {
        const hienThiKhaiNiem = khaiNiemCheckbox.checked;
        const hienThiTinhChat = tinhChatCheckbox.checked;

        let noiDung = '';
        // Hiển thị/ẩn nội dung cho ".baihoc2-item", ".baihoc3-item", ".baihoc4-item"
        const baiHoc2Items = document.querySelectorAll('.baihoc2-item');
        const baiHoc3Items = document.querySelectorAll('.baihoc3-item');
        const baiHoc4Items = document.querySelectorAll('.baihoc4-item');

        baiHoc2Items.forEach(item => {
            item.style.display = (hienThiKhaiNiem || hienThiTinhChat) ? 'none' : 'block';
        });

        baiHoc3Items.forEach(item => {
            item.style.display = hienThiKhaiNiem && !hienThiTinhChat ? 'block' : 'none';
        });

        baiHoc4Items.forEach(item => {
            item.style.display = hienThiTinhChat && !hienThiKhaiNiem ? 'block' : 'none';
        });

        // Hiển thị/ẩn nội dung cho ".baihoc5-item" theo ID
        const baiHoc5Items = document.querySelectorAll('.baihoc5-item');

        baiHoc5Items.forEach(item => {
            const itemId = item.id;

            switch (itemId) {
                case 'baihoc5-item-1':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 1 khi cả hai checkbox được chọn.' : '';
                    break;
                case 'baihoc5-item-2':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 2 khi cả hai checkbox được chọn.' : '';
                    break;
                case 'baihoc5-item-3':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 3 khi cả hai checkbox được chọn.' : '';
                    break;
                case 'baihoc5-item-4':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 4 khi cả hai checkbox được chọn.' : '';
                    break;
                case 'baihoc5-item-5':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 5 khi cả hai checkbox được chọn.' : '';
                    break;
                case 'baihoc5-item-6':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 6 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-7':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 7 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-8':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 8 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-9':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 9 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-10':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 10 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-11':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 11 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-12':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 12 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-13':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 13 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-14':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 14 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-15':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 15 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-16':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 16 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-17':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 17 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-18':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 18 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-19':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 19 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-20':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 20 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-21':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 21 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-22':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 22 khi cả hai checkbox được  chọn.' : '';
                    break;
                case 'baihoc5-item-23':
                    noiDung = hienThiKhaiNiem && hienThiTinhChat ? 'Nội dung cho baihoc5-item 23 khi cả hai checkbox được  chọn.' : '';
                    break;
                // Thêm các trường hợp cho các ID còn lại
                default:
                    noiDung = '';
                    break;
            }

            item.style.display = (hienThiKhaiNiem && hienThiTinhChat) ? 'block' : 'none';
        });

        // Gán nội dung vào phần tử có ID 'nd' khi không có checkbox nào được chọn
        const noiDungElement = document.getElementById('nd');
        noiDungElement.innerHTML = (!hienThiKhaiNiem && !hienThiTinhChat) ? noiDung : '';
    }
});







// ------------------------
function updateLessonContents() {
    const phuongPhapChecked = document.getElementById('phuong-phap-checkbox').checked;
    const baiTapChecked = document.getElementById('bai-tap-checkbox').checked;

  // Hide all items by default
    const allContents = document.querySelectorAll('.baitap2-item, .baitap3-item, .baitap4-item');
    allContents.forEach((content) => {
        content.style.display = 'none';
    });

  // Show the relevant items based on checkbox states
    if (phuongPhapChecked && baiTapChecked) {
    // Show only .baitap4-item and .baitap3-item
        const lessonIContentsK = document.querySelectorAll('.baitap4-item, .baitap2-item');
        lessonIContentsK.forEach((content) => {
            content.style.display = 'block';
        });
    } else if (phuongPhapChecked) {
    // Show only .baitap3-item
        const lessonIContentsN = document.querySelectorAll('.baitap2-item');
        lessonIContentsN.forEach((content) => {
            content.style.display = 'block';
        });
    } else if (baiTapChecked) {
    // Show only .baitap4-item
        const lessonIContentsK = document.querySelectorAll('.baitap4-item');
        lessonIContentsK.forEach((content) => {
            content.style.display = 'block';
        });
    } else {
    // Show nothing
        const lessonIContentsK = document.querySelectorAll('.baitap2-item');
        lessonIContentsK.forEach((content) => {
            content.style.display = 'block';
        });
    }
}

document.getElementById('phuong-phap-checkbox').addEventListener('change', updateLessonContents);
document.getElementById('bai-tap-checkbox').addEventListener('change', updateLessonContents);