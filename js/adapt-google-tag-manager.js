define(['core/js/adapt'], function(Adapt) {

  Adapt.once("app:dataReady", function() {

    // Retrieve the configuration from the global config
    var config = Adapt.config.get('_googleTagManager');

    if (!config || !config._isEnabled) {
      return;
    }

    var gtmId = config._gtmId;

    // Inject GTM script into the head
    var gtmScriptTag = document.createElement("script");
    gtmScriptTag.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':" +
                            "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0]," +
                            "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=" +
                            "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);" +
                            "})(window,document,'script','dataLayer','" + gtmId + "');";
    document.head.appendChild(gtmScriptTag);

    // Inject GTM noscript iframe immediately after opening body tag
    var gtmNoScriptTag = document.createElement("noscript");
    gtmNoScriptTag.innerHTML = "<iframe src=\"https://www.googletagmanager.com/ns.html?id=" + gtmId + "\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>";
    document.body.insertBefore(gtmNoScriptTag, document.body.firstChild);
  });

});
