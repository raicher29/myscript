$(document).ready(function () {
    var html = $('.down-brends').html();
    var linkProduct = $('.itemLineElement:eq(1)').data('href');
    linkProduct = "https://www.guitarman.by"+linkProduct;
    // console.log(linkProduct);
    // console.log(html);
    if (typeof html !== 'undefined') {
        html = html.substr(html.indexOf('<ul><li>'),html.indexOf('</ul>'));
        var text = '<div class="brendsList"><div class="innerHead">Популярные бренды</div>'
        text += html;
        text += '</div>';
        $('.innerBlock.hot').after(text);

    }

    $.get(linkProduct,
        function (data, textStatus, jqXHR) {
            data = data.substr(data.indexOf('<div class="sliderItem smoothDivScroll">')+41);
            data = data.substr(0,data.indexOf('<aside class="asideBlock asideBlockRight">')-9);
            console.log(data);
            data = '<div id="otherProduct"> <div class="innerHead">Вместе с этим товаром покупают</div>'+data+'</div>';
            $('.brendsList').after(data);
        }

    );
    
});
