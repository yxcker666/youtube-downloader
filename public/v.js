
<script>
    $(function () {

        $("#btn_fetch").click(function () {

            var url = $("#txt_url").val();

            var oThis = $(this);
            oThis.attr('disabled', true);

            $.get('video_info.php', {url: url}, function (data) {

                console.log(data);

                oThis.attr('disabled', false);

                var links = data['links'];
                var error = data['error'];

                if (error) {
                    alert('Error: ' + error);
                    return;
                }

                // first link with video
                var first = links[0];

                if (typeof first === 'undefined') {
                    alert('No video found!');
                    return;
                }

                var stream_url = 'stream.php?url=' + encodeURIComponent(first);

                var video = $("video");
                video.attr('src', stream_url);
                video[0].load();
            });

        });

    });
</script>
