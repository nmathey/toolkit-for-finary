chrome.contextMenus.create({
    id: "export-csv",
    title: "Export complet en CSV",
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "export-csv") {
        chrome.scripting
            .executeScript({
                target: { tabId: tab.id },
                world: "MAIN", 
                func: () => { 
                    (function(url) { 
                        var script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.src = url;
                        script.async = true;
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(script, s);
                        }("https://lasconic.github.io/finary_bookmarklet_export_csv/bookmarklet.js?0.7794975460608351")
                    );
                },
            });
        }
});
