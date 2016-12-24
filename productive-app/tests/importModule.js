// require all `project/test/src/components/**/index.js`
const testsContext = require.context('../components/', true, /\.js$/);

testsContext.keys().forEach(testsContext);

// require all `project/src/components/**/index.js`
const componentsContext = require.context('./specs/', true, /\.js$/);

componentsContext.keys().forEach(componentsContext);