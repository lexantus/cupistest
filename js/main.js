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
        optionsBtn.children[0].classList.toggle('trigger_open')
        options.classList.toggle('options-hide')
    })

    var optionsChildren = options.childNodes
    optionsChildren.forEach(function (value) {
        value.addEventListener('click', function (e) {
            if (e.target.classList.contains('options')) {
                while (optionsBtn.hasChildNodes()) {
                    optionsBtn.removeChild(optionsBtn.lastChild)
                }
                optionsBtn.appendChild(e.target.cloneNode(true))
            } else if (e.target.parentElement && e.target.parentElement.classList.contains('options')) {
                while (optionsBtn.hasChildNodes()) {
                    optionsBtn.removeChild(optionsBtn.lastChild)
                }
                optionsBtn.appendChild(e.target.parentElement.cloneNode(true))
            }
        })
    })
})();
