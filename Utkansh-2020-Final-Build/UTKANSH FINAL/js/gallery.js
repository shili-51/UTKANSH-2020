var $gallery = $('#gallery');
var slide = '<a href="img/img2.jpg">' +
    '<img src="img/thumb2.jpg" />' +
'</a>';

$gallery.lightGallery();
$('#appendSlide').on('click', function() {
    $gallery.append(slide);
    $gallery.data('lightGallery').destroy(true);
    $gallery.lightGallery();
});
