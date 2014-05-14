['chrome', 'firefox'].forEach(detectBrowser);

function detectBrowser(name) {
  require('webdriverjs')
    .remote({
      desiredCapabilities: {
        browserName: name
      }
    })
    .init()
    .url('http://www.alpine.gridcraft.com/')
    .getText('.detected.simple-browser-string', function(err, text) {
      setTimeout(function(){alert("hi")}, 5000);
      console.log(name + 'browser was detected as ' + text);
    })
    .end()
}
