chrome.webRequest.onBeforeSendHeaders.addListener(
	function(details) {
		for (var i = 0; i < details.requestHeaders.length; i++) {
			if (details.requestHeaders[i].name === "Accept") {
				details.requestHeaders[i].value = "*/*";
				// Another method would be just removing the "text/html,application/xhtml+xml,application/xml" types, which would have an unnecessary performance penalty though:
				// details.requestHeaders[i].value = details.requestHeaders[i].value.split(",").filter(s => s.startsWith("image/") || s.startsWith("*/")).join(",");
				break;
			}
		}
		return {
			requestHeaders: details.requestHeaders
		};
	}, {
		urls: ["<all_urls>"]
	}, ["blocking", "requestHeaders"]
);
