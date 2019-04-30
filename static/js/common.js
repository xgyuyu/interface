function Aajax(url, type, fn, data) {
    $.ajax({
        url: url,
        data: data || '',
        dataType: "json",
        type: type,
    }).then(function(res){
        fn(res)
    })
}