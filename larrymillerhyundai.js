(function() {

    var header = document.querySelector('.header-default');
    if (!header) {
        return;
    }

    if (typeof CarcodeWidget !== 'function') {
        return;
    }

    function updateButtonPosition(button) {
        if (window.scrollY > 0) {
            button.style.top = '5px';
            button.style.left = (window.innerWidth > 1000) ? '570px' : '540px';
        } else {
            button.style.top = '85px';
            button.style.left = '420px';
        }
    }

    function createCarCodeButton() {
        var button = document.createElement('button');
        button.className = 'sms-button';
        button.style.position = 'absolute';
        button.style.width = '150px';
        button.style.height = '40px';
        button.style.margin = '0';
        button.style.padding = '0';
        button.style.borderWidth = '0';
        button.style.borderRadius = '5px';
        button.style.outline = 'none';
        button.style.backgroundColor = '#f3692a';
        button.style.color = '#fff';
        button.style.fontSize = '16px';
        button.innerText = 'Text Us';
        button.style.cursor = 'pointer';
        return button;
    }

    var button = createCarCodeButton();
    header.appendChild(button);
    updateButtonPosition(button);

    var widget = new CarcodeWidget();
    button.addEventListener('click', function(e) {
        widget.clickHandler(e);
    });

    window.addEventListener('scroll', function() {
        updateButtonPosition(button);
    });

    window.addEventListener('resize', function() {
        updateButtonPosition(button);
    });

}());