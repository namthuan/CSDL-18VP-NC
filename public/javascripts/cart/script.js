/* Sự kiện nút Xóa (mặt hàng trong shop) */
function removeItem() {
    var btnList = document.querySelectorAll('#item-remove');

    for (i = 0; i < btnList.length; i++) {
        btnList[i].addEventListener('click', function(e) {
            let ele = e.target;

            let itemContainer = ele.closest('.item-container');
            let largeItemContainer = ele.closest(".main-content-large-item");
            let itemListContainer = ele.closest('.item-list-container');

            if (itemListContainer.childElementCount == 1)
                largeItemContainer.remove();
            else
                itemContainer.remove();
            
        });
    }
}


/* Sự kiện auto height của textarea */
function autoHeightTextArea(){
    var x = document.querySelector('.side-item-main textarea');
    x.style.height ='auto';
    x.style.height = x.scrollHeight+'px';
}


/* Sự kiện nút Thay đổi địa chỉ */
function buttonChange() {
    var btnChange = document.querySelector('#btn-change');
    var text = document.querySelector('#text-adress');

    var textContent = null;

    btnChange.addEventListener('click', function() {
        if (btnChange.innerHTML == "Thay đổi") {
            text.style.border = '0.11em solid #737373';
            text.style.color = 'black';
            text.removeAttribute("readonly");
            btnChange.innerHTML = "Lưu";
            textContent = text.value;
        } else { // khi lưu
            if (text.value != "") {
                text.style.border = 'none';
                text.setAttribute("readonly", "");
                text.style.color = '#808080';
                btnChange.innerHTML = "Thay đổi";
                autoHeightTextArea();
                textContent = text.value;
            } else {
                var modal =  document.querySelector('#MessageModal');
                var modalContent = modal.querySelector('.modal-body-content');
    
                modalContent.innerHTML = "Địa chỉ không được để trống. Bạn có muốn giữ nguyên địa chỉ cũ không?";
    
                $('#MessageModal').modal('show');

                // Sự kiện nút Đồng ý
                var btnAcceptChange = document.querySelector('#btn-accept-change');
                btnAcceptChange.addEventListener('click', function() {
                    text.value = textContent;
                    text.style.border = 'none';
                    text.setAttribute("readonly", "");
                    text.style.color = '#808080';
                    btnChange.innerHTML = "Thay đổi";
                    autoHeightTextArea();
                    $('#MessageModal').modal('hide');
                });
            }
        }
    });  
}

/* Sự kiện của các mã khuyến mãi*/
function selectDiscount() {
    var btnList = document.querySelectorAll('#btn-discount');
    
    var selectTitleDiv = document.querySelector('#discount-select-title');
    var selectIDSpan = document.querySelector('#discount-select-ID');
    var selectDiscountAmountSpan = document.querySelector('#discount-select-amount');

    var  btnCancel = document.querySelector('#btn-select-cancel');

    var modalID = null;

    for (i = 0; i < btnList.length; i++) {
        btnList[i].addEventListener('click', function(e) {
            let ele = e.target;

            // lấy modal chứa ele
            let modal = ele.closest('.modal');
            modalID = '#' + modal.id;

            // lấy thẻ div chứa ele
            let divClosest = ele.closest('.item-discount-container');

            // lấy mã 
            let eleID = divClosest.querySelector("#discount-id");

            // lấy ele giảm bao nhiêu
            let amountEle = divClosest.querySelector("#discount-amount");

            if (ele.innerHTML == "Áp dụng") {

                if (selectIDSpan.innerHTML == "") {

                    ele.innerHTML = "Bỏ chọn";

                    // change style button
                    ele.style.backgroundColor = "#f2f2f2";
                    ele.style.color = '#595959';
                    ele.style.border = '1px solid #b3b3b3';

                    // update title item
                    selectTitleDiv.innerHTML = "Voucher đã chọn";  
                                
                    // update mã
                    let discountID = eleID.innerHTML;
                    selectIDSpan.innerHTML = discountID;

                    // update giảm bao nhiêu 
                    let amount = amountEle.innerHTML;
                    selectDiscountAmountSpan.innerHTML = " - " + amount;

                    // thêm nút button
                    btnCancel.style.display = 'initial';
                } 
                else {
                    // Update content modal message
                    var modalMess =  document.querySelector('#MessageModal');
                    var modalContent = modalMess.querySelector('.modal-body-content');
                    modalContent.innerHTML = "Bạn đã chọn Voucher. Bạn có đồng ý thay đổi Voucher mới không?";

                    $('#MessageModal').modal('show');
                    $(modalID).modal('hide');
                    
                    var btnAcceptChange = document.querySelector('#btn-accept-change');
                    var btnNonAcceptChange = document.querySelector('#btn-nonaccept-change');

                    // Sự kiện nút Đóng
                    btnNonAcceptChange.addEventListener('click', function() {
                        $('#MessageModal').modal('hide');
                        $(modalID).modal('show');
                    });

                    // Sự kiện nút Đồng ý
                    btnAcceptChange.addEventListener('click', function() {
                        // update title item
                        selectTitleDiv.innerHTML = "Voucher đã chọn";  
                        
                        // thêm nút button
                        btnCancel.style.display = 'initial';

                        // update mã
                        let discountID = eleID.innerHTML;
                        selectIDSpan.innerHTML = discountID;

                        // update giảm bao nhiêu 
                        let amount = amountEle.innerHTML;
                        selectDiscountAmountSpan.innerHTML = " - " + amount;

                        // lấy button đang được chọn (đã dc chọn trc đó)
                        var eleSelected = null;
                        for (i = 0; i < btnList.length; i++) {
                            if (btnList[i].innerHTML == "Bỏ chọn") {
                                eleSelected = btnList[i];
                                break;
                            }
                        }
                    
                        // change style button đã dc chọn trc đó
                        eleSelected.style.backgroundColor = "#fa5838";
                        eleSelected.style.color = 'white';
                        eleSelected.style.border = 'none';
                        eleSelected.innerHTML = "Áp dụng";

                        // change style button
                        ele.innerHTML = "Bỏ chọn";
                        ele.style.backgroundColor = "#f2f2f2";
                        ele.style.color = '#595959';
                        ele.style.border = '1px solid #b3b3b3';

                        $('#MessageModal').modal('hide');
                        $(modalID).modal('show');
                    });
                }
            } // Nếu bấm nút bỏ chọn 
            else {
                selectTitleDiv.innerHTML = "";
                selectIDSpan.innerHTML = "";
                selectDiscountAmountSpan.innerHTML = "";
                btnCancel.style.display = 'none';

                // change style button
                ele.innerHTML = "Áp dụng";
                ele.style.backgroundColor = "#fa5838";
                ele.style.color = 'white';
                ele.style.border = 'none';

                modalID = null;
            }
        });
    }
}


// Sự kiện nút Bỏ chọn */
function cancelSelectButton() {
    var btnCancel =  document.querySelector('#btn-select-cancel');

    btnCancel.addEventListener('click', function() {
        var selectTitleDiv = document.querySelector('#discount-select-title');
        var selectIDSpan = document.querySelector('#discount-select-ID');
        var selectDiscountAmountSpan = document.querySelector('#discount-select-amount');

        selectTitleDiv.innerHTML = "";
        selectIDSpan.innerHTML = "";
        selectDiscountAmountSpan.innerHTML = "";
        btnCancel.style.display = 'none';

         // change style button đã dc chọn trc đó
        var btnList = document.querySelectorAll('#btn-discount');
        for (i = 0; i < btnList.length; i++) {
            if (btnList[i].innerHTML == "Bỏ chọn") {
                eleSelected = btnList[i];
                break;
            }
        }

        eleSelected.style.backgroundColor = "#fa5838";
        eleSelected.style.color = 'white';
        eleSelected.style.border = 'none';
        eleSelected.innerHTML = "Áp dụng";
    });
}

/* Sự kiện nút Mua hàng */
function buyButton() {
    var btnBuy =  document.querySelector('#btn-buy');

    btnBuy.addEventListener('click', function() {
        var itemList = document.querySelectorAll('.item-container');

        if (itemList.length < 1) {
            var modal =  document.querySelector('#MessageModal');
            var modalContent = modal.querySelector('.modal-body-content');

            modalContent.innerHTML = "Bạn chưa chọn sản phẩm nào. Vui lòng chọn sản phẩm trước khi mua hàng. Bạn muốn chọn thêm sản phẩm không?";

            $('#MessageModal').modal('show');

            var btnAcceptChange = document.querySelector('#btn-accept-change');
        
            // Sự kiện nút Đồng ý
            btnAcceptChange.addEventListener('click', function() {
                window.location = '/home/index.html';
            });
        } 
        else {
            window.location = '/payment/payment.html';
        }
    });
}


removeItem();
autoHeightTextArea();
buttonChange();
selectDiscount();
cancelSelectButton();
buyButton();
