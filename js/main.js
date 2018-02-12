(function () {
    'use strict'
    var paymentDetailBtn = document.querySelector('.payment-detail__trigger')
    var paymentDetail = document.querySelector('.payment-detail__info')
    paymentDetailBtn.addEventListener('click', function () {
        paymentDetail.classList.toggle('anim_show_payment_detail')
    })

    var optionsBtn = document.querySelector('.trigger_options')
    var options = document.querySelector('.options')
    optionsBtn.addEventListener('click', function () {
        optionsBtn.classList.toggle('trigger_open')
        optionsBtn.children[0].classList.toggle('trigger_open')
        options.classList.toggle('options-hide')
    })

    var optionsChildren = options.childNodes
    optionsChildren.forEach(function (value) {
        if (value.className === 'option') {
            value.addEventListener('click', function (e) {
                while (optionsBtn.hasChildNodes()) {
                    optionsBtn.removeChild(optionsBtn.lastChild)
                }
                optionsBtn.appendChild(value.cloneNode(true))
                optionsBtn.classList.toggle('trigger_open')
                options.classList.toggle('options-hide')
            })
        }
    })
})();
