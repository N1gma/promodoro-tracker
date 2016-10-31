(function (global) {

  describe('Expression task-02 function (spaces protected)', function () {
    it('should be defined', function () {
      expect(global.calcExpression).toBeDefined();
    });
    it('must return error if operation is wrong!', function () {
      expect(global.calcExpression('1 ^ 2')).toEqual('Error, unsupported operation!');
      expect(global.calcExpression('1 +- 2')).toEqual('Error, unsupported operation!');
    });
    it('must return error if operands are wrong!', function () {
      expect(global.calcExpression('2 + false')).toEqual('Error, operands should be numbers!');
      expect(global.calcExpression('false + 2')).toEqual('Error, operands should be numbers!');
      expect(global.calcExpression('2 + {}')).toEqual('Error, operands should be numbers!');
      expect(global.calcExpression('{} + 2')).toEqual('Error, operands should be numbers!');
      expect(global.calcExpression('2 + []')).toEqual('Error, operands should be numbers!');
      expect(global.calcExpression('[] + 2')).toEqual('Error, operands should be numbers!');
      expect(global.calcExpression('2 + null')).toEqual('Error, operands should be numbers!');
      expect(global.calcExpression('null + 2')).toEqual('Error, operands should be numbers!');
      expect(global.calcExpression('2 + undefined')).toEqual('Error, operands should be numbers!');
      expect(global.calcExpression('undefined + 2')).toEqual('Error, operands should be numbers!');
    });
    describe('must return error if expression is wrong!', function () {
      it('must return error if expression is not a string', function () {
        expect(global.calcExpression(null)).toEqual('Error, expression is wrong!');
        expect(global.calcExpression(undefined)).toEqual('Error, expression is wrong!');
        expect(global.calcExpression(0)).toEqual('Error, expression is wrong!');
        expect(global.calcExpression(false)).toEqual('Error, expression is wrong!');
        expect(global.calcExpression([])).toEqual('Error, expression is wrong!');
        expect(global.calcExpression({})).toEqual('Error, expression is wrong!');
        expect(global.calcExpression(function () {
        })).toEqual('Error, expression is wrong!');
      });
      it('must return error if expression is not ', function () {
        expect(global.calcExpression('0')).toEqual('Error, expression is wrong!');
        expect(global.calcExpression('+10')).toEqual('Error, expression is wrong!');
        expect(global.calcExpression('5%')).toEqual('Error, expression is wrong!');
      });
    });
    it('must perform sum operation', function () {
      expect(global.calcExpression('1+2')).toEqual(3);
      expect(global.calcExpression('1 + 2')).toEqual(3);
    });
    it('must perform substracting operation', function () {
      expect(global.calcExpression('10-2')).toEqual(8);
      expect(global.calcExpression('10 - 2')).toEqual(8);
    });
    it('must perform multiplication operation', function () {
      expect(global.calcExpression('4*5')).toEqual(20);
      expect(global.calcExpression('4 * 5')).toEqual(20);
    });
    it('must perform devision operation', function () {
      expect(global.calcExpression('20/5')).toEqual(4);
      expect(global.calcExpression('20 / 5')).toEqual(4);
    });
    it('must perform take remainder operation', function () {
      expect(global.calcExpression('22%5')).toEqual(2);
      expect(global.calcExpression('22 % 5')).toEqual(2);
    });
  });


})(this);