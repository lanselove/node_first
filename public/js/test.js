$.ajax({
    url: "/",
    type: "post",
    dataType: "json",
    data: {
        naizi: "嘎嘣脆"
    },
    success: function(data) {
        console.log(data.info);
    },
    error: function(x) {
        console.log('不对不对');
    }
});