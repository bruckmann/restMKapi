const proxy = [
  {
    context: '/api',
    target: 'http://localhost:2222',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;