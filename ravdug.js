<script type="text/javascript" src="//path.to/js/dug.js"></script>
<!-- you can customize this template -->
<script id="dugjs-template" type="text/x-dug-template">
  {{#projects|dug.limit:1}}
    <div class="rav_project">
      <div style="text-align:center !important;"><a class="rav_title" href="{{url}}">{{name}}</a></div>
      <a class="rav_photo rav_photo_count_{{photoCount}}" href="#"><img src="{{thumbnail.src}}"></a>
      <div class="rav_bar_wrapper rav_bar">
        <div class="rav_bar_fill rav_bar" style="width:{{progress}}%;"></div>
        <div class="rav_bar_text rav_bar">{{progress}}%</div>
      </div>
    </div>
  {{/projects|dug.limit:1}}
</script>
