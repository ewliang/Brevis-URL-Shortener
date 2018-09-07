const assert = require('mocha').assert;
const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const getHome = require('../../controllers/apiController').getHome;
const postGenerateShortURL = require('../../controllers/apiController').postGenerateShortURL;
const getShortURL = require('../../controllers/apiController').getShortURL;
const redirectByShortURL = require('../../controllers/apiController').redirectByShortURL;
var baseURL = 'http://localhost:4000';

chai.use(chaiHttp);

describe('API Controller', function() {

  //getHome() Test
  describe('getHome()', function() {
    it('getHome() should return object with message "Welcome to the Brevis API!"', function() {
      chai.request(baseURL)
        .get('/api')
        .end((err, res) => {
          if(err) console.log(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.equal('Welcome to the Brevis API!');
          done();
        });
    });
  });

  //postGenerateShortURL() Test
  describe('postGenerateShortURL()', function() {
    it('postGenerateShortURL() should return object with shortURL.', function() {
      chai.request(baseURL)
        .post('/api')
        .send({
          'originalURL': 'https://www.eric-liang.com'
        })
        .end((err, res) => {
          if(err) console.log(err);
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });
});
