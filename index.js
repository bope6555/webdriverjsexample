['chrome', 'firefox'].forEach(detectBrowser);

function detectBrowser(name) {
  require('webdriverjs')
    .remote({
      desiredCapabilities: {
        browserName: name
      }
    })
    .init()
    .url('https://alpine.gridcraft.com/')
    .getText('.detected.simple-browser-string', function(err, text) {
      sleep(5000);
      console.log(name + 'browser was detected as ' + text);
    })
    .end()
}
